import * as vscode from 'vscode';
import { GscFiles } from './GscFiles';
import { GscFile } from './GscFile';
import { GroupType } from './GscFileParser';
import { CodFunctions } from './CodFunctions';
import { ConfigErrorDiagnostics, GscConfig } from './GscConfig';
import { GscFunctions, GscFunctionState, GscMacroDefinition } from './GscFunctions';
import { Issues } from './Issues';
import { LoggerOutput } from './LoggerOutput';
import { GscMarkdownGenerator } from './GscMarkdownGenerator';

export class GscHoverProvider implements vscode.HoverProvider {

    static async activate(context: vscode.ExtensionContext) {
        LoggerOutput.log("[GscHoverProvider] Activating");

        context.subscriptions.push(vscode.languages.registerHoverProvider('gsc', new GscHoverProvider()));
    }

    public async provideHover(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken
    ): Promise<vscode.Hover | undefined> {
        try {
            LoggerOutput.log("[GscHoverProvider] Provide hover at " + position.line + ":" + position.character, vscode.workspace.asRelativePath(document.uri));

            // Get parsed file
            const gscData = await GscFiles.getFileData(document.uri, false, "provide hover");

            const hover = await GscHoverProvider.getHover(gscData, position, document);

            LoggerOutput.log("[GscHoverProvider] Done, hover: " + (hover !== undefined), vscode.workspace.asRelativePath(document.uri));

            return hover;
        } catch (error) {
            Issues.handleError(error);
        }
    }

    public static async getHover(
        gscFile: GscFile,
        position: vscode.Position,
        document: vscode.TextDocument | undefined = undefined
    ): Promise<vscode.Hover | undefined> {
        let hoverRange: vscode.Range | undefined = undefined;
        let markdown = new vscode.MarkdownString();
        markdown.isTrusted = true; // enable HTML tags

        const gscData = gscFile.data;
        const uri = gscFile.uri;
        const isUniversalGame = GscConfig.isUniversalGame(gscFile.config.currentGame);
        const errorDiagnosticsDisabled = gscFile.config.errorDiagnostics === ConfigErrorDiagnostics.Disable;

        const groupAtCursor = gscData.root.findKeywordAtPosition(position);
        console.log("[GscHoverProvider] group at cursor: ", groupAtCursor?.type, groupAtCursor?.getTokensAsString());

        if (groupAtCursor?.type === GroupType.FunctionName) {
            const funcInfo = groupAtCursor.getFunctionReferenceInfo();
            if (funcInfo !== undefined) {

                const res = GscFunctions.getFunctionReferenceState({ name: funcInfo.name, path: funcInfo.path }, gscFile);

                switch (res.state as GscFunctionState) {
                    case GscFunctionState.NameIgnored:
                        markdown.appendText(`🛈 Function name '${funcInfo.name}' is ignored by workspace settings!`);
                        break;

                    case GscFunctionState.Found:

                        for (let i = 0; i < res.definitions.length; i++) {
                            const d = res.definitions[i];
                            if (!gscFile.config.gameConfig.duplicateFunctionDefinitions && i > 0) {
                                markdown.appendMarkdown('\n\r');
                                markdown.appendMarkdown('--------------------------------------------------------------------------  \n\r');
                            }

                            markdown.appendMarkdown(d.func.generateMarkdownDescription(d.uri.toString() === uri.toString(), d.uri.toString(), d.reason, d.func.commentBefore).value);

                            if (gscFile.config.gameConfig.duplicateFunctionDefinitions) {
                                if (res.definitions.length > 1) {
                                    const files = res.definitions
                                        .filter((f, i) => (i > 0) && (f.uri.toString() !== uri.toString())); // ignore first definition and current file (if duplicate func)

                                    if (files.length > 0) {
                                        markdown.appendMarkdown('\n\r');
                                        markdown.appendMarkdown('--------------------------------------------------------------------------  \n\r');
                                        if (files.length === 1) {
                                            markdown.appendMarkdown(`Function '${funcInfo.name}' is also defined in this file:  \n\r`);
                                        } else {
                                            markdown.appendMarkdown(`Function '${funcInfo.name}' is also defined in these files:  \n\r`);
                                        }
                                        markdown.appendMarkdown(files.map(f => `\n- ${vscode.workspace.asRelativePath(f.uri)}`).join(""));
                                    }
                                }
                                break; // Show only first definition for universal game
                            }
                        }
                        break;


                    case GscFunctionState.FoundInPredefined:
                        // Find in predefined functions
                        var preDefFunc = CodFunctions.getByName(funcInfo.name, funcInfo.callOn !== undefined, gscFile.config.currentGame);

                        if (preDefFunc === undefined) {
                            preDefFunc = CodFunctions.getByName(funcInfo.name, undefined, gscFile.config.currentGame)!;
                        }

                        markdown.appendMarkdown(preDefFunc.generateMarkdownDescription().value);
                        break;


                    case GscFunctionState.NotFoundFile:
                        // There would be also error by diagnostics, but it will be on file path, not on function name
                        GscHoverProvider.markdownAppendFileWasNotFound(markdown, funcInfo.name, funcInfo.path);
                        if (errorDiagnosticsDisabled) {
                            markdown.appendText(`\n\n🛈 Error diagnostics disabled via workspace settings`);
                        }
                        break;

                    case GscFunctionState.NotFoundFileButIgnored:
                        markdown.appendText(`🛈 File '${funcInfo.path}.gsc' was not found, but its ignored by workspace settings!`);
                        break;


                    case GscFunctionState.NotFoundFunctionExternal:
                        // There would be error by diagnostics, unless disabled
                        if (errorDiagnosticsDisabled) {
                            markdown.appendText(`⚠️ Function '${funcInfo.name}' is not defined in '${funcInfo.path}.gsc'!`);
                        }
                        break;


                    case GscFunctionState.NotFoundFunctionLocal:
                        // Try to find all possible predefined functions
                        var preDefFunc = CodFunctions.getByName(funcInfo.name, funcInfo.callOn !== undefined, undefined);

                        if (preDefFunc === undefined) {
                            preDefFunc = CodFunctions.getByName(funcInfo.name, undefined, undefined)!;
                        }

                        if (preDefFunc !== undefined) {
                            markdown.appendMarkdown(preDefFunc.generateMarkdownDescription(true).value);
                        } else {
                            // There would be error by diagnostics, unless disabled
                            if (errorDiagnosticsDisabled)
                            {
                                GscHoverProvider.markdownAppendFunctionWasNotFound(markdown, funcInfo.name, funcInfo.path);
                                markdown.appendText(`\n\n🛈 Error diagnostics disabled via workspace settings`);
                            }
                        }
                    
                        break;
                }


            }

        } else if (groupAtCursor?.type === GroupType.Path) {
            const path = groupAtCursor.getTokensAsString();
            const fileReferences = GscFiles.getReferencedFilesForFile(gscFile, path);

            if (fileReferences.length > 0) {
                hoverRange = groupAtCursor.getRange();
            }

            markdown = GscMarkdownGenerator.generateFilePathDescription(fileReferences, gscFile, path);
        } else if (groupAtCursor?.type === GroupType.VariableName || groupAtCursor?.type === GroupType.VariableNameGlobal) {
            const cursorVariable = groupAtCursor?.getFirstToken();
            if (!cursorVariable) {
                return undefined;
            }

            if (["self", "level", "game", "anim"].includes(cursorVariable.name)) { 
                return undefined;
            }

            const [macro, isInlineMacro, inlinePath] = GscHoverProvider.getMacroForHover(gscFile, cursorVariable.name);
            if (macro) {
                markdown = GscMarkdownGenerator.generatePreprocessorDescription(macro, isInlineMacro, inlinePath);
            }
            else {
                // a cursorVariable can be using a cursorVariableGlobal because we're in a function scope and we wouldn't know... 
                // we need to track global vars for errors & global variable desc

                // get variable with definition line by grabbing localVariableDefinitions
                const gscData = gscFile.data;
                const tokenPos = cursorVariable.range.start;
                const func = gscData.functions.find(f =>
                    f.rangeScope.start.isBeforeOrEqual(tokenPos) &&
                    f.rangeScope.end.isAfterOrEqual(tokenPos)
                );
                if (!func) {
                    return undefined;
                }

                const match = func.localVariableDefinitions.find(def => {
                    const defToken = def.variableReference.getFirstToken();
                    return defToken?.name === cursorVariable.name;
                });

                let variableDefineLine = cursorVariable.name;
                if (match) {
                    variableDefineLine = `${cursorVariable.name} = ${match.fullValue};`;
                }

                // TODO: this is meme but works for now lmfao
                let type = 0;
                if ( func.parameters.find(token => token.name.toLowerCase() === cursorVariable.name.toLowerCase()) !== undefined ) {
                    type = 2;
                }
                else if (groupAtCursor?.type === GroupType.VariableName) {
                    type = 1;
                }
                

                markdown = GscMarkdownGenerator.generateLocalVariableDescription(variableDefineLine, type);
            }
        } else if (document && groupAtCursor?.type === GroupType.Identifier) {
            const cursorVariable = groupAtCursor?.getTokensAsString();
            const parent = groupAtCursor.parent;

            const isMacroStatement = parent?.type === GroupType.PreprocessorStatementIf
                || parent?.type === GroupType.PreprocessorStatementIfdef
                || parent?.type === GroupType.PreprocessorStatementDefine;

            if (cursorVariable && isMacroStatement) {
                const [macro, isInlineMacro, inlinePath] = GscHoverProvider.getMacroForHover(gscFile, cursorVariable);
                if (macro) {
                    markdown = GscMarkdownGenerator.generatePreprocessorDescription(macro, isInlineMacro, inlinePath);
                }
            }
        }

        if (markdown.value === "") {
            return undefined;
        } else {
            return new vscode.Hover(markdown, hoverRange);
        }
    }



    public static markdownAppendFileWasNotFound(md: vscode.MarkdownString, funcName: string, path: string) {
        md.appendText(`⚠️ File '${path}.gsc' was not found!`);
    }

    public static markdownAppendFunctionWasNotFound(md: vscode.MarkdownString, funcName: string, path: string) {
        md.appendText(`⚠️ Function '${funcName}' was not found${(path !== "" ? (" in '" + path + "'") : "")}!`);
    }

    public static getMacroForHover(
        gscFile: GscFile,
        variableName: string
    ): [GscMacroDefinition | undefined, boolean, string | undefined] {
        let macro = gscFile.data.macroVariableDefinitions.find(m => m.name === variableName);
        let isInlineMacro = false;
        let inlinePath: string | undefined = undefined;

        // check if the macro is included via #inline and that macro has the data we need
        if (!macro) {
            isInlineMacro = false;
            for (const i_inlinePath of gscFile.data.inlines) {
                const file = GscFiles.getReferencedFileForFile(gscFile, i_inlinePath);
                if (!file) {
                    continue;
                }

                macro = file.gscFile.data.macroVariableDefinitions.find(m => m.name === variableName);
                if (macro) {
                    isInlineMacro = true;
                    inlinePath = i_inlinePath;
                    break;
                }
            }
        }

        return [macro, isInlineMacro, inlinePath];
    }

}
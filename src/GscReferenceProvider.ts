import * as vscode from 'vscode';
import { GscFiles } from './GscFiles';
import { GscFile } from './GscFile';
import { GroupType } from './GscFileParser';
import { GscFunctions } from './GscFunctions';
import { Issues } from './Issues';
import { LoggerOutput } from './LoggerOutput';

export class GscReferenceProvider implements vscode.ReferenceProvider {

    static async activate(context: vscode.ExtensionContext) {
        LoggerOutput.log("[GscReferenceProvider] Activating");

        context.subscriptions.push(vscode.languages.registerReferenceProvider('gsc', new GscReferenceProvider()));
    }

    async provideReferences(
        document: vscode.TextDocument,
        position: vscode.Position,
        context: vscode.ReferenceContext,
        token: vscode.CancellationToken
    ): Promise<vscode.Location[]> {
        try {
            // Get parsed file
            const gscFile = await GscFiles.getFileData(document.uri, false, "provide references");

            const locations = await GscReferenceProvider.getFunctionReferenceLocations(gscFile, position);

            return locations;
        } catch (error) {
            Issues.handleError(error);
            return [];
        }
    }


    public static async getFunctionReferenceLocations(gscFile: GscFile, position: vscode.Position): Promise<vscode.Location[]> {
        const locations: vscode.Location[] = [];

        const gscData = gscFile.data;

        // Get group before cursor
        var groupAtCursor = gscData.root.findKeywordAtPosition(position);
        if (groupAtCursor === undefined || groupAtCursor.parent === undefined) {
            return locations;
        }

        if (groupAtCursor.type === GroupType.FunctionName) {
            const funcInfo = groupAtCursor.getFunctionReferenceInfo();
            if (funcInfo !== undefined) {

                const funcRefs = GscFunctions.getFunctionReferences(gscFile, funcInfo);
                if (funcRefs === undefined) {
                    return locations;
                }
                for (const funcRef of funcRefs) {
                    locations.push(new vscode.Location(funcRef.uri, funcRef.func.getRange()));
                }

            }
        }
        else if (groupAtCursor.type === GroupType.Identifier ||
            groupAtCursor.type === GroupType.VariableName ||
            groupAtCursor.type === GroupType.VariableNameGlobal
        ) {
            const token = groupAtCursor.getFirstToken();
            if (!token) {
                return locations;
            }

            const name = token.name;

            const tokenPos = token.range.start;

            // Check if it's inside a function
            const func = gscData.functions.find(f =>
                f.rangeScope.start.isBeforeOrEqual(tokenPos) &&
                f.rangeScope.end.isAfterOrEqual(tokenPos)
            );

            // check macros, which will stop other operations to make results cleaner
            const macro = gscData.macroVariableDefinitions.find(m => m.name === name);

            if (func) {
                // check local variables (including function parameters)
                const isParameter = func.parameters.find(p => p.name === name) !== undefined;
                const matches = [...func.localVariableDefinitions]
                    .filter(v => v.variableReference.getFirstToken()?.name === name)
                    .map(v => v.variableReference);

                if (macro === undefined && isParameter) {
                    locations.push(...func.parameters
                        .filter(p => p.name === name)
                        .map(p => new vscode.Location(gscFile.uri, p.range))
                    );
                }

                // make sure we're not forgetting abt the global variable definition
                const globalMatch = gscData.globalVariableDefinitions.find(p => p.variableReference.getFirstToken()?.name === name);
                if (macro === undefined && globalMatch !== undefined) {
                    locations.push(new vscode.Location(gscFile.uri, globalMatch.range));
                }

                // quickly add define if macro reference (this is probably meme...)
                let found = false;
                gscData.root.walk((group) => {
                    if (found) {
                        return;
                    }

                    const parent = group.parent;
                    if ( group.type === GroupType.Identifier &&
                        parent?.type === GroupType.PreprocessorStatementDefine &&
                        group.getFirstToken()?.name === name
                    ) {
                        locations.push(new vscode.Location(gscFile.uri, group.getRange()));
                        found = true;
                    }
                });

                func.group.walk((group) => {
                    if ( (group.type === GroupType.Identifier || group.type === GroupType.VariableName || group.type === GroupType.VariableNameGlobal) &&
                        group.getFirstToken()?.name === name
                    ) {
                        locations.push(new vscode.Location(gscFile.uri, group.getRange()));
                    }
                });

                for (const def of matches) {
                    locations.push(new vscode.Location(gscFile.uri, def.getRange()));
                }
            } else {
                // global
                const matches = gscData.globalVariableDefinitions
                    .filter(v => v.variableReference.getFirstToken()?.name === name)
                    .map(v => v.variableReference);

                for (const def of matches) {
                    locations.push(new vscode.Location(gscFile.uri, def.getRange()));
                }

                gscData.root.walk((group) => {
                    if ( (group.type === GroupType.Identifier || group.type === GroupType.VariableName || group.type === GroupType.VariableNameGlobal) &&
                        group.getFirstToken()?.name === name
                    ) {
                        locations.push(new vscode.Location(gscFile.uri, group.getRange()));
                    }
                });
            }

        }

        return locations;
    }

}
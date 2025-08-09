import * as vscode from 'vscode';
import { GscFileAndReferenceState, GscFileReferenceState, GscFiles } from './GscFiles';
import { GscFile } from './GscFile';
import { ConfigErrorDiagnostics } from './GscConfig';
import { GscFunction, GscMacroDefinition } from './GscFunctions';

export enum KeywordType {
    Global,
    Local,
    FunctionParameter,
    Namespace,
}

export class GscMarkdownGenerator {

    /**
     * Generates markdown string for function
     * @param func Function data
     * @param isLocalFunction If true it shows "Local function"
     * @param uri If defined and isLocalFunction is false, it shows the file path
     * @param extraDescription A extra description to append
     * @param commentBefore Optional comment before the function parameters
     * @returns Markdown string
     */
    public static generateFunctionDescription(
        func: GscFunction | { name: string, parameters: { name: string, commentBefore?: string }[] },
        isLocalFunction: boolean,
        uri: string | undefined,
        extraDescription: string | undefined,
        commentBefore: string | undefined
    ): vscode.MarkdownString {
        const md = new vscode.MarkdownString();
        var text = "";

        // Declaration
        text += func.name + "(";
        text += func.parameters.map(p => p.name).join(", ");
        text += ")";
        md.appendCodeblock(text);

        // add a clean comment in function preview if it exists
        if (commentBefore !== undefined) {
            commentBefore = commentBefore.trim();
            if (commentBefore.endsWith("\n")) {
                commentBefore = commentBefore.slice(0, -1);
            }

            md.appendText(`${commentBefore}\n\n`);
        }

        // Description
        //md.appendMarkdown("" + func.desc + "\n\n");

        // Parameters
        func.parameters.forEach(p => {
            text = "*@param* ```" + p.name + "```";
            if (p.commentBefore !== undefined && p.commentBefore !== "") {
                text += " — " + p.commentBefore;
            }
            text += "  \n";
            md.appendMarkdown(text);
        });

        if (!isLocalFunction && uri !== undefined) {
            const uri2 = vscode.Uri.parse(uri);
            const relativePath = vscode.workspace.asRelativePath(uri2);
            md.appendMarkdown("\nFile: `" + relativePath + "`");
        } else if (isLocalFunction) {
            md.appendMarkdown("\n`Local function`");
        }

        if (extraDescription) {
            md.appendMarkdown("\n\n" + extraDescription);
        }

        return md;
    }

    public static getVariableType(type: KeywordType): string {
        switch (type) {
            case KeywordType.Global:
                return "Global variable";
            case KeywordType.Local:
                return "Local variable";
            case KeywordType.FunctionParameter:
                return "Function parameter";
            case KeywordType.Namespace:
                return "Namespace definition";
            default:
                return "Unknown";
        }
    }

    public static generateLocalVariableDescription(varName: string, type: KeywordType): vscode.MarkdownString {
        const md = new vscode.MarkdownString();
        md.appendCodeblock(varName);
        md.appendMarkdown(`\`${ GscMarkdownGenerator.getVariableType(type) }\``);
        return md;
    }

    public static generatePreprocessorDescription(macro: GscMacroDefinition, isInlineMacro: boolean = false, inlinePath: string = ""): vscode.MarkdownString {
        const md = new vscode.MarkdownString();
        md.appendCodeblock(`#define ${macro.name} ${macro.value?.getTokensAsString()}`);
        md.appendMarkdown(`\`Preprocessor macro\``);

        if (isInlineMacro) {
            md.appendMarkdown(`\n\nFile: \`${vscode.workspace.asRelativePath(inlinePath, true)}.gsh\``);
        }

        return md;
    }

    public static generateFilePathDescription(fileReferences: GscFileAndReferenceState[], gscFile: GscFile, path: string): vscode.MarkdownString {
        const markdown = new vscode.MarkdownString();

        if (fileReferences.length === 0) {
            // Path is ignored
            if (GscFiles.isFileIgnoredBySettings(gscFile, path)) {
                markdown.appendText(`🛈 File '${path}.gsc' was not found, but its ignored by workspace settings!`);
            }

            // There would be error by diagnostics, unless disabled
            else if (gscFile.config.errorDiagnostics === ConfigErrorDiagnostics.Disable) {
                markdown.appendText(`⚠️ Path '${path}' is not valid!`);
                markdown.appendText(`\n\n🛈 Error diagnostics disabled via workspace settings`);
            }
        } else {

            // Loop files in reverse and print the path
            for (let i = fileReferences.length - 1; i >= 0; i--) {
                const ref = fileReferences[i];

                let status = "";
                // ✔️✓✔️❌✅🔄🚫⛔ ✖✖❌❌✖✗✘☓×⨯❎☒✅✔✓☑
                let icon = "";
                if (fileReferences.length > 1) {
                    if (i === 0) {
                        icon = '✅&nbsp;';
                    } else {
                        icon = "&nbsp;✖&nbsp;&nbsp;";
                    }
                    status = i === 0 ? "**used**" : "replaced";
                }
                let cross = i === 0 ? "" : "~~";

                if (ref.referenceState === GscFileReferenceState.IncludedWorkspaceFolderOverwritten) {
                    //status += " (`" + ref.referenceWorkspace.name + "` includes `" + gscFile.workspaceFolder?.name + "` via settings)";
                    status += "&nbsp; (reversely included via settings)";
                } else if (ref.referenceState === GscFileReferenceState.IncludedWorkspaceFolder) {
                    //status += " (`" + gscFile.workspaceFolder?.name + "` includes `" + ref.referenceWorkspace.name + "` via settings)";
                    status += "&nbsp; (included via settings)";
                } else if (ref.referenceState === GscFileReferenceState.LocalFile) {
                    status += "&nbsp; (local file)";
                }

                markdown.appendMarkdown("" + icon + " File: " + cross + "`" + vscode.workspace.asRelativePath(ref.gscFile.uri, true) + "`" + cross + " &nbsp;" + status + "  \n");
            }

        }
        return markdown;
    }
}
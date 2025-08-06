import * as vscode from 'vscode';
import { GscFiles } from './GscFiles';
import { GscFunctions } from './GscFunctions';
import { GroupType } from './GscFileParser';
import { LoggerOutput } from './LoggerOutput';

export class GscCallHierarchyProvider implements vscode.CallHierarchyProvider {

    static async activate(context: vscode.ExtensionContext) {
        LoggerOutput.log("[GscCallHierarchyProvider] Activating");

        vscode.languages.registerCallHierarchyProvider('gsc', new GscCallHierarchyProvider());
    }

    public async prepareCallHierarchy(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken
    ): Promise<vscode.CallHierarchyItem | undefined> {
        const gscFile = await GscFiles.getFileData(document.uri, false, "prepare call hierarchy");
        const gscData = gscFile.data;

        const group = gscData.root.findKeywordAtPosition(position);
        if (group?.type !== GroupType.FunctionName) { return; }

        const funcInfo = group.getFunctionReferenceInfo();
        if (!funcInfo) { return; }

        const func = gscData.functions.find(f => f.name === funcInfo.name);
        if (!func) { return; }

        return new vscode.CallHierarchyItem(
            vscode.SymbolKind.Function,
            func.name,
            vscode.workspace.asRelativePath(gscFile.uri, false).replace(/\.gsc$|\.gsh$/i, ''), // detail (filename without ext)
            gscFile.uri,
            func.rangeFunctionName,
            func.rangeFunctionName
        );
    }


    public async provideCallHierarchyIncomingCalls(
        item: vscode.CallHierarchyItem,
        token: vscode.CancellationToken
    ): Promise<vscode.CallHierarchyIncomingCall[]> {
        const results: vscode.CallHierarchyIncomingCall[] = [];

        const workspaceFolder = vscode.workspace.getWorkspaceFolder(item.uri);
        const allFiles = workspaceFolder
            ? GscFiles.getReferenceableCachedFiles(workspaceFolder.uri, true)
            : [await GscFiles.getFileData(item.uri, false, "call hierarchy fallback")];

        for (const gscFile of allFiles) {
            for (const func of gscFile.data.functions) {
                let callsTarget = false;
                const callRanges: vscode.Range[] = [];

                const itemName = item.name.toLowerCase();

                func.group.walk(group => {
                    if (group.type === GroupType.FunctionPointerExternal) {
                        const path = group.items[0].getTokensAsString();
                        const pointerGroup = group.items[1];
                        const fnNameToken = pointerGroup.items.find(g => g.type === GroupType.FunctionName)?.getFirstToken();

                        if (pointerGroup?.type === GroupType.FunctionPointer) {
                            const fnNameToken = pointerGroup.items.find(g => g.type === GroupType.FunctionName)?.getFirstToken();
                            if (!fnNameToken) { return; }

                            const refName = fnNameToken.name.toLowerCase();

                            // confirm it's calling this function
                            const itemName = item.name.toLowerCase();
                            const fullScriptPath = path.replace(/[\\/]/g, '\\').toLowerCase();
                            const expectedPath = vscode.workspace
                                .asRelativePath(item.uri, false)
                                .replace(/\.gsc$|\.gsh$/i, '')
                                .replace(/[\\/]/g, '\\')
                                .toLowerCase();

                            if (refName === itemName && fullScriptPath === expectedPath) {
                                callsTarget = true;
                                callRanges.push(group.getRange());
                                console.log(`[CallHierarchy] Matched FunctionPointerExternal to ${refName}`);
                            }
                        }
                    }

                    if (group.type === GroupType.FunctionCall && group.items.length >= 3) {
                        const path = group.items[0];
                        const colon = group.items[1];
                        const innerCall = group.items[2];

                        if (path.type === GroupType.Path &&
                            colon.getFirstToken()?.name === "::" &&
                            innerCall.type === GroupType.FunctionCall
                        ) {
                            const fnName = innerCall.items.find(i => i.type === GroupType.FunctionName)?.getFirstToken()?.name;
                            const fullScriptPath = path.getTokensAsString();

                            const normalizedScriptPath = fullScriptPath.replace(/[\\/]/g, '\\').toLowerCase();
                            const expectedPath = vscode.workspace
                                .asRelativePath(item.uri, false)
                                .replace(/\.gsc$|\.gsh$/i, '')
                                .replace(/[\\/]/g, '\\')
                                .toLowerCase();

                            if (fnName?.toLowerCase() === itemName && normalizedScriptPath === expectedPath) {
                                callsTarget = true;
                                callRanges.push(group.getRange());
                                console.log(`[CallHierarchy] Matched FunctionPointer-style FunctionCall to ${fnName}`);
                            }
                        }
                    }

                    if (group.type === GroupType.FunctionName &&
                        group.parent?.typeEqualsToOneOf(GroupType.FunctionCall, GroupType.FunctionPointer)
                    ) {
                        const refInfo = group.getFunctionReferenceInfo();
                        if (!refInfo) { return; }

                        const refName = refInfo.name.toLowerCase();
                        const sameFile = gscFile.uri.toString() === item.uri.toString();

                        if (refName === itemName && sameFile) {
                            callsTarget = true;
                            callRanges.push(group.getRange());
                            console.log(`[CallHierarchy] Matched call to ${refInfo.name}`);
                        }
                    }
                });

                if (callsTarget) {
                    results.push(new vscode.CallHierarchyIncomingCall(
                        new vscode.CallHierarchyItem(
                            vscode.SymbolKind.Function,
                            func.name,
                            vscode.workspace.asRelativePath(gscFile.uri, false).replace(/\.gsc$|\.gsh$/i, ''),
                            gscFile.uri,
                            func.rangeFunctionName,
                            func.rangeFunctionName
                        ),
                        callRanges
                    ));
                }
            }
        }

        return results;
    }


    public async provideCallHierarchyOutgoingCalls(
        item: vscode.CallHierarchyItem,
        token: vscode.CancellationToken
    ): Promise<vscode.CallHierarchyOutgoingCall[]> {
        return []; // Outgoing calls not needed for now
    }
}

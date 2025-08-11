import * as vscode from 'vscode';
import { GscFiles } from './GscFiles';
import { GscFile } from './GscFile';
import { GroupType, GscData, GscGroup, GscToken, TokenType } from './GscFileParser';
import { CodFunctions } from './CodFunctions';
import { ConfigErrorDiagnostics, GscConfig, GscGame } from './GscConfig';
import { GscFunctionDefinition, GscFunctions, GscFunctionState } from './GscFunctions';
import { assert } from 'console';
import { LoggerOutput } from './LoggerOutput';
import { Issues } from './Issues';
import { Events } from './Events';
import { exists } from 'fs';

export class GscDiagnosticsCollection {
    public static diagnosticCollection: vscode.DiagnosticCollection | undefined;
    private static statusBarItem: vscode.StatusBarItem | undefined;
    private static currentCancellationTokenSource: vscode.CancellationTokenSource | null = null;

    private static askedToIgnoreMissing = false;

    static async activate(context: vscode.ExtensionContext) {
        LoggerOutput.log("[GscDiagnosticsCollection] Activating");

        // Create a status bar item to show background task indicator
        this.statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 0);
        this.statusBarItem.text = "$(sync~spin) Diagnosing GSC files...";
        this.statusBarItem.tooltip = "Background task in progress";
        this.statusBarItem.backgroundColor = new vscode.ThemeColor('statusBarItem.warningBackground'); // Example of using a theme color for error state     
        context.subscriptions.push(this.statusBarItem);

        // Diagnostics collection
        this.diagnosticCollection = vscode.languages.createDiagnosticCollection('gsc');
        context.subscriptions.push(this.diagnosticCollection);

        // Refresh command
        context.subscriptions.push(vscode.commands.registerCommand('gsc.refreshDiagnosticsCollection', () => this.refreshDiagnosticsCollection()));
    }


    /**
     * Ask the user if they want to ignore all missing files. This is needed for like 80% of users since not everyone has a GSC dump on standby.
     */
    private static async promptIgnoreAllMissingOnce() {
        console.log(`calling promptIgnoreAllMissingOnce`);

        if (this.askedToIgnoreMissing) {
            return;
        }
        this.askedToIgnoreMissing = true;

        console.log(`calling promptIgnoreAllMissingOnce (passed 2)`);

        const choice = await vscode.window.showInformationMessage(
            "Would you like to ignore all missing files in this workspace (folder)? This is recommended since the GSC files cannot be found in your workspace, and will clear up unnecessary errors but may limit the amount of features available.",
            "Ignore all",
            "No"
        );

        if (choice === "Ignore all") {
            await vscode.workspace.getConfiguration('gsc').update(
                'ignoreMissingFilesInWorkspace',
                true,
                vscode.ConfigurationTarget.Workspace
            );

            await this.refreshDiagnosticsCollection();
        }
    }

    /** 
     * Check if the first folder of `path` exists in any workspace folder
     */
    private static async checkTopLevelFolderAndMaybePrompt(path: string) {
        const ignoreAllMissing = vscode.workspace.getConfiguration('gsc').get<boolean>('ignoreMissingFilesInWorkspace') === true;
        if (ignoreAllMissing) {
            console.log(`ignoreAllMissing return`);
            return;
        }

        console.log(path);

        // paths are like `maps\_utility`
        const norm = path.replace(/\\/g, '/').replace(/^\/+/, '');
        const first = norm.split('/')[0] || '';
        if (!first) {
            return;
        }

        console.log(`[gsc] checkTopLevelFolderAndMaybePrompt first='${first}' raw='${path}'`);

        const wsf = vscode.workspace.workspaceFolders ?? [];
        if (wsf.length === 0) {
            return;
        }

        console.log(`yooo 2?`);

        // <workspace>/<first> exist?
        let existsSomewhere = false;
        await Promise.all(wsf.map(async (wf) => {
            try {
                const uri = vscode.Uri.joinPath(wf.uri, first);
                const stat = await vscode.workspace.fs.stat(uri);
                if (stat) {
                    existsSomewhere = true;
                }
                console.log(`${wf.uri}? ${existsSomewhere}`);
            } catch (err) {
                /* not found in this folder */
                console.warn(err);
            }
        }));

        console.log(`existsSomewhere? ${existsSomewhere}`);

        if (!existsSomewhere) {
            await this.promptIgnoreAllMissingOnce();
        }
    }


    /**
     * Update diagnostics for all parsed files. Since its computation intensive, its handled in async manner.
     */
    static async updateDiagnosticsForAll(debugText: string) {

        LoggerOutput.log("[GscDiagnosticsCollection] Creating diagnostics for all files", "because: " + debugText);

        // Get cached files for workspaces that have diagnostics enabled
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (workspaceFolders === undefined) {
            return;
        }

        // Get cached files for workspaces that have diagnostics enabled
        const files = GscFiles.getCachedFiles();

        LoggerOutput.log("[GscDiagnosticsCollection]   files: " + files.length + ", workspaceFolders: " + workspaceFolders.map(f => f.name).join(", "));


        // Cancel the previous operation if it's still running
        if (this.currentCancellationTokenSource) {
            this.currentCancellationTokenSource.cancel();
        }

        // Create a new cancellation token source for the current operation
        this.currentCancellationTokenSource = new vscode.CancellationTokenSource();
        const token = this.currentCancellationTokenSource.token;

        let i = 0;
        let count = 0;
        let lastUpdateTime = Date.now();
        const updateInterval = 100; // Time in milliseconds to wait before updating the UI

        if (this.statusBarItem) {
            this.statusBarItem.show();
        }

        try {
            this.deleteDiagnosticsAll(); // Clear all diagnostics

            for (const data of files) {
                if (token.isCancellationRequested) {
                    return; // Exit if the operation has been canceled
                }

                if (this.statusBarItem) {
                    this.statusBarItem.text = `$(sync~spin) Diagnosing GSC file ${i + 1}/${files.length}...`;
                    this.statusBarItem.tooltip = data.uri.toString();
                }

                count += this.updateDiagnosticsForFile(data);

                // Check if it's time to pause for UI update
                const now = Date.now();
                if (i === 0 || now - lastUpdateTime > updateInterval) {
                    lastUpdateTime = now;
                    // Pause execution for a short while to allow the UI to update
                    await new Promise(resolve => setTimeout(resolve, 1));
                }

                i++;
            }
        } finally {

            if (token.isCancellationRequested) {
                return; // Exit if the operation has been canceled
            }

            if (this.statusBarItem) {
                this.statusBarItem.hide();
            }
            // Clear the cancellation token source after the operation completes
            this.currentCancellationTokenSource = null;
        }

        LoggerOutput.log("[GscDiagnosticsCollection] Done all, diagnostics created: " + count);
    }




    /**
     * Generate diagnostics for the given GSC file. This function is called when the file is parsed.
     * @param gscFile The GSC file to generate diagnostics for.
     * @returns The number of diagnostics created.
     */
    public static updateDiagnosticsForFile(gscFile: GscFile): number {
        try {
            LoggerOutput.log("[GscDiagnosticsCollection] Creating diagnostics for file", vscode.workspace.asRelativePath(gscFile.uri));

            const uri = gscFile.uri;

            // Clear array
            gscFile.diagnostics.length = 0;

            // Return empty diagnostics if diagnostics are disabled
            if (gscFile.config.errorDiagnostics === ConfigErrorDiagnostics.Disable) {
                this.diagnosticCollection?.set(uri, gscFile.diagnostics);
                // Notify subscribers
                Events.GscDiagnosticsHasChanged(gscFile);
                LoggerOutput.log("[GscDiagnosticsCollection] Done for file, diagnostics is disabled", vscode.workspace.asRelativePath(gscFile.uri));
                return 0;
            }

            // Load ignored function names
            const isUniversalGame = GscConfig.isUniversalGame(gscFile.config.currentGame);

            const groupFunctionNames: { group: GscGroup, uri: vscode.Uri }[] = [];
            const groupIncludedPaths: { group: GscGroup, uri: vscode.Uri }[] = [];

            const definedLocalVariables = new Set<string>();

            // Process the file
            walkGroupItems([gscFile.data.root], gscFile.data.root.items);


            // Create diagnostic for included files
            const includedPaths = groupIncludedPaths.map(g => g.group.getTokensAsString());
            for (let i = 0; i < groupIncludedPaths.length; i++) {
                const d = groupIncludedPaths[i];
                const path = d.group.getTokensAsString();
                const diag = GscDiagnosticsCollection.createDiagnosticsForIncludedPaths(gscFile, d.group, path, includedPaths, i);
                if (diag) {
                    gscFile.diagnostics.push(diag);
                }
            }

            // Create diagnostic for function names
            for (const d of groupFunctionNames) {
                const diag = GscDiagnosticsCollection.createDiagnosticsForFunctionName(d.group, gscFile);
                if (diag) {
                    gscFile.diagnostics.push(diag);
                }
            }

            this.diagnosticCollection?.set(uri, gscFile.diagnostics);

            // ------------------------------------------------------------------------------------------------------------------------------------------
            // ------------------------------------------------------------------------------------------------------------------------------------------

            function walkGroupItems(parents: GscGroup[], items: GscGroup[]) {
                // This object have child items, process them first
                for (var i = 0; i < items.length; i++) {
                    const innerGroup = items[i];
                    const nextGroup = items.at(i + 1);

                    const parentGroup = parents.at(-1)!; // last in the chain = direct parent
                    const diagnostic = action(parentGroup, innerGroup);
                    if (diagnostic === undefined) {
                        walkGroupItems([...parents, innerGroup], innerGroup.items);
                    } else {
                        gscFile.diagnostics.push(diagnostic);
                    }

                    function action(parentGroup: GscGroup, group: GscGroup): vscode.Diagnostic | undefined {
                        if (group.type === GroupType.Unknown) {
                            if (group.getFirstToken().type === TokenType.ScopeStart) {
                                return new vscode.Diagnostic(group.getRange(), "Unclosed scope", vscode.DiagnosticSeverity.Error);
                            } else {
                                return new vscode.Diagnostic(group.getRange(), "Unexpected token", vscode.DiagnosticSeverity.Error);
                            }
                        }
                        else if (group.solved === false) {
                            return GscDiagnosticsCollection.createDiagnosticsForUnsolved(group, parentGroup, nextGroup);

                        } else {
                            switch (group.type as GroupType) {

                                // Function path or #include path
                                case GroupType.Path:
                                    // Save only #include paths  
                                    if (
                                        (group.parent?.type === GroupType.PreprocessorStatement ||
                                            group.parent?.type === GroupType.PreprocessorStatementInline ||
                                            group.parent?.type === GroupType.PreprocessorStatementInsert
                                        ) && group.parent.items.at(0)?.isReservedKeywordOfName("#include", "#inline", "#using", "#insert") === true
                                    ) {
                                        groupIncludedPaths.push({ group, uri });
                                    }
                                    break;

                                case GroupType.FunctionName:
                                    groupFunctionNames.push({ group, uri });
                                    break;

                                case GroupType.DataTypeKeyword:
                                    if (!isUniversalGame && gscFile.config.currentGame !== GscGame.CoD1) {
                                        return new vscode.Diagnostic(group.getRange(), "Casting to data type is not supported for " + gscFile.config.currentGame, vscode.DiagnosticSeverity.Error);
                                    }
                                    break;

                                case GroupType.ExtraTerminator:
                                    return new vscode.Diagnostic(group.getRange(), "Terminator ; is not needed", vscode.DiagnosticSeverity.Information);


                                case GroupType.StructureField:
                                    // level.aaa;
                                    var tokens = [group.parent?.items.at(0)?.getLastToken(), group.parent?.items.at(1)?.getSingleToken(), group.parent?.items.at(2)?.getFirstToken()];
                                    if (!GscDiagnosticsCollection.areAllTokensOnSingleLine(tokens)) {
                                        const range = new vscode.Range(tokens[0]!.range.start, tokens[2]!.range.end);
                                        return new vscode.Diagnostic(range, "Structure field access should be on single line.", vscode.DiagnosticSeverity.Information);
                                    }
                                    break;


                                case GroupType.FunctionCallWithObject:
                                    // level aaa();
                                    var tokens = [group.items.at(0)?.getLastToken(), group.items.at(1)?.getFirstToken()];
                                    if (!GscDiagnosticsCollection.areAllTokensOnSingleLine(tokens)) {
                                        const range = new vscode.Range(tokens[0]!.range.start, tokens[1]!.range.end);
                                        return new vscode.Diagnostic(range, "Function calls with object should be on single line.", vscode.DiagnosticSeverity.Information);
                                    }
                                    break;

                                case GroupType.FunctionCallWithObjectAndThread:
                                    // level thread aaa();
                                    var tokens = [group.items.at(0)?.getLastToken(), group.items.at(1)?.getSingleToken(), group.items.at(2)?.getFirstToken()];
                                    if (!GscDiagnosticsCollection.areAllTokensOnSingleLine(tokens)) {
                                        const range = new vscode.Range(tokens[0]!.range.start, tokens[2]!.range.end);
                                        return new vscode.Diagnostic(range, "Function calls with object should be on single line.", vscode.DiagnosticSeverity.Information);
                                    }
                                    break;


                                case GroupType.DeveloperBlock:
                                case GroupType.DeveloperBlockInner:
                                    if (gscFile.config.gameConfig.developerBlocks === false) {
                                        return new vscode.Diagnostic(group.getRange(), "Developer blocks are not supported for " + gscFile.config.currentGame, vscode.DiagnosticSeverity.Error);
                                    }
                                    if (gscFile.config.gameConfig.developerBlocksRecursive === false) {
                                        const isRecursive = group.findParentOfType(GroupType.DeveloperBlock, GroupType.DeveloperBlockInner) !== undefined;
                                        if (isRecursive) {
                                            return new vscode.Diagnostic(group.getRange(), "Recursive developer blocks are not supported for " + gscFile.config.currentGame, vscode.DiagnosticSeverity.Error);
                                        }
                                    }
                                    break;

                                case GroupType.DeveloperBlock2:
                                case GroupType.DeveloperBlock2Inner:
                                    if (gscFile.config.gameConfig.developerBlocks === false) {
                                        return new vscode.Diagnostic(group.getRange(), "Developer blocks are not supported for " + gscFile.config.currentGame, vscode.DiagnosticSeverity.Error);
                                    }
                                    if (gscFile.config.gameConfig.developerBlocksRecursive === false) {
                                        const isRecursive = group.findParentOfType(GroupType.DeveloperBlock2, GroupType.DeveloperBlock2Inner) !== undefined;
                                        if (isRecursive) {
                                            return new vscode.Diagnostic(group.getRange(), "Recursive developer blocks are not supported for " + gscFile.config.currentGame, vscode.DiagnosticSeverity.Error);
                                        }
                                    }
                                    break;

                                // add event variables after the event to defined local variables
                                case GroupType.KeywordCallWithObject:
                                    const keywordCall = group.items.at(1);
                                    if (!keywordCall || keywordCall.type !== GroupType.KeywordCall) {
                                        break;
                                    }

                                    const keyword = keywordCall.items.at(0)?.getSingleToken()?.name;
                                    const paramGroup = keywordCall.items.find(g => g.type === GroupType.KeywordParametersExpression);

                                    if (paramGroup) {
                                        for (const param of paramGroup.items) {
                                            let par_name = param.getTokensAsString();

                                            // parameters are Reference in this case, NOT VariableName!!
                                            if (param.type === GroupType.Reference) {
                                                definedLocalVariables.add(par_name);
                                            }
                                        }
                                    }

                                    break;

                                // add foreach variables to defined local variables
                                case GroupType.ForEachExpression:
                                    for (const item of group.items) {
                                        if (item.type !== GroupType.VariableName) {
                                            continue;
                                        }

                                        const foreach_token = item.getSingleToken();
                                        if (foreach_token) {
                                            definedLocalVariables.add(foreach_token.name);
                                        }
                                    }

                                    break;

                                // add function definition parameters to defined local variables
                                case GroupType.FunctionDefinition:
                                    definedLocalVariables.clear();

                                    const declaration = group.items.find(g => g.type === GroupType.FunctionDeclaration);

                                    if (declaration?.type === GroupType.FunctionDeclaration) {
                                        const paramExpr = declaration.items.find(g => g.type === GroupType.FunctionParametersExpression);
                                        if (paramExpr) {
                                            for (const param of paramExpr.items) {
                                                if (param.type === GroupType.FunctionParameterName) {
                                                    const token = param.getSingleToken();
                                                    if (token) {
                                                        definedLocalVariables.add(token.name);
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    break;

                                case GroupType.VariableName:
                                    const name = group.getSingleToken()?.name;
                                    if (!name) { break; }

                                    // Check for object references we don't want to warn about
                                    if (["self", "level", "game", "anim"].includes(name)) { break; }

                                    const parentReference = parents.at(-1);
                                    const grandparent = parents.at(-2);
                                    const greatGrandparent = parents.at(-3);

                                    if (parentReference?.type !== GroupType.Reference) { break; }

                                    let isAssignment = false;

                                    // case 1: var = value;
                                    if (
                                        grandparent &&
                                        [GroupType.Statement, GroupType.TerminatedStatement].includes(grandparent.type)
                                    ) {
                                        const referenceIndex = grandparent.items.indexOf(parentReference);
                                        const tokenAfter = grandparent.items.at(referenceIndex + 1);
                                        if (tokenAfter?.getSingleToken()?.type === TokenType.Assignment) {
                                            isAssignment = true;
                                        }
                                    }

                                    // case 2: var[0] = value;
                                    if (
                                        grandparent?.type === GroupType.ArrayAccess &&
                                        greatGrandparent?.type === GroupType.Statement
                                    ) {
                                        const arrayIndex = greatGrandparent.items.indexOf(grandparent);
                                        const nextToken = greatGrandparent.items.at(arrayIndex + 1);
                                        if (nextToken?.getSingleToken()?.type === TokenType.Assignment) {
                                            isAssignment = true;
                                        }
                                    }

                                    if (isAssignment) {
                                        definedLocalVariables.add(name);
                                        break;
                                    }

                                    const isLocal = definedLocalVariables.has(name);
                                    const isGlobal = gscFile.data.globalVariableDefinitions.some(m => m.variableReference.getFirstToken()?.name === name);
                                    const isMacro = gscFile.data.macroVariableDefinitions.some(m => m.name === name);

                                    // check if the macro is included via #inline and that macro has the data we need
                                    let isInlineMacro = false;
                                    for (const inlinePath of gscFile.data.inlines) {
                                        const file = GscFiles.getReferencedFileForFile(gscFile, inlinePath, true);
                                        if (file && file.gscFile.data.macroVariableDefinitions.some(m => m.name === name)) {
                                            isInlineMacro = true;
                                            break;
                                        }
                                    }

                                    if (!isLocal && !isGlobal && !isMacro && !isInlineMacro) {
                                        return new vscode.Diagnostic(
                                            group.getRange(),
                                            `Variable '${name}' is used before it is defined.`,
                                            vscode.DiagnosticSeverity.Error
                                        );
                                    }

                                    break;

                                case GroupType.VariableNameGlobal:
                                    if (gscFile.config.gameConfig.globalVariables === false) {
                                        return new vscode.Diagnostic(group.getRange(), "Global variable definitions are not supported for " + gscFile.config.currentGame, vscode.DiagnosticSeverity.Error);
                                    }
                                    break;

                                case GroupType.ForEachDeclaration:
                                    if (gscFile.config.gameConfig.foreach === false) {
                                        return new vscode.Diagnostic(group.getRange(), "Foreach is not supported for " + gscFile.config.currentGame, vscode.DiagnosticSeverity.Error);
                                    }
                                    break;

                                case GroupType.DoDeclaration:
                                    if (gscFile.config.gameConfig.doWhile === false) {
                                        return new vscode.Diagnostic(group.getRange(), "Do-while is not supported for " + gscFile.config.currentGame, vscode.DiagnosticSeverity.Error);
                                    }
                                    break;

                                case GroupType.ArrayInitializer:
                                    if (gscFile.config.gameConfig.arrayInitializer === false && group.items.length > 0) {
                                        return new vscode.Diagnostic(group.getRange(), "Array initialization is not supported for " + gscFile.config.currentGame, vscode.DiagnosticSeverity.Error);
                                    }
                                    break;

                                case GroupType.Ternary:
                                    if (gscFile.config.gameConfig.ternary === false) {
                                        return new vscode.Diagnostic(group.getRange(), "Ternary operators are not supported for " + gscFile.config.currentGame, vscode.DiagnosticSeverity.Error);
                                    }
                                    break;

                                case GroupType.Constant:
                                    if (gscFile.config.gameConfig.cvarString === false && group.getSingleTokenType() === TokenType.CvarString) {
                                        return new vscode.Diagnostic(group.getRange(), "Cvar string is not supported for " + gscFile.config.currentGame, vscode.DiagnosticSeverity.Error);
                                    }
                                    break;
                            }
                        }
                        return undefined;
                    }
                }
            }


            // Notify subscribers
            Events.GscDiagnosticsHasChanged(gscFile);


            LoggerOutput.log("[GscDiagnosticsCollection] Done for file, diagnostics created: " + gscFile.diagnostics.length, vscode.workspace.asRelativePath(gscFile.uri));


            return gscFile.diagnostics.length;
        }
        catch (error) {
            Issues.handleError(error);
            return 0;
        }
    }

    private static deleteDiagnosticsAll() {
        this.diagnosticCollection?.clear();
    }

    public static deleteDiagnosticsForFile(uri: vscode.Uri) {
        this.diagnosticCollection?.delete(uri);
    }


    private static createDiagnosticsForUnsolved(group: GscGroup, parentGroup: GscGroup, nextGroup: GscGroup | undefined) {

        // Not terminated statement
        if (
            (group.type === GroupType.Statement && parentGroup.type !== GroupType.TerminatedStatement) ||
            ((group.type === GroupType.PreprocessorStatement
                || group.type === GroupType.PreprocessorStatementInline
                || group.type === GroupType.PreprocessorStatementInsert
                || group.type === GroupType.PreprocessorStatementNamespace)
                && parentGroup.type !== GroupType.TerminatedPreprocessorStatement)
        ) {
            if (nextGroup === undefined || nextGroup.solved) {
                // Get the last character from the range where the ; should be
                const range = group.getRange();
                const rangeOfMissingSemicolon = new vscode.Range(range.end, range.end);

                return new vscode.Diagnostic(rangeOfMissingSemicolon, "Missing ;", vscode.DiagnosticSeverity.Error);
            } else {
                return undefined; // ignore this error if next group is also not solved
            }
        }
        else if (group.typeEqualsToOneOf(GroupType.Expression, GroupType.ForExpression, GroupType.ForEachExpression) && group.items.length === 0) {
            return new vscode.Diagnostic(group.getRange(), "Empty expression", vscode.DiagnosticSeverity.Error);
        }
        else {
            const firstToken = group.getFirstToken();

            var token = group.getSingleToken();
            if (token !== undefined) {
                return new vscode.Diagnostic(group.getRange(), "Unexpected token " + firstToken.name, vscode.DiagnosticSeverity.Error);
            } else {
                const range = group.getRange();
                return new vscode.Diagnostic(range, "Unexpected tokens - " + group.toString(), vscode.DiagnosticSeverity.Error);
            }
        }
    }


    private static createDiagnosticsForIncludedPaths(gscFile: GscFile, group: GscGroup, path: string, allIncludedPaths: string[], index: number): vscode.Diagnostic | undefined {
        assert(group.type === GroupType.Path);

        let range = group.getRange();

        // get range for entire include paths
        const parentStmt = group.parent;
        const kw = parentStmt?.items.at(0)?.getSingleToken()?.name ?? "";
        if (kw === "#insert") {
            const iPath = parentStmt!.items.indexOf(group);
            const dot = parentStmt!.items.at(iPath + 1);
            const extIdent = parentStmt!.items.at(iPath + 2);

            const isDot = dot?.getSingleToken()?.type === TokenType.Structure; // '.'
            const isGsh = extIdent?.type === GroupType.Identifier &&
                extIdent.getTokensAsString() === "gsh";

            if (isDot && isGsh) {
                range = new vscode.Range(range.start, extIdent.getRange().end);
            }
        }

        const isHeaderInclude = (kw === "#insert" || kw === "#inline");
        const referenceData = GscFiles.getReferencedFileForFile(gscFile, path);

        if (!isHeaderInclude && !gscFile.config.gameConfig.includeFileItself && referenceData?.gscFile.uri.toString() === gscFile.uri.toString()) {
            return new vscode.Diagnostic(range, "File is including itself", vscode.DiagnosticSeverity.Error);
        }

        // Find how many times this file is included
        let count = 0;
        for (const includedPath of allIncludedPaths) {
            if (includedPath === path) {
                count++;
            }
            if (count >= 2) {
                return new vscode.Diagnostic(range, "Duplicate file path being referenced", vscode.DiagnosticSeverity.Error);
            }
        }

        // Check for duplicated function definitions
        if (gscFile.config.gameConfig.duplicateFunctionDefinitions === false && referenceData) {
            // Get all function definitions from included file
            const funcDefsInIncludedFile = GscFunctions.getLocalFunctionDefinitions(referenceData.gscFile);

            const alreadyDefinedFunctions: GscFunctionDefinition[] = [];

            const funcDefsFromLocalFile = GscFunctions.getLocalFunctionDefinitions(gscFile);
            alreadyDefinedFunctions.push(...funcDefsFromLocalFile.map(f => ({ func: f, uri: gscFile.uri, reason: "Local file" })));

            for (let j = 0; j < index; j++) {
                const otherPath = allIncludedPaths[j];
                const otherReferenceData = GscFiles.getReferencedFileForFile(gscFile, otherPath);
                if (!otherReferenceData) {
                    continue;
                }
                const otherFuncDefs = GscFunctions.getLocalFunctionDefinitions(otherReferenceData.gscFile);

                alreadyDefinedFunctions.push(...otherFuncDefs.map(f => ({ func: f, uri: otherReferenceData.gscFile!.uri, reason: "Included file" })));
            }

            for (const funcDef of funcDefsInIncludedFile) {
                for (const alreadyDefinedFunction of alreadyDefinedFunctions) {
                    if (funcDef.nameId === alreadyDefinedFunction.func.nameId) {
                        const s = alreadyDefinedFunction.reason === "Local file" ? "this file" : "included file '" + vscode.workspace.asRelativePath(alreadyDefinedFunction.uri) + "'";
                        return new vscode.Diagnostic(range, `Function '${funcDef.name}' is already defined in ${s}!`, vscode.DiagnosticSeverity.Error);
                    }
                }
            }
        }

        if (referenceData === undefined) {

            // This file path is ignored by configuration
            if (GscFiles.isFileIgnoredBySettings(gscFile, path)) {
                return;
            }
            const d = new vscode.Diagnostic(
                range,
                `Could not find file '${path}.gsc' in workspace folder ${gscFile.config.referenceableGameRootFolders.map(f => "'" + f.relativePath + "'").join(", ")}`,
                vscode.DiagnosticSeverity.Error);
            d.code = "unknown_file_path_" + path;
            return d;
        }

    }


    private static createDiagnosticsForFunctionName(
        group: GscGroup, gscFile: GscFile) {

        // Function declaration
        if (group.parent?.type === GroupType.FunctionDeclaration) {

            const funcName = group.getFirstToken().name;

            // Check for duplicate function name definition
            const defs = GscFunctions.getLocalFunctionDefinitions(gscFile, funcName);
            if (defs.length > 1) {
                return new vscode.Diagnostic(group.getRange(), `Duplicate function definition of '${funcName}'!`, vscode.DiagnosticSeverity.Error);
            }


            // This function is overwriting the build-in function
            if (CodFunctions.isPredefinedFunction(funcName, gscFile.config.currentGame)) {
                return new vscode.Diagnostic(group.getRange(), `Function '${funcName}' is overwriting build-in function`, vscode.DiagnosticSeverity.Information);
            }


            // Function call or reference
        } else {

            const funcInfo = group.getFunctionReferenceInfo();
            if (funcInfo !== undefined) {

                const res = GscFunctions.getFunctionReferenceState({ name: funcInfo.name, path: funcInfo.path }, gscFile);

                switch (res.state as GscFunctionState) {
                    case GscFunctionState.NameIgnored:
                        return;

                    // Function was found
                    case GscFunctionState.Found:
                        const funcDef = res.definitions[0].func;
                        if (funcInfo.params.length > funcDef.parameters.length) {
                            if (funcDef.parameters.length === 0) {
                                var r = new vscode.Range(funcInfo.params[funcDef.parameters.length].getRange().start, funcInfo.params[funcInfo.params.length - 1].getRange().end);
                                return new vscode.Diagnostic(r, `Function '${funcDef.name}' does not expect any parameters, got ${funcInfo.params.length}`, vscode.DiagnosticSeverity.Error);
                            } else {
                                var r = new vscode.Range(funcInfo.params[funcDef.parameters.length].getRange().start, funcInfo.params[funcInfo.params.length - 1].getRange().end);
                                return new vscode.Diagnostic(r, `Function '${funcDef.name}' expect ${funcDef.parameters.length} parameter${(funcDef.parameters.length === 1 ? "" : "s")}, got ${funcInfo.params.length}`, vscode.DiagnosticSeverity.Error);
                            }
                        }
                        break;


                    // This function is predefined function
                    case GscFunctionState.FoundInPredefined:
                        // Find in predefined functions
                        const preDefFunc = CodFunctions.getByName(funcInfo.name, funcInfo.callOn !== undefined, gscFile.config.currentGame);

                        // Predefined function was not found because the callon mismatch
                        if (preDefFunc === undefined) {
                            if (funcInfo.callOn) {
                                return new vscode.Diagnostic(funcInfo.callOn.getRange(), `Function '${funcInfo.name}' can not be called on object (does not support callon object)`, vscode.DiagnosticSeverity.Error);
                            } else {
                                return new vscode.Diagnostic(group.getRange(), `Function '${funcInfo.name}' must be called on object (callon object is missing)`, vscode.DiagnosticSeverity.Error);
                            }
                        }

                        const paramsMinMax = preDefFunc.getNumberOfParameters();

                        if (funcInfo.params.length > paramsMinMax.max) {
                            if (paramsMinMax.max === 0) {
                                var r = new vscode.Range(funcInfo.params[paramsMinMax.max].getRange().start, funcInfo.params[funcInfo.params.length - 1].getRange().end);
                                return new vscode.Diagnostic(r, `Function '${funcInfo.name}' does not expect any parameters, got ${funcInfo.params.length}`, vscode.DiagnosticSeverity.Error);
                            } else {
                                var r = new vscode.Range(funcInfo.params[paramsMinMax.max].getRange().start, funcInfo.params[funcInfo.params.length - 1].getRange().end);
                                return new vscode.Diagnostic(r, `Function '${funcInfo.name}' expect max ${paramsMinMax.max} parameter${(paramsMinMax.max === 1 ? "" : "s")}, got ${funcInfo.params.length}`, vscode.DiagnosticSeverity.Error);
                            }
                        } else if (funcInfo.params.length < paramsMinMax.min) {
                            var r = funcInfo.paramsGroup?.getRange() ?? group.getRange();
                            return new vscode.Diagnostic(r, `Function '${funcInfo.name}' expect min ${paramsMinMax.min} parameter${(paramsMinMax.min === 1 ? "" : "s")}, got ${funcInfo.params.length}`, vscode.DiagnosticSeverity.Error);
                        }
                        break;


                    case GscFunctionState.NotFoundFile:

                        // This file path is ignored by configuration
                        if (GscFiles.isFileIgnoredBySettings(gscFile, funcInfo.path)) {
                            return;
                        }
                        var r = (funcInfo.pathGroup) ? funcInfo.pathGroup.getRange() : group.getRange();
                        const folders = gscFile.config.referenceableGameRootFolders.map(f => "'" + f.relativePath + "'").join(", ");
                        const d = new vscode.Diagnostic(r, `Could not find file '${funcInfo.path}.gsc' in workspace folder ${folders}`, vscode.DiagnosticSeverity.Error);
                        d.code = "unknown_file_path_" + funcInfo.path;

                        return d;

                    case GscFunctionState.NotFoundFileButIgnored:
                        break;


                    case GscFunctionState.NotFoundFunctionExternal:
                        const d1 = new vscode.Diagnostic(group.getRange(), `Function '${funcInfo.name}' is not defined in '${funcInfo.path}.gsc'!`, vscode.DiagnosticSeverity.Error);
                        // TODO now it ignores local and external, but it should be probably separated
                        //if (funcInfo.path === "") {
                        d1.code = "unknown_function_" + funcInfo.name; // Special constant to create a CodeAction to add function name into ignored list
                        //}
                        return d1;


                    case GscFunctionState.NotFoundFunctionLocal:
                        if (gscFile.config.currentGame !== GscGame.UniversalGame) {
                            const d = new vscode.Diagnostic(group.getRange(), `Function '${funcInfo.name}' is not defined!`, vscode.DiagnosticSeverity.Error);
                            if (funcInfo.path === "") {
                                d.code = "unknown_function_" + funcInfo.name; // Special constant to create a CodeAction to add function name into ignored list
                            }
                            return d;
                        }
                        break;
                }


            }
        }
    }


    private static areAllTokensOnSingleLine(tokens: (GscToken | undefined)[]): boolean {

        // Loop through all tokens and check if they are on the same line
        for (var i = 0; i < tokens.length - 1; i++) {
            const token = tokens[i];
            const token2 = tokens[i + 1];
            if (token === undefined) { continue; }
            if (token2 === undefined) { continue; }
            if (token.range.start.line !== token2.range.start.line || !token.range.isSingleLine) {
                return false;
            }
        }

        return true;
    }


    private static async refreshDiagnosticsCollection() {
        await this.updateDiagnosticsForAll("manual refresh");
    }

}

/*

        // Define a simple object to hold the boolean value
        type SolverData = {
            scopeEnded: boolean;
        };

        function solve_unsolved(
            parentGroup: GscGroup,
            lastFunctionScope: GscGroup | undefined = undefined, 
            lastIfScope: GscGroup | undefined = undefined, 
            lastForScope: GscGroup | undefined = undefined, 
            lastWhileScope: GscGroup | undefined = undefined, 
            lastSwitchScope: GscGroup | undefined = undefined,  
            lastCaseScope: GscGroup | undefined = undefined, 
            lastScope: GscGroup | undefined = undefined, 
            scopeEnded: boolean = false
        ): SolverData
        {
            const data: SolverData = {
                scopeEnded: false
            };
            
            switch (parentGroup.type as GroupType) {   
                case GroupType.FunctionScope:
                    lastFunctionScope = parentGroup;
                    break;  
                case GroupType.IfScope:
                    lastIfScope = parentGroup;
                    break;          
                case GroupType.ForScope:
                    lastForScope = parentGroup;
                    break;          
                case GroupType.WhileScope:
                    lastWhileScope = parentGroup;
                    break;         
                case GroupType.SwitchScope:
                    lastSwitchScope = parentGroup;
                    break;         
                case GroupType.CaseScope:
                    lastCaseScope = parentGroup;
                    break;      
                case GroupType.Scope:
                    lastScope = parentGroup;
                    break;
            }

            const inAnyOfScope = 
                lastFunctionScope !== undefined || lastIfScope !== undefined || lastForScope !== undefined || 
                lastWhileScope !== undefined || lastSwitchScope !== undefined || lastCaseScope !== undefined || lastScope !== undefined;

            if (scopeEnded) {
                parentGroup.deadCode = true;
                data.scopeEnded = true;
            }

            // This object have child items, process them first
            for (var i = 0; i < parentGroup.items.length; i++) {
                const innerGroup = parentGroup.items[i];
                const innerData = solve_unsolved(innerGroup, lastFunctionScope, lastIfScope, lastForScope, lastWhileScope, lastSwitchScope, lastCaseScope, lastScope, scopeEnded);        
                scopeEnded = innerData.scopeEnded;
            }

            
            switch (parentGroup.type as GroupType) {

                case GroupType.Root:
                    break;

                case GroupType.DeveloperBlock:
                case GroupType.DeveloperBlock2:
                    parentGroup.solved = true; 
                    break;

                case GroupType.FunctionDefinition:
                    if (lastFunctionScope === undefined) { // root
                        parentGroup.solved = true; 
                    } 
                    break;

                
                case GroupType.FunctionScope:
                case GroupType.IfScope:
                case GroupType.ForScope:
                //case GroupType.WhileScope:
                case GroupType.CaseScope:
                case GroupType.Scope:
                    // Scope inside known scopes are valid
                    for (var i = 0; i < parentGroup.items.length; i++) {
                        const childGroup1 = parentGroup.items[i];
                        const childGroup2 = parentGroup.items.at(i + 1);
                        if (childGroup1.type === GroupType.Scope) {
                            childGroup1.solved = true;
                        }
                        if (childGroup1.isUnknownUnsolvedSingleTokenOfOneOfType(TokenType.Semicolon)) {
                            changeGroupToSolvedAndChangeType(parentGroup, childGroup1, GroupType.Token);
                            const newGroup = groupItems(parentGroup, i, GroupType.TerminatedStatement, 0, 0, childGroup1);
                            newGroup.solved = true;
                        }
                    } 
                    break;

                case GroupType.SwitchScope:

                    break;

                case GroupType.TerminatedStatement:

                    if (inAnyOfScope) {

                        if (lastSwitchScope === undefined || lastCaseScope !== undefined) { // switch scope can contain only CaseLabel
                            parentGroup.solved = true;
                        }

                        if (parentGroup.items.length === 2 && 
                            parentGroup.items[0].type === GroupType.Statement && parentGroup.items[0].items.length === 1 &&
                            parentGroup.items[0].items[0].type === GroupType.ReservedKeyword)
                        {
                            const name = parentGroup.items[0].items[0].getSingleToken()?.name;
                            if (name === undefined) { break; }
                            switch (name) {
                                case "break": // for, while, case
                                    if (lastForScope !== undefined || lastWhileScope !== undefined || lastCaseScope !== undefined) {
                                        data.scopeEnded = true;   // everything in this scope is dead code
                                    } else {
                                        parentGroup.solved = false;
                                    }
                                    break;
        
                                case "continue": // for, while
                                    if (lastForScope !== undefined || lastWhileScope !== undefined) {
                                        data.scopeEnded = true; // everything in this scope is dead code
                                    } else {
                                        parentGroup.solved = false;
                                    }
                                    break;
        
                                case "return": // function
                                    if (lastFunctionScope !== undefined) {
                                        data.scopeEnded = true; // everything in this scope is dead code
                                    } else {
                                        parentGroup.solved = false;
                                    }
                                    break;
                            }
                        }
                    }
                    break;

                case GroupType.TerminatedPreprocessorStatement:
                case GroupType.TerminatedPreprocessorStatementInline:
                case GroupType.TerminatedPreprocessorStatementInsert:
                case GroupType.TerminatedPreprocessorStatementNamespace:
                    break;

                case GroupType.VariableReference:
                    for (var i = 0; i < parentGroup.items.length; i++) {
                        const childGroup1 = parentGroup.items[i];
        
                        // Make inside of array solved
                        // game[] or level.aaa[]
                        if (childGroup1.type === GroupType.Array && childGroup1.solved) 
                        {
                            const innerGroup = childGroup1.items.at(0);
                            if (innerGroup !== undefined && typeEqualsToOneOf(innerGroup.type, ...valueTypesWithIdentifier)) {
                                changeGroupToSolvedAndChangeType(childGroup1, innerGroup, GroupType.Value);
                            }
                        }
                    } 
                    break;

                case GroupType.Expression:
                    if (parentGroup.items.length === 1 && parentGroup.items[0].type === GroupType.Identifier) {
                        changeGroupToSolvedAndChangeType(parentGroup, parentGroup.items[0], GroupType.VariableReference);
                    }
                    else if (parentGroup.items.length === 1 && typeEqualsToOneOf(parentGroup.items[0].type, ...valueTypes)) {
                        parentGroup.items[0].solved = true;
                    } else {
                        parentGroup.solved = false; // empty expressions like ->  1 + ()
                    }
                    break;

                case GroupType.FunctionParametersExpression:
                    for (var i = 0; i < parentGroup.items.length; i++) {
                        const childGroup1 = parentGroup.items[i];

                        // Parameter
                        if ((i % 2) === 0) {
                            
                            // Function definition
                            if (inAnyOfScope === false && childGroup1.type === GroupType.Identifier) {                          
                                if (inAnyOfScope === false) {
                                    childGroup1.type = GroupType.FunctionParameterName;
                                    childGroup1.solved = true;
                                }                        
                            // Function call
                            } else if (inAnyOfScope && typeEqualsToOneOf(childGroup1.type, ...valueTypesWithIdentifier)) {
                                if (childGroup1.type === GroupType.Identifier) {
                                    changeGroupToSolvedAndChangeType(parentGroup, childGroup1, GroupType.VariableReference);
                                } else {
                                    childGroup1.solved = true;
                                }
                            }

                        // Separator
                        } else if (i + 1 < parentGroup.items.length) {
                            if (childGroup1.isUnknownUnsolvedSingleTokenOfOneOfType(TokenType.ParameterSeparator) && (i % 2) !== 0) {
                                changeGroupToSolvedAndChangeType(parentGroup, childGroup1, GroupType.Token);
                            }
                        }
        
                    } 
                    break;

                case GroupType.KeywordParametersExpression:
                    for (var i = 0; i < parentGroup.items.length; i++) {
                        const childGroup1 = parentGroup.items[i];

                        // Parameter
                        if ((i % 2) === 0) {                           
                            if (typeEqualsToOneOf(childGroup1.type, ...valueTypesWithIdentifier)) {
                                if (childGroup1.type === GroupType.Identifier) {
                                    changeGroupToSolvedAndChangeType(parentGroup, childGroup1, GroupType.VariableReference);
                                } else {
                                    childGroup1.solved = true;
                                }
                            }
                        // Separator
                        } else if (i + 1 < parentGroup.items.length) {
                            if (childGroup1.isUnknownUnsolvedSingleTokenOfOneOfType(TokenType.ParameterSeparator) && (i % 2) !== 0) {
                                changeGroupToSolvedAndChangeType(parentGroup, childGroup1, GroupType.Token);
                            }
                        }
        
                    } 
                    break;

                case GroupType.ForExpression:
                    // for (;;) is minimum
                    if (parentGroup.items.length < 2) {
                        parentGroup.solved = false;
                        break;
                    }
                    var paramPos = 0;
                    for (var i = 0; i < parentGroup.items.length; i++) {
                        const childGroup1 = parentGroup.items[i];

                        // for (;;)
                        // for (; i < 5;)
                        // for (i = 1; i < 5; i++)
                        // - first (i = 1;) will be already solved as TerminatedToken
                        if (paramPos === 0 && typeEqualsToOneOf(childGroup1.type, GroupType.TerminatedStatement)) {
                            changeGroupToSolvedAndChangeType(parentGroup, childGroup1, GroupType.TerminatedStatement);
                            paramPos++;
                        }
                        else if (childGroup1.isUnknownUnsolvedSingleTokenOfOneOfType(TokenType.Semicolon)) {
                            paramPos++;
                            changeGroupToSolvedAndChangeType(parentGroup, childGroup1, GroupType.Token);

                        } else if (paramPos === 1 && typeEqualsToOneOf(childGroup1.type, ...valueTypesWithIdentifier)) {
                            changeGroupToSolvedAndChangeType(parentGroup, childGroup1, GroupType.Value);

                        } else if (paramPos === 2 && typeEqualsToOneOf(childGroup1.type, GroupType.Statement)) {
                            changeGroupToSolvedAndChangeType(parentGroup, childGroup1, GroupType.TerminatedStatement);

                        } else {
                            paramPos++;
                        }
                    }
                    if (paramPos >= 3) {
                        parentGroup.solved = false;
                        break;
                    }
                    break;

                case GroupType.ReservedKeyword:

                    break;
            }

            return data;
        }

        */
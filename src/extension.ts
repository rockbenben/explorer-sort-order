// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand("extension.toggleExplorerSortOrder", async () => {
    const config = vscode.workspace.getConfiguration("explorer");
    const sortOrder = config.get("sortOrder");
    await config.update("sortOrder", sortOrder === "default" ? "modified" : "default", true);
    vscode.window.showInformationMessage(`Explorer Sort Order set to: ${sortOrder === "default" ? "modified" : "default"}`);
  });

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

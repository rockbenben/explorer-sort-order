import * as vscode from "vscode";

/**
 * Activates the extension
 * @param context The extension context
 */
export function activate(context: vscode.ExtensionContext) {
  console.log("Explorer Sort Order extension is now active");

  // Register the toggle command
  const disposable = vscode.commands.registerCommand("extension.toggleExplorerSortOrder", async () => {
    try {
      const config = vscode.workspace.getConfiguration("explorer");
      const currentSortOrder = config.get<string>("sortOrder");

      // Determine the new sort order
      const newSortOrder = currentSortOrder === "default" ? "modified" : "default";

      // Update the configuration
      await config.update("sortOrder", newSortOrder, true);

      // Show a more user-friendly notification
      const displaySortOrder = newSortOrder === "default" ? "By Name" : "By Last Modified";
      vscode.window.showInformationMessage(`Explorer Sort Order: ${displaySortOrder}`);
    } catch (error) {
      vscode.window.showErrorMessage(`Failed to toggle sort order: ${error}`);
    }
  });

  context.subscriptions.push(disposable);
}

/**
 * Deactivates the extension
 */
export function deactivate() {
  // No cleanup needed
}

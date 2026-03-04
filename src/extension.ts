import * as vscode from "vscode";

const SORT_ORDER_LABELS: Record<string, string> = {
  default: "By Name",
  modified: "By Modified",
  type: "By Type",
  filesFirst: "Files First",
  mixed: "Mixed",
  foldersNestsFiles: "Folders Nests Files",
};

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}

function getLabel(sortOrder: string): string {
  return SORT_ORDER_LABELS[sortOrder] ?? sortOrder;
}

function getCurrentSortOrder(): string {
  return vscode.workspace.getConfiguration("explorer").get<string>("sortOrder") ?? "default";
}

function getToggleModes(): [string, string] {
  const config = vscode.workspace.getConfiguration("explorerSortOrder");
  return [
    config.get<string>("toggleA") ?? "default",
    config.get<string>("toggleB") ?? "modified",
  ];
}

function getConfigTarget(config: vscode.WorkspaceConfiguration): vscode.ConfigurationTarget {
  const inspection = config.inspect<string>("sortOrder");
  return inspection?.workspaceValue !== undefined
    ? vscode.ConfigurationTarget.Workspace
    : vscode.ConfigurationTarget.Global;
}

let statusBarItem: vscode.StatusBarItem;

function updateStatusBar(): void {
  statusBarItem.text = `$(list-filter) ${getLabel(getCurrentSortOrder())}`;
}

export function activate(context: vscode.ExtensionContext) {
  // Create status bar item
  statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
  statusBarItem.command = "extension.toggleExplorerSortOrder";
  statusBarItem.tooltip = "Toggle Explorer Sort Order";
  updateStatusBar();
  statusBarItem.show();
  context.subscriptions.push(statusBarItem);

  // Sync status bar when configuration changes externally
  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("explorer.sortOrder")) {
        updateStatusBar();
      }
    }),
  );

  // Toggle command: switch between two configured modes
  context.subscriptions.push(
    vscode.commands.registerCommand("extension.toggleExplorerSortOrder", async () => {
      try {
        const config = vscode.workspace.getConfiguration("explorer");
        const current = getCurrentSortOrder();
        const [modeA, modeB] = getToggleModes();

        const newSortOrder = current === modeA ? modeB : modeA;
        await config.update("sortOrder", newSortOrder, getConfigTarget(config));

        vscode.window.showInformationMessage(`Explorer Sort Order: ${getLabel(newSortOrder)}`);
      } catch (error) {
        vscode.window.showErrorMessage(`Failed to toggle sort order: ${getErrorMessage(error)}`);
      }
    }),
  );

  // Select command: QuickPick with all sort modes
  context.subscriptions.push(
    vscode.commands.registerCommand("extension.selectExplorerSortOrder", async () => {
      try {
        const config = vscode.workspace.getConfiguration("explorer");
        const current = getCurrentSortOrder();

        const items = Object.entries(SORT_ORDER_LABELS).map(([value, label]) => ({
          label,
          description: value === current ? "$(check)" : "",
          value,
        }));

        const picked = await vscode.window.showQuickPick(items, {
          placeHolder: "Select explorer sort order",
        });

        if (!picked || picked.value === current) {
          return;
        }

        await config.update("sortOrder", picked.value, getConfigTarget(config));

        vscode.window.showInformationMessage(`Explorer Sort Order: ${picked.label}`);
      } catch (error) {
        vscode.window.showErrorMessage(`Failed to set sort order: ${getErrorMessage(error)}`);
      }
    }),
  );
}

export function deactivate() {
  // No cleanup needed
}

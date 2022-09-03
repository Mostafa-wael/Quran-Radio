import * as vscode from "vscode";

let statusBar = vscode.window.createStatusBarItem(
  vscode.StatusBarAlignment.Left,
  Number.MIN_SAFE_INTEGER
);

export function updateSidebar(text: string, tooltip: string, command: string,) {
  statusBar.text = text;
  statusBar.tooltip = tooltip;
  statusBar.command = command;
  statusBar.show();
}
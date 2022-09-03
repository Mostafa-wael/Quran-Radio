import * as vscode from "vscode";

let statusBar = vscode.window.createStatusBarItem(
  vscode.StatusBarAlignment.Left,
  Number.MIN_SAFE_INTEGER
);

/**
 * 
 * @param text The text to be shown on the button
 * @param tooltip The text to be shown on hover
 * @param command The command to be executed on click
 */
export function updateSidebar(text: string, tooltip: string, command: string,) {
  statusBar.text = text;
  statusBar.tooltip = tooltip;
  statusBar.command = command;
  statusBar.show();
}
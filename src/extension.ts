import * as vscode from "vscode";
import { playStream, stopStream } from './stream';


/**
 * This method is called when your extension is activated.
 * Your extension is activated the very first time the command is executed
 * @param context The session context
 */
export function activate(context: vscode.ExtensionContext) {
  let subscriptions = [
    vscode.commands.registerCommand("quranradio.play", playStream),
    vscode.commands.registerCommand("quranradio.stop", stopStream),
  ];

  context.subscriptions.push(...subscriptions);

  stopStream();
}

/**
 * This method is called when your extension is deactivated
 */
export function deactivate() {
  stopStream();
}

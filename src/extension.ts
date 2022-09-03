import * as vscode from "vscode";
import { playStream, stopStream } from './stream';


export function activate(context: vscode.ExtensionContext) {
  let subscriptions = [
    vscode.commands.registerCommand("quranradio.play", playStream),
    vscode.commands.registerCommand("quranradio.stop", stopStream),
  ];

  context.subscriptions.push(...subscriptions);

  stopStream();
}

export function deactivate() {
  stopStream();
}

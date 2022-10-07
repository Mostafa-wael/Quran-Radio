// imports
import * as vscode from "vscode";
import { playStream, stopStream, } from './stream';
import { changeRadio, } from './changeRadio';
import { appName, } from './utilities';

// functions
/**
 * This method is called when your extension is activated.
 * Your extension is activated the very first time the command is executed
 * @param context The session context
 */
export function activate(context: vscode.ExtensionContext) {
  let subscriptions = [
    vscode.commands.registerCommand("quranradio.play", playStream),
    vscode.commands.registerCommand("quranradio.stop", stopStream),
    vscode.commands.registerCommand("quranradio.changeRadio", changeRadio),
  ];
  context.subscriptions.push(...subscriptions);
  stopStream();

  // reminder
  // converts hours to milliseconds
  if (Number(vscode.workspace.getConfiguration(appName).get("reminderInterval")) > 0) {
    var reminderIntervalMs = Number(vscode.workspace.getConfiguration(appName).get("reminderInterval")) * 60 * 60 * 1000;
    setInterval(async function () {
      vscode.window.showInformationMessage("Have you listened to Quran today?\n\n  ﴾الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ﴿");
    }, reminderIntervalMs);
  }
}

/**
 * This method is called when your extension is deactivated
 */
export function deactivate() {
  stopStream();
}

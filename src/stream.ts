// imports
import * as vscode from "vscode";
import { get as fetch } from 'https';
import { updateSidebar } from "./UI";
import { startTerminal, stopTerminal } from "./terminal";

// functions
/**
 * Check the status of the internet connection.
 * @returns The internet connection status
 */
async function hasConnection() {
  const portal = "https://detectportal.firefox.com/success.txt";
  return new Promise<boolean>((resolve, reject) => {
    const req = fetch(portal, (res) => resolve(res.statusCode === 200));
    req.on('error', () => resolve(false));
  });
}

/**
 * Runs the radio.
 */
export async function playStream() {
  if (!(await hasConnection())) {
    vscode.window.showInformationMessage("Can't play, no internet connection.");
    return;
  }
  updateSidebar("◼ Quran Radio", "◼ Stop playing", "quranradio.stop");
  startTerminal();
}

/**
 * Stops the radio.
 */
export async function stopStream() {
  updateSidebar("▶ Quran Radio", "▶ Start playing", "quranradio.play");
  stopTerminal();
}


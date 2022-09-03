// imports
import { platform as osPlatform } from 'os';
import * as vscode from "vscode";
import { startCommand } from './changeRadio';

// constants
const appName = "quranradio";
const windowsTerminal = "C:\\Windows\\System32\\cmd.exe";
const linuxTerminal = "/bin/bash";
// variables
let terminal: vscode.Terminal;

// functions
/**
 * Starts the terminal and plays the radio.
 */
export async function startTerminal() {
  terminal?.dispose(); // if there is a running instance
  if (osPlatform().includes('win')) {
    terminal = vscode.window.createTerminal({
      shellPath: windowsTerminal,
      name: appName,
      hideFromUser: true
    });
  }
  else { // mac/linux
    terminal = vscode.window.createTerminal({
      shellPath: linuxTerminal,
      name: appName,
      hideFromUser: true
    });
  }
  terminal.sendText(startCommand);
  if (osPlatform().includes('win')) {
    setTimeout(() => terminal.dispose(), 3000); // it's not necessary to keep the terminal open in windows
  }
}

/**
 * Stops the terminal and the radio.
 */
export function stopTerminal() {
  terminal?.dispose();
  // for some reason, dispose in windows doesnt kill its child processes
  // so we manually kill vlc with taskkill command
  if (osPlatform().includes('win')) {
    terminal = vscode.window.createTerminal({
      shellPath: windowsTerminal,
      name: appName,
      hideFromUser: true
    });
    terminal.sendText(`taskkill /im "vlc.exe" /f`);
  }
  else { // mac/linux
    terminal = vscode.window.createTerminal({
      shellPath: linuxTerminal,
      name: appName,
      hideFromUser: true
    });
    terminal.sendText(`kill -9 $(pgrep -n  vlc)`);
  }
  if (osPlatform().includes('win')) {
    setTimeout(() => terminal.dispose(), 3000); // it's not necessary to keep the terminal open in windows
  }
}
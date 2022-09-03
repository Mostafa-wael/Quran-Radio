import { platform as osPlatform } from 'os';
import * as vscode from "vscode";
let terminal: vscode.Terminal;

const radio = "https://qurango.net/radio/tarateel";

/**
 * Searches for the vlc path according to the OS and overrides the default path with the "vlc_path" variable.
 * @returns The path of the vlc media player
 */
export function getMediaPlayer() {
  let vlc = "";
  if (osPlatform().includes('win')) {
    vlc = "C:\\Program Files\\VideoLAN\\VLC\\vlc.exe";
  }
  else {
    vlc = "/snap/bin/vlc"; // mac/linux
  }
  return vscode.workspace.getConfiguration("quranradio").get("vlc_path") || vlc;
}

/**
 * Starts the terminal and plays the radio.
 */
export async function startTerminal() {
  terminal?.dispose(); // if there is a running instance
  if (osPlatform().includes('win')){
    terminal = vscode.window.createTerminal({
      shellPath: "C:\\Windows\\System32\\cmd.exe",
      name: "quranradio",
      hideFromUser: true
    });
  }
  else { // mac/linux
    terminal = vscode.window.createTerminal({
      shellPath: "/bin/bash", 
      name: "quranradio",
      hideFromUser: true
    });
  }
  terminal.sendText(`"${getMediaPlayer()}" ${radio} --intf dummy`);
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
  if (osPlatform().includes('win')){
    terminal = vscode.window.createTerminal({
      shellPath: "C:\\Windows\\System32\\cmd.exe",
      name: "quranradio",
      hideFromUser: true
    });
    terminal.sendText('taskkill /im "vlc.exe" /f');
  }
  else { // mac/linux
    terminal = vscode.window.createTerminal({
      shellPath: "/bin/bash", 
      name: "quranradio",
      hideFromUser: true
    });
    terminal.sendText("kill -9 $(pgrep -n  vlc)");
  }
  if (osPlatform().includes('win')) {
    setTimeout(() => terminal.dispose(), 3000); // it's not necessary to keep the terminal open in windows
  }
}
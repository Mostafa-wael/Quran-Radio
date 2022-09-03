import { platform as osPlatform } from 'os';
import * as vscode from "vscode";
let terminal: vscode.Terminal;

const radio = "https://qurango.net/radio/tarateel";


export function getMediaPlayer() {
  let vlc = "/snap/bin/vlc"; // gnu/linux or mac?
  if (osPlatform().includes('win')) { vlc = "C:\\Program Files\\VideoLAN\\VLC\\vlc.exe"; }
  return vscode.workspace.getConfiguration("quranradio").get("vlc_path") || vlc;
}


export async function startTerminal() {
  terminal?.dispose(); // if there is a running instance
  terminal = vscode.window.createTerminal({
    shellPath: "/bin/bash", // ensures that the default Windows terminal will open 
    name: "quranradio",
    hideFromUser: true
  });
  terminal.sendText(`"${getMediaPlayer()}" ${radio} --intf dummy`);
  if (osPlatform().includes('win')) {
    setTimeout(() => terminal.dispose(), 3000); // it's not necessary to keep the terminal open in windows
  }
}

export function stopTerminal() {
  terminal?.dispose();
  // for some reason, dispose in windows doesnt kill its child processes
  // so we manually kill vlc with taskkill command
  if (osPlatform().includes('win')) {
    const t = vscode.window.createTerminal({
      shellPath: "/bin/bash", // ensures that the default Windows terminal will open
      hideFromUser: false
    });
    t.sendText('taskkill /im "vlc.exe" /f');
    setTimeout(() => t.dispose(), 3000); // proximity until taskkill complete
  }
}
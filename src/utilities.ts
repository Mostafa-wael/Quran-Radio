// imports
import * as vscode from "vscode";
import { platform as osPlatform } from 'os';
// constants
export const appName = "quranradio";
 

// functions
/**
 * Searches for the vlc path according to the OS and overrides the default path with the "vlc_path" variable.
 * @returns The path of the vlc media player
 */
export function getMediaPlayer() {
    let vlcPath = "";
    if (osPlatform().includes('win')) {
        vlcPath = "C:\\Program\ Files\ (x86)\\VideoLAN\\VLC\\vlc.exe";
    }
    else {
        vlcPath = "/snap/bin/vlc"; // mac/linux
    }
    return vscode.workspace.getConfiguration(appName).get("vlc_path") || vlcPath;
}
// imports
import * as vscode from "vscode";
import { platform as osPlatform } from 'os';
// constants
const appName = "quranradio";

// functions
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
    return vscode.workspace.getConfiguration(appName).get("vlc_path") || vlc;
}
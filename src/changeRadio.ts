// imports
import * as vscode from "vscode";
import { getMediaPlayer, } from './utilities';
import { playStream, stopStream, } from './stream';
// constants
const radio1 = "https://qurango.net/radio/tarateel";
const radio2 = "https://Qurango.net/radio/mix";
const radio3 = "https://qurango.net/radio/salma";
let currentRadio = "https://qurango.net/radio/tarateel";
// variables
export let startCommand = `"${getMediaPlayer()}" ${currentRadio} --intf dummy`;

// functions
/**
 * Choose from multiple radio stations.
 */
export async function changeRadio() {
    const radio = await vscode.window.showQuickPick(["Amazing short Recitations", "Mix Recitations", "Beautiful Recitations"], { placeHolder: "Select a radio" });
    if (radio === "Amazing short Recitations") {
        currentRadio = radio1;
    } else if (radio === "Mix Recitations") {
        currentRadio = radio2;
    } else if (radio === "Beautiful Recitations") {
        currentRadio = radio3;
    }
    vscode.window.showInformationMessage('Current radio is: ' + radio);
    startCommand = `"${getMediaPlayer()}" ${currentRadio} --intf dummy`;
    // play the radio when chosen
    stopStream();
    playStream();
}
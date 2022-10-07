// imports
import * as vscode from "vscode";
import { getMediaPlayer } from "./utilities";
import { playStream, stopStream } from "./stream";
import { getCurrentRadio } from "./changeSurah";
import { radios } from "./surahsAndReciters";
// constants

let currentRadio = "https://qurango.net/radio/tarateel";
// variables
export let startCommand = `"${getMediaPlayer()}" ${currentRadio} --intf dummy`;

// functions
/**
 * Choose from multiple radio stations.
 */
export async function changeRadio() {
  const radio = await vscode.window.showQuickPick(radios, {
    placeHolder: "Select a radio",
  });
  if (radio) {
    currentRadio = (await getCurrentRadio(radio)) || currentRadio;
  }
  vscode.window.showInformationMessage("Current radio is: " + radio);
  startCommand = `"${getMediaPlayer()}" ${currentRadio} --intf dummy`;
  // play the radio when chosen
  stopStream();
  playStream();
}

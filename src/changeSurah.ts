import * as vscode from "vscode";
import { surahMap, recitersMap, surahs } from "./surahsAndReciters";
export async function getCurrentRadio(reciter: string) {
  if (reciter === "Amazing short Recitations") {
    return "https://qurango.net/radio/tarateel";
  } else if (reciter === "Mix Recitations") {
    return "https://Qurango.net/radio/mix";
  } else if (reciter === "Beautiful Recitations") {
    return "https://qurango.net/radio/salma";
  }
  const surahNumber = surahMap.get(await changeSurah());
  const reciterId = recitersMap.get(reciter);
  const radio = `https://cdn.islamic.network/quran/audio-surah/128/ar.${reciterId}/${surahNumber}.mp3`;
  return radio;
}

async function changeSurah() {
  const surah = await vscode.window.showQuickPick(surahs, {
    placeHolder: "Select a surah",
  });
  return surah;
}

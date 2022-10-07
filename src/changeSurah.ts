import * as vscode from "vscode";
import { surahMap, recitersMap, surahs } from "./surahsAndReciters";

export async function getCurrentRadio(reciter: string) {
  //get the surah number from the chosen surah
  //e.g. "Al-Fatiha" => 1
  let surahNumber = 0;
  if (!noSurahRadios.includes(reciter)) {
    surahNumber = surahMap.get(await changeSurah());
  }
  if (specialReciters(reciter, surahNumber) === false) {
    //get the reciter number from the chosen reciter
    //e.g. "AbdulBaset AbdulSamad [Mujawwad]" => "abdulbasitmujawwad"
    const reciterId = recitersMap.get(reciter);
    //most of the reciters are on the this server
    const radio = `https://cdn.islamic.network/quran/audio-surah/128/ar.${reciterId}/${surahNumber}.mp3`;
    return radio;
  }
  return specialReciters(reciter, surahNumber);
}

async function changeSurah() {
  const surah = await vscode.window.showQuickPick(surahs, {
    placeHolder: "Select a surah",
  });
  return surah;
}

//here we need to make a special case for each reciter as they are on different servers
function specialReciters(reciter: string, surahNumber: number) {
  if (reciter === "Amazing short Recitations") {
    return "https://qurango.net/radio/tarateel";
  } else if (reciter === "Mix Recitations") {
    return "https://Qurango.net/radio/mix";
  } else if (reciter === "Beautiful Recitations") {
    return "https://qurango.net/radio/salma";
  } else if (reciter === "Ra'ad Al-Kurdi") {
    return `https://server6.mp3quran.net/kurdi/${surahNumber
      .toString()
      .padStart(3, "0")}.mp3`;
  } else if (reciter === "Mahmoud Khalil Al-Husary") {
    return `https://server13.mp3quran.net/husr/${surahNumber
      .toString()
      .padStart(3, "0")}.mp3`;
  } else if (reciter === "Mahmoud Khalil Al-Husary [Mujawwad]") {
    return `https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/${surahNumber
      .toString()
      .padStart(3, "0")}.mp3`;
  } else if (reciter === "Mahmoud Khalil Al-Husary [Rewayat-Warsh-A-n-Nafi]") {
    return `https://server13.mp3quran.net/husr/Rewayat-Warsh-A-n-Nafi/${surahNumber
      .toString()
      .padStart(3, "0")}.mp3`;
  } else if (reciter === "AbdulBaset AbdulSamad [Rewayat-Warsh-A-n-Nafi]") {
    return `https://server7.mp3quran.net/basit/Rewayat-Warsh-A-n-Nafi/${surahNumber
      .toString()
      .padStart(3, "0")}.mp3`;
  }
  return false;
}
//------------------------------------------------------------
const noSurahRadios = [
  "Amazing short Recitations",
  "Mix Recitations",
  "Beautiful Recitations",
];

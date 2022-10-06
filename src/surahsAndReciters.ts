//map between surahs and surahId that used in the radio url

export const recitersMap = new Map();
recitersMap.set("AbdulBaset AbdulSamad [Mujawwad]", "abdulbasitmujawwad");
recitersMap.set("AbdulBaset AbdulSamad [Murattal]", "abdulbasitmurattal");
recitersMap.set("Mashary Rashid Alafasy", "alafasy");
recitersMap.set("Ayman Swed", "aymanswed");
recitersMap.set("Bandar Balila", "bandarbalila");
recitersMap.set("Laayoun El Kouchi", "laayounelkouchi");
recitersMap.set("Mohamed Al-Tablawi", "mohamedtablawi");
recitersMap.set(
  "Muhammad Siddeeq al-Minshawi [Mujawwad]",
  "muhammadsiddiqalminshawimujawwad"
);
recitersMap.set("Mostafa Ismaeel", "mustafaismail");
recitersMap.set("Nasser Alqatami", "nasseralqatami");
recitersMap.set("Yasser Al_Dosari", "yasseraldossari");
recitersMap.set("Ra'ad Al-Kurdi", "kurdi");
recitersMap.set("Yasser Salama", "yassersalama");
recitersMap.set("Ahmed ibn Ali al-Ajamy", "ahmedalajmi");
recitersMap.set("Mahmud Ali Al Banna", "mahmoudalialbanna");
recitersMap.set("Mahmoud Khalil Al-Husary", "husr");
//------------------------------------------------------
//names of the different radios
export const radios = [
  "AbdulBaset AbdulSamad [Rewayat-Warsh-A-n-Nafi]",
  "AbdulBaset AbdulSamad [Murattal]",
  "AbdulBaset AbdulSamad [Mujawwad]",
  "Amazing short Recitations",
  "Ahmed ibn Ali al-Ajamy",
  "Ayman Swed",
  "Bandar Balila",
  "Beautiful Recitations",
  "Laayoun El Kouchi",
  "Ra'ad Al-Kurdi",
  "Mahmoud Khalil Al-Husary",
  "Mahmoud Khalil Al-Husary [Rewayat-Warsh-A-n-Nafi]",
  "Mahmoud Khalil Al-Husary [Mujawwad]",
  "Mahmud Ali Al Banna",
  "Mashary Rashid Alafasy",
  "Mohamed Al-Tablawi",
  "Muhammad Siddeeq al-Minshawi [Mujawwad]",
  "Mostafa Ismaeel",
  "Mix Recitations",
  "Nasser Alqatami",
  "Yasser Al_Dosari",
  "Yasser Salama",
];
//--------------------------------
export const surahs = [
  "Al-Fatihah",
  "Al-Baqarah",
  "Al-Imran",
  "An-Nisa",
  "Al-Ma'idah",
  "Al-An'am",
  "Al-A'raf",
  "Al-Anfal",
  "At-Taubah",
  "Yunus",
  "Hud",
  "Yusuf",
  "Ar-Ra'd",
  "Ibrahim",
  "Al-Hijr",
  "An-Nahl",
  "Al-Isra",
  "Al-Kahf",
  "Maryam",
  "Ta-Ha",
  "Al-Anbiya",
  "Al-Hajj",
  "Al-Mu'minun",
  "An-Nur",
  "Al-Furqan",
  "Ash-Shu'ara",
  "An-Naml",
  "Al-Qasas",
  "Al-'Ankabut",
  "Ar-Rum",
  "Luqman",
  "As-Sajdah",
  "Al-Ahzab",
  "Saba",
  "Fatir",
  "Ya-Sin",
  "As-Saffat",
  "Sad",
  "Az-Zumar",
  "Ghafir",
  "Fussilat",
  "Ash-Shura",
  "Az-Zukhruf",
  "Ad-Dukhan",
  "Al-Jathiya",
  "Al-Ahqaf",
  "Muhammad",
  "Al-Fath",
  "Al-Hujurat",
  "Qaf",
  "Adh-Dhariyat",
  "At-Tur",
  "An-Najm",
  "Al-Qamar",
  "Ar-Rahman",
  "Al-Waqi'ah",
  "Al-Hadid",
  "Al-Mujadila",
  "Al-Hashr",
  "Al-Mumtahanah",
  "As-Saff",
  "Al-Jumu'ah",
  "Al-Munafiqun",
  "At-Taghabun",
  "At-Talaq",
  "At-Tahrim",
  "Al-Mulk",
  "Al-Qalam",
  "Al-Haqqah",
  "Al-Ma'arij",
  "Nuh",
  "Al-Jinn",
  "Al-Muzzammil",
  "Al-Muddaththir",
  "Al-Qiyamah",
  "Al-Insan",
  "Al-Mursalat",
  "An-Naba",
  "an-Naziat",
  "Abasa",
  "At-Takwir",
  "Al-Infitar",
  "Al-Mutaffifin",
  "Al-Inshiqaq",
  "Al-Buruj",
  "At-Tariq",
  "Al-A'la",
  "Al-Ghashiyah",
  "Al-Fajr",
  "Al-Balad",
  "Ash-Shams",
  "Al-Lail",
  "Ad-Dhuha",
  "Al-Inshirah",
  "At-Tin",
  "Al-'Alaq",
  "Al-Qadr",
  "Al-Bayyinah",
  "Az-Zalzalah",
  "Al-'Adiyat",
  "Al-Qari'ah",
  "At-Takathur",
  "Al-'Asr",
  "Al-Humazah",
  "Al-Fil",
  "Quraysh",
  "Al-Ma'un",
  "Al-Kauthar",
  "Al-Kafirun",
  "An-Nasr",
  "Al-Masad",
  "Al-Ikhlas",
  "Al-Falaq",
  "An-Nas",
];
//----------------------------------
//map of the surahs and it is order in the quran
export const surahMap = new Map();
surahs.forEach((surah, index) => {
  surahMap.set(surah, index + 1);
});

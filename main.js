let juzList = {
 "Juzu\' 1": "False", "Juzu\' 2": "False",
 "Juzu\' 3": "False", "Juzu\' 4": "False",
 "Juzu\' 5": "False", "Juzu\' 6": "False",
 "Juzu\' 7": "False", "Juzu\' 8": "False",
 "Juzu\' 9": "False", "Juzu\' 10": "False",
 "Juzu\' 11": "False", "Juzu\' 12": "False",
 "Juzu\' 13": "False", "Juzu\' 14": "False",
 "Juzu\' 15": "False", "Juzu\' 16": "False",
 "Juzu\' 17": "False", "Juzu\' 18": "False",
 "Juzu\' 19": "False", "Juzu\' 20": "False",
 "Juzu\' 21": "False", "Juzu\' 22": "False",
 "Juzu\' 23": "False", "Juzu\' 24": "False",
 "Juzu\' 25": "False", "Juzu\' 26": "False",
 "Juzu\' 27": "False", "Juzu\' 28": "False",
 "Juzu\' 29": "False", "Juzu\' 30": "False"
}
let surahList = {
 "Al-baqarah": "False",
 "Ali Imran": "False",
 "Al-maidah": "False",
 "Al-an\'am": "False"
}
let maqraList = {
 "Maqra\' 1": "False",
 "Maqra\' 2": "False",
 "Maqra\' 3": "False"
}
let pageList = {
 "Page 1": "False",
 "Page 2": "False"
}

//======================== Juzu'

function displayJuzu() {
 let text = "";
 for (let juz in juzList) {
  if (juzList[juz] == "True") {
   text += juz + '  ' +
    '<input checked onchange="checkJuz(\'' + juz.replace("'", "\\'") + '\')" type="checkbox"></input>' +
    '<br>';
  } else {
   text += juz + '  ' +
    '<input onchange="checkJuz(\'' + juz.replace("'", "\\'") + '\')" type="checkbox"></input>' +
    '<br>';
  }
 }
 document.getElementById("datalist").innerHTML = text;
}

function checkJuz(juzName) {
 for (let juz in juzList) {
  if (juzName == juz) {
   if (juzList[juz] == "True") {
    juzList[juz] = "False";
   } else {
    juzList[juz] = "True";
   }
  }
 }
}

//======================== Surah

function displaySurah() {
 let text = "";
 for (let surah in surahList) {
  if (surahList[surah] == "True") {
   text += surah + '  ' +
    '<input checked onchange="checkSurah(\'' + surah.replace("'", "\\'") + '\')" type="checkbox"></input>' +
    '<br>';
  } else {
   text += surah + '  ' +
    '<input onchange="checkSurah(\'' + surah.replace("'", "\\'") + '\')" type="checkbox"></input>' +
    '<br>';
  }
 }
 document.getElementById("datalist").innerHTML = text;
}

function checkSurah(surahName) {
 for (let surah in surahList) {
  if (surahName == surah) {
   if (surahList[surah] == "True") {
    surahList[surah] = "False";
   } else {
    surahList[surah] = "True";
   }
  }
 }
}

//=========================== Maqra

function displayMaqra() {
 let text = "";
 for (let maqra in maqraList) {
  if (maqraList[maqra] == "True") {
   text += maqra + '  ' +
    '<input checked onchange="checkMaqra(\'' + maqra.replace("'", "\\'") + '\')" type="checkbox"></input>' +
    '<br>';
  } else {
   text += maqra + '  ' +
    '<input onchange="checkMaqra(\'' + maqra.replace("'", "\\'") + '\')" type="checkbox"></input>' +
    '<br>';
  }
 }
 document.getElementById("datalist").innerHTML = text;
}

function checkMaqra(maqraName) {
 for (let maqra in maqraList) {
  if (maqraName == maqra) {
   if (maqraList[maqra] == "True") {
    maqraList[maqra] = "False";
   } else {
    maqraList[maqra] = "True";
   }
  }
 }
}

//=========================== Page

function displayPage() {
 let text = "";
 for (let page in pageList) {
  if (pageList[page] == "True") {
   text += page + '  ' +
    '<input checked onchange="checkPage(\'' + page.replace("'", "\\'") + '\')" type="checkbox"></input>' +
    '<br>';
  } else {
   text += page + '  ' +
    '<input onchange="checkPage(\'' + page.replace("'", "\\'") + '\')" type="checkbox"></input>' +
    '<br>';
  }
 }
 document.getElementById("datalist").innerHTML = text;
}

function checkPage(pageName) {
 for (let page in pageList) {
  if (pageName == page) {
   if (pageList[page] == "True") {
    pageList[page] = "False";
   } else {
    pageList[page] = "True";
   }
  }
 }
}

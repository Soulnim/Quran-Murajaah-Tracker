let juzList = {
  "Juzu\' 1": 0, "Juzu\' 2": 0, "Juzu\' 3": 0, "Juzu\' 4": 0, "Juzu\' 5": 0, "Juzu\' 6": 0, "Juzu\' 7": 0, "Juzu\' 8": 0, "Juzu\' 9": 0, "Juzu\' 10": 0, "Juzu\' 11": 0, "Juzu\' 12": 0, "Juzu\' 13": 0, "Juzu\' 14": 0, "Juzu\' 15": 0, "Juzu\' 16": 0,
  "Juzu\' 17": 0, "Juzu\' 18": 0, "Juzu\' 19": 0, "Juzu\' 20": 0, "Juzu\' 21": 0, "Juzu\' 22": 0, "Juzu\' 23": 0, "Juzu\' 24": 0,
  "Juzu\' 25": 0, "Juzu\' 26": 0, "Juzu\' 27": 0, "Juzu\' 28": 0, "Juzu\' 29": 0, "Juzu\' 30": 0
}
let surahList = {
  "Surah Al-Fatihah": 0, "Surah Al-Baqarah": 0, "Surah Ali Imran": 0, "Surah An-Nisaa\'": 0, "Surah Al-Ma\'idah": 0,
  "Surah Al-An\'am": 0, "Surah Al-A\'raaf": 0, "Surah Al-Anfal": 0, "Surah At-Taubah": 0, "Surah Yunus": 0,
  "Surah Hud": 0, "Surah Yusuf": 0, "Surah Ar-Ra\'d": 0, "Surah Ibrahim": 0, "Surah Al-Hijr": 0,
  "Surah An-Nahl": 0, "Surah Al-Isra\'": 0, "Surah Al-Kahf": 0, "Surah Maryam": 0, "Surah Ta-Ha": 0,
  "Surah Al-Anbiya\'": 0, "Surah Al-Mu\'minun": 0, "Surah An-Nur": 0, "Surah Al-Furqan": 0, "Surah Ash-Shuara\'": 0,
  "Surah An-Naml": 0, "Surah Al-Qasas": 0, "Surah Al-\'Ankabut": 0, "Surah Ar-Rum": 0, "Surah Luqman": 0,
  "Surah As-Sajdah": 0, "Surah Al-Ahzab": 0, "Surah Saba\'": 0, "Surah Fatir": 0, "Surah Ya-Sin": 0,
  "Surah As-Saffat": 0, "Surah Sad": 0, "Surah Az-Zumar": 0, "Surah Ghafir": 0, "Surah Fussilat": 0,
  "Surah Ash-Shura": 0, "Surah Az-Zukhruf": 0, "Surah Ad-Dukhan": 0, "Surah A'-Jathiyah": 0, "Surah Al-Ahqaf": 0,
  "Surah Muhammad": 0, "Surah Al-Fath": 0, "Surah Al-Hujurat": 0, "Surah Qaf": 0, "Surah Adh-Dhariyat": 0,
  "Surah At-Tur": 0, "Surah An-Najm": 0, "Surah Al-Qamar": 0, "Surah Ar-Rahman": 0, "Surah Al-Waqi\'ah": 0,
  "Surah Al-Hadid": 0, "Surah Mujadilah": 0, "Surah Al-Hashr": 0, "Surah Al-Mumtahanah": 0, "Surah As-Saff": 0,
  "Surah Al-Jumu\'ah": 0, "Surah Al-Munafiqun": 0, "Surah At-Taghabun": 0, "Surah At-Talaq": 0, "Surah At-Tahrim": 0,
  "Surah Al-Mulk": 0, "Surah Al-Qalam": 0, "Surah Haqqah": 0, "Surah Ma\'arij": 0, "Surah Nuh": 0,
  "Surah Al-Jinn": 0, "Surah Al-Muzzammil": 0, "Surah Al-Muddaththir": 0, "Surah Al-Qiyamah": 0, "Surah Al-Insan": 0,
  "Surah Al-Mursalat": 0, "Surah An-Naba\'": 0, "Surah An-Nazi\'at": 0, "Surah \'Abasa": 0, "Surah At-Takwir": 0,
  "Surah Al-Infitar": 0, "Surah Al-Mutaffifin": 0, "Surah Al-Inshiqaq": 0, "Surah Al-Buruj": 0, "Surah At-Tariq": 0,
  "Surah Al-A\'la": 0, "Surah Al-Ghashiyah": 0, "Surah Al-Fajr": 0, "Surah Al-Balad": 0, "Surah Ash-Shams": 0,
  "Surah Al-Layl": 0, "Surah Ad-Duha": 0, "Surah Ash-Sharh": 0, "Surah At-Tin": 0, "Surah Al-\'Alaq": 0,
  "Surah Al-Qadr": 0, "Surah Al-Bayyinah": 0, "Surah Az-Zalzalah": 0, "Surah Al-\'Adiyat": 0, "Surah Al-Qari\'ah": 0,
  "Surah At-Takathur": 0, "Surah Al-\'Asr": 0, "Surah Al-Humazah": 0, "Surah Al-Fil": 0, "Surah Al-Quraisy": 0,
  "Surah Al-Ma\'un": 0, "Surah Al-Kauthar": 0, "Surah Al-Kafirun": 0, "Surah An-Nasr": 0, "Surah Al-Masad": 0,
  "Surah Al-Ikhlas": 0, "Surah Al-Falaq": 0, "Surah Al-Nas": 0
}
let maqraList = {
  "Maqra\' 1": 0, "Maqra\' 2": 0, "Maqra\' 3": 0, "Maqra\' 4": 0, "Maqra\' 5": 0, "Maqra\' 6": 0, "Maqra\' 7": 0,
  "Maqra\' 8": 0, "Maqra\' 9": 0, "Maqra\' 10": 0, "Maqra\' 11": 0, "Maqra\' 12": 0, "Maqra\' 13": 0, "Maqra\' 14": 0,
  "Maqra\' 15": 0, "Maqra\' 16": 0, "Maqra\' 17": 0, "Maqra\' 18": 0, "Maqra\' 19": 0, "Maqra\' 20": 0, "Maqra\' 21": 0,
  "Maqra\' 22": 0, "Maqra\' 23": 0, "Maqra\' 24": 0, "Maqra\' 25": 0, "Maqra\' 26": 0, "Maqra\' 27": 0, "Maqra\' 28": 0,
  "Maqra\' 29": 0, "Maqra\' 30": 0, "Maqra\' 31": 0, "Maqra\' 32": 0, "Maqra\' 33": 0, "Maqra\' 34": 0, "Maqra\' 35": 0,
  "Maqra\' 36": 0, "Maqra\' 37": 0, "Maqra\' 38": 0, "Maqra\' 39": 0, "Maqra\' 40": 0, "Maqra\' 41": 0, "Maqra\' 42": 0,
  "Maqra\' 43": 0, "Maqra\' 44": 0, "Maqra\' 45": 0, "Maqra\' 46": 0, "Maqra\' 47": 0, "Maqra\' 48": 0, "Maqra\' 49": 0,
  "Maqra\' 50": 0, "Maqra\' 51": 0, "Maqra\' 52": 0, "Maqra\' 53": 0, "Maqra\' 54": 0, "Maqra\' 55": 0, "Maqra\' 56": 0,
  "Maqra\' 57": 0, "Maqra\' 58": 0, "Maqra\' 59": 0, "Maqra\' 60": 0, "Maqra\' 61": 0, "Maqra\' 62": 0, "Maqra\' 63": 0,
  "Maqra\' 64": 0, "Maqra\' 65": 0, "Maqra\' 66": 0, "Maqra\' 67": 0, "Maqra\' 68": 0, "Maqra\' 69": 0, "Maqra\' 70": 0,
  "Maqra\' 71": 0, "Maqra\' 72": 0, "Maqra\' 73": 0, "Maqra\' 74": 0, "Maqra\' 75": 0, "Maqra\' 76": 0, "Maqra\' 77": 0,
  "Maqra\' 78": 0, "Maqra\' 79": 0, "Maqra\' 80": 0, "Maqra\' 81": 0, "Maqra\' 82": 0, "Maqra\' 83": 0, "Maqra\' 84": 0,
  "Maqra\' 85": 0, "Maqra\' 86": 0, "Maqra\' 87": 0, "Maqra\' 88": 0, "Maqra\' 89": 0, "Maqra\' 90": 0, "Maqra\' 91": 0,
  "Maqra\' 92": 0, "Maqra\' 93": 0, "Maqra\' 94": 0, "Maqra\' 95": 0, "Maqra\' 96": 0, "Maqra\' 97": 0, "Maqra\' 98": 0,
  "Maqra\' 99": 0, "Maqra\' 100": 0, "Maqra\' 101": 0, "Maqra\' 102": 0, "Maqra\' 103": 0, "Maqra\' 104": 0, "Maqra\' 105": 0,
  "Maqra\' 106": 0, "Maqra\' 107": 0, "Maqra\' 108": 0, "Maqra\' 109": 0, "Maqra\' 110": 0, "Maqra\' 111": 0, "Maqra\' 112": 0,
  "Maqra\' 113": 0, "Maqra\' 114": 0, "Maqra\' 115": 0, "Maqra\' 116": 0, "Maqra\' 117": 0, "Maqra\' 118": 0, "Maqra\' 119": 0,
  "Maqra\' 120": 0, "Maqra\' 121": 0, "Maqra\' 122": 0, "Maqra\' 123": 0, "Maqra\' 124": 0, "Maqra\' 125": 0, "Maqra\' 126": 0,
  "Maqra\' 127": 0, "Maqra\' 128": 0, "Maqra\' 129": 0, "Maqra\' 130": 0, "Maqra\' 131": 0, "Maqra\' 132": 0, "Maqra\' 133": 0,
  "Maqra\' 134": 0, "Maqra\' 135": 0, "Maqra\' 136": 0, "Maqra\' 137": 0, "Maqra\' 138": 0, "Maqra\' 139": 0, "Maqra\' 140": 0,
  "Maqra\' 141": 0, "Maqra\' 142": 0, "Maqra\' 143": 0, "Maqra\' 144": 0, "Maqra\' 145": 0, "Maqra\' 146": 0, "Maqra\' 147": 0,
  "Maqra\' 148": 0, "Maqra\' 149": 0, "Maqra\' 150": 0, "Maqra\' 151": 0, "Maqra\' 152": 0, "Maqra\' 153": 0, "Maqra\' 154": 0,
  "Maqra\' 155": 0, "Maqra\' 156": 0, "Maqra\' 157": 0, "Maqra\' 158": 0, "Maqra\' 159": 0, "Maqra\' 160": 0, "Maqra\' 161": 0,
  "Maqra\' 162": 0, "Maqra\' 163": 0, "Maqra\' 164": 0, "Maqra\' 165": 0, "Maqra\' 166": 0, "Maqra\' 167": 0, "Maqra\' 168": 0,
  "Maqra\' 169": 0, "Maqra\' 170": 0, "Maqra\' 171": 0, "Maqra\' 172": 0, "Maqra\' 173": 0, "Maqra\' 174": 0, "Maqra\' 175": 0,
  "Maqra\' 176": 0, "Maqra\' 177": 0, "Maqra\' 178": 0, "Maqra\' 179": 0, "Maqra\' 180": 0, "Maqra\' 181": 0, "Maqra\' 182": 0,
  "Maqra\' 183": 0, "Maqra\' 184": 0, "Maqra\' 185": 0, "Maqra\' 186": 0, "Maqra\' 187": 0, "Maqra\' 188": 0, "Maqra\' 189": 0,
  "Maqra\' 190": 0, "Maqra\' 191": 0, "Maqra\' 192": 0, "Maqra\' 193": 0, "Maqra\' 194": 0, "Maqra\' 195": 0, "Maqra\' 196": 0,
  "Maqra\' 197": 0, "Maqra\' 198": 0, "Maqra\' 199": 0, "Maqra\' 200": 0, "Maqra\' 201": 0, "Maqra\' 202": 0, "Maqra\' 203": 0,
  "Maqra\' 204": 0, "Maqra\' 205": 0, "Maqra\' 206": 0, "Maqra\' 207": 0, "Maqra\' 208": 0, "Maqra\' 209": 0, "Maqra\' 210": 0,
  "Maqra\' 211": 0, "Maqra\' 212": 0, "Maqra\' 213": 0, "Maqra\' 214": 0, "Maqra\' 215": 0, "Maqra\' 216": 0, "Maqra\' 217": 0,
  "Maqra\' 218": 0, "Maqra\' 219": 0, "Maqra\' 220": 0, "Maqra\' 221": 0, "Maqra\' 222": 0, "Maqra\' 223": 0, "Maqra\' 224": 0,
  "Maqra\' 225": 0, "Maqra\' 226": 0, "Maqra\' 227": 0, "Maqra\' 228": 0, "Maqra\' 229": 0, "Maqra\' 230": 0, "Maqra\' 231": 0,
  "Maqra\' 232": 0, "Maqra\' 233": 0, "Maqra\' 234": 0, "Maqra\' 235": 0, "Maqra\' 236": 0, "Maqra\' 237": 0, "Maqra\' 238": 0,
  "Maqra\' 239": 0, "Maqra\' 240": 0
}
let pageList = {
  "Page 1": 0, "Page 2": 0, "Page 3": 0, "Page 4": 0, "Page 5": 0, "Page 6": 0, "Page 7": 0, "Page 8": 0,
  "Page 9": 0, "Page 10": 0, "Page 11": 0, "Page 12": 0, "Page 13": 0, "Page 14": 0, "Page 15": 0, "Page 16": 0,
  "Page 17": 0, "Page 18": 0, "Page 19": 0, "Page 20": 0, "Page 21": 0, "Page 22": 0, "Page 23": 0, "Page 24": 0,
  "Page 25": 0, "Page 26": 0, "Page 27": 0, "Page 28": 0, "Page 29": 0, "Page 30": 0, "Page 31": 0, "Page 32": 0,
  "Page 33": 0, "Page 34": 0, "Page 35": 0, "Page 36": 0, "Page 37": 0, "Page 38": 0, "Page 39": 0, "Page 40": 0,
  "Page 41": 0, "Page 42": 0, "Page 43": 0, "Page 44": 0, "Page 45": 0, "Page 46": 0, "Page 47": 0, "Page 48": 0,
  "Page 49": 0, "Page 50": 0, "Page 51": 0, "Page 52": 0, "Page 53": 0, "Page 54": 0, "Page 55": 0, "Page 56": 0,
  "Page 57": 0, "Page 58": 0, "Page 59": 0, "Page 60": 0, "Page 61": 0, "Page 62": 0, "Page 63": 0, "Page 64": 0,
  "Page 65": 0, "Page 66": 0, "Page 67": 0, "Page 68": 0, "Page 69": 0, "Page 70": 0, "Page 71": 0, "Page 72": 0,
  "Page 73": 0, "Page 74": 0, "Page 75": 0, "Page 76": 0, "Page 77": 0, "Page 78": 0, "Page 79": 0, "Page 80": 0,
  "Page 81": 0, "Page 82": 0, "Page 83": 0, "Page 84": 0, "Page 85": 0, "Page 86": 0, "Page 87": 0, "Page 88": 0,
  "Page 89": 0, "Page 90": 0, "Page 91": 0, "Page 92": 0, "Page 93": 0, "Page 94": 0, "Page 95": 0, "Page 96": 0,
  "Page 97": 0, "Page 98": 0, "Page 99": 0, "Page 100": 0, "Page 101": 0, "Page 102": 0, "Page 103": 0, "Page 104": 0,
  "Page 105": 0, "Page 106": 0, "Page 107": 0, "Page 108": 0, "Page 109": 0, "Page 110": 0, "Page 111": 0, "Page 112": 0,
  "Page 113": 0, "Page 114": 0, "Page 115": 0, "Page 116": 0, "Page 117": 0, "Page 118": 0, "Page 119": 0, "Page 120": 0,
  "Page 121": 0, "Page 122": 0, "Page 123": 0, "Page 124": 0, "Page 125": 0, "Page 126": 0, "Page 127": 0, "Page 128": 0,
  "Page 129": 0, "Page 130": 0, "Page 131": 0, "Page 132": 0, "Page 133": 0, "Page 134": 0, "Page 135": 0, "Page 136": 0,
  "Page 137": 0, "Page 138": 0, "Page 139": 0, "Page 140": 0, "Page 141": 0, "Page 142": 0, "Page 143": 0, "Page 144": 0,
  "Page 145": 0, "Page 146": 0, "Page 147": 0, "Page 148": 0, "Page 149": 0, "Page 150": 0, "Page 151": 0, "Page 152": 0,
  "Page 153": 0, "Page 154": 0, "Page 155": 0, "Page 156": 0, "Page 157": 0, "Page 158": 0, "Page 159": 0, "Page 160": 0,
  "Page 161": 0, "Page 162": 0, "Page 163": 0, "Page 164": 0, "Page 165": 0, "Page 166": 0, "Page 167": 0, "Page 168": 0,
  "Page 169": 0, "Page 170": 0, "Page 171": 0, "Page 172": 0, "Page 173": 0, "Page 174": 0, "Page 175": 0, "Page 176": 0,
  "Page 177": 0, "Page 178": 0, "Page 179": 0, "Page 180": 0, "Page 181": 0, "Page 182": 0, "Page 183": 0, "Page 184": 0,
  "Page 185": 0, "Page 186": 0, "Page 187": 0, "Page 188": 0, "Page 189": 0, "Page 190": 0, "Page 191": 0, "Page 192": 0,
  "Page 193": 0, "Page 194": 0, "Page 195": 0, "Page 196": 0, "Page 197": 0, "Page 198": 0, "Page 199": 0, "Page 200": 0,
  "Page 201": 0, "Page 202": 0, "Page 203": 0, "Page 204": 0, "Page 205": 0, "Page 206": 0, "Page 207": 0, "Page 208": 0,
  "Page 209": 0, "Page 210": 0, "Page 211": 0, "Page 212": 0, "Page 213": 0, "Page 214": 0, "Page 215": 0, "Page 216": 0,
  "Page 217": 0, "Page 218": 0, "Page 219": 0, "Page 220": 0, "Page 221": 0, "Page 222": 0, "Page 223": 0, "Page 224": 0,
  "Page 225": 0, "Page 226": 0, "Page 227": 0, "Page 228": 0, "Page 229": 0, "Page 230": 0, "Page 231": 0, "Page 232": 0,
  "Page 233": 0, "Page 234": 0, "Page 235": 0, "Page 236": 0, "Page 237": 0, "Page 238": 0, "Page 239": 0, "Page 240": 0,
  "Page 241": 0, "Page 242": 0, "Page 243": 0, "Page 244": 0, "Page 245": 0, "Page 246": 0, "Page 247": 0, "Page 248": 0,
  "Page 249": 0, "Page 250": 0, "Page 251": 0, "Page 252": 0, "Page 253": 0, "Page 254": 0, "Page 255": 0, "Page 256": 0,
  "Page 257": 0, "Page 258": 0, "Page 259": 0, "Page 260": 0, "Page 261": 0, "Page 262": 0, "Page 263": 0, "Page 264": 0,
  "Page 265": 0, "Page 266": 0, "Page 267": 0, "Page 268": 0, "Page 269": 0, "Page 270": 0, "Page 271": 0, "Page 272": 0,
  "Page 273": 0, "Page 274": 0, "Page 275": 0, "Page 276": 0, "Page 277": 0, "Page 278": 0, "Page 279": 0, "Page 280": 0,
  "Page 281": 0, "Page 282": 0, "Page 283": 0, "Page 284": 0, "Page 285": 0, "Page 286": 0, "Page 287": 0, "Page 288": 0,
  "Page 289": 0, "Page 290": 0, "Page 291": 0, "Page 292": 0, "Page 293": 0, "Page 294": 0, "Page 295": 0, "Page 296": 0,
  "Page 297": 0, "Page 298": 0, "Page 299": 0, "Page 300": 0, "Page 301": 0, "Page 302": 0, "Page 303": 0, "Page 304": 0,
  "Page 305": 0, "Page 306": 0, "Page 307": 0, "Page 308": 0, "Page 309": 0, "Page 310": 0, "Page 311": 0, "Page 312": 0,
  "Page 313": 0, "Page 314": 0, "Page 315": 0, "Page 316": 0, "Page 317": 0, "Page 318": 0, "Page 319": 0, "Page 320": 0,
  "Page 321": 0, "Page 322": 0, "Page 323": 0, "Page 324": 0, "Page 325": 0, "Page 326": 0, "Page 327": 0, "Page 328": 0,
  "Page 329": 0, "Page 330": 0, "Page 331": 0, "Page 332": 0, "Page 333": 0, "Page 334": 0, "Page 335": 0, "Page 336": 0,
  "Page 337": 0, "Page 338": 0, "Page 339": 0, "Page 340": 0, "Page 341": 0, "Page 342": 0, "Page 343": 0, "Page 344": 0,
  "Page 345": 0, "Page 346": 0, "Page 347": 0, "Page 348": 0, "Page 349": 0, "Page 350": 0, "Page 351": 0, "Page 352": 0,
  "Page 353": 0, "Page 354": 0, "Page 355": 0, "Page 356": 0, "Page 357": 0, "Page 358": 0, "Page 359": 0, "Page 360": 0,
  "Page 361": 0, "Page 362": 0, "Page 363": 0, "Page 364": 0, "Page 365": 0, "Page 366": 0, "Page 367": 0, "Page 368": 0,
  "Page 369": 0, "Page 370": 0, "Page 371": 0, "Page 372": 0, "Page 373": 0, "Page 374": 0, "Page 375": 0, "Page 376": 0,
  "Page 377": 0, "Page 378": 0, "Page 379": 0, "Page 380": 0, "Page 381": 0, "Page 382": 0, "Page 383": 0, "Page 384": 0,
  "Page 385": 0, "Page 386": 0, "Page 387": 0, "Page 388": 0, "Page 389": 0, "Page 390": 0, "Page 391": 0, "Page 392": 0,
  "Page 393": 0, "Page 394": 0, "Page 395": 0, "Page 396": 0, "Page 397": 0, "Page 398": 0, "Page 399": 0, "Page 400": 0,
  "Page 401": 0, "Page 402": 0, "Page 403": 0, "Page 404": 0, "Page 405": 0, "Page 406": 0, "Page 407": 0, "Page 408": 0,
  "Page 409": 0, "Page 410": 0, "Page 411": 0, "Page 412": 0, "Page 413": 0, "Page 414": 0, "Page 415": 0, "Page 416": 0,
  "Page 417": 0, "Page 418": 0, "Page 419": 0, "Page 420": 0, "Page 421": 0, "Page 422": 0, "Page 423": 0, "Page 424": 0,
  "Page 425": 0, "Page 426": 0, "Page 427": 0, "Page 428": 0, "Page 429": 0, "Page 430": 0, "Page 431": 0, "Page 432": 0,
  "Page 433": 0, "Page 434": 0, "Page 435": 0, "Page 436": 0, "Page 437": 0, "Page 438": 0, "Page 439": 0, "Page 440": 0,
  "Page 441": 0, "Page 442": 0, "Page 443": 0, "Page 444": 0, "Page 445": 0, "Page 446": 0, "Page 447": 0, "Page 448": 0,
  "Page 449": 0, "Page 450": 0, "Page 451": 0, "Page 452": 0, "Page 453": 0, "Page 454": 0, "Page 455": 0, "Page 456": 0,
  "Page 457": 0, "Page 458": 0, "Page 459": 0, "Page 460": 0, "Page 461": 0, "Page 462": 0, "Page 463": 0, "Page 464": 0,
  "Page 465": 0, "Page 466": 0, "Page 467": 0, "Page 468": 0, "Page 469": 0, "Page 470": 0, "Page 471": 0, "Page 472": 0,
  "Page 473": 0, "Page 474": 0, "Page 475": 0, "Page 476": 0, "Page 477": 0, "Page 478": 0, "Page 479": 0, "Page 480": 0,
  "Page 481": 0, "Page 482": 0, "Page 483": 0, "Page 484": 0, "Page 485": 0, "Page 486": 0, "Page 487": 0, "Page 488": 0,
  "Page 489": 0, "Page 490": 0, "Page 491": 0, "Page 492": 0, "Page 493": 0, "Page 494": 0, "Page 495": 0, "Page 496": 0,
  "Page 497": 0, "Page 498": 0, "Page 499": 0, "Page 500": 0, "Page 501": 0, "Page 502": 0, "Page 503": 0, "Page 504": 0,
  "Page 505": 0, "Page 506": 0, "Page 507": 0, "Page 508": 0, "Page 509": 0, "Page 510": 0, "Page 511": 0, "Page 512": 0,
  "Page 513": 0, "Page 514": 0, "Page 515": 0, "Page 516": 0, "Page 517": 0, "Page 518": 0, "Page 519": 0, "Page 520": 0,
  "Page 521": 0, "Page 522": 0, "Page 523": 0, "Page 524": 0, "Page 525": 0, "Page 526": 0, "Page 527": 0, "Page 528": 0,
  "Page 529": 0, "Page 530": 0, "Page 531": 0, "Page 532": 0, "Page 533": 0, "Page 534": 0, "Page 535": 0, "Page 536": 0,
  "Page 537": 0, "Page 538": 0, "Page 539": 0, "Page 540": 0, "Page 541": 0, "Page 542": 0, "Page 543": 0, "Page 544": 0,
  "Page 545": 0, "Page 546": 0, "Page 547": 0, "Page 548": 0, "Page 549": 0, "Page 550": 0, "Page 551": 0, "Page 552": 0,
  "Page 553": 0, "Page 554": 0, "Page 555": 0, "Page 556": 0, "Page 557": 0, "Page 558": 0, "Page 559": 0, "Page 560": 0,
  "Page 561": 0, "Page 562": 0, "Page 563": 0, "Page 564": 0, "Page 565": 0, "Page 566": 0, "Page 567": 0, "Page 568": 0,
  "Page 569": 0, "Page 570": 0, "Page 571": 0, "Page 572": 0, "Page 573": 0, "Page 574": 0, "Page 575": 0, "Page 576": 0,
  "Page 577": 0, "Page 578": 0, "Page 579": 0, "Page 580": 0, "Page 581": 0, "Page 582": 0, "Page 583": 0, "Page 584": 0,
  "Page 585": 0, "Page 586": 0, "Page 587": 0, "Page 588": 0, "Page 589": 0, "Page 590": 0, "Page 591": 0, "Page 592": 0,
  "Page 593": 0, "Page 594": 0, "Page 595": 0, "Page 596": 0, "Page 597": 0, "Page 598": 0, "Page 599": 0, "Page 600": 0,
  "Page 601": 0, "Page 602": 0, "Page 603": 0, "Page 604": 0
}
//======================== Other attribute
let isListView = true;
let isDisplayJuz = true;
let isDisplaySurah = false;
let isDisplayMaqra = false;
let isDisplayPage = false;
let displayDefault = true;
let isLoaded = false;

//======================== Juzu'

function displayJuzu() {
  let text = "";
  if (isListView) {
    text = "<ul class=\"list-group\">";
    for (let juz in juzList) {
      if (juzList[juz] == 1) {
        text += "<li class=\"list-group-item list-group-item-success\">" + '  ' +
          '<button class=\"select-button\" checked onclick="checkJuz(\'' + juz.replace("'", "\\'") + '\')">' + juz + '</button></li>';
      } else {
        text += "<li class=\"list-group-item list-group-item-secondary\">" + '  ' +
          '<button class=\"select-button\" onclick="checkJuz(\'' + juz.replace("'", "\\'") + '\')">' + juz + '</button></li>';
      }
    }
    text += "</ul>";
  }
  else {
    text += "<div class=\"container\"><div class=\"row\">";
    counter = 1;
    for (let juz in juzList) {
      if (counter % 4 != 0) {
        if (juzList[juz] == 1) {
          text += "<div class=\"col rounded bg-success\">" + '  ' +
            '<button class=\"select-button text-white\" checked onclick="checkJuz(\'' + juz.replace("'", "\\'") + '\')">' + juz + '</button>' + "</div >";
        }
        else {
          text += "<div class=\"col rounded bg-light\">" + '  ' +
            '<button class=\"select-button\" onclick="checkJuz(\'' + juz.replace("'", "\\'") + '\')">' + juz + '</button>' + "</div >";
        }

      }
      else {
        if (juzList[juz] == 1) {
          text += "<div class=\"col rounded bg-success\">" + '  ' +
            '<button class=\"select-button text-white\" checked onclick="checkJuz(\'' + juz.replace("'", "\\'") + '\')">' + juz + '</button>' + "</div ></div >" +
            "<div class=\"row\">";
        }
        else {
          text += "<div class=\"col rounded bg-light\">" + '  ' +
            '<button class=\"select-button\" onclick="checkJuz(\'' + juz.replace("'", "\\'") + '\')">' + juz + '</button>' + "</div ></div >" +
            "<div class=\"row\">";
        }
      }
      counter++;
    }
  }
  text += "</div></div >";
  document.getElementById("datalist").innerHTML = text;
  isDisplayJuz = true;
  isDisplaySurah = false;
  isDisplayMaqra = false;
  isDisplayPage = false;
}

function checkJuz(juzName) {
  for (let juz in juzList) {
    if (juzName == juz) {
      if (juzList[juz] == 1) {
        juzList[juz] = 0;
      } else {
        juzList[juz] = 1;
      }
    }
  }
  saveJuzData();
  displayJuzu();
}

//======================== Surah

function displaySurah() {
  let text = "";
  if (isListView) {
    text = "<ul class=\"list-group\">";
    for (let surah in surahList) {
      if (surahList[surah] == 1) {
        text += "<li class=\"list-group-item list-group-item-success\">" + '  ' +
          '<button class=\"select-button\" checked onclick="checkSurah(\'' + surah.replace("'", "\\'") + '\')">' + surah + '</button></li>';
      } else {
        text += "<li class=\"list-group-item list-group-item-secondary\">" + '  ' +
          '<button class=\"select-button\" onclick="checkSurah(\'' + surah.replace("'", "\\'") + '\')">' + surah + '</button></li>';
      }
    }
    text += "</ul>";
  }
  else {
    text += "<div class=\"container\"><div class=\"row\">";
    counter = 1;
    for (let surah in surahList) {
      if (counter % 4 != 0) {
        if (surahList[surah] == 1) {
          text += "<div class=\"col rounded bg-success\">" + '  ' +
            '<button class=\"select-button text-white\" checked onclick="checkSurah(\'' + surah.replace("'", "\\'") + '\')">' + surah + '</button>' + "</div >";
        }
        else {
          text += "<div class=\"col rounded bg-light\">" + '  ' +
            '<button class=\"select-button\" onclick="checkSurah(\'' + surah.replace("'", "\\'") + '\')">' + surah + '</button>' + "</div >";
        }

      }
      else {
        if (surahList[surah] == 1) {
          text += "<div class=\"col rounded bg-success\">" + '  ' +
            '<button class=\"select-button text-white\" checked onclick="checkSurah(\'' + surah.replace("'", "\\'") + '\')">' + surah + '</button>' + "</div ></div >" +
            "<div class=\"row\">";
        }
        else {
          text += "<div class=\"col rounded bg-light\">" + '  ' +
            '<button class=\"select-button\" onclick="checkSurah(\'' + surah.replace("'", "\\'") + '\')">' + surah + '</button>' + "</div ></div >" +
            "<div class=\"row\">";
        }
      }
      counter++;
    }
  }
  text += "</div></div >";
  document.getElementById("datalist").innerHTML = text;
  isDisplayJuz = false;
  isDisplaySurah = true;
  isDisplayMaqra = false;
  isDisplayPage = false;
}

function checkSurah(surahName) {
  for (let surah in surahList) {
    if (surahName == surah) {
      if (surahList[surah] == 1) {
        surahList[surah] = 0;
      } else {
        surahList[surah] = 1;
      }
    }
  }
  saveSurahData();
  displaySurah();
}

//=========================== Maqra

function displayMaqra() {
  let text = "";
  if (isListView) {
    text = "<ul class=\"list-group\">";
    for (let maqra in maqraList) {
      if (maqraList[maqra] == 1) {
        text += "<li class=\"list-group-item list-group-item-success\">" + '  ' +
          '<button class=\"select-button\" checked onclick="checkMaqra(\'' + maqra.replace("'", "\\'") + '\')">' + maqra + '</button></li>';
      } else {
        text += "<li class=\"list-group-item list-group-item-secondary\">" + '  ' +
          '<button class=\"select-button\" onclick="checkMaqra(\'' + maqra.replace("'", "\\'") + '\')">' + maqra + '</button></li>';
      }
    }
    text += "</ul>";
  }
  else {
    text += "<div class=\"container\"><div class=\"row\">";
    counter = 1;
    for (let maqra in maqraList) {
      if (counter % 4 != 0) {
        if (maqraList[maqra] == 1) {
          text += "<div class=\"col rounded bg-success\">" + '  ' +
            '<button class=\"select-button text-white\" checked onclick="checkMaqra(\'' + maqra.replace("'", "\\'") + '\')">' + maqra + '</button>' + "</div >";
        }
        else {
          text += "<div class=\"col rounded bg-light\">" + '  ' +
            '<button class=\"select-button\" onclick="checkMaqra(\'' + maqra.replace("'", "\\'") + '\')">' + maqra + '</button>' + "</div >";
        }

      }
      else {
        if (maqraList[maqra] == 1) {
          text += "<div class=\"col rounded bg-success\">" + '  ' +
            '<button class=\"select-button text-white\" checked onclick="checkMaqra(\'' + maqra.replace("'", "\\'") + '\')">' + maqra + '</button>' + "</div ></div >" +
            "<div class=\"row\">";
        }
        else {
          text += "<div class=\"col rounded bg-light\">" + '  ' +
            '<button class=\"select-button\" onclick="checkMaqra(\'' + maqra.replace("'", "\\'") + '\')">' + maqra + '</button>' + "</div ></div >" +
            "<div class=\"row\">";
        }
      }
      counter++;
    }
  }
  text += "</div></div >";
  document.getElementById("datalist").innerHTML = text;
  isDisplayJuz = false;
  isDisplaySurah = false;
  isDisplayMaqra = true;
  isDisplayPage = false;
}

function checkMaqra(maqraName) {
  for (let maqra in maqraList) {
    if (maqraName == maqra) {
      if (maqraList[maqra] == 1) {
        maqraList[maqra] = 0;
      } else {
        maqraList[maqra] = 1;
      }
    }
  }
  saveMaqraData();
  displayMaqra();
}

//=========================== Page

function displayPage() {
  let text = "";
  if (isListView) {
    text = "<ul class=\"list-group\">";
    for (let page in pageList) {
      if (pageList[page] == 1) {
        text += "<li class=\"list-group-item list-group-item-success\">" + '  ' +
          '<button class=\"select-button\" checked onclick="checkPage(\'' + page.replace("'", "\\'") + '\')">' + page + '</button></li>';
      } else {
        text += "<li class=\"list-group-item list-group-item-secondary\">" + '  ' +
          '<button class=\"select-button\" onclick="checkPage(\'' + page.replace("'", "\\'") + '\')">' + page + '</button></li>';
      }
    }
    text += "</ul>";
  }
  else {
    text += "<div class=\"container\"><div class=\"row\">";
    counter = 1;
    for (let page in pageList) {
      if (counter % 4 != 0) {
        if (pageList[page] == 1) {
          text += "<div class=\"col rounded bg-success\">" + '  ' +
            '<button class=\"select-button text-white\" checked onclick="checkPage(\'' + page.replace("'", "\\'") + '\')">' + page + '</button>' + "</div >";
        }
        else {
          text += "<div class=\"col rounded bg-light\">" + '  ' +
            '<button class=\"select-button\" onclick="checkPage(\'' + page.replace("'", "\\'") + '\')">' + page + '</button>' + "</div >";
        }

      }
      else {
        if (pageList[page] == 1) {
          text += "<div class=\"col rounded bg-success\">" + '  ' +
            '<button class=\"select-button text-white\" checked onclick="checkPage(\'' + page.replace("'", "\\'") + '\')">' + page + '</button>' + "</div ></div >" +
            "<div class=\"row\">";
        }
        else {
          text += "<div class=\"col rounded bg-light\">" + '  ' +
            '<button class=\"select-button\" onclick="checkPage(\'' + page.replace("'", "\\'") + '\')">' + page + '</button>' + "</div ></div >" +
            "<div class=\"row\">";
        }
      }
      counter++;
    }
  }
  text += "</div></div >";
  document.getElementById("datalist").innerHTML = text;
  isDisplayJuz = false;
  isDisplaySurah = false;
  isDisplayMaqra = false;
  isDisplayPage = true;
}

function checkPage(pageName) {
  for (let page in pageList) {
    if (pageName == page) {
      if (pageList[page] == 1) {
        pageList[page] = 0;
      } else {
        pageList[page] = 1;
      }
    }
  }
  savePageData();
  displayPage();
}

//=========================== Others
function changeView() {
  if (isListView) {
    isListView = false;
    document.getElementById("gridview2").innerHTML = "<i class=\"fa fa-th\"></i>";
  } else {
    isListView = true;
    document.getElementById("gridview2").innerHTML = "<i class=\"fa fa-list\"></i>";
  }
  if (isDisplayJuz) {
    displayJuzu();
  } else if (isDisplaySurah) {
    displaySurah();
  } else if (isDisplayMaqra) {
    displayMaqra();
  } else {
    displayPage();
  }
}

function displayFirst() {
  if (displayDefault) {
    displayJuzu();
    displayDefault = false;
  }
}

//=========================== localStorage

function loadData() {
  if (!isLoaded) {
    // check for juzdata
    if (localStorage.getItem("juzdata") != null) {
      juzList = JSON.parse(localStorage.getItem("juzdata"));
    } else {
      localStorage.setItem("juzdata", JSON.stringify(juzList));
    }
    // check for surahdata
    if (localStorage.getItem("surahdata") != null) {
      surahList = JSON.parse(localStorage.getItem("surahdata"));
    } else {
      localStorage.setItem("surahdata", JSON.stringify(surahList));
    }
    // check for maqradata
    if (localStorage.getItem("maqradata") != null) {
      maqraList = JSON.parse(localStorage.getItem("maqradata"));
    } else {
      localStorage.setItem("maqradata", JSON.stringify(maqraList));
    }
    // check for pagedata
    if (localStorage.getItem("pagedata") != null) {
      pageList = JSON.parse(localStorage.getItem("pagedata"));
    } else {
      localStorage.setItem("pagedata", JSON.stringify(pageList));
    }
    isLoaded = true;
  }
}

function saveJuzData() {
  localStorage.removeItem("juzdata");
  localStorage.setItem("juzdata", JSON.stringify(juzList));
  juzList = JSON.parse(localStorage.getItem("juzdata"));
}

function saveSurahData() {
  localStorage.removeItem("surahdata");
  localStorage.setItem("surahdata", JSON.stringify(surahList));
  surahList = JSON.parse(localStorage.getItem("surahdata"));
}

function saveMaqraData() {
  localStorage.removeItem("maqradata");
  localStorage.setItem("maqradata", JSON.stringify(maqraList));
  maqraList = JSON.parse(localStorage.getItem("maqradata"));
}

function savePageData() {
  localStorage.removeItem("pagedata");
  localStorage.setItem("pagedata", JSON.stringify(pageList));
  pageList = JSON.parse(localStorage.getItem("pagedata"));
}

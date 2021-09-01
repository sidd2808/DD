let handler = async (m) => {
    let asmaulhusna = JSON.stringify(global.asmaulhusna)
    let json = JSON.parse(asmaulhusna)
    let data = json.result.data.map((v, i) => `${i + 1}. ${v.latin}\n${v.arabic}\n${v.translation_id}`).join('\n\n')
    contoh = `*Asmaul Husna*\n\n`
    anjuran = `\n\nFrom Abu Hurairah radhiallahu anhu, the Messenger of Allah said: "إِنَّ لِلَّهِ تَعَالَى تِسْعَةً وَتِسْعِينَ اسْمًا، مِائَةٌ إِلَّا وَاحِدًا، مَنْ أَحْصَاهَا دخل الجنة، وهو وتر يُحِبُّ الْوِتْرَ"

Artinya: "Verily Allah has ninety-nine names, aka one hundred minus one. Whoever counts them, will enter Paradise; He is Witr and likes witr".`
    m.reply(contoh + data + anjuran)
}
handler.owner = true
module.exports = handler

global.asmaulhusna = {
    "result": {
        "data": [
            {
                "index": "1",
                "latin": "Ar Rahman",
                "arabic": "الرَّحْمَنُ",
                "translation_en": "The All Beneficent"
            },
            {
                "index": "2",
                "latin": "Ar Rahiim",
                "arabic": "الرَّحِيمُ",
                "translation_en": "The Most Merciful"
            },
            {
                "index": "3",
                "latin": "Al Malik",
                "arabic": "الْمَلِكُ",
                "translation_en": "The King, The Sovereign"
            },
            {
                "index": "4",
                "latin": "Al Quddus",
                "arabic": "الْقُدُّوسُ",
                "translation_en": "The Most Holy"
            },
            {
                "index": "5",
                "latin": "As Salaam",
                "arabic": "السَّلاَمُ",
                "translation_en": "Peace and Blessing"
            },
            {
                "index": "6",
                "latin": "Al Mu’min",
                "arabic": "الْمُؤْمِنُ",
                "translation_en": "The Guarantor"
            },
            {
                "index": "7",
                "latin": "Al Muhaimin",
                "arabic": "الْمُهَيْمِنُ",
                "translation_en": "The Guardian, the Preserver"
            },
            {
                "index": "8",
                "latin": "Al ‘Aziiz",
                "arabic": "الْعَزِيزُ",
                "translation_en": "The Almighty, the Self Sufficient"
            },
            {
                "index": "9",
                "latin": "Al Jabbar",
                "arabic": "الْجَبَّارُ",
                "translation_en": "The Powerful, the Irresistible"
            },
            {
                "index": "10",
                "latin": "Al Mutakabbir",
                "arabic": "الْمُتَكَبِّرُ",
                "translation_en": "The Tremendous"
            },
            {
                "index": "11",
                "latin": "Al Khaliq",
                "arabic": "الْخَالِقُ",
                "translation_en": "The Creator"
            },
            {
                "index": "12",
                "latin": "Al Baari’",
                "arabic": "الْبَارِئُ",
                "translation_en": "The Maker"
            },
            {
                "index": "13",
                "latin": "Al Mushawwir",
                "arabic": "الْمُصَوِّرُ",
                "translation_en": "The Fashioner of Forms"
            },
            {
                "index": "14",
                "latin": "Al Ghaffaar",
                "arabic": "الْغَفَّارُ",
                "translation_en": "The Ever Forgiving"
            },
            {
                "index": "15",
                "latin": "Al Qahhaar",
                "arabic": "الْقَهَّارُ",
                "translation_en": "The All Compelling Subduer"
            },
            {
                "index": "16",
                "latin": "Al Wahhaab",
                "arabic": "الْوَهَّابُ",
                "translation_en": "The Bestower"
            },
            {
                "index": "17",
                "latin": "Ar Razzaaq",
                "arabic": "الرَّزَّاقُ",
                "translation_en": "The Ever Providing"
            },
            {
                "index": "18",
                "latin": "Al Fattaah",
                "arabic": "الْفَتَّاحُ",
                "translation_en": "The Opener, the Victory Giver"
            },
            {
                "index": "19",
                "latin": "Al ‘Aliim",
                "arabic": "اَلْعَلِيْمُ",
                "translation_en": "The All Knowing, the Omniscient"
            },
            {
                "index": "20",
                "latin": "Al Qaabidh",
                "arabic": "الْقَابِضُ",
                "translation_en": "The Restrainer, the Straightener"
            },
            {
                "index": "21",
                "latin": "Al Baasith",
                "arabic": "الْبَاسِطُ",
                "translation_en": "The Expander, the Munificent"
            },
            {
                "index": "22",
                "latin": "Al Khaafidh",
                "arabic": "الْخَافِضُ",
                "translation_en": "The Abaser"
            },
            {
                "index": "23",
                "latin": "Ar Raafi’",
                "arabic": "الرَّافِعُ",
                "translation_en": "The Exalter"
            },
            {
                "index": "24",
                "latin": "Al Mu’izz",
                "arabic": "الْمُعِزُّ",
                "translation_en": "The Giver of Honor"
            },
            {
                "index": "25",
                "latin": "Al Mudzil",
                "arabic": "المُذِلُّ",
                "translation_en": "The Giver of Dishonor"
            },
            {
                "index": "26",
                "latin": "Al Samii’",
                "arabic": "السَّمِيعُ",
                "translation_en": "The All Hearing"
            },
            {
                "index": "27",
                "latin": "Al Bashiir",
                "arabic": "الْبَصِيرُ",
                "translation_en": "The All Seeing"
            },
            {
                "index": "28",
                "latin": "Al Hakam",
                "arabic": "الْحَكَمُ",
                "translation_en": "The Judge, the Arbitrator"
            },
            {
                "index": "29",
                "latin": "Al ‘Adl",
                "arabic": "الْعَدْلُ",
                "translation_en": "The Utterly Just"
            },
            {
                "index": "30",
                "latin": "Al Lathiif",
                "arabic": "اللَّطِيفُ",
                "translation_en": "The Subtly Kind"
            },
            {
                "index": "31",
                "latin": "Al Khabiir",
                "arabic": "الْخَبِيرُ",
                "translation_en": "The All Aware"
            },
            {
                "index": "32",
                "latin": "Al Haliim",
                "arabic": "الْحَلِيمُ",
                "translation_en": "The Forbearing, the Indulgent"
            },
            {
                "index": "33",
                "latin": "Al ‘Azhiim",
                "arabic": "الْعَظِيمُ",
                "translation_en": "The Magnificent, the Infinite"
            },
            {
                "index": "34",
                "latin": "Al Ghafuur",
                "arabic": "الْغَفُورُ",
                "translation_en": "The All Forgiving"
            },
            {
                "index": "35",
                "latin": "As Syakuur",
                "arabic": "الشَّكُورُ",
                "translation_en": "The Grateful"
            },
            {
                "index": "36",
                "latin": "Al ‘Aliy",
                "arabic": "الْعَلِيُّ",
                "translation_en": "The Sublimely Exalted"
            },
            {
                "index": "37",
                "latin": "Al Kabiir",
                "arabic": "الْكَبِيرُ",
                "translation_en": "The Great"
            },
            {
                "index": "38",
                "latin": "Al Hafizh",
                "arabic": "الْحَفِيظُ",
                "translation_en": "The Preserver"
            },
            {
                "index": "39",
                "latin": "Al Muqiit",
                "arabic": "المُقيِت",
                "translation_en": "The Nourisher"
            },
            {
                "index": "40",
                "latin": "Al Hasiib",
                "arabic": "الْحسِيبُ",
                "translation_en": "The Reckoner"
            },
            {
                "index": "41",
                "latin": "Al Jaliil",
                "arabic": "الْجَلِيلُ",
                "translation_en": "The Majestic"
            },
            {
                "index": "42",
                "latin": "Al Kariim",
                "arabic": "الْكَرِيمُ",
                "translation_en": "The Bountiful, the Generous"
            },
            {
                "index": "43",
                "latin": "Ar Raqiib",
                "arabic": "الرَّقِيبُ",
                "translation_en": "The Watchful"
            },
            {
                "index": "44",
                "latin": "Al Mujiib",
                "arabic": "الْمُجِيبُ",
                "translation_en": "The Responsive, the Answerer"
            },
            {
                "index": "45",
                "latin": "Al Waasi’",
                "arabic": "الْوَاسِعُ",
                "translation_en": "The Vast, the All Encompassing"
            },
            {
                "index": "46",
                "latin": "Al Hakiim",
                "arabic": "الْحَكِيمُ",
                "translation_en": "The Wise"
            },
            {
                "index": "47",
                "latin": "Al Waduud",
                "arabic": "الْوَدُودُ",
                "translation_en": "The Loving, the Kind One"
            },
            {
                "index": "48",
                "latin": "Al Majiid",
                "arabic": "الْمَجِيدُ",
                "translation_en": "The All Glorious"
            },
            {
                "index": "49",
                "latin": "Al Baa’its",
                "arabic": "الْبَاعِثُ",
                "translation_en": "The Raiser of the Dead"
            },
            {
                "index": "50",
                "latin": "As Syahiid",
                "arabic": "الشَّهِيدُ",
                "translation_en": "The Witness"
            },
            {
                "index": "51",
                "latin": "Al Haqq",
                "arabic": "الْحَقُّ",
                "translation_en": "The Truth, the Real"
            },
            {
                "index": "52",
                "latin": "Al Wakiil",
                "arabic": "الْوَكِيلُ",
                "translation_en": "The Trustee, the Dependable"
            },
            {
                "index": "53",
                "latin": "Al Qawiyyu",
                "arabic": "الْقَوِيُّ",
                "translation_en": "The Strong"
            },
            {
                "index": "54",
                "latin": "Al Matiin",
                "arabic": "الْمَتِينُ",
                "translation_en": "The Firm, the Steadfast"
            },
            {
                "index": "55",
                "latin": "Al Waliyy",
                "arabic": "الْوَلِيُّ",
                "translation_en": "The Protecting Friend, Patron, and Helper"
            },
            {
                "index": "56",
                "latin": "Al Hamiid",
                "arabic": "الْحَمِيدُ",
                "translation_en": "The All Praiseworthy"
            },
            {
                "index": "57",
                "latin": "Al Mushii",
                "arabic": "الْمُحْصِي",
                "translation_en": "The Accounter, the Numberer of All"
            },
            {
                "index": "58",
                "latin": "Al Mubdi’",
                "arabic": "الْمُبْدِئُ",
                "translation_en": "The Producer, Originator, and Initiator of all"
            },
            {
                "index": "59",
                "latin": "Al Mu’iid",
                "arabic": "الْمُعِيدُ",
                "translation_en": "The Reinstater Who Brings Back All"
            },
            {
                "index": "60",
                "latin": "Al Muhyii",
                "arabic": "الْمُحْيِي",
                "translation_en": "The Giver of Life"
            },
            {
                "index": "61",
                "latin": "Al Mumiitu",
                "arabic": "اَلْمُمِيتُ",
                "translation_en": "The Bringer of Death, the Destroyer"
            },
            {
                "index": "62",
                "latin": "Al Hayyu",
                "arabic": "الْحَيُّ",
                "translation_en": "The Ever Living"
            },
            {
                "index": "63",
                "latin": "Al Qayyuum",
                "arabic": "الْقَيُّومُ",
                "translation_en": "The Self Subsisting Sustainer of All"
            },
            {
                "index": "64",
                "latin": "Al Waajid",
                "arabic": "الْوَاجِدُ",
                "translation_en": "The Perceiver, the Finder, the Unfailing"
            },
            {
                "index": "65",
                "latin": "Al Maajid",
                "arabic": "الْمَاجِدُ",
                "translation_en": "The Illustrious, the Magnificent"
            },
            {
                "index": "66",
                "latin": "Al Wahiid",
                "arabic": "الْواحِدُ",
                "translation_en": "The One, The Unique, Manifestation of Unity"
            },
            {
                "index": "67",
                "latin": "Al ‘Ahad",
                "arabic": "اَلاَحَدُ",
                "translation_en": "The One, the All Inclusive, the Indivisible"
            },
            {
                "index": "68",
                "latin": "As Shamad",
                "arabic": "الصَّمَدُ",
                "translation_en": "The Self Sufficient, the Impregnable,the Eternally Besought of All, the Everlasting"
            },
            {
                "index": "69",
                "latin": "Al Qaadir",
                "arabic": "الْقَادِرُ",
                "translation_en": "The All Able"
            },
            {
                "index": "70",
                "latin": "Al Muqtadir",
                "arabic": "الْمُقْتَدِرُ",
                "translation_en": "The All Determiner, the Dominant"
            },
            {
                "index": "71",
                "latin": "Al Muqaddim",
                "arabic": "الْمُقَدِّمُ",
                "translation_en": "The Expediter, He who brings forward"
            },
            {
                "index": "72",
                "latin": "Al Mu’akkhir",
                "arabic": "الْمُؤَخِّرُ",
                "translation_en": "The Delayer, He who puts far away"
            },
            {
                "index": "73",
                "latin": "Al Awwal",
                "arabic": "الأوَّلُ",
                "translation_en": "The First"
            },
            {
                "index": "74",
                "latin": "Al Aakhir",
                "arabic": "الآخِرُ",
                "translation_en": "The Last"
            },
            {
                "index": "75",
                "latin": "Az Zhaahir",
                "arabic": "الظَّاهِرُ",
                "translation_en": "The Manifest; the All Victorious"
            },
            {
                "index": "76",
                "latin": "Al Baathin",
                "arabic": "الْبَاطِنُ",
                "translation_en": "The Hidden; the All Encompassing"
            },
            {
                "index": "77",
                "latin": "Al Waali",
                "arabic": "الْوَالِي",
                "translation_en": "The Patron"
            },
            {
                "index": "78",
                "latin": "Al Muta’aalii",
                "arabic": "الْمُتَعَالِي",
                "translation_en": "The Self Exalted"
            },
            {
                "index": "79",
                "latin": "Al Barri",
                "arabic": "الْبَرُّ",
                "translation_en": "The Most Kind and Righteous"
            },
            {
                "index": "80",
                "latin": "At Tawwaab",
                "arabic": "التَّوَابُ",
                "translation_en": "The Ever Returning, Ever Relenting"
            },
            {
                "index": "81",
                "latin": "Al Muntaqim",
                "arabic": "الْمُنْتَقِمُ",
                "translation_en": "The Avenger"
            },
            {
                "index": "82",
                "latin": "Al Afuww",
                "arabic": "العَفُوُّ",
                "translation_en": "The Pardoner, the Effacer of Sins"
            },
            {
                "index": "83",
                "latin": "Ar Ra`uuf",
                "arabic": "الرَّؤُوفُ",
                "translation_en": "The Compassionate, the All Pitying"
            },
            {
                "index": "84",
                "latin": "Malikul Mulk",
                "arabic": "مَالِكُ الْمُلْكِ",
                "translation_en": "The Owner of All Sovereignty"
            },
            {
                "index": "85",
                "latin": "Dzul JalaaliWal Ikraam",
                "arabic": "ذُوالْجَلاَلِوَالإكْرَامِ",
                "translation_en": "The Lord of Majesty and Generosity"
            },
            {
                "index": "86",
                "latin": "Al Muqsith",
                "arabic": "الْمُقْسِطُ",
                "translation_en": "The Equitable, the Requiter"
            },
            {
                "index": "87",
                "latin": "Al Jamii’",
                "arabic": "الْجَامِعُ",
                "translation_en": "The Gatherer, the Unifier"
            },
            {
                "index": "88",
                "latin": "Al Ghaniyy",
                "arabic": "الْغَنِيُّ",
                "translation_en": "The All Rich, the Independent"
            },
            {
                "index": "89",
                "latin": "Al Mughnii",
                "arabic": "الْمُغْنِي",
                "translation_en": "The Enricher, the Emancipator"
            },
            {
                "index": "90",
                "latin": "Al Maani",
                "arabic": "اَلْمَانِعُ",
                "translation_en": "The Withholder, the Shielder, the Defender"
            },
            {
                "index": "91",
                "latin": "Ad Dhaar",
                "arabic": "الضَّارَّ",
                "translation_en": "The Distressor, the Harmer"
            },
            {
                "index": "92",
                "latin": "An Nafii’",
                "arabic": "النَّافِعُ",
                "translation_en": "The Propitious, the Benefactor"
            },
            {
                "index": "93",
                "latin": "An Nuur",
                "arabic": "النُّورُ",
                "translation_en": "The Light"
            },
            {
                "index": "94",
                "latin": "Al Haadii",
                "arabic": "الْهَادِي",
                "translation_en": "The Guide"
            },
            {
                "index": "95",
                "latin": "Al Baadii",
                "arabic": "الْبَدِيعُ",
                "translation_en": "Incomparable, the Originator"
            },
            {
                "index": "96",
                "latin": "Al Baaqii",
                "arabic": "اَلْبَاقِي",
                "translation_en": "The Ever Enduring and Immutable"
            },
            {
                "index": "97",
                "latin": "Al Waarits",
                "arabic": "الْوَارِثُ",
                "translation_en": "The Heir, the Inheritor of All"
            },
            {
                "index": "98",
                "latin": "Ar Rasyiid",
                "arabic": "الرَّشِيدُ",
                "translation_en": "The Guide, Infallible Teacher, and Knower"
            },
            {
                "index": "99",
                "latin": "As Shabuur",
                "arabic": "الصَّبُورُ",
                "translation_en": "The Patient"
            }
        ]
    }
}

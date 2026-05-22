export interface Service {
  num: string;
  title: string;
  short: string;
  description: string;
  bullets: { strong: string; rest: string }[];
  value: string;
  painPoints: string[];
}

export const painPoints = [
  "Reikia kokybiškos kontaktų bazės",
  "Trūksta šaltų skambučių srauto",
  "Trūksta susitikimų su sprendimų priėmėjais",
  "Nepažįstu savo klientų ar rinkos",
  "Mažėja esamų klientų aktyvumas",
  "Vėluoja klientų mokėjimai",
];

export const services: Service[] = [
  {
    num: "1",
    title: "Klientų paieška ir duomenų bazių valdymas",
    short: "Klientų paieška",
    painPoints: ["Reikia kokybiškos kontaktų bazės"],
    description:
      "Kiekvienas pardavimų žingsnis prasideda nuo tinkamų kontaktų. Atlikdami tikslinį duomenų profiliavimą ir tvarkymą, suformuojame sąrašus, kuriuose kiekvienas kontaktas atitinka jūsų idealaus kliento profilį ir turi realų pirkimo potencialą.",
    bullets: [
      { strong: "Potencialių klientų atranka:", rest: "identifikuojame įmones ir sprendimų priėmėjus, kuriems jūsų paslauga šiuo metu yra aktualiausia ir turi didžiausią komercinę vertę." },
      { strong: "Tikslinių bazių formavimas:", rest: "kontaktus skirstome pagal jūsų nurodytus kriterijus: įmonės dydį, veiklos sritį ar pirkimo potencialą." },
      { strong: "Informacijos atnaujinimas:", rest: "prieš perduodami duomenis, patikriname atsakingų asmenų pareigas, tiesioginius kontaktus ir kitą sprendimui priimti reikalingą informaciją." },
      { strong: "Duomenų valymas:", rest: "pašaliname nebeaktualius, pasikartojančius ar klaidingus įrašus, kad jūsų komanda nešvaistytų laiko netinkamiems kontaktams." },
    ],
    value:
      "Jūsų gaunate tikslius ir paruoštus duomenis.",
  },
  {
    num: "2",
    title: "Telemarketingas ir šaltieji skambučiai",
    short: "Telemarketingas",
    painPoints: ["Trūksta šaltų skambučių srauto"],
    description:
      "Profesionaliai atlikti šaltieji skambučiai yra vienas greičiausių būdų pasiekti naujus klientus ir išsiaiškinti jų poreikius tiesiogiai. Mūsų tikslas yra ne tiesiog paskambinti, o suformuoti tikslinį susidomėjimą ir perduoti jums kontaktus, paruoštus tolimesniam pokalbiui.",
    bullets: [
      { strong: "Pasiruošimas ir strategija:", rest: "atliekame išsamią jūsų produkto ar paslaugos analizę ir parengiame komunikacijos planą, pritaikytą konkrečiai tikslinei grupei." },
      { strong: "Tikslinė paieška:", rest: "nuolat atnaujiname kontaktų sąrašus pagal jūsų nurodytas kategorijas, kad skambučiai pasiektų būtent tuos žmones, kuriems jūsų pasiūlymas labiausiai tinka." },
      { strong: "Tiesioginis bendravimas:", rest: "profesionaliai pristatome jūsų pranašumus ir vertę naujiems partneriams, kartu stiprindami prekės ženklo žinomumą rinkoje." },
      { strong: "Duomenų valdymas:", rest: "tvarkome ir atnaujiname jūsų kontaktų bazę, kad ji išliktų aktuali ne tik šiandien, bet ir ateityje." },
      { strong: "Kontaktų perdavimas:", rest: "visus susidomėjusius klientus fiksuojame ir perduodame jūsų komandai tolimesniam sandorio vystymui." },
    ],
    value:
      "Jūsų komanda gauna tik parengtus, susidomėjusius kontaktus.",
  },
  {
    num: "3",
    title: "Verslo susitikimų organizavimas (B2B)",
    short: "B2B susitikimai",
    painPoints: ["Trūksta susitikimų su sprendimų priėmėjais"],
    description:
      "Patekti pas aukščiausio lygio vadovą yra vienas iš sudėtingiausių pardavimų proceso etapų. Mes šį darbą atliekame už jus: surandame tinkamus sprendimų priėmėjus, užmezgame profesionalų ryšį ir suplanuojame susitikimus, į kuriuos jūsų komanda ateina jau žinodama kliento poreikius.",
    bullets: [
      { strong: "Sprendimų priėmėjų nustatymas:", rest: "tikslingai ieškome ir identifikuojame asmenis, kurie tiesiogiai atsakingi už sprendimų priėmimą jūsų srityje." },
      { strong: "Profesionalus atstovavimas:", rest: "atstovaujame jūsų įmonei laikydamiesi aukščiausių etikos standartų ir sudominame potencialius partnerius jūsų siūloma verte." },
      { strong: "Susitikimų planavimas:", rest: "suderiname patogų susitikimų laiką, kad jūs dirbtumėte tik su kokybiškais ir jau paruoštais kontaktais." },
      { strong: "Informacijos perdavimas:", rest: "pateikiame visą surinktą informaciją apie klientą ir jo poreikius jūsų komandai." },
    ],
    value:
      "Į susitikimą ateinate pasiruošę, o tai leidžia derybų laiką išnaudoti maksimaliai efektyviai.",
  },
  {
    num: "4",
    title: "Apklausos ir rinkos tyrimai",
    short: "Apklausos ir tyrimai",
    painPoints: ["Nepažįstu savo klientų ar rinkos"],
    description:
      "Tikslūs strateginiai sprendimai prasideda nuo tikslių duomenų. Atliekame reprezentatyvias verslo ir gyventojų apklausas telefonu bei paverčiame surinktą informaciją aiškiomis įžvalgomis, kuriomis galite remtis kasdienėje veikloje.",
    bullets: [
      { strong: "Rinkos analizė ir tendencijų vertinimas:", rest: "analizuojame konkurencinę aplinką bei rinkos pokyčius, kad galėtumėte priimti pagrįstus verslo sprendimus ir stiprinti savo konkurencinį pranašumą." },
      { strong: "Produkto ir paslaugų tobulinimas:", rest: "renkame klientų nuomones bei įžvalgas, padedančias geriau suprasti jų poreikius ir nustatyti svarbiausias tobulinimo kryptis." },
      { strong: "Klientų pasitenkinimo tyrimai:", rest: "išsiaiškiname, kaip klientai vertina jūsų paslaugas ar produktus, nustatome sritis, kurias tobulindami dar labiau atliepsite jų lūkesčius." },
      { strong: "Slaptojo pirkėjo tyrimai:", rest: "objektyviai įvertiname klientų aptarnavimo kokybę, komunikaciją ir pardavimo procesą, kad matytumėte realią situaciją iš kliento perspektyvos." },
    ],
    value:
      "Priimate sprendimus remdamiesi faktais, o ne prielaidomis.",
  },
  {
    num: "5",
    title: "Klientų išlaikymas ir susigrąžinimas",
    short: "Išlaikymas & win-back",
    painPoints: ["Mažėja esamų klientų aktyvumas"],
    description:
      "Esamų klientų išlaikymas dažnai kainuoja mažiau nei naujų paieška, tačiau šiam darbui nuolat trūksta laiko ir dėmesio. Mes prisiimame šią atsakomybę: stipriname ryšius su aktyviais partneriais ir sistemingai dirbame su tais, kurie jau kurį laiką nebendradarbiauja.",
    bullets: [
      { strong: "Lojalumo stiprinimas:", rest: "reguliariai susisiekiame su jūsų aktyviais klientais ir užtikriname, kad jų poreikiai būtų visiškai atliepti, o bendradarbiavimas vyktų sklandžiai." },
      { strong: "Papildomų pardavimų didinimas:", rest: "profesionaliai pristatome naujas paslaugas ar produktus esamiems partneriams, didindami jų pirkimų vertę ir jūsų pajamas." },
      { strong: "Klientų susigrąžinimo kampanijos:", rest: "vykdome tikslinius skambučius buvusiems klientams, išsiaiškiname pasitraukimo priežastis ir siūlome sprendimus, galinčius atkurti partnerystę." },
      { strong: "Grįžtamojo ryšio valdymas:", rest: "išklausome klientų pastabas bei lūkesčius ir paverčiame juos konkrečiomis įžvalgomis jūsų paslaugų kokybei gerinti." },
    ],
    value:
      "Išlaikyti klientai ir atkurtos partnerystės kuria stabilų augimą.",
  },
  {
    num: "6",
    title: "Skolų administravimas ir mokėjimų kontrolė",
    short: "Skolų administravimas",
    painPoints: ["Vėluoja klientų mokėjimai"],
    description:
      "Vėluojantys mokėjimai kenkia ne tik pinigų srautui, bet ir verslo santykiams. Mūsų tikslas yra užtikrinti, kad visi atsiskaitymai vyktų laiku, o bet kokios situacijos būtų sprendžiamos profesionaliai ir taktiškai, išsaugant partnerystę.",
    bullets: [
      { strong: "Mokėjimų priminimas:", rest: "remdamiesi jūsų pateiktais duomenimis, laiku susisiekiame su klientais telefonu arba žinute ir informuojame juos apie artėjančius ar vėluojančius atsiskaitymus." },
      { strong: "Profesionali prevencija:", rest: "palaikome dalykišką dialogą su pirkėjais, išsiaiškiname vėlavimo priežastis ir suderinami aiškūs mokėjimo terminai ar grafikai." },
      { strong: "Verslo santykių išsaugojimas:", rest: "visa komunikacija vykdoma laikantis aukščiausių verslo etikos standartų, kad finansiniai klausimai netaptų kliūtimi tolimesniam bendradarbiavimui." },
      { strong: "Pranešimų siuntimas:", rest: "papildomai naudojame el. paštą ir SMS žinutes, kad informacija apie finansinius įsipareigojimus pasiektų klientą jam priimtiniausiu būdu." },
      { strong: "Skaidrus procesų valdymas:", rest: "visi atlikti veiksmai ir pirkėjų ketinimai fiksuojami ataskaitose, todėl jūs visada matote tikslią procesų eigą." },
    ],
    value:
      "Mokėjimai laiku ir išlaikyti verslo santykiai.",
  },
];

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
      "Suformuojame tikslines kontaktų bazes, kuriose kiekvienas įrašas atitinka jūsų idealaus kliento profilį. Identifikuojame sprendimų priėmėjus, skirstome kontaktus pagal jūsų kriterijus, patikriname aktualumą ir pašaliname pasikartojančius ar klaidingus duomenis.",
    bullets: [],
    value: "Jūs gaunate tikslius ir paruoštus duomenis.",
  },
  {
    num: "2",
    title: "Telemarketingas ir šaltieji skambučiai",
    short: "Telemarketingas",
    painPoints: ["Trūksta šaltų skambučių srauto"],
    description:
      "Profesionaliai pristatome jūsų vertę potencialiems klientams, išsiaiškiname jų poreikius ir perduodame jūsų komandai tik jau susidomėjusius kontaktus. Nuolat atnaujiname kontaktų bazę ir tvarkome visą procesą nuo strategijos iki rezultato.",
    bullets: [],
    value: "Jūsų komanda gauna tik parengtus, susidomėjusius kontaktus.",
  },
  {
    num: "3",
    title: "Verslo susitikimų organizavimas (B2B)",
    short: "B2B susitikimai",
    painPoints: ["Trūksta susitikimų su sprendimų priėmėjais"],
    description:
      "Surandame tinkamus sprendimų priėmėjus, užmezgame profesionalų ryšį ir suplanuojame susitikimus. Jūsų komanda ateina žinodama kliento poreikius ir pasiruošusi deryboms.",
    bullets: [],
    value: "Į susitikimą ateinate pasiruošę ir derybų laiką išnaudojate maksimaliai.",
  },
  {
    num: "4",
    title: "Apklausos ir rinkos tyrimai",
    short: "Apklausos ir tyrimai",
    painPoints: ["Nepažįstu savo klientų ar rinkos"],
    description:
      "Atliekame verslo ir gyventojų apklausas telefonu: rinkos analizę, klientų pasitenkinimo tyrimus, produktų vertinimą ir slaptojo pirkėjo patikrinimus. Surinktą informaciją paverčiame aiškiomis įžvalgomis.",
    bullets: [],
    value: "Priimate sprendimus remdamiesi faktais, o ne prielaidomis.",
  },
  {
    num: "5",
    title: "Klientų išlaikymas ir susigrąžinimas",
    short: "Išlaikymas & win-back",
    painPoints: ["Mažėja esamų klientų aktyvumas"],
    description:
      "Reguliariai palaikome ryšį su jūsų aktyviais klientais, pristatome naujas paslaugas ir vykdome tikslines kampanijas buvusiems klientams. Išklausome pastabas ir paverčiame jas konkrečiomis įžvalgomis.",
    bullets: [],
    value: "Išlaikyti klientai ir atkurtos partnerystės kuria stabilų augimą.",
  },
  {
    num: "6",
    title: "Skolų administravimas ir mokėjimų kontrolė",
    short: "Skolų administravimas",
    painPoints: ["Vėluoja klientų mokėjimai"],
    description:
      "Laiku primename apie artėjančius ar vėluojančius atsiskaitymus, išsiaiškiname vėlavimo priežastis ir suderiname mokėjimo grafiką. Bendraujame profesionaliai, kad finansiniai klausimai netrukdytų tolimesniam bendradarbiavimui.",
    bullets: [],
    value: "Mokėjimai laiku ir išlaikyti verslo santykiai.",
  },
];

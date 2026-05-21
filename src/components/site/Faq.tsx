import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Ar jūsų kainodara lanksti?",
    a: "Taip. Taikome kelis modelius: fiksuotą mėnesinį mokestį, mokestį už pasiektą rezultatą (pavyzdžiui, suderintą susitikimą) arba mišrų variantą. Galutinę kainodarą suformuojame įvertinę jūsų tikslus ir projekto apimtis.",
  },
  {
    q: "Kas vyksta, jei rezultatai netenkina?",
    a: "Operatyviai keičiame komunikacijos planą arba tikslinę auditoriją. Jei rinkos atsakas išlieka nepatenkinamas, stabdome projektą ir pasiūlome sąžiningą bendradarbiavimo užbaigimą.",
  },
  {
    q: "Ar užtikrinsite mūsų duomenų konfidencialumą?",
    a: "Taip. Prieš pradedant darbus pasirašome konfidencialumo sutartį. Griežtai saugome jūsų komercinę informaciją ir klientų duomenis.",
  },
  {
    q: "Ar dirbsite su mūsų konkurentais vienu metu?",
    a: "Ne. Viename rinkos segmente vienu metu dirbame tik su viena įmone.",
  },
  {
    q: "Ar taikomas minimalus užsakymo dydis arba terminas?",
    a: "Taip. Kad pasiektume objektyvių rezultatų, taikome minimalią kontaktų apimtį arba vieno mėnesio bandomąjį laikotarpį.",
  },
  {
    q: "Su kokio dydžio įmonėmis dirbate?",
    a: "Dirbame su įvairaus dydžio įmonėmis, nuo startuolių iki didelių organizacijų. Sprendimus pritaikome individualiai pagal kiekvieno kliento poreikius ir tikslus.",
  },
  {
    q: "Per kiek laiko paruošiamas ir paleidžiamas projektas?",
    a: "Priklausomai nuo apimties, nuo kelių dienų iki dviejų savaičių. Per šį laiką suformuojame duomenų bazę, parengiame komunikacijos planą ir suderiname procesus.",
  },
  {
    q: "Kas parengia komunikacijos planą?",
    a: "Visą struktūrą paruošiame mes, remdamiesi jūsų informacija. Tačiau esame lankstūs ir jei turite jau veikiantį modelį ar tekstus, mielai dirbsime su jais.",
  },
  {
    q: "Ar galime koreguoti detales jau vykstančio projekto metu?",
    a: "Taip. Nuolat stebime rinkos atsaką ir galime operatyviai keisti duomenis.",
  },
  {
    q: "Kaip dažnai teikiate atliktų darbų ataskaitas?",
    a: "Detalias ataskaitas apie skambučius, rezultatus ir rinkos grįžtamąjį ryšį teikiame kas savaitę arba pagal individualiai suderintą grafiką.",
  },
  {
    q: "Kokiu formatu pateikiate išgrynintus duomenis?",
    a: "Duomenis pateikiame „Excel“ arba „Google Sheets“ lentelėse, taip pat galime juos vesti tiesiai į jūsų įmonės CRM sistemą.",
  },
  {
    q: "Ar dirbate su specializuotais verslo sektoriais?",
    a: "Taip. Atliekame individualią analizę, leidžiančią pasiekti sprendimų priėmėjus net ir itin specifinėse nišose.",
  },
];

export function Faq() {
  return (
    <section id="duk" className="relative py-20 md:py-24 border-t border-border/60 bg-[#0f0f0f]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16 text-center"
        >
          <div className="text-[11px] uppercase tracking-[0.3em] text-accent mb-6">
            · DUK
          </div>
          <h2 className="font-display text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.02] tracking-[-0.02em] text-foreground text-balance">
            Dažniausi <span className="italic text-accent">klausimai.</span>
          </h2>
          <div className="mt-8 h-px w-16 bg-accent/60 mx-auto" />
          <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            Neradote atsakymo? · Parašykite
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16">
          {[faqs.slice(0, Math.ceil(faqs.length / 2)), faqs.slice(Math.ceil(faqs.length / 2))].map((col, colIdx) => (
            <Accordion key={colIdx} type="single" collapsible className="w-full">
              {col.map((f, i) => {
                const idx = colIdx === 0 ? i : i + Math.ceil(faqs.length / 2);
                return (
                  <AccordionItem
                    key={idx}
                    value={`item-${idx}`}
                    className="border-b border-border/60"
                  >
                    <AccordionTrigger className="text-left font-display font-semibold text-[16px] leading-snug tracking-[-0.01em] text-[color:oklch(0.98_0.005_60)] hover:text-accent hover:no-underline py-5 [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-[15.5px] leading-relaxed text-[color:oklch(0.92_0.01_70)] pb-5 pr-4 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>

                );
              })}
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

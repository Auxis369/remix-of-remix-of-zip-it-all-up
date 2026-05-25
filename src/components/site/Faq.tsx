import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "1. Su kokio dydžio įmonėmis dirbate?",
    a: "Dirbame su įvairaus dydžio įmonėmis, nuo startuolių iki stambaus verslo. Sprendimus pritaikome individualiai pagal kiekvieno kliento poreikius ir tikslus.",
  },
  {
    q: "2. Ar dirbate su specializuotais verslo sektoriais?",
    a: "Taip. Atliekame individualią analizę, leidžiančią pasiekti sprendimų priėmėjus net ir itin specifinėse nišose.",
  },
  {
    q: "3. Kiek trunka pasiruošimas ir kas parengia komunikacijos planą?",
    a: "Priklausomai nuo apimties, pasiruošimas trunka nuo kelių dienų iki dviejų savaičių. Per šį laiką suformuojame duomenų bazę ir paruošiame komunikacijos struktūrą. Visą planą parengiame mes, remdamiesi jūsų informacija, tačiau jei turite jau veikiantį modelį ar tekstus, mielai dirbsime su jais.",
  },
  {
    q: "4. Ar galime koreguoti strategiją jau vykstančios kampanijos metu?",
    a: "Taip. Nuolat stebime rinkos atsaką ir galime operatyviai keisti duomenis bei komunikacijos kryptį.",
  },
  {
    q: "5. Ar užtikrinsite mūsų duomenų konfidencialumą?",
    a: "Taip. Prieš pradedant darbus pasirašome konfidencialumo sutartį ir griežtai saugome jūsų komercinę informaciją bei klientų duomenis.",
  },
  {
    q: "6. Ar dirbsite su mūsų konkurentais vienu metu?",
    a: "Ne. Viename rinkos segmente vienu metu dirbame tik su viena įmone.",
  },
  {
    q: "7. Kaip elgiamasi, jei rezultatai neatitinka tikslų?",
    a: "Operatyviai keičiame komunikacijos planą arba tikslinę auditoriją. Jei rinkos atsakas išlieka nepatenkinamas, stabdome projektą ir pasiūlome sąžiningą bendradarbiavimo užbaigimą.",
  },
  {
    q: "8. Kokios paslaugų kainos ir ar taikomas minimalus terminas?",
    a: "Kainodara yra lanksti ir pritaikoma pagal jūsų verslo poreikius bei projekto apimtį. Kad pasiektume objektyvių rezultatų, taikome minimalią kontaktų apimtį arba vieno mėnesio bandomąjį laikotarpį. Siūlome nemokamą konsultaciją, kurios metu įvertiname situaciją ir pateikiame individualų pasiūlymą.",
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

import { motion } from "motion/react";
import { Plus } from "lucide-react";

const steps = [
  {
    num: "1",
    title: "Analizė",
    text: "Pirmo pokalbio metu išanalizuojame jūsų verslo tikslus, tikslinę auditoriją bei esamus iššūkius. Tiksliai įvertiname situaciją ir pritaikome konkrečius sprendimus (telemarketingą, apklausos vykdymą, B2B susitikimų planavimą ar mokėjimų kontrolę) maksimaliam jūsų įmonės efektyvumui užtikrinti.",
  },
  {
    num: "2",
    title: "Pasiruošimas",
    text: "Paruošiame individualią komunikacijos struktūrą, atitinkančią jūsų įmonės įvaizdį ir toną. Gryniname ir segmentuojame kontaktų bazę pagal jūsų tikslinio kliento profilį bei suderiname vertinimo rodiklius (KPI) bei atskaitomybės formą.",
  },
  {
    num: "3",
    title: "Integracija",
    text: "Mūsų specialistai atlieka nuodugnią jūsų produkto ar paslaugos analizę. Sustyguojame esminę paslaugos naudą ir privalumus, kad atstovavimas rinkoje būtų visiškai tapatus jūsų vidinės komandos darbui.",

  },
  {
    num: "4",
    title: "Vykdymas",
    text: "Užtikriname tiesioginį kontaktą su potencialiais klientais bei sklandžią komunikaciją, griežtai laikydamiesi BDAR (GDPR) reikalavimų. Suinteresuotų asmenų užklausas operatyviai perduodame jūsų komandai per CRM sistemą arba kitus pasirinktus kanalus.",
  },
  {
    num: "5",
    title: "Ataskaitos",
    text: "Kas savaitę teikiame aiškias ataskaitas, kuriose matysite atliktų kontaktų skaičių, suplanuotus susitikimus ir rinkos įžvalgas. Mėnesio pabaigoje rengiame susitikimą, kurio metu aptariame pasiektus rezultatus ir tolimesnę taktiką.",
  },
  {
    num: "6",
    title: "Optimizavimas",
    text: "Remdamiesi sukauptais statistiniais duomenimis tiksliname vertės pasiūlymus, koreguojame tikslines grupes ir didiname paslaugų efektyvumą. Kuriame ilgalaikę vertę jūsų įmonei ir veikiame kaip patikimas jūsų komandos tęsinys, orientuotas į stabilų verslo augimą.",

  },
];


export function HowWeWork() {
  return (
    <section id="diagnostika" className="relative py-20 md:py-24 border-t border-border/60">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="md:sticky md:top-32"
          >
            <p className="mt-6 text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
              Aiškus procesas · Skaidrios ataskaitos
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-accent/80">
              ↓ Užveskite pelę ant žingsnio
            </p>
          </motion.div>
        </div>

        <div className="col-span-12 md:col-span-7 md:col-start-6">
          <ol className="space-y-2">
            {steps.map((s, i) => (
              <motion.li
                key={s.num}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group grid grid-cols-12 gap-4 py-5 border-b border-border/50 last:border-b-0 cursor-pointer"
              >
                <div className="col-span-2 md:col-span-2">
                  <span className="font-display italic text-accent text-[22px] leading-none">
                    {s.num}
                  </span>
                </div>
                <div className="col-span-10 md:col-span-10">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-[16px] md:text-[17px] leading-tight tracking-[-0.01em] text-foreground transition-colors duration-300 group-hover:text-accent">
                      {s.title}
                    </h3>
                    <Plus
                      className="h-5 w-5 shrink-0 text-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[135deg]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    <div className="overflow-hidden">
                      <p className="text-[15.5px] md:text-[16px] leading-[1.7] text-foreground/80 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        {s.text}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

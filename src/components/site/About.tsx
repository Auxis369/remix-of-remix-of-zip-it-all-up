import { useState } from "react";
import { motion } from "motion/react";
import aboutTeam from "@/assets/about-team.jpg";

const tabs = [
  {
    id: "profilis",
    label: "PROFILIS",
    num: "1.",
    heading: "PROFILIS",
    body: [
      "Mes esame jūsų telemarketingo, pardavimų vystymo ir verslo komunikacijų partneris. Dirbame su įmonėmis, kurioms svarbu ne tik pasiekti naujus klientus, bet ir išlaikyti esamus, geriau pažinti rinką ir užtikrinti sklandžius atsiskaitymus.",
      "Esame profesionali jūsų komandos pagalba ten, kur reikalingas tiesioginis dialogas, pasitikėjimas ir aiški komunikacija.",
    ],
  },
  {
    id: "sprendimai",
    label: "SPRENDIMAI",
    num: "2.",
    heading: "SPRENDIMAI",
    body: [
      "B2B telemarketingas, verslo susitikimų organizavimas, rinkos apklausos, mokėjimų kontrolė, klientų išlaikymo programos ir tikslūs duomenų sprendimai.",
      "Kiekvieną skambutį vertiname kaip galimybę sukurti realią vertę. Todėl dirbame nuosekliai ir su pagarba kiekvienam pašnekovui.",
    ],
  },
  {
    id: "procesas",
    label: "PROCESAS",
    num: "3.",
    heading: "PROCESAS",
    body: [
      "Pradedame nuo analizės, išsiaiškiname jūsų tikslus, parengiame komunikacijos planą ir tikslinę kontaktų bazę, tada pradedame vykdyti procesus pagal jūsų lūkesčius.",
      "Tikime, kad efektyvus pardavimų procesas turi derėti su žmogišku ryšiu ir empatija. Todėl nesiekiame greito efekto ir kuriame ilgalaikius santykius.",
    ],
  },
  {
    id: "verte",
    label: "VERTĖ",
    num: "4.",
    heading: "VERTĖ",
    body: [
      "Mūsų tikslas tapti strateginiu partneriu, užtikrinančiu jūsų verslo sklandumą kasdienėje veikloje ir stiprinančiu jūsų pozicijas rinkoje. Integruojamės į jūsų procesus taip, kad jūsų augimas ir sėkmė būtų tiesioginis mūsų darbo rezultatas.",
    ],
  },
];

export function About() {
  const [active, setActive] = useState(0);
  const activeTab = tabs[active];

  return (
    <section id="apie" className="relative py-20 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 md:mb-20 max-w-3xl mx-auto text-center"
        >
          <div className="text-[11px] uppercase tracking-[0.3em] text-accent mb-6">
            · Apie mus
          </div>
          <h2 className="font-display text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.02] tracking-[-0.02em] text-foreground text-balance">
            Dirbame Jums ir su Jumis!
          </h2>
          <div className="mt-8 h-px w-16 bg-accent/60 mx-auto" />
        </motion.div>


        {/* Two-column grid: vertical tabs (left) + content card (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: vertical tab navigation */}
          <div
            role="tablist"
            aria-label="Apie mus"
            className="lg:col-span-4 flex flex-col gap-2"
          >
            {tabs.map((t, i) => {
              const isActive = i === active;
              return (
                <button
                  key={t.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`panel-${t.id}`}
                  id={`tab-${t.id}`}
                  onClick={() => setActive(i)}
                  className={`group relative w-full text-left px-5 py-4 border-l-2 transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-accent bg-secondary/60 text-foreground"
                      : "border-border/60 text-muted-foreground hover:text-foreground hover:border-accent/50 hover:bg-secondary/30"
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`font-display italic text-[14px] transition-colors ${
                        isActive ? "text-accent" : "text-muted-foreground/60"
                      }`}
                    >
                      {t.num}
                    </span>
                    <span className="text-[13px] md:text-[14px] tracking-[0.06em] font-medium leading-snug">
                      {t.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: content card */}
          <div className="lg:col-span-8 relative">
            {tabs.map((t, i) => {
              const isActive = i === active;
              return (
                <div
                  key={t.id}
                  role="tabpanel"
                  id={`panel-${t.id}`}
                  aria-labelledby={`tab-${t.id}`}
                  hidden={!isActive}
                  className={isActive ? "block" : "hidden"}
                >
                  <motion.div
                    key={`${t.id}-${active}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative bg-card border border-border/60 shadow-sm p-8 md:p-12"
                  >
                    <div className="absolute -top-px left-0 h-px w-16 bg-accent" />
                    <h3 className="font-display text-[clamp(1.25rem,2.4vw,1.75rem)] leading-[1.1] tracking-[-0.02em] text-foreground mb-6 text-balance">
                      {activeTab.heading}
                    </h3>
                    <div className="space-y-5 text-[16px] md:text-[17px] leading-relaxed text-foreground/85 text-left">
                      {t.body.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>

                    <div className="mt-10 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <span className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                        Pasiruošę pradėti?
                      </span>
                      <a
                        href="#kontaktai"
                        className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-[12px] uppercase tracking-[0.25em] hover:bg-accent transition-colors duration-500 self-start sm:self-auto"
                      >
                        Susisiekti
                        <span className="inline-block transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

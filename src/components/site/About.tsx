import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const tabs = [
  {
    id: "profilis",
    label: "Profilis",
    num: "01",
    kicker: "Kas mes",
    heading: ["Jūsų", "komunikacijos", "partneris."],
    accent: 1,
    body: [
      "Mes esame jūsų telemarketingo, pardavimų vystymo ir verslo komunikacijos partneris. Dirbame su įmonėmis, kurioms svarbu ne tik pasiekti naujus klientus, bet ir išlaikyti esamus, geriau pažinti rinką bei užtikrinti sklandžius atsiskaitymus.",
      "Esame profesionali jūsų komandos pagalba ten, kur reikalingas tiesioginis dialogas, pasitikėjimas ir aiški komunikacija.",
    ],
    keywords: ["Dialogas", "Pasitikėjimas", "B2B", "Telefonas", "Partnerystė", "Komunikacija"],
  },
  {
    id: "sprendimai",
    label: "Sprendimai",
    num: "02",
    kicker: "Ką darome",
    heading: ["Šeši", "sprendimai,", "vienas tikslas."],
    accent: 2,
    body: [
      "Teikiame B2B pardavimų, telemarketingo, verslo susitikimų organizavimo, rinkos tyrimų, klientų išlaikymo ir mokėjimų kontrolės paslaugas.",
      "Kiekvieną kontaktą vertiname kaip galimybę kurti ilgalaikį ir vertingą verslo ryšį.",
    ],
    keywords: ["Pardavimai", "Telemarketingas", "Susitikimai", "Tyrimai", "Išlaikymas", "Mokėjimai"],
  },
  {
    id: "procesas",
    label: "Procesas",
    num: "03",
    kicker: "Kaip dirbame",
    heading: ["Analizuojame.", "Planuojame.", "Vykdome."],
    accent: 2,
    body: [
      "Pradedame nuo jūsų tikslų, auditorijos ir situacijos analizės. Parengiame komunikacijos planą, suformuojame tikslinę kontaktų bazę ir vykdome procesus pagal aiškią strategiją.",
      "Dirbame nuosekliai, orientuodamiesi į sklandžią komunikaciją ir ilgalaikį rezultatą.",
    ],
    keywords: ["Analizė", "Strategija", "Bazė", "Vykdymas", "Ataskaitos", "Optimizacija"],
  },
  {
    id: "verte",
    label: "Vertė",
    num: "04",
    kicker: "Ką gaunate",
    heading: ["Ilgalaikė", "vertė,", "ne projektas."],
    accent: 1,
    body: [
      "Dirbame kaip jūsų komandos dalis. Padedame užtikrinti sklandžius procesus, stiprinti santykius su klientais ir kurti stabilų verslo augimą.",
      "Mūsų tikslas yra ilgalaikė vertė ir patikimas bendradarbiavimas.",
    ],
    keywords: ["Augimas", "Stabilumas", "Komanda", "Rezultatas", "Patikima", "Ilgalaikiška"],
  },
];

// Word-by-word stagger reveal
function KineticHeading({
  words,
  accentIndex,
}: {
  words: string[];
  accentIndex: number;
}) {
  return (
    <h3 className="font-display text-[clamp(2rem,6vw,5rem)] leading-[0.95] tracking-[-0.03em] text-foreground flex flex-wrap gap-x-4 gap-y-1">
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          className="inline-block overflow-hidden"
        >
          <motion.span
            className={`inline-block ${
              i === accentIndex ? "italic font-light text-accent" : ""
            }`}
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              delay: 0.1 + i * 0.12,
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {w}
          </motion.span>
        </motion.span>
      ))}
    </h3>
  );
}

// Paragraph that reveals word by word
function KineticParagraph({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <p className="text-[16px] md:text-[17px] leading-relaxed text-foreground/75">
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + i * 0.015,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-[0.28em]"
        >
          {w}
        </motion.span>
      ))}
    </p>
  );
}

// Infinite vertical keyword marquee
function KeywordMarquee({ words }: { words: string[] }) {
  const loop = [...words, ...words, ...words];
  return (
    <div className="relative h-full overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
      <motion.div
        className="flex flex-col gap-6 py-6"
        animate={{ y: ["0%", "-33.333%"] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {loop.map((w, i) => (
          <div
            key={i}
            className="font-display italic text-[clamp(1.5rem,2.5vw,2.25rem)] leading-tight tracking-[-0.02em] text-foreground/15 hover:text-accent transition-colors duration-500 text-right"
          >
            {w} <span className="text-accent">·</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function About() {
  const [active, setActive] = useState(0);
  const activeTab = tabs[active] ?? tabs[0];

  return (
    <section
      id="apie"
      className="relative py-24 md:py-32 overflow-hidden bg-background"
    >
      {/* Floating ambient text */}
      <motion.div
        aria-hidden
        className="absolute -top-10 -left-10 font-display italic text-[clamp(8rem,20vw,18rem)] leading-none text-foreground/[0.025] pointer-events-none select-none"
        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        Dialogas
      </motion.div>
      <motion.div
        aria-hidden
        className="absolute bottom-10 -right-10 font-display italic text-[clamp(8rem,20vw,18rem)] leading-none text-foreground/[0.025] pointer-events-none select-none text-right"
        animate={{ x: [0, -20, 0], y: [0, 10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      >
        Vertė
      </motion.div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="h-px w-10 bg-accent" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent">
            § Apie mus
          </span>
          <span className="h-px flex-1 bg-border/40" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground tabular-nums">
            0{active + 1} / 0{tabs.length}
          </span>
        </motion.div>

        {/* Top tab bar — horizontal kinetic nav */}
        <div className="border-y border-border/40 mb-12 md:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {tabs.map((t, i) => {
              const isActive = i === active;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => {
                    if (window.matchMedia("(min-width: 1024px)").matches) {
                      setActive(i);
                    }
                  }}
                  aria-selected={isActive}
                  className="group relative px-4 md:px-6 py-6 text-left cursor-pointer border-r border-border/40 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r overflow-hidden"
                >
                  {/* progress bar fill */}
                  <motion.span
                    aria-hidden
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left"
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {/* hover wash */}
                  <motion.span
                    aria-hidden
                    className="absolute inset-0 bg-secondary/30 origin-bottom"
                    initial={false}
                    animate={{ scaleY: isActive ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="relative flex flex-col gap-2">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground tabular-nums">
                        / {t.num}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground/70 hidden md:inline">
                        {t.kicker}
                      </span>
                    </div>
                    <div className="overflow-hidden">
                      <motion.div
                        className={`font-display text-[clamp(1.125rem,2vw,1.5rem)] leading-tight transition-colors ${
                          isActive
                            ? "text-foreground"
                            : "text-foreground/55 group-hover:text-foreground/85"
                        }`}
                        animate={{ x: isActive ? 4 : 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        {t.label}
                      </motion.div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main content area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT: kinetic content */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* kinetic heading */}
                <KineticHeading
                  words={activeTab.heading}
                  accentIndex={activeTab.accent}
                />


                {/* divider */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="h-px bg-accent origin-left max-w-[120px]"
                />

                {/* kinetic paragraphs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[920px]">
                  {activeTab.body.map((p, i) => (
                    <KineticParagraph
                      key={`${activeTab.id}-${i}`}
                      text={p}
                      delay={0.55 + i * 0.15}
                    />
                  ))}
                </div>

                {/* footer */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="pt-8 border-t border-border/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    · Pasiruošę kalbėtis?
                  </span>
                  <a
                    href="#kontaktai"
                    className="group inline-flex items-center gap-3 self-start sm:self-auto bg-primary text-primary-foreground px-7 py-4 text-[12px] uppercase tracking-[0.25em] hover:bg-accent transition-colors duration-500"
                  >
                    Susisiekti
                    <motion.span
                      className="inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: vertical keyword marquee */}
          <div className="hidden lg:block lg:col-span-3 lg:border-l border-border/40 lg:pl-8 relative">
            <div className="sticky top-24 h-[520px]">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                · Žodynas
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="h-[460px]"
                >
                  <KeywordMarquee words={activeTab.keywords} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const tabs = [
  {
    id: "profilis",
    label: "Profilis",
    num: "01",
    heading: "PROFILIS",
    kicker: "Kas mes",
    body: [
      "Mes esame jūsų telemarketingo, pardavimų vystymo ir verslo komunikacijos partneris. Dirbame su įmonėmis, kurioms svarbu ne tik pasiekti naujus klientus, bet ir išlaikyti esamus, geriau pažinti rinką bei užtikrinti sklandžius atsiskaitymus. Esame profesionali jūsų komandos pagalba ten, kur reikalingas tiesioginis dialogas, pasitikėjimas ir aiški komunikacija.",
    ],
  },
  {
    id: "sprendimai",
    label: "Sprendimai",
    num: "02",
    heading: "SPRENDIMAI",
    kicker: "Ką darome",
    body: [
      "Teikiame B2B pardavimų, telemarketingo, verslo susitikimų organizavimo, rinkos tyrimų, klientų išlaikymo ir mokėjimų kontrolės paslaugas. Kiekvieną kontaktą vertiname kaip galimybę kurti ilgalaikį ir vertingą verslo ryšį.",
    ],
  },
  {
    id: "procesas",
    label: "Procesas",
    num: "03",
    kicker: "Kaip dirbame",
    heading: "PROCESAS",
    body: [
      "Pradedame nuo jūsų tikslų, auditorijos ir situacijos analizės. Parengiame komunikacijos planą, suformuojame tikslinę kontaktų bazę ir vykdome procesus pagal aiškią strategiją. Dirbame nuosekliai, orientuodamiesi į sklandžią komunikaciją ir ilgalaikį rezultatą.",
    ],
  },
  {
    id: "verte",
    label: "Vertė",
    num: "04",
    kicker: "Ką gaunate",
    heading: "VERTĖ",
    body: [
      "Dirbame kaip jūsų komandos dalis. Padedame užtikrinti sklandžius procesus, stiprinti santykius su klientais ir kurti stabilų verslo augimą. Mūsų tikslas yra ilgalaikė vertė ir patikimas bendradarbiavimas.",
    ],
  },
];

// Unique SVG visual per tab — animated line art
function TabVisual({ id }: { id: string }) {
  const common = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1 },
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as const },
  };
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
      <defs>
        <linearGradient id="g-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      {id === "profilis" && (
        <g className="text-accent">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.circle
              key={i}
              cx="200"
              cy="200"
              r={40 + i * 30}
              stroke="url(#g-accent)"
              strokeWidth="1"
              {...common}
              transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
          <motion.circle
            cx="200" cy="200" r="6"
            fill="currentColor"
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          />
        </g>
      )}

      {id === "sprendimai" && (
        <g className="text-accent" stroke="currentColor" strokeWidth="1">
          {Array.from({ length: 8 }).map((_, i) =>
            Array.from({ length: 8 }).map((_, j) => (
              <motion.rect
                key={`${i}-${j}`}
                x={40 + i * 40}
                y={40 + j * 40}
                width="32"
                height="32"
                fill={(i + j) % 3 === 0 ? "currentColor" : "transparent"}
                fillOpacity={(i + j) % 3 === 0 ? 0.15 : 0}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (i + j) * 0.03, duration: 0.5 }}
              />
            ))
          )}
        </g>
      )}

      {id === "procesas" && (
        <g className="text-accent" stroke="currentColor" strokeWidth="1.2" fill="none">
          <motion.path
            d="M 30 320 C 100 320, 130 80, 200 200 S 320 320, 370 80"
            {...common}
          />
          {[
            { x: 30, y: 320 },
            { x: 130, y: 180 },
            { x: 200, y: 200 },
            { x: 290, y: 240 },
            { x: 370, y: 80 },
          ].map((p, i) => (
            <motion.circle
              key={i}
              cx={p.x} cy={p.y} r="5"
              fill="currentColor"
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.4 }}
            />
          ))}
        </g>
      )}

      {id === "verte" && (
        <g className="text-accent">
          {[
            { x: 60, h: 80 },
            { x: 130, h: 140 },
            { x: 200, h: 200 },
            { x: 270, h: 260 },
            { x: 340, h: 320 },
          ].map((b, i) => (
            <motion.rect
              key={i}
              x={b.x - 22}
              width="44"
              fill="currentColor"
              fillOpacity={0.15 + i * 0.15}
              stroke="currentColor"
              strokeWidth="1"
              initial={{ y: 360, height: 0 }}
              animate={{ y: 360 - b.h, height: b.h }}
              transition={{ delay: i * 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
          <motion.line
            x1="20" y1="360" x2="380" y2="360"
            stroke="currentColor" strokeWidth="1"
            {...common}
          />
        </g>
      )}
    </svg>
  );
}

export function About() {
  const [active, setActive] = useState(0);
  const activeTab = tabs[active];

  return (
    <section id="apie" className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Editorial header */}
        <div className="grid grid-cols-12 gap-6 mb-16 md:mb-24 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 md:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-accent">
                Apie mus · §
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,6vw,5rem)] leading-[0.92] tracking-[-0.03em] text-foreground">
              Dirbame{" "}
              <span className="italic font-light text-accent">Jums</span>
              <br />
              ir su <span className="italic font-light">Jumis.</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="col-span-12 md:col-span-5 md:pl-8 md:border-l border-border/60"
          >
            <p className="text-[13px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
              · Keturi skyriai
            </p>
            <p className="text-[15px] leading-relaxed text-foreground/70">
              Skaitykite kaip žurnalą — kiekvienas skyrius atveria, kaip
              dirbame, ką siūlome ir kokią vertę kuriame.
            </p>
          </motion.div>
        </div>

        {/* Main editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-6">
          {/* LEFT — Vertical chapter index */}
          <div
            role="tablist"
            aria-label="Apie mus"
            className="lg:col-span-5 flex flex-col"
          >
            {tabs.map((t, i) => {
              const isActive = i === active;
              return (
                <div key={t.id} className="border-t border-border/60 last:border-b">
                  <button
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    aria-controls={`panel-${t.id}`}
                    id={`tab-${t.id}`}
                    onClick={() => setActive(isActive ? -1 : i)}
                    onMouseEnter={() => {
                      // desktop preview switch on hover
                      if (window.matchMedia("(min-width: 1024px)").matches) {
                        setActive(i);
                      }
                    }}
                    className="group relative w-full text-left py-7 md:py-8 cursor-pointer block"
                  >
                    {/* Sliding accent bar */}
                    <motion.span
                      aria-hidden
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent origin-top"
                      initial={false}
                      animate={{ scaleY: isActive ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                    {/* Hover wash */}
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 bg-secondary/40 origin-left"
                      initial={false}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />

                    <div className="relative flex items-baseline gap-6 md:gap-10 pl-6 pr-4">
                      <motion.span
                        className="font-display tabular-nums text-[clamp(2.5rem,5vw,4rem)] leading-none"
                        animate={{
                          color: isActive
                            ? "hsl(var(--accent, 0 0% 50%))"
                            : "hsl(var(--muted-foreground))",
                          x: isActive ? 4 : 0,
                        }}
                        style={{
                          color: isActive ? undefined : undefined,
                        }}
                      >
                        <span className={isActive ? "text-accent" : "text-muted-foreground/40"}>
                          {t.num}
                        </span>
                      </motion.span>

                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
                          {t.kicker}
                        </div>
                        <motion.div
                          className="font-display text-[clamp(1.25rem,2.4vw,1.875rem)] leading-tight tracking-[-0.01em]"
                          animate={{
                            x: isActive ? 6 : 0,
                          }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <span
                            className={
                              isActive
                                ? "text-foreground"
                                : "text-foreground/60 group-hover:text-foreground"
                            }
                          >
                            {t.label}
                          </span>
                        </motion.div>
                      </div>

                      <motion.span
                        aria-hidden
                        className="text-2xl text-accent shrink-0"
                        animate={{
                          rotate: isActive ? 90 : 0,
                          opacity: isActive ? 1 : 0.3,
                        }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        →
                      </motion.span>
                    </div>
                  </button>

                  {/* Mobile inline panel */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="m-panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:hidden overflow-hidden"
                      >
                        <div className="px-6 pb-8 pt-2">
                          <div className="aspect-square max-w-[260px] mx-auto mb-6 text-accent">
                            <TabVisual id={t.id} />
                          </div>
                          <div className="space-y-4 text-[15px] leading-relaxed text-foreground/85">
                            {t.body.map((p, j) => (
                              <p key={j}>{p}</p>
                            ))}
                          </div>
                          <a
                            href="#kontaktai"
                            className="mt-6 inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 text-[11px] uppercase tracking-[0.25em] hover:bg-accent transition-colors duration-500"
                          >
                            Susisiekti
                            <span>→</span>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* RIGHT — Animated visual + body (desktop) */}
          <div className="hidden lg:block lg:col-span-7 lg:pl-10 lg:border-l border-border/60">
            <div className="sticky top-24">
              <AnimatePresence mode="wait">
                {activeTab && (
                  <motion.div
                    key={activeTab.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Animated section number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <span className="h-px w-8 bg-accent" />
                        <span className="text-[10px] uppercase tracking-[0.3em] text-accent">
                          §{activeTab.num} — {activeTab.kicker}
                        </span>
                      </div>
                      <span className="font-display tabular-nums text-[11px] text-muted-foreground">
                        0{active + 1} / 0{tabs.length}
                      </span>
                    </div>

                    {/* Big animated visual */}
                    <motion.div
                      initial={{ scale: 0.92, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="relative aspect-square max-w-[420px] mb-10"
                    >
                      <TabVisual id={activeTab.id} />
                      {/* Floating tag */}
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm border border-border/60 px-3 py-1.5"
                      >
                        <span className="text-[9px] uppercase tracking-[0.28em] text-muted-foreground tabular-nums">
                          fig. {activeTab.num}
                        </span>
                      </motion.div>
                    </motion.div>

                    {/* Heading with stagger letters */}
                    <motion.h3
                      key={`${activeTab.id}-h`}
                      className="font-display text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1] tracking-[-0.02em] mb-6 text-foreground flex flex-wrap"
                    >
                      {activeTab.heading.split("").map((ch, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.1 + i * 0.04,
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          {ch}
                        </motion.span>
                      ))}
                    </motion.h3>

                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="space-y-5 text-[16px] md:text-[17px] leading-relaxed text-foreground/80 max-w-[560px]"
                    >
                      {activeTab.body.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="mt-10 pt-8 border-t border-border/60 flex items-center justify-between gap-4"
                    >
                      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                        Pasiruošę pradėti?
                      </span>
                      <a
                        href="#kontaktai"
                        className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-[12px] uppercase tracking-[0.25em] hover:bg-accent transition-colors duration-500"
                      >
                        Susisiekti
                        <span className="inline-block transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

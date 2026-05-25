import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const tabs = [
  {
    id: "profilis",
    label: "Profilis",
    code: "LINE 01",
    status: "WHO",
    heading: "Profilis",
    body: [
      "Mes esame jūsų telemarketingo, pardavimų vystymo ir verslo komunikacijos partneris. Dirbame su įmonėmis, kurioms svarbu ne tik pasiekti naujus klientus, bet ir išlaikyti esamus, geriau pažinti rinką bei užtikrinti sklandžius atsiskaitymus. Esame profesionali jūsų komandos pagalba ten, kur reikalingas tiesioginis dialogas, pasitikėjimas ir aiški komunikacija.",
    ],
    metrics: [
      { k: "Dialogas", v: "1 : 1" },
      { k: "Sektoriai", v: "B2B" },
      { k: "Patirtis", v: "10+ m." },
    ],
  },
  {
    id: "sprendimai",
    label: "Sprendimai",
    code: "LINE 02",
    status: "WHAT",
    heading: "Sprendimai",
    body: [
      "Teikiame B2B pardavimų, telemarketingo, verslo susitikimų organizavimo, rinkos tyrimų, klientų išlaikymo ir mokėjimų kontrolės paslaugas. Kiekvieną kontaktą vertiname kaip galimybę kurti ilgalaikį ir vertingą verslo ryšį.",
    ],
    metrics: [
      { k: "Paslaugų", v: "06" },
      { k: "Apimtis", v: "Pilna" },
      { k: "Kontaktai", v: "∞" },
    ],
  },
  {
    id: "procesas",
    label: "Procesas",
    code: "LINE 03",
    status: "HOW",
    heading: "Procesas",
    body: [
      "Pradedame nuo jūsų tikslų, auditorijos ir situacijos analizės. Parengiame komunikacijos planą, suformuojame tikslinę kontaktų bazę ir vykdome procesus pagal aiškią strategiją. Dirbame nuosekliai, orientuodamiesi į sklandžią komunikaciją ir ilgalaikį rezultatą.",
    ],
    metrics: [
      { k: "Etapai", v: "06" },
      { k: "Startas", v: "1–2 sav." },
      { k: "Ataskaitos", v: "Sav." },
    ],
  },
  {
    id: "verte",
    label: "Vertė",
    code: "LINE 04",
    status: "WHY",
    heading: "Vertė",
    body: [
      "Dirbame kaip jūsų komandos dalis. Padedame užtikrinti sklandžius procesus, stiprinti santykius su klientais ir kurti stabilų verslo augimą. Mūsų tikslas yra ilgalaikė vertė ir patikimas bendradarbiavimas.",
    ],
    metrics: [
      { k: "Modelis", v: "Partnerystė" },
      { k: "Fokusas", v: "Ilgalaikis" },
      { k: "Konkurentai", v: "0 sektoriuje" },
    ],
  },
];

// Live "waveform" — animated bars that breathe
function Waveform({ active, bars = 48 }: { active: boolean; bars?: number }) {
  return (
    <div className="flex items-center gap-[3px] h-16">
      {Array.from({ length: bars }).map((_, i) => {
        // pseudo-random heights that vary by position
        const base = 18 + Math.sin(i * 0.55) * 14 + Math.cos(i * 0.21) * 10;
        return (
          <motion.span
            key={i}
            className="w-[3px] rounded-full bg-accent"
            style={{ height: `${Math.max(6, base)}%` }}
            animate={
              active
                ? {
                    scaleY: [0.4, 1.4, 0.7, 1.1, 0.5],
                    opacity: [0.5, 1, 0.7, 1, 0.5],
                  }
                : { scaleY: 0.3, opacity: 0.25 }
            }
            transition={
              active
                ? {
                    duration: 1.4 + (i % 5) * 0.15,
                    repeat: Infinity,
                    delay: i * 0.04,
                    ease: "easeInOut",
                  }
                : { duration: 0.4 }
            }
          />
        );
      })}
    </div>
  );
}

// Pulse rings around the active "line"
function ConnectionPulse() {
  return (
    <div className="relative w-3 h-3">
      <span className="absolute inset-0 rounded-full bg-accent" />
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute inset-0 rounded-full border border-accent"
          animate={{ scale: [1, 2.8], opacity: [0.6, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

function useTicker() {
  const [t, setT] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export function About() {
  const [active, setActive] = useState(0);
  const activeTab = tabs[active];
  const now = useTicker();
  const clock = now.toLocaleTimeString("lt-LT", { hour12: false });

  return (
    <section
      id="apie"
      className="relative py-24 md:py-32 overflow-hidden bg-[#0a0a0a] text-[color:oklch(0.95_0.005_60)]"
    >
      {/* Background grid + scanlines */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, currentColor 0px, currentColor 1px, transparent 1px, transparent 3px)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Switchboard top bar */}
        <div className="flex items-center justify-between border border-border/40 bg-[#111]/60 backdrop-blur-sm px-4 md:px-6 py-3 mb-10 md:mb-14 font-mono">
          <div className="flex items-center gap-3 md:gap-5">
            <ConnectionPulse />
            <span className="text-[10px] md:text-[11px] tracking-[0.3em] text-accent uppercase">
              LIVE · SWITCHBOARD
            </span>
            <span className="hidden md:inline text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
              · apie mus
            </span>
          </div>
          <div className="flex items-center gap-4 md:gap-6 text-[10px] md:text-[11px] tracking-[0.25em] text-muted-foreground uppercase tabular-nums">
            <span className="hidden sm:inline">VLN</span>
            <span className="text-foreground/80">{clock}</span>
            <span>0{active + 1}/0{tabs.length}</span>
          </div>
        </div>

        {/* Editorial heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          <h2 className="font-display text-[clamp(2rem,6vw,5rem)] leading-[0.95] tracking-[-0.03em]">
            Skambiname.{" "}
            <span className="italic font-light text-accent">Klausomės.</span>{" "}
            Susitariame.
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-foreground/65">
            Keturios linijos — keturi atsakymai. Pasirinkite liniją ir
            išklausykite, kaip dirbame.
          </p>
        </motion.div>

        {/* Switchboard panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-border/40 bg-[#0d0d0d]/60 backdrop-blur-sm">
          {/* LEFT: lines list */}
          <div className="lg:col-span-5 lg:border-r border-border/40">
            {tabs.map((t, i) => {
              const isActive = i === active;
              return (
                <div
                  key={t.id}
                  className="border-b border-border/40 last:border-b-0"
                >
                  <button
                    type="button"
                    onClick={() => setActive(isActive ? -1 : i)}
                    onMouseEnter={() => {
                      if (window.matchMedia("(min-width: 1024px)").matches) {
                        setActive(i);
                      }
                    }}
                    aria-selected={isActive}
                    className="group relative w-full text-left p-5 md:p-6 cursor-pointer block"
                  >
                    {/* hover wash */}
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 bg-accent/[0.05] origin-left"
                      initial={false}
                      animate={{ scaleX: isActive ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />

                    <div className="relative flex items-center gap-4 md:gap-6">
                      {/* indicator dot */}
                      <div className="w-3 h-3 shrink-0 relative">
                        <motion.span
                          className="absolute inset-0 rounded-full"
                          animate={{
                            backgroundColor: isActive
                              ? "oklch(0.78 0.16 65)"
                              : "oklch(0.4 0 0)",
                          }}
                          transition={{ duration: 0.3 }}
                        />
                        {isActive && (
                          <motion.span
                            className="absolute inset-0 rounded-full border border-accent"
                            animate={{ scale: [1, 2.6], opacity: [0.6, 0] }}
                            transition={{
                              duration: 1.6,
                              repeat: Infinity,
                              ease: "easeOut",
                            }}
                          />
                        )}
                      </div>

                      {/* code */}
                      <span className="font-mono text-[10px] md:text-[11px] tracking-[0.25em] text-muted-foreground tabular-nums shrink-0">
                        {t.code}
                      </span>

                      {/* label */}
                      <div className="flex-1 min-w-0">
                        <div
                          className={`font-display text-[clamp(1.125rem,2vw,1.5rem)] leading-tight transition-colors ${
                            isActive
                              ? "text-foreground"
                              : "text-foreground/55 group-hover:text-foreground/80"
                          }`}
                        >
                          {t.label}
                        </div>
                      </div>

                      {/* status chip */}
                      <span
                        className={`font-mono text-[10px] tracking-[0.2em] px-2 py-1 border transition-colors ${
                          isActive
                            ? "border-accent/60 text-accent"
                            : "border-border/60 text-muted-foreground"
                        }`}
                      >
                        {t.status}
                      </span>
                    </div>

                    {/* mini waveform under each line */}
                    <div className="relative mt-4 pl-9 md:pl-11">
                      <Waveform active={isActive} bars={36} />
                    </div>
                  </button>

                  {/* mobile inline panel */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="m-panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:hidden overflow-hidden border-t border-border/40 bg-[#0a0a0a]"
                      >
                        <div className="p-6 space-y-5">
                          <div className="flex gap-3 flex-wrap">
                            {t.metrics.map((m) => (
                              <div
                                key={m.k}
                                className="border border-border/50 px-3 py-2"
                              >
                                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                                  {m.k}
                                </div>
                                <div className="font-display text-[14px] text-foreground">
                                  {m.v}
                                </div>
                              </div>
                            ))}
                          </div>
                          {t.body.map((p, j) => (
                            <p
                              key={j}
                              className="text-[15px] leading-relaxed text-foreground/80"
                            >
                              {p}
                            </p>
                          ))}
                          <a
                            href="#kontaktai"
                            className="inline-flex items-center gap-3 bg-accent text-background px-6 py-3 text-[11px] uppercase tracking-[0.25em] font-mono hover:bg-foreground transition-colors duration-500"
                          >
                            → Skambinti
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* RIGHT: live call display (desktop) */}
          <div className="hidden lg:block lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              {activeTab && (
                <motion.div
                  key={activeTab.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="p-8 md:p-10 h-full flex flex-col"
                >
                  {/* call header */}
                  <div className="flex items-center justify-between mb-8 pb-5 border-b border-border/40 font-mono">
                    <div className="flex items-center gap-3">
                      <ConnectionPulse />
                      <span className="text-[10px] tracking-[0.3em] uppercase text-accent">
                        ON AIR
                      </span>
                      <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                        · {activeTab.code} · {activeTab.status}
                      </span>
                    </div>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground tabular-nums">
                      DUR {String(active * 12 + 47).padStart(3, "0")}s
                    </span>
                  </div>

                  {/* large live waveform */}
                  <div className="mb-8">
                    <Waveform active bars={64} />
                  </div>

                  {/* metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {activeTab.metrics.map((m, i) => (
                      <motion.div
                        key={m.k}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                        className="border border-border/40 p-4 bg-[#0a0a0a]/40"
                      >
                        <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                          {m.k}
                        </div>
                        <div className="font-display text-[clamp(1rem,1.5vw,1.4rem)] text-foreground">
                          {m.v}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* transcript heading */}
                  <div className="flex items-center gap-3 mb-4 font-mono">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-accent">
                      ▸ TRANSCRIPT
                    </span>
                    <span className="h-px flex-1 bg-border/40" />
                  </div>

                  {/* body — letter stagger */}
                  <motion.h3
                    key={`${activeTab.id}-h`}
                    className="font-display text-[clamp(1.5rem,2.8vw,2.25rem)] leading-tight tracking-[-0.02em] mb-5 text-foreground flex flex-wrap"
                  >
                    {activeTab.heading.split("").map((ch, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.1 + i * 0.04,
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        {ch === " " ? "\u00A0" : ch}
                      </motion.span>
                    ))}
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="space-y-4 text-[16px] leading-relaxed text-foreground/80 max-w-[580px] mb-10"
                  >
                    {activeTab.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </motion.div>

                  {/* call-to-action */}
                  <div className="mt-auto pt-6 border-t border-border/40 flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                      · Norite išgirsti daugiau?
                    </span>
                    <a
                      href="#kontaktai"
                      className="group inline-flex items-center gap-3 bg-accent text-background px-7 py-4 text-[12px] uppercase tracking-[0.25em] font-mono hover:bg-foreground transition-colors duration-500"
                    >
                      → Skambinti mums
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

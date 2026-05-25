import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";
import { services } from "./services-data";
import servicesCall from "@/assets/services-call.jpg";

export function ServiceExplorer() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const reason: string | null = null;
  const [hovered, setHovered] = useState<number | null>(null);

  const close = () => setOpenIdx(null);
  const active = openIdx !== null ? services[openIdx] : null;

  return (
    <section id="paslaugos" className="relative py-20 md:py-24">

        <div className="relative w-full mb-16 md:mb-24 overflow-hidden">
          <div className="relative h-[320px] md:h-[440px] lg:h-[520px]">
            <img
              src={servicesCall}
              alt="Paslaugos – biuro scena su miesto vaizdu"
              className="absolute inset-y-0 right-0 h-full w-full md:w-[78%] object-cover object-right"
              loading="lazy"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to right, var(--background) 0%, var(--background) 22%, color-mix(in oklab, var(--background) 75%, transparent) 40%, transparent 58%)",
              }}
            />
            <div className="relative h-full mx-auto max-w-[1400px] px-6 md:px-20 flex items-center">
              <div className="max-w-xl">
                <p className="text-[11px] uppercase tracking-[0.3em] text-accent flex items-center gap-3 mb-6">
                  <span className="h-px w-7 bg-accent" /> Paslaugos
                </p>
                <h2 className="font-display text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.02] tracking-[-0.02em] text-foreground text-balance mb-6">
                  Sprendimai, <span className="italic text-accent">užtikrinantys jūsų verslo sklandumą</span>.
                </h2>
                <p className="text-[13px] uppercase tracking-[0.25em] text-muted-foreground">
                  Spustelėkite — atvers&nbsp;detales →
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1400px] px-6 md:px-20">
          <div className="flex items-center gap-6 mb-10 md:mb-14">
            <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground tabular-nums">
              Indeksas — 0{services.length} įrašai
            </span>
            <span className="h-px flex-1 bg-border" />
            <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground hidden md:inline">
              Spustelėkite eilutę →
            </span>
          </div>

          <ul className="relative border-t border-border">
            {services.map((s, i) => {
              const isHover = hovered === i;
              const offset = i % 2 === 0 ? "md:pr-12" : "md:pl-16";
              return (
                <li key={s.num} className="border-b border-border">
                  <motion.button
                    type="button"
                    onClick={() => setOpenIdx(i)}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className={`group relative w-full text-left overflow-hidden ${offset}`}
                  >
                    <motion.span
                      aria-hidden
                      initial={false}
                      animate={{ scaleX: isHover ? 1 : 0 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: "left" }}
                      className="absolute inset-0 bg-gradient-to-r from-accent/15 via-accent/5 to-transparent pointer-events-none"
                    />
                    <motion.span
                      aria-hidden
                      initial={false}
                      animate={{ scaleY: isHover ? 1 : 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: "top" }}
                      className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent"
                    />

                    <div className="relative flex items-baseline gap-6 md:gap-12 py-8 md:py-10 px-4 md:px-8">
                      <motion.span
                        animate={{ x: isHover ? 8 : 0 }}
                        transition={{ duration: 0.5 }}
                        className={`font-display tabular-nums text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-[-0.04em] shrink-0 w-[2.5ch] transition-colors duration-500 ${isHover ? "text-accent" : "text-muted-foreground/40"}`}
                      >
                        0{s.num}
                      </motion.span>

                      <div className="flex-1 min-w-0">
                        <p className={`text-[10px] uppercase tracking-[0.3em] mb-2 md:mb-3 transition-colors duration-500 ${isHover ? "text-accent" : "text-muted-foreground/70"}`}>
                          — {s.short}
                        </p>
                        <motion.h3
                          animate={{ x: isHover ? 6 : 0 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="font-display text-[clamp(1.125rem,2.2vw,1.875rem)] leading-[1.05] tracking-[-0.02em] text-foreground text-balance"
                        >
                          {s.title}
                        </motion.h3>
                      </div>

                      <div className="hidden lg:block w-[26%] shrink-0 overflow-hidden">
                        <AnimatePresence mode="wait">
                          {isHover && (
                            <motion.p
                              key="blurb"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 20 }}
                              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                              className="text-[12.5px] leading-relaxed text-foreground/70 line-clamp-3"
                            >
                              {s.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      <motion.span
                        animate={{ x: isHover ? 6 : 0, rotate: isHover ? -45 : 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className={`shrink-0 text-2xl md:text-3xl transition-colors duration-500 ${isHover ? "text-accent" : "text-muted-foreground/60"}`}
                      >
                        →
                      </motion.span>
                    </div>
                  </motion.button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Slide-out drawer */}
        <AnimatePresence>
          {active && (
            <>
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={close}
                className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-[3px]"
              />
              <motion.aside
                key="drawer"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-0 right-0 z-[91] h-[100dvh] w-full max-w-[640px] bg-[#0f0f0f] border-l border-border overflow-y-auto"
                aria-modal
                role="dialog"
              >
                <div className="sticky top-0 z-10 flex items-center justify-between px-8 md:px-12 py-5 bg-[#0f0f0f]/95 backdrop-blur-md border-b border-border">
                  <span className="text-[11px] uppercase tracking-[0.3em] text-accent">
                    Paslauga · {active.num} / 6
                  </span>
                  <button
                    onClick={close}
                    aria-label="Uždaryti"
                    className="text-foreground/60 hover:text-accent transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="px-8 md:px-12 py-10 md:py-14">
                  {reason && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="mb-8 flex items-start gap-4 border border-accent/40 bg-accent/5 px-5 py-4"
                    >
                      <span className="mt-1 text-[10px] uppercase tracking-[0.28em] text-accent shrink-0">
                        Kodėl ši paslauga
                      </span>
                      <p className="text-[13.5px] leading-relaxed text-foreground/85">
                        Pažymėjote iššūkį <em className="not-italic font-medium text-foreground">„{reason}"</em> —
                        ši paslauga sukurta būtent jam spręsti.
                      </p>
                    </motion.div>
                  )}
                  <motion.h3
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.6 }}
                    className="font-display text-[clamp(1.25rem,2.4vw,1.875rem)] leading-[1.02] tracking-tight text-foreground mb-6 text-balance"
                  >
                    {active.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.6 }}
                    className="text-[16px] leading-relaxed text-foreground/80 text-pretty mb-10"
                  >
                    {active.description}
                  </motion.p>

                  <ul className="space-y-1 mb-12">
                    {active.bullets.map((b, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 + j * 0.07, duration: 0.5 }}
                        className="group border-b border-border/70 py-4 flex gap-4"
                      >
                        <span className="text-[10px] tabular-nums tracking-widest text-accent mt-1 shrink-0 w-6">
                          {j + 1}
                        </span>
                        <p className="text-[14.5px] leading-relaxed">
                          <strong className="font-semibold text-foreground">{b.strong}</strong>{" "}
                          <span className="text-foreground/70">{b.rest}</span>
                        </p>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="relative bg-primary text-primary-foreground p-8 md:p-10"
                  >
                    <div className="absolute -top-px left-0 h-px w-12 bg-accent" />
                    <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-4">
                      Vertė jūsų verslui
                    </p>
                    <p className="text-[15.5px] md:text-base leading-relaxed text-primary-foreground/90 text-pretty">
                      {active.value}
                    </p>
                  </motion.div>

                  <a
                    href="#kontaktai"
                    onClick={close}
                    className="mt-10 group inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.25em] text-foreground border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors"
                  >
                    Aptarti su mūsų komanda
                    <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </section>
  );
}


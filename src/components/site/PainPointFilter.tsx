import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { painPoints, services } from "./services-data";

interface Props {
  onSelectService: (idx: number, reason: string) => void;
}

export function PainPointFilter({ onSelectService }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  const matchedIdx = selected
    ? services.findIndex((s) => s.painPoints.includes(selected))
    : -1;
  const matched = matchedIdx >= 0 ? services[matchedIdx] : null;

  const handleSelect = (p: string) => {
    if (selected === p) {
      setSelected(null);
      return;
    }
    setSelected(p);
    const idx = services.findIndex((s) => s.painPoints.includes(p));
    if (idx >= 0) {
      // Small delay so user sees the chip activate before drawer opens
      window.setTimeout(() => onSelectService(idx, p), 450);
    }
  };

  return (
    <section id="filtras" className="relative py-20 md:py-24 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-20 grid grid-cols-12 gap-y-12">
        <div className="col-span-12 md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.3em] text-accent mb-6 flex items-center gap-3">
            <span className="h-px w-7 bg-accent" /> Diagnostika
          </p>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.02] tracking-[-0.02em] text-foreground text-balance">
            Kas šiandien <span className="italic text-accent">stabdo</span> jūsų augimą?
          </h2>
          <p className="mt-6 text-[15px] text-foreground/70 max-w-sm">
            Pasirinkite vieną iššūkį — iš karto atversime jums skirtą paslaugą
            su paaiškinimu, kodėl ji rekomenduojama.
          </p>
        </div>

        <div className="col-span-12 md:col-span-8 md:pl-12">
          <div className="flex flex-wrap gap-2.5">
            {painPoints.map((p) => {
              const active = selected === p;
              return (
                <button
                  key={p}
                  onClick={() => handleSelect(p)}
                  className={`group relative text-[13px] px-5 py-3 border transition-all duration-300 ${
                    active
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-foreground/80 hover:border-primary hover:text-foreground"
                  }`}
                >
                  <span className="relative z-10">{p}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {matched && (
              <motion.div
                key={matched.num}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 border-l-2 border-accent pl-6 md:pl-8 py-6"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-3 flex items-center gap-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Atveriame paslaugą · {matched.num}
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 leading-tight">
                  {matched.title}
                </h3>
                <p className="text-[15px] text-foreground/75 max-w-xl mb-5 leading-relaxed">
                  {matched.description}
                </p>
                <button
                  onClick={() => onSelectService(matchedIdx, selected!)}
                  className="group inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-foreground border-b border-primary pb-0.5 hover:text-accent hover:border-accent transition-colors"
                >
                  Atverti dar kartą
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

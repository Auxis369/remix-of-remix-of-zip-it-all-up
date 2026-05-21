import { motion } from "motion/react";
import { Soundwave } from "./Soundwave";

export function ToneSection() {
  return (
    <section id="tonas" className="relative py-20 md:py-24 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-20 grid grid-cols-12 gap-y-12">
        <div className="col-span-12 md:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.3em] text-accent mb-6 flex items-center gap-3">
            <span className="h-px w-7 bg-accent" /> Mūsų tonas
          </p>
          <motion.h2
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.02] tracking-[-0.02em] text-foreground text-balance"
          >
            Mes esame <span className="italic text-accent">jūsų balsas</span>, kai jūs negalite kalbėti patys.
          </motion.h2>
          <p className="mt-7 text-[15.5px] leading-relaxed text-foreground/75 max-w-md">
            Kiekvienas mūsų skambutis — tai jūsų prekės ženklo pratęsimas.
            Profesionalus, ramus, dalykiškas. Be agresijos. Be skripto kvapo.
          </p>
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="relative bg-primary text-primary-foreground p-8 md:p-12"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent">
                · Live signal
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60 tabular-nums">
                00:00 / —
              </span>
            </div>
            <div className="h-32 flex items-center">
              <Soundwave bars={64} className="w-full h-full" amplitude={1.2} />
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 pt-6 border-t border-primary-foreground/15">
              {[
                { k: "Ramus", v: "tempas" },
                { k: "Dalykiškas", v: "žodynas" },
                { k: "Etiškas", v: "spaudimas" },
              ].map((x) => (
                <div key={x.k}>
                  <div className="font-display text-2xl">{x.k}</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/60 mt-1">
                    {x.v}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

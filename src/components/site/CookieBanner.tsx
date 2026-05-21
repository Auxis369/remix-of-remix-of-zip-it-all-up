import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "korre.cookie-consent.v1";

type Consent = "all" | "essential";

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (!v) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  const decide = (c: Consent) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ consent: c, ts: new Date().toISOString() }),
      );
    } catch {
      /* ignore */
    }
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-label="Slapukų sutikimas"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 z-[80]"
        >
          <div className="mx-auto max-w-[1200px] bg-primary text-primary-foreground border border-primary-foreground/15 shadow-2xl">
            <div className="px-5 md:px-7 py-5 md:py-6 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
              <div className="flex-1 text-[13px] leading-relaxed text-primary-foreground/85">
                <p className="font-display text-[14px] mb-1.5 text-primary-foreground">
                  Naudojame slapukus
                </p>
                <p>
                  Norėdami užtikrinti svetainės veikimą bei pagerinti naršymo patirtį, naudojame
                  būtinuosius ir analitinius slapukus. Daugiau informacijos —{" "}
                  <Link
                    to="/privatumo-politika"
                    className="underline underline-offset-4 hover:text-accent transition-colors"
                  >
                    Privatumo politikoje
                  </Link>
                  .
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 shrink-0">
                <button
                  onClick={() => decide("essential")}
                  className="px-5 py-2.5 text-[12px] uppercase tracking-[0.18em] border border-primary-foreground/30 hover:border-primary-foreground hover:bg-primary-foreground/5 transition-colors"
                >
                  Tik būtinieji
                </button>
                <button
                  onClick={() => decide("all")}
                  className="px-5 py-2.5 text-[12px] uppercase tracking-[0.18em] bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                >
                  Sutinku
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { motion } from "motion/react";

interface Props {
  bars?: number;
  className?: string;
  amplitude?: number;
}

export function Soundwave({ bars = 40, className = "", amplitude = 1 }: Props) {
  return (
    <div
      className={`flex items-center gap-[3px] h-12 ${className}`}
      aria-hidden
    >
      {Array.from({ length: bars }).map((_, i) => {
        // pseudo-random but stable height per bar
        const seed = Math.sin(i * 12.9898) * 43758.5453;
        const base = 0.25 + (seed - Math.floor(seed));
        const dur = 1 + ((seed * 2) - Math.floor(seed * 2)) * 1.6;
        return (
          <motion.span
            key={i}
            className="block w-[2px] bg-primary/70 rounded-full origin-center"
            initial={{ scaleY: base * 0.5 }}
            animate={{ scaleY: [base * 0.3, base * 1.3 * amplitude, base * 0.5] }}
            transition={{
              duration: dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.03,
            }}
            style={{ height: `${100 * base}%` }}
          />
        );
      })}
    </div>
  );
}

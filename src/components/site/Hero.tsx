import { Soundwave } from "./Soundwave";

export function Hero() {
  const lines = ["Jūsų komunikacijos", "PARTNERIS"];

  return (
    <section
      id="top"
      className="relative min-h-[100svh] pt-36 md:pt-44 pb-16 overflow-hidden"
    >
      <div className="absolute top-32 left-6 md:left-10 hidden md:flex flex-col gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <span className="rotate-180" style={{ writingMode: "vertical-rl" }}>
          Skambučiai · Klientų paieška · Apklausos
        </span>
      </div>

      <div className="absolute top-32 right-6 md:right-10 hidden md:block text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-right">
        Strategiškai <span className="text-accent">·</span> su kiekvienu
        <br />
        skambučiu
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-20 flex flex-col items-center text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-accent mb-8 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-accent" />
          TELEMARKETINGAS • B2B PARDAVIMAI • KOMUNIKACIJA
          <span className="h-px w-8 bg-accent" />
        </p>

        <h1 className="font-display text-balance text-[clamp(1.625rem,4vw,3.25rem)] leading-[1.05] tracking-[-0.03em] text-foreground">
          {lines.map((line, i) => (
            <span
              key={i}
              className={`block py-1 ${
                i === 1
                  ? "font-sans font-medium uppercase tracking-[0.15em] text-accent"
                  : ""
              }`}
            >
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-12 max-w-2xl text-[17px] md:text-lg leading-relaxed text-foreground/80 text-pretty">
          Suprantame, kad sėkmingam verslui reikalingas nuolatinis
          komunikacinis įdirbis. Mes perimame šiuos kasdienius procesus į savo
          rankas: užtikriname profesionalų jūsų įmonės atstovavimą.
        </p>

        <div className="mt-12 flex flex-col items-center gap-6">
          <a
            href="#paslaugos"
            className="group inline-flex items-center gap-4 bg-accent text-accent-foreground px-8 py-5 text-[12px] uppercase tracking-[0.25em] hover:bg-accent/90 transition-colors duration-500 shadow-[0_8px_32px_-12px_color-mix(in_oklab,var(--accent)_60%,transparent)]"
          >
            Paslaugos
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <div className="flex items-center gap-4 self-start">
            <Soundwave bars={28} className="w-32" amplitude={0.7} barClassName="bg-red-500" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-red-500 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Live · 8:00–17:00
            </span>
          </div>
        </div>
      </div>

      {/* Bottom marquee strip */}
      <div className="absolute bottom-6 left-0 right-0 mx-auto max-w-[1400px] px-6 md:px-20 flex items-end justify-between text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
        <a href="#paslaugos" className="hover:text-accent transition-colors">
          ↓ Pradėkite čia
        </a>
        <div className="hidden md:flex gap-8">
          <span>
            <span className="text-foreground text-base font-medium">B2B</span>
            <br />
            fokusas
          </span>
          <span>
            <span className="text-foreground text-base font-medium">BDAR</span>
            <br />
            atitiktis
          </span>
          <span>
            <span className="text-foreground text-base font-medium">Greitas</span>
            <br />
            startas
          </span>
        </div>
      </div>
    </section>
  );
}

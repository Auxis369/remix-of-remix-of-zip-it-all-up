import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const CONTACT_PHONE = "+370 600 12345";
const CONTACT_PHONE_HREF = "tel:+37060012345";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Build service slugs that match section ids
  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-background/75 backdrop-blur-xl border-b border-border/70"
            : "py-6"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between gap-6">
          <a href="#top" className="flex items-baseline gap-1.5 group">
            <span className="font-display text-[20px] leading-none tracking-[-0.02em] text-foreground">
              Korre
            </span>
            <span className="font-display italic text-[20px] leading-none text-accent">·</span>
          </a>

          <nav className="hidden md:flex items-center gap-9 text-[15px] uppercase tracking-[0.18em] font-medium text-accent leading-none">
            <a href="#paslaugos" className="hover:text-foreground transition-colors">
              Paslaugos
            </a>
            <a href="#apie" className="hover:text-foreground transition-colors">
              Apie mus
            </a>
            <a href="#duk" className="hover:text-foreground transition-colors">
              DUK
            </a>
            <a href="#kontaktai" className="hover:text-foreground transition-colors">
              Kontaktai
            </a>
          </nav>

          <div className="flex items-center gap-5">
            <a
              href={CONTACT_PHONE_HREF}
              className="hidden lg:inline-flex items-center gap-2 text-[12px] tracking-wide text-foreground/80 hover:text-accent transition-colors"
            >
              <Phone size={14} strokeWidth={1.5} />
              {CONTACT_PHONE}
            </a>
            <a
              href="#kontaktai"
              className="hidden md:inline-flex group items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-foreground border-b border-primary/40 hover:border-accent hover:text-accent pb-0.5 transition-colors"
            >
              Susisiekti
              <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              type="button"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-foreground hover:text-accent transition-colors"
              aria-label="Atidaryti meniu"
              aria-expanded={mobileOpen}
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — always in DOM, CSS toggled */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-[60] bg-background transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-border/60">
          <span className="font-display text-[20px] leading-none tracking-[-0.02em] text-foreground">
            Korre <span className="italic text-accent">·</span>
          </span>
          <button
            onClick={closeMobile}
            type="button"
            className="inline-flex items-center justify-center w-10 h-10 -mr-2 text-foreground hover:text-accent transition-colors"
            aria-label="Uždaryti meniu"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>
        <nav className="px-6 pt-10 flex flex-col gap-7 text-[22px] uppercase tracking-[0.18em] font-medium text-accent">
          <a href="#paslaugos" onClick={closeMobile} className="hover:text-foreground transition-colors">
            Paslaugos
          </a>
          <a href="#apie" onClick={closeMobile} className="hover:text-foreground transition-colors">
            Apie mus
          </a>
          <a href="#duk" onClick={closeMobile} className="hover:text-foreground transition-colors">
            DUK
          </a>
          <a
            href="#kontaktai"
            onClick={closeMobile}
            className="hover:text-foreground transition-colors"
          >
            Kontaktai
          </a>
        </nav>
        <div className="px-6 mt-12 flex flex-col gap-6">
          <a
            href="#kontaktai"
            onClick={closeMobile}
            className="self-start inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-foreground border-b border-primary/40 hover:border-accent hover:text-accent pb-0.5 transition-colors"
          >
            Susisiekti
            <span>→</span>
          </a>
          <a
            href={CONTACT_PHONE_HREF}
            className="inline-flex items-center gap-2 text-[14px] text-foreground/80 hover:text-accent transition-colors"
          >
            <Phone size={16} strokeWidth={1.5} />
            {CONTACT_PHONE}
          </a>
        </div>
      </div>
    </>
  );
}

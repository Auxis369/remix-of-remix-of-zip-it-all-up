import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-transparent text-foreground/70 border-t border-border">
      <div className="mx-auto max-w-[1400px] px-6 md:px-20 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[11px] uppercase tracking-[0.25em]">
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-lg normal-case tracking-tight text-primary-foreground">
            Korre
          </span>
          <span className="text-accent">·</span>
        </div>

        <nav className="flex flex-wrap items-center gap-x-7 gap-y-3">
          <Link
            to="/privatumo-politika"
            className="hover:text-accent transition-colors"
          >
            Privatumo politika
          </Link>
          <Link to="/taisykles" className="hover:text-accent transition-colors">
            Taisyklės
          </Link>
          <a href="#kontaktai" className="hover:text-accent transition-colors">
            Kontaktai
          </a>
        </nav>

        <p className="text-primary-foreground/55 normal-case tracking-normal text-[12px]">
          © {new Date().getFullYear()} Korre. Visos teisės saugomos.
        </p>
      </div>
    </footer>
  );
}

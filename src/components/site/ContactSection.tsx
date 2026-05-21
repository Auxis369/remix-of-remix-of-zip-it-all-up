import { motion } from "motion/react";
import { Phone, Mail, MapPin } from "lucide-react";
import contactOffice from "@/assets/contact-office.jpg";

const CONTACT = {
  phone: "+370 600 12345",
  phoneHref: "tel:+37060012345",
  email: "labas@callflow.lt",
  address: "Gedimino pr. 20, LT-01103 Vilnius",
  hours: "I–V · 08:00–17:00",
};

export function ContactSection() {
  return (
    <section
      id="kontaktai"
      className="relative pt-28 md:pt-40 pb-0 border-t border-border bg-transparent text-foreground overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-accent mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-accent" /> Kontaktai <span className="h-px w-7 bg-accent" />
          </p>
          <motion.h2
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="font-display text-[clamp(1.5rem,3.5vw,2.75rem)] leading-[1.02] tracking-[-0.02em] text-balance"
          >
            Aptarkime jūsų tikslus <br />
            <span className="italic text-accent">ir suraskime optimalų sprendimą.</span>
          </motion.h2>
          <p className="mt-7 text-[15.5px] leading-relaxed text-primary-foreground/70 max-w-md mx-auto">
            Įvertinsime jūsų situaciją bei poreikius ir kartu išgryninsime abipusiškai naudingą bendradarbiavimo modelį.
          </p>
        </div>

        <div className="mt-14 md:mt-20 -mb-px grid grid-cols-1 lg:grid-cols-3 gap-px bg-primary-foreground/15 border border-primary-foreground/15">
          <a
            href={CONTACT.phoneHref}
            className="group bg-primary p-5 md:p-6 lg:p-7 hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-4 min-w-0"
          >
            <div className="shrink-0 w-10 h-10 rounded-full border border-accent/40 flex items-center justify-center text-accent group-hover:border-accent-foreground/30 group-hover:text-accent-foreground transition-colors">
              <Phone size={16} strokeWidth={1.5} className="icon-hover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] uppercase tracking-[0.22em] text-accent group-hover:text-accent-foreground/70 truncate">
                Skambinkite
              </div>
              <div className="font-display text-[15px] lg:text-[16px] leading-tight tracking-tight truncate">
                {CONTACT.phone}
              </div>
            </div>
            <span className="shrink-0 text-xs opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">→</span>
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="group bg-primary p-5 md:p-6 lg:p-7 hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-4 min-w-0"
          >
            <div className="shrink-0 w-10 h-10 rounded-full border border-accent/40 flex items-center justify-center text-accent group-hover:border-accent-foreground/30 group-hover:text-accent-foreground transition-colors">
              <Mail size={16} strokeWidth={1.5} className="icon-hover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] uppercase tracking-[0.22em] text-accent group-hover:text-accent-foreground/70 truncate">
                Rašykite
              </div>
              <div className="font-display text-[15px] lg:text-[16px] leading-tight tracking-tight truncate">
                {CONTACT.email}
              </div>
            </div>
            <span className="shrink-0 text-xs opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">→</span>
          </a>

          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`}
            target="_blank"
            rel="noreferrer"
            className="group bg-primary p-5 md:p-6 lg:p-7 hover:bg-accent hover:text-accent-foreground transition-colors flex items-center gap-4 min-w-0"
          >
            <div className="shrink-0 w-10 h-10 rounded-full border border-accent/40 flex items-center justify-center text-accent group-hover:border-accent-foreground/30 group-hover:text-accent-foreground transition-colors">
              <MapPin size={16} strokeWidth={1.5} className="icon-hover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] uppercase tracking-[0.22em] text-accent group-hover:text-accent-foreground/70 truncate">
                Aplankykite
              </div>
              <div className="font-display text-[15px] lg:text-[16px] leading-tight tracking-tight truncate">
                {CONTACT.address}
              </div>
            </div>
            <span className="shrink-0 text-xs opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { ServiceExplorer } from "@/components/site/ServiceExplorer";
import { About } from "@/components/site/About";
import { Faq } from "@/components/site/Faq";
import { ContactSection } from "@/components/site/ContactSection";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { CookieBanner } from "@/components/site/CookieBanner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Korre — B2B telemarketingas, apklausos ir pardavimų partneriai" },
      {
        name: "description",
        content:
          "Premium B2B telemarketingo ir rinkos tyrimų agentūra Lietuvoje. Šalti skambučiai, B2B susitikimai, mokėjimų kontrolė, klientų išlaikymas. Perimame procesus — jūs koncentruojatės į rezultatus.",
      },
      { property: "og:title", content: "Korre — B2B telemarketingo agentūra" },
      {
        property: "og:description",
        content:
          "Tylus balsas už jūsų garsiausių pardavimų. B2B telemarketingas, apklausos, mokėjimų kontrolė ir klientų išlaikymas.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Korre — B2B telemarketingo agentūra" },
      {
        name: "twitter:description",
        content: "Tylus balsas už jūsų garsiausių pardavimų.",
      },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Ar jūsų kainodara lanksti?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Taikome kelis modelius: fiksuotą mėnesinį mokestį, mokestį už pasiektą rezultatą arba mišrų variantą. Konkrečią kainodarą suformuojame įvertinę jūsų tikslus ir apimtis.",
              },
            },
            {
              "@type": "Question",
              name: "Su kokio dydžio įmonėmis dirbate?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Dirbame su įvairaus dydžio įmonėmis, nuo startuolių iki didelių organizacijų. Sprendimus pritaikome pagal kiekvieno kliento poreikius ir tikslus.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative bg-transparent text-foreground overflow-x-hidden">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <ServiceExplorer />
        <Faq />
        <ContactSection />
      </main>
      <Footer />
      <CookieBanner />
      <Toaster />
    </div>
  );
}

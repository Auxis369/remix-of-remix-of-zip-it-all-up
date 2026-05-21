import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/taisykles")({
  head: () => ({
    meta: [
      { title: "Naudojimosi taisyklės — Korre" },
      {
        name: "description",
        content:
          "Korre svetainės naudojimosi taisyklės: paslaugų sąlygos, atsakomybė, intelektinė nuosavybė.",
      },
      { property: "og:title", content: "Naudojimosi taisyklės — Korre" },
      {
        property: "og:description",
        content: "Korre svetainės ir paslaugų naudojimosi sąlygos.",
      },
      { property: "og:url", content: "/taisykles" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "/taisykles" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="bg-background text-primary min-h-screen">
      <div className="mx-auto max-w-3xl px-6 md:px-10 pt-32 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-accent hover:text-primary transition-colors mb-10"
        >
          ← Į pradžią
        </Link>

        <h1 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight tracking-[-0.02em] text-balance">
          Naudojimosi taisyklės
        </h1>
        <p className="mt-4 text-[13px] uppercase tracking-[0.22em] text-muted-foreground">
          Atnaujinta {new Date().getFullYear()} m.
        </p>

        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-foreground/85">
          <section>
            <h2 className="font-display text-[20px] text-primary mb-3">1. Bendrosios nuostatos</h2>
            <p>
              Šios taisyklės reglamentuoja naudojimąsi „Korre" svetaine. Naudodamiesi svetaine,
              patvirtinate, kad susipažinote ir sutinkate su šiomis taisyklėmis. Jeigu nesutinkate,
              prašome svetaine nesinaudoti.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] text-primary mb-3">
              2. Paslaugų aprašymas
            </h2>
            <p>
              Svetainėje pateikiama informacija apie „Korre" teikiamas B2B telemarketingo,
              rinkos tyrimų bei pardavimų paramos paslaugas. Tiksli paslaugų apimtis, kaina ir
              sąlygos suderinami atskirai sudaromoje sutartyje.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] text-primary mb-3">
              3. Naudotojo įsipareigojimai
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pateikti teisingus ir tikslius duomenis kontaktų formoje;</li>
              <li>
                Nesinaudoti svetaine neteisėtais tikslais ar tokiu būdu, kuris pažeistų trečiųjų
                asmenų teises;
              </li>
              <li>Nesiųsti šlamšto, virusų ar kenksmingo kodo;</li>
              <li>Nemėginti pažeisti svetainės saugumo priemonių.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[20px] text-primary mb-3">
              4. Intelektinė nuosavybė
            </h2>
            <p>
              Visas svetainės turinys (tekstai, grafika, logotipai, dizainas) yra „Korre" arba
              jos licencijų davėjų nuosavybė ir yra saugomas autorių teisių bei kitų
              intelektinės nuosavybės įstatymų. Be raštiško leidimo turinys negali būti
              kopijuojamas, platinamas ar naudojamas komerciniais tikslais.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] text-primary mb-3">5. Atsakomybės ribojimas</h2>
            <p>
              Svetainės informacija pateikiama „kaip yra" be jokių garantijų. Stengiamės
              užtikrinti svetainės veikimą, tačiau negarantuojame jos nepertraukiamo veikimo ir
              neprisiimame atsakomybės už netiesioginę žalą, atsiradusią dėl naudojimosi
              svetaine. Mūsų atsakomybė pagal sutartį visada apribota suma, kurią klientas
              sumokėjo už atitinkamas paslaugas.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] text-primary mb-3">
              6. Asmens duomenys ir slapukai
            </h2>
            <p>
              Asmens duomenis tvarkome pagal{" "}
              <Link
                to="/privatumo-politika"
                className="text-accent underline underline-offset-4 hover:text-primary transition-colors"
              >
                Privatumo politiką
              </Link>
              . Naudodamiesi svetaine taip pat sutinkate su mūsų slapukų naudojimo sąlygomis.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] text-primary mb-3">
              7. Taisyklių pakeitimai
            </h2>
            <p>
              Pasiliekame teisę bet kuriuo metu keisti šias taisykles. Pakeitimai įsigalioja nuo
              jų paskelbimo svetainėje momento. Tolesnis naudojimasis svetaine reiškia sutikimą
              su atnaujintomis taisyklėmis.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] text-primary mb-3">
              8. Taikytina teisė
            </h2>
            <p>
              Šioms taisyklėms taikoma Lietuvos Respublikos teisė. Ginčai sprendžiami
              derybomis, o nepavykus susitarti — kompetentinguose Lietuvos Respublikos teismuose.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

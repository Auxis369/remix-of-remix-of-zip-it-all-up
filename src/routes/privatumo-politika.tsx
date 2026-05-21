import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privatumo-politika")({
  head: () => ({
    meta: [
      { title: "Privatumo politika — Korre" },
      {
        name: "description",
        content:
          "Korre privatumo politika. Asmens duomenų tvarkymo principai pagal BDAR (GDPR).",
      },
      { property: "og:title", content: "Privatumo politika — Korre" },
      {
        property: "og:description",
        content: "Asmens duomenų tvarkymo principai pagal BDAR.",
      },
      { property: "og:url", content: "/privatumo-politika" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "/privatumo-politika" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
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
          Privatumo politika
        </h1>
        <p className="mt-4 text-[13px] uppercase tracking-[0.22em] text-muted-foreground">
          Atnaujinta {new Date().getFullYear()} m.
        </p>

        <div className="mt-12 space-y-10 text-[15px] leading-relaxed text-foreground/85">
          <section>
            <h2 className="font-display text-[20px] text-primary mb-3">1. Bendroji informacija</h2>
            <p>
              Ši privatumo politika nustato, kaip „Korre" (toliau – „mes" arba „Duomenų valdytojas")
              renka, naudoja, saugo ir kitaip tvarko jūsų asmens duomenis, kai naudojatės mūsų
              svetaine arba kreipiatės dėl mūsų paslaugų. Asmens duomenys tvarkomi vadovaujantis
              ES Bendruoju duomenų apsaugos reglamentu (BDAR / GDPR) ir Lietuvos Respublikos
              Asmens duomenų teisinės apsaugos įstatymu.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] text-primary mb-3">
              2. Duomenų valdytojo kontaktai
            </h2>
            <p>
              Visais asmens duomenų tvarkymo klausimais galite kreiptis el. paštu{" "}
              <a
                href="mailto:labas@callflow.lt"
                className="text-accent underline underline-offset-4 hover:text-primary transition-colors"
              >
                labas@callflow.lt
              </a>{" "}
              arba telefonu +370 600 12345.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] text-primary mb-3">
              3. Kokius duomenis renkame
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vardas, el. pašto adresas, telefono numeris (kai naudojatės kontaktų forma);</li>
              <li>Įmonės pavadinimas ir užklausos turinys;</li>
              <li>
                Techniniai duomenys: IP adresas, naršyklės tipas, apsilankymo data ir laikas,
                peržiūrėti puslapiai (rinkome per slapukus);
              </li>
              <li>Susirašinėjimo turinys, kai bendraujate el. paštu ar telefonu.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[20px] text-primary mb-3">
              4. Duomenų tvarkymo tikslai ir teisinis pagrindas
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Atsakymas į užklausą</strong> — pagrindas: jūsų sutikimas (BDAR 6 str. 1 d.
                a p.) ir veiksmai prieš sutarties sudarymą (BDAR 6 str. 1 d. b p.);
              </li>
              <li>
                <strong>Sutarties vykdymas</strong> — kai sudarome bendradarbiavimo sutartį
                (BDAR 6 str. 1 d. b p.);
              </li>
              <li>
                <strong>Teisės aktų reikalavimų vykdymas</strong> — apskaita, mokesčiai
                (BDAR 6 str. 1 d. c p.);
              </li>
              <li>
                <strong>Svetainės veikimo užtikrinimas</strong> — teisėtas interesas
                (BDAR 6 str. 1 d. f p.).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[20px] text-primary mb-3">5. Duomenų saugojimas</h2>
            <p>
              Užklausų duomenys saugomi iki 12 mėn. nuo paskutinio kontakto. Sutarties duomenys —
              10 metų po sutarties pabaigos (apskaitos reikalavimai). Slapukų duomenys — pagal
              kiekvieno slapuko galiojimą (iki 24 mėn.).
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] text-primary mb-3">6. Duomenų gavėjai</h2>
            <p>
              Duomenys gali būti perduodami tik patikimiems duomenų tvarkytojams: el. pašto ir
              prieglobos paslaugų teikėjams, IT priežiūros tiekėjams, buhalterinę apskaitą
              tvarkančioms įmonėms. Duomenų už ES/EEE ribų neperduodame, nebent užtikrinamos
              tinkamos apsaugos priemonės pagal BDAR.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] text-primary mb-3">7. Jūsų teisės</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Susipažinti su tvarkomais savo asmens duomenimis;</li>
              <li>Reikalauti ištaisyti netikslius duomenis;</li>
              <li>Reikalauti ištrinti duomenis („teisė būti pamirštam");</li>
              <li>Apriboti duomenų tvarkymą;</li>
              <li>Į duomenų perkeliamumą;</li>
              <li>Nesutikti su duomenų tvarkymu;</li>
              <li>Atšaukti sutikimą bet kuriuo metu;</li>
              <li>
                Pateikti skundą Valstybinei duomenų apsaugos inspekcijai (
                <a
                  href="https://vdai.lrv.lt"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent underline underline-offset-4 hover:text-primary transition-colors"
                >
                  vdai.lrv.lt
                </a>
                ).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-[20px] text-primary mb-3">8. Slapukai</h2>
            <p>
              Naudojame būtinuosius slapukus svetainės veikimui ir analitinius slapukus
              naudotojų patirčiai gerinti. Slapukų sutikimą galite valdyti per pasirodantį
              banerį arba savo naršyklės nustatymus.
            </p>
          </section>

          <section>
            <h2 className="font-display text-[20px] text-primary mb-3">9. Politikos pakeitimai</h2>
            <p>
              Šią politiką galime atnaujinti. Aktuali versija visada skelbiama šiame puslapyje.
              Esminius pakeitimus paskelbsime svetainės pradžioje arba el. paštu.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

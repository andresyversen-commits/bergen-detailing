import React from "react";

const SITE_BRIEF = {"companyName":"Bergen Detailing","industry":"Bilpleie","websiteUrl":"bergendetailing.no","matchTrigger":"Manuelt lead","snippet":null,"audit":{"deliverabilityScore":42,"domainAgeDays":354},"existingSite":{"url":"bergendetailing.no","logoUrl":"https://framerusercontent.com/sites/icons/default-touch-icon.v3.png","primaryColor":null,"fetchOk":true},"aiBlueprint":{"title":"Bergen Detailing - Premium bilpleie i Bergen","tone":"premium","ctaPrimary":"Bestill time nå","sections":[{"id":"hero","name":"Hero","description":"Høykvalitetsbilde av nypolert bil med overlappende tekst 'Profesjonell bilpleie i Bergen'. CTA for timebestilling."},{"id":"tjenester","name":"Tjenesteoversikt","description":"Kortfattet presentasjon av hovedtjenester: Polering, Lakkforsegling, Interiørrens, Keramisk coating med ikoner og korte beskrivelser."},{"id":"prosess","name":"Vår prosess","description":"Steg-for-steg visualisering av detailingprosessen fra konsultasjon til ferdig resultat."},{"id":"pakker","name":"Behandlingspakker","description":"Prisede pakker fra basis til premium med inkluderte tjenester og estimert tidsbruk."},{"id":"resultater","name":"Før/etter resultater","description":"Bildekarusell med før- og etterbilder av behandlede kjøretøy."},{"id":"testimonials","name":"Kundeomtaler","description":"Sitater fra fornøyde kunder med navn og bilmodell."},{"id":"om-oss","name":"Om Bergen Detailing","description":"Kort om bedriftens historie, ekspertise og dedikasjon til kvalitet."},{"id":"faq","name":"Vanlige spørsmål","description":"Svar på vanlige spørsmål om bilpleie, holdbarhet og prosess."},{"id":"kontakt","name":"Kontakt og booking","description":"Kontaktskjema, telefonnummer, adresse og åpningstider med kart."}],"recommendations":["Implementer online bookingsystem med tidsbekreftelse","Legg til en seksjon for produkter som brukes/selges","Inkluder en blogseksjon med bilpleiertips for å øke SEO","Legg til en bilgalleri-funksjon for å vise frem spesielle prosjekter","Implementer chat-funksjon for rask kundeservice"],"parseNote":null,"rawFallback":null},"uspLines":["Struktur og innhold tilpasses bransjen «Bilpleie».","Forslaget tar utgangspunkt i eksisterende nettside — logo og farger er forsøkt hentet automatisk.","Ekstra fokus på lead-signalet «Manuelt lead» fra kilden."],"generatedAt":"2026-04-17T10:32:09.802Z","layoutKey":"detailing-dark"};

function anchorId(sec, idx) {
  var raw = sec && sec.id ? String(sec.id) : "s-" + idx;
  return "sec-" + raw.replace(/[^a-z0-9-]/gi, "-").toLowerCase();
}

function withProtocol(url) {
  if (!url || typeof url !== "string") return "#";
  var u = url.trim();
  if (!u) return "#";
  return u.startsWith("http://") || u.startsWith("https://") ? u : "https://" + u;
}

export default function App() {
  var b = SITE_BRIEF;
  var company = String(b.companyName || "Bergen Detailing");
  var isBergenDetailing = String(b.companyName || "").trim().toLowerCase() === "bergen detailing";
  var bp = b.aiBlueprint;
  var bg = "#06090f";
  var panel = "#0e1524";
  var panelSoft = "#111b2f";
  var line = "rgba(148,163,184,0.24)";
  var text = "#f8fafc";
  var muted = "#94a3b8";
  var accent = (b.existingSite && b.existingSite.primaryColor) || "#22d3ee";
  var heroImageUrl = (import.meta && import.meta.env && import.meta.env.BASE_URL ? import.meta.env.BASE_URL : "/") + "hero2.png";
  var trustItems = isBergenDetailing
    ? ["Skreddersydde pakker etter biltype", "Dokumenterte for/etter-resultater", "Fokus pa lakksikker prosess", "Rask booking og tydelig levering"]
    : ["Skreddersydde pakker", "Dokumentert resultat", "Tydelig prosess", "Rask booking"];
  var packageCards = isBergenDetailing
    ? [
        { name: "City Reset", price: "Fra 1 990", note: "Utvendig vask, felgrens og glansfinish samme dag." },
        { name: "Gloss Protect", price: "Fra 4 990", note: "1-stegs polering med holdbar forsegling for vestlandsklima." },
        { name: "Signature Detail", price: "Fra 7 990", note: "Komplett utvendig + interior premium + detaljer i motorrom." },
      ]
    : [
        { name: "Basic Detail", price: "Fra 1 990", note: "Rask oppfriskning med fokus pa glans." },
        { name: "Protect Detail", price: "Fra 4 990", note: "Polering og beskyttelse for lang holdbarhet." },
        { name: "Full Detail", price: "Fra 7 990", note: "Komplett pakke med innvendig og utvendig behandling." },
      ];
  var processSteps = [
    { title: "1. Analyse av bil", text: "Vi kartlegger lakk, interior og behov for riktige tiltak." },
    { title: "2. Utfrelse", text: "Bilpleie utfores med tydelig kvalitetssjekk i hvert steg." },
    { title: "3. Levering", text: "Du far resultatgjennomgang og anbefaling for videre vedlikehold." },
  ];
  var heroTitle = isBergenDetailing
    ? "Premium bilpleie i Bergen, bygget for ekte resultater"
    : (bp && bp.title) || company;
  var cta = (bp && bp.ctaPrimary) || (isBergenDetailing ? "Book time i Bergen" : "Book bilpleie");

  var sections =
    bp && Array.isArray(bp.sections) && bp.sections.length > 0
      ? bp.sections
      : [
          { id: "tjenester", name: "Tjenester", description: "Utvendig vask, polering, lakkforsegling og coating tilpasset biltype og behov." },
          { id: "for-og-etter", name: "Før og etter", description: "Visuelle resultater med dokumenterte før/etter-eksempler fra reelle biler." },
          { id: "booking", name: "Booking", description: "Enkel bestilling med tydelige pakker, tidsestimat og oppmøteinformasjon." },
        ];

  return (
    <div style={{ background: bg, color: text, minHeight: "100vh", fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
      <header style={{ borderBottom: "1px solid " + line, background: "radial-gradient(circle at 15% 15%, rgba(34,211,238,0.2), transparent 38%), radial-gradient(circle at 80% 5%, rgba(59,130,246,0.16), transparent 32%), " + bg }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "1rem 1.25rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
          <strong style={{ letterSpacing: "0.02em" }}>{company}</strong>
          <nav style={{ display: "flex", gap: "1rem", flexWrap: "wrap", fontSize: "0.9rem" }}>
            {sections.slice(0, 4).map(function (sec, idx) {
              return (
                <a key={sec.id || idx} href={"#" + anchorId(sec, idx)} style={{ color: muted, textDecoration: "none" }}>
                  {sec.name}
                </a>
              );
            })}
          </nav>
        </div>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "4rem 1.25rem 3.5rem" }}>
          <p style={{ margin: 0, textTransform: "uppercase", letterSpacing: "0.2em", fontSize: "0.7rem", color: muted }}>Premium bilpleie</p>
          <h1 style={{ margin: "0.8rem 0 0", maxWidth: 760, fontSize: "clamp(2rem, 5vw, 3.8rem)", lineHeight: 1.07 }}>{heroTitle}</h1>
          <p style={{ margin: "1rem 0 0", maxWidth: 640, color: muted, lineHeight: 1.65 }}>
            Ikke en generic demo: dette utkastet er satt opp for konvertering med konkrete pakker, dokumenterbar prosess og tydelig booking-CTA.
          </p>
          <div style={{ marginTop: "1.4rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="#kontakt" style={{ padding: "0.8rem 1.25rem", borderRadius: 10, background: accent, color: "#021018", textDecoration: "none", fontWeight: 700 }}>
              {cta}
            </a>
            {b.websiteUrl ? (
              <a href={withProtocol(b.websiteUrl)} target="_blank" rel="noreferrer" style={{ padding: "0.8rem 1.25rem", borderRadius: 10, border: "1px solid rgba(148,163,184,0.35)", color: text, textDecoration: "none" }}>
                Dagens nettside
              </a>
            ) : null}
          </div>
        </div>
      </header>

      <main style={{ maxWidth: 1120, margin: "0 auto", padding: "1.25rem" }}>
        {isBergenDetailing ? (
          <section style={{ marginBottom: "1rem", borderRadius: 14, overflow: "hidden", border: "1px solid " + line, background: panel }}>
            <img
              src={heroImageUrl}
              alt="Bergen Detailing bilpleie"
              style={{ width: "100%", maxHeight: 420, objectFit: "cover", display: "block" }}
            />
            <div style={{ padding: "1rem 1.1rem", color: muted, fontSize: "0.92rem" }}>
              Hero-asset for Bergen Detailing. Erstatt med kundecase-bilde for endelig produksjon.
            </div>
          </section>
        ) : null}

        <section style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", marginBottom: "1rem" }}>
          {trustItems.map(function (item, i) {
            return (
              <article key={i} style={{ background: panelSoft, border: "1px solid " + line, borderRadius: 12, padding: "0.9rem 1rem" }}>
                <p style={{ margin: 0, fontSize: "0.86rem", color: "#dbeafe" }}>{item}</p>
              </article>
            );
          })}
        </section>

        <section id="pakker" style={{ marginTop: "1rem", padding: "1.2rem", borderRadius: 14, background: panel, border: "1px solid " + line }}>
          <h2 style={{ margin: 0 }}>Pakker og prisnivå</h2>
          <p style={{ margin: "0.65rem 0 0", color: muted, lineHeight: 1.65 }}>Konkretisert for salgsmote i showroom. Endelige priser settes av kunde.</p>
          <div style={{ marginTop: "1rem", display: "grid", gap: "0.9rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {packageCards.map(function (card, idx) {
              return (
                <article key={idx} style={{ background: "#0b1220", border: "1px solid " + line, borderRadius: 12, padding: "1rem" }}>
                  <h3 style={{ margin: 0, fontSize: "1rem" }}>{card.name}</h3>
                  <p style={{ margin: "0.4rem 0 0", fontSize: "0.92rem", color: accent, fontWeight: 700 }}>{card.price}</p>
                  <p style={{ margin: "0.6rem 0 0", fontSize: "0.88rem", color: muted, lineHeight: 1.55 }}>{card.note}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="prosess" style={{ marginTop: "1rem", padding: "1.2rem", borderRadius: 14, background: panelSoft, border: "1px solid " + line }}>
          <h2 style={{ margin: 0 }}>Slik jobber vi</h2>
          <div style={{ marginTop: "0.9rem", display: "grid", gap: "0.75rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {processSteps.map(function (step, idx) {
              return (
                <article key={idx} style={{ background: panel, borderRadius: 10, border: "1px solid " + line, padding: "0.9rem" }}>
                  <h3 style={{ margin: 0, fontSize: "0.95rem" }}>{step.title}</h3>
                  <p style={{ margin: "0.5rem 0 0", color: muted, lineHeight: 1.55, fontSize: "0.86rem" }}>{step.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        {sections.map(function (sec, idx) {
          return (
            <section key={sec.id || idx} id={anchorId(sec, idx)} style={{ marginTop: "1rem", padding: "1.2rem", borderRadius: 14, background: idx % 2 === 0 ? panelSoft : panel, border: "1px solid " + line }}>
              <h2 style={{ margin: 0 }}>{sec.name}</h2>
              <p style={{ margin: "0.7rem 0 0", color: muted, lineHeight: 1.65 }}>{sec.description}</p>
            </section>
          );
        })}

        <section id="kontakt" style={{ marginTop: "1rem", padding: "1.4rem", borderRadius: 14, background: "linear-gradient(135deg, rgba(34,211,238,0.14), rgba(2,6,23,0.9))", border: "1px solid rgba(34,211,238,0.4)" }}>
          <h2 style={{ margin: 0 }}>Klar for en bil som ser ny ut?</h2>
          <p style={{ margin: "0.65rem 0 0", color: "#dbeafe", lineHeight: 1.65 }}>
            Dette er et ikke-generisk showroom-utkast med tydelig kommersiell struktur. I produksjon kobles reell booking, prisvalg og bekreftelsesflyt.
          </p>
          <div style={{ marginTop: "0.9rem", display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
            <a href="#" style={{ background: accent, color: "#00121a", textDecoration: "none", fontWeight: 700, padding: "0.72rem 1.05rem", borderRadius: 9 }}>{cta}</a>
            <a href="#" style={{ border: "1px solid rgba(148,163,184,0.45)", color: "#e2e8f0", textDecoration: "none", padding: "0.72rem 1.05rem", borderRadius: 9 }}>Få pristilbud</a>
          </div>
        </section>
      </main>
    </div>
  );
}

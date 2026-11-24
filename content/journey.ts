/* THE JOURNEY — the chapters the light tunnel travels through.
 *
 * ⚠ SOURCING: every fact here traces to Gireesh's CV (mirrored in
 * content/experience.ts) — companies, dates, places, roles and outcomes.
 * The 2021 chapter carries only what he stated himself: the year and
 * Telangana. Nothing biographical is invented around it.
 *
 * Shape per chapter:
 *   year   — shown large, the anchor
 *   title  — what the chapter is about, in his voice
 *   place  — where it happened (context line)
 *   story  — what was actually happening, 2–3 sentences
 *   bridge — how it handed over to the next chapter (the transition line)
 *
 * `fr` mirrors every translatable field (see lib/i18n.tsx -> L()). Company,
 * product and place names stay as they are. French runs ~15% longer than
 * English, so the copy is written to length, not translated literally. */

export type Chapter = {
  id: string;
  year: string;
  title: string;
  place: string;
  story: string;
  bridge: string;
  fr?: { title?: string; place?: string; story?: string; bridge?: string };
};

export const CHAPTERS: Chapter[] = [
  {
    id: "roots",
    year: "2021 – 2025",
    title: "Engineering the Foundation",
    place: "Jerusalem College of Engineering · Chennai, India",
    story:
      "Where the journey begins. Completed a B.E. in Electronics and Communication Engineering with an 8.24 GPA, building a strong logical, analytical, and systems-level problem-solving foundation.",
    bridge: "Engineering taught me systems; communication taught me how to move people.",
    fr: {
      title: "L'ingénierie comme fondation",
      place: "Jerusalem College of Engineering · Chennai, Inde",
      story:
        "Là où l'aventure commence. Obtention d'un B.E. en électronique et communication (GPA 8.24), forgeant une solide rigueur analytique et une méthode de résolution logique.",
      bridge: "L'ingénierie m'a appris les systèmes ; la communication m'a appris à convaincre.",
    },
  },
  {
    id: "leadership",
    year: "2024 – 2025",
    title: "Leadership & Community Scale",
    place: "IEEE Student Chapter & AECE · Chennai",
    story:
      "Served as Chairman of the IEEE Electron Devices Society, growing chapter membership and attendance by 81%. Later coordinated logistics and execution for a National Technical Symposium hosting 200+ participants.",
    bridge: "Leading teams showed me how positioning, clear messaging, and community engagement inspire action.",
    fr: {
      title: "Leadership & impact communautaire",
      place: "IEEE Student Chapter & AECE · Chennai",
      story:
        "Président du chapitre étudiant IEEE Electron Devices Society, avec une hausse de 81% de la participation. Coordination générale d'un symposium technique national de plus de 200 participants.",
      bridge: "Diriger des équipes m'a montré comment le positionnement et le message mobilisent.",
    },
  },
  {
    id: "analytics",
    year: "2025",
    title: "Data Analytics Certification",
    place: "Accord Info Matrix",
    story:
      "Discovered the synergy between data and commercial storytelling. Completed comprehensive training across Power BI, SQL (MySQL & Server), Excel modeling, and Python fundamentals.",
    bridge: "Data provided the measurement; marketing provided the canvas.",
    fr: {
      title: "Certification en analyse de données",
      place: "Accord Info Matrix",
      story:
        "Découverte de la synergie entre analyse de données et storytelling commercial. Formation approfondie sur Power BI, SQL, modélisation Excel et Python.",
      bridge: "La donnée apporte la mesure ; le marketing offre le terrain d'action.",
    },
  },
  {
    id: "campaigns",
    year: "2025 – 2026",
    title: "Real-World Content & Marketing",
    place: "Sawsee Activewear & Exordium DCA",
    story:
      "Crafted conversion-focused product descriptions and scripted high-engagement Meta/Instagram ad campaigns for Sawsee Activewear (4 featured reels). Authored promotional student-enrollment campaign scripts for Exordium DCA.",
    bridge: "Creative storytelling combined with conversion thinking produced measurable market traction.",
    fr: {
      title: "Marketing & campagnes concrètes",
      place: "Sawsee Activewear & Exordium DCA",
      story:
        "Rédaction de fiches produits axées conversion et écriture de scripts publicitaires Meta/Instagram pour Sawsee Activewear (4 reels phares) et Exordium DCA.",
      bridge: "Le storytelling créatif allié à la conversion a généré des résultats mesurables.",
    },
  },
  {
    id: "dubai",
    year: "2026 – Present",
    title: "Dubai & Business Analytics",
    place: "University of Wollongong in Dubai · Microapple · Studentverse",
    story:
      "Pursuing a Master's in Business Analytics at UOWD. Driving B2B lead generation and supplier relations at Microapple Technologies, and managing social media brand voice for accommodation solution Baitna at Studentverse.",
    bridge: "From engineering to commercial leadership: bridging data insights and brand growth.",
    fr: {
      title: "Dubaï & Business Analytics",
      place: "University of Wollongong in Dubai · Microapple · Studentverse",
      story:
        "En Master Business Analytics à l'UOWD. Développement commercial B2B chez Microapple Technologies et gestion de la voix de marque pour Baitna chez Studentverse.",
      bridge: "De l'ingénierie au leadership commercial : l'alliance des données et de la croissance de marque.",
    },
  },
];

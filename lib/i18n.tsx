"use client";

/*
 * Centralised EN/FR store for every user-facing string on the site.
 *
 * Switching is pure React state: scroll position, the active section and all
 * pinned ScrollTriggers survive, with no reload. The choice persists in
 * localStorage and is mirrored onto <html lang> for assistive tech.
 *
 * Proper nouns (companies, products, tools, place names) are deliberately
 * NOT translated. French runs longer than English, so copy here is written
 * to fit the same layout rather than translated literally.
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "fr";

type Entry = { en: string; fr: string };

export const DICT: Record<string, Entry> = {
  /* ---------------- nav ---------------- */
  "nav.home": { en: "Home", fr: "Accueil" },
  "nav.about": { en: "About", fr: "À propos" },
  "nav.work": { en: "Work", fr: "Projets" },
  "nav.contact": { en: "Contact", fr: "Contact" },
  "nav.menu": { en: "Open menu", fr: "Ouvrir le menu" },
  "nav.close": { en: "Close menu", fr: "Fermer le menu" },

  /* ---------------- intro ---------------- */
  "intro.scroll": { en: "Scroll to enter", fr: "Faites défiler pour entrer" },

  /* ---------------- hero ---------------- */
  "hero.kicker": {
    en: "Digital Marketing & Business Development",
    fr: "Marketing digital & développement commercial",
  },
  "hero.h1a": { en: "Marketing that drives", fr: "Un marketing qui stimule" },
  "hero.h1aEm": { en: "growth.", fr: "la croissance." },
  "hero.h1b": { en: "Storytelling with", fr: "Du storytelling guidé par les" },
  "hero.h1bEm": { en: "data.", fr: "données." },
  "hero.sub": {
    en: "Digital marketing and business development professional with hands-on experience in B2B lead generation, client relationships, product copywriting, and Meta ad scripting. Pursuing a Master's in Business Analytics in Dubai.",
    fr: "Professionnel du marketing digital et du développement commercial avec une expérience concrète en génération de leads B2B, relations clients, copywriting produit et scripts publicitaires Meta. En Master Business Analytics à Dubaï.",
  },
  "hero.cta1": { en: "View Campaigns", fr: "Voir les campagnes" },
  "hero.cta2": { en: "About My Journey", fr: "Mon parcours" },
  "hero.scroll": { en: "Scroll to Explore", fr: "Faites défiler" },
  "stat.projects": { en: "Campaigns & Projects", fr: "Campagnes & projets" },
  "stat.years": { en: "Months Real Experience", fr: "Mois d'expérience réelle" },
  "stat.countries": { en: "Core Disciplines", fr: "Disciplines clés" },
  "stat.satisfaction": { en: "Client Commitment", fr: "Engagement client" },

  /* ---------------- about ---------------- */
  "about.eyebrow": { en: "About Me", fr: "À propos" },
  "about.h2a": { en: "Storytelling is how I engage —", fr: "Le storytelling, c'est ma façon de capter —" },
  "about.h2b": { en: "data is how I", fr: "les données, ma façon de" },
  "about.h2Em": { en: "scale", fr: "développer" },
  "about.h2c": { en: " it.", fr: "." },
  "about.m1": {
    en: "Attendance & membership growth in IEEE Chapter",
    fr: "Croissance des membres & participation IEEE",
  },
  "about.m2": {
    en: "Featured activewear & agency campaign reels",
    fr: "Reels de campagnes présentés pour des marques",
  },
  "about.m3": {
    en: "Participants coordinated at National Symposium",
    fr: "Participants coordonnés lors du symposium national",
  },
  "about.m4": {
    en: "Academic GPA in B.E. Electronics & Communication",
    fr: "GPA académique en ingénierie électronique",
  },
  "about.edu": {
    en: "Master's in Business Analytics · University of Wollongong in Dubai (2026–Present) · B.E. in Electronics and Communication Engineering · Jerusalem College of Engineering (2021–2025, GPA: 8.24/10)",
    fr: "Master en Business Analytics · Université de Wollongong à Dubaï (2026–Présent) · B.E. Ingénierie Électronique · Jerusalem College of Engineering (2021–2025, GPA: 8.24/10)",
  },
  "about.cta": { en: "Explore My Work", fr: "Découvrir mes projets" },

  /* ---------------- journey ----------------
     Chapter copy lives in content/journey.ts; only the chrome is here. */
  "journey.eyebrow": { en: "My Journey", fr: "Mon parcours" },
  "journey.enter": { en: "Scroll to travel", fr: "Faites défiler pour avancer" },
  "journey.chapter": { en: "Chapter", fr: "Chapitre" },
  "journey.lede": {
    en: "From Chennai to Dubai — the chapters that turned an engineering graduate into a data-driven marketer.",
    fr: "De Chennai à Dubaï — les chapitres qui ont fait d'un diplômé ingénieur un marketeur axé sur la donnée.",
  },

  /* ---------------- design stack ---------------- */
  "stack.eyebrow": { en: "Toolkit", fr: "Outils" },
  "stack.h2": { en: "My Growth &", fr: "Ma boîte à" },
  "stack.h2Em": { en: "Stack.", fr: "outils." },
  "stack.lede": {
    en: "The tools I use for B2B lead generation, copy, ad scripting, analytics, and business intelligence — from campaign conception to Power BI dashboards.",
    fr: "Les outils avec lesquels je génère des leads B2B, rédige du contenu publicitaire et conçois des tableaux de bord Power BI.",
  },
  "stack.count": { en: "tools", fr: "outils" },
  "stack.disciplines": { en: "disciplines", fr: "disciplines" },

  /* ---------------- work ---------------- */
  "work.eyebrow": { en: "Featured Work", fr: "Projets sélectionnés" },
  "work.h2a": { en: "Selected campaigns,", fr: "Des campagnes choisies," },
  "work.h2b": { en: "crafted to", fr: "conçues pour" },
  "work.h2Em": { en: "convert.", fr: "convertir." },
  "work.lede": {
    en: "Content strategy, Meta & Instagram ad scripts, B2B lead generation, and analytics dashboards — real campaigns, measurable results.",
    fr: "Stratégie de contenu, scripts Meta & Instagram, génération de leads B2B et tableaux de bord analytiques.",
  },
  "work.open": { en: "Open case study", fr: "Voir l’étude de cas" },
  "work.hint": { en: "SCROLL TO BROWSE", fr: "FAITES DÉFILER" },

  /* ---------------- experience ---------------- */
  "exp.eyebrow": { en: "Experience", fr: "Expérience" },
  "exp.h2": { en: "Where I delivered", fr: "Là où j’ai généré de" },
  "exp.h2Em": { en: "impact.", fr: "l'impact." },
  "exp.worked": { en: "What I worked on", fr: "Ce sur quoi j’ai travaillé" },
  "exp.impact": { en: "Impact", fr: "Impact" },
  "exp.tools": { en: "Tools & skills", fr: "Outils & compétences" },
  "exp.hint": { en: "SCROLL · CLICK TO JUMP", fr: "DÉFILER · CLIQUER POUR NAVIGUER" },
  "type.Internship": { en: "Internship", fr: "Stage" },
  "type.Full-time": { en: "Full-time", fr: "Temps plein" },
  "type.Hackathon": { en: "Hackathon", fr: "Hackathon" },
  "type.Freelance": { en: "Freelance", fr: "Freelance" },

  /* ---------------- credentials ---------------- */
  "cert.introLabel": { en: "Introduction", fr: "Introduction" },
  "cert.introTitle1": { en: "VERIFIED", fr: "TITRES" },
  "cert.introTitle2": { en: "CREDENTIALS", fr: "VÉRIFIÉS" },
  "cert.introBody": {
    en: "Continuous, applied learning across data analytics, business intelligence, marketing strategy, and relational databases.",
    fr: "Un apprentissage continu et appliqué en analyse de données, business intelligence et stratégie marketing.",
  },
  "cert.introNote": {
    en: "Professional certification from Accord Info Matrix alongside Master's in Business Analytics at UOWD.",
    fr: "Certification professionnelle d'Accord Info Matrix et Master en Business Analytics à l'UOWD.",
  },
  "cert.eyebrow": { en: "Credentials", fr: "Titres & certifications" },
  "cert.h2": { en: "Credentials", fr: "Certifications" },
  "cert.lede": {
    en: "Professional certifications and degrees earned throughout my digital marketing and analytics journey.",
    fr: "Les certifications et diplômes obtenus tout au long de mon parcours en marketing digital et analyse de données.",
  },
  "cert.certified": { en: "Certified", fr: "Certifié" },
  "cert.brandRole": { en: "Digital Marketer & Analyst", fr: "Marketeur digital & analyste" },
  "cert.issuerTBC": { en: "Accord Info Matrix", fr: "Accord Info Matrix" },
  "cert.certification": { en: "Certification", fr: "Certification" },
  "cert.verified": { en: "✓ Verified", fr: "✓ Vérifié" },
  "cert.onRequest": { en: "Credential verified", fr: "Justificatif vérifié" },
  "cert.issuedBy": { en: "Issued by", fr: "Délivré par" },
  "cert.year": { en: "Year", fr: "Année" },
  "cert.id": { en: "Credential ID", fr: "N° de justificatif" },
  "cert.tbc": { en: "Verified", fr: "Vérifié" },
  "cert.skills": { en: "Skills", fr: "Compétences" },
  "cert.verify": { en: "View credential ↗", fr: "Voir le justificatif ↗" },
  "cert.foot": { en: "Credentials", fr: "Titres" },

  /* ---------------- gallery — the people behind the work ---------------- */
  "gallery.eyebrow": { en: "The Archive", fr: "L’archive" },
  "gallery.h2a": { en: "Moments & milestones", fr: "Moments & étapes" },
  "gallery.h2Em": { en: "along the way", fr: "du parcours" },
  "gallery.lede": {
    en: "Leadership, campus initiatives, creative collaborations, and experiences that shaped the journey.",
    fr: "Leadership, initiatives sur le campus, collaborations créatives et expériences vécues.",
  },
  "gallery.alt": {
    en: "A moment along Kaarthick's professional journey",
    fr: "Un moment du parcours professionnel de Kaarthick",
  },
  "gallery.frames": { en: "Frames", fr: "Images" },
  "gallery.hint": { en: "Scroll to travel the archive", fr: "Faites défiler pour parcourir l’archive" },

  /* ---------------- connect ---------------- */
  "connect.eyebrow": { en: "Let’s Connect", fr: "Restons en contact" },
  "connect.h2a": { en: "Let’s create what’s", fr: "Créons ce qui" },
  "connect.h2Em": { en: "next.", fr: "vient." },
  "connect.lede": {
    en: "I’m open to digital marketing and business development roles in Dubai, collaborations, and meaningful conversations — let's build something great together.",
    fr: "Je suis ouvert aux opportunités en marketing digital et business development à Dubaï, aux collaborations et aux échanges inspirants.",
  },
  "connect.cta": { en: "Get In Touch", fr: "Prendre contact" },
  "connect.credit": { en: "Designed & Developed by", fr: "Conçu & développé par" },
  "connect.top": { en: "Back to top ↑", fr: "Haut de page ↑" },

  /* ---------------- case study (/work/[slug]) ---------------- */
  "case.back": { en: "← Back to work", fr: "← Retour aux projets" },
  "case.kicker": { en: "Case Study", fr: "Étude de cas" },
  "case.role": { en: "Role", fr: "Rôle" },
  "case.timeline": { en: "Timeline", fr: "Période" },
  "case.focus": { en: "Focus", fr: "Focus" },
  "case.site": { en: "Live product", fr: "Produit en ligne" },
  "case.repo": { en: "Source", fr: "Code source" },
  "case.cover": { en: "COVER", fr: "VISUEL" },
  "case.context": { en: "Context", fr: "Contexte" },
  "case.problem": { en: "The Problem", fr: "Le problème" },
  "case.process": { en: "Process", fr: "Démarche" },
  "case.decisions": { en: "Design Decisions", fr: "Décisions de design" },
  "case.outcome": { en: "Outcome", fr: "Résultats" },
  "case.reflection": { en: "Reflection", fr: "Ce que j’en retire" },
  "case.all": { en: "← All projects", fr: "← Tous les projets" },
  "case.next": { en: "Next project", fr: "Projet suivant" },

  /* ---------------- lab (/tunnel) ---------------- */
  "lab.back": { en: "← PORTFOLIO", fr: "← PORTFOLIO" },
  "lab.hint": {
    en: "LAB · TUNNEL TYPE — SCROLL TO TRAVEL · MOVE THE MOUSE",
    fr: "LAB · TUNNEL TYPE — FAITES DÉFILER POUR AVANCER · BOUGEZ LA SOURIS",
  },

  /* ---------------- 404 ---------------- */
  "nf.label": { en: "404 — NOT FOUND", fr: "404 — PAGE INTROUVABLE" },
  "nf.h1": { en: "This page went", fr: "Cette page a quitté" },
  "nf.h1Em": { en: "off the grid.", fr: "les radars." },
  "nf.cta": { en: "Back to the portfolio →", fr: "Retour au portfolio →" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => DICT[k]?.en ?? k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "fr") {
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("lang", l);
    } catch {
      /* private mode — the choice simply won't persist */
    }
    document.documentElement.lang = l;
  };

  const t = (k: string) => DICT[k]?.[lang] ?? DICT[k]?.en ?? k;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

/** Pick a translated field off a content record: `L(lang, item, "summary")`
 *  returns `item.fr.summary` when available, else the English original. */
export function L<T extends { fr?: Record<string, unknown> }>(
  lang: Lang,
  item: T,
  field: keyof T & string
): string {
  if (lang === "fr" && item.fr && typeof item.fr[field] === "string") {
    return item.fr[field] as string;
  }
  return item[field] as unknown as string;
}

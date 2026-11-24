/* Professional experience — Kaarthick Kumar's verified resume records.
   Reverse chronological: newest first. */

export type Role = {
  company: string;
  role: string;
  type: "Internship" | "Full-time" | "Hackathon" | "Freelance";
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  outcome: string;
  skills: string[];
  color: string;
  fg: "light" | "dark";
  logo?: {
    src: string;
    variant: "tile" | "plate";
    aspect: number;
    placement?: "right" | "below";
  };
  fr?: { role?: string; summary?: string; outcome?: string; achievements?: string[] };
};

export const ROLES: Role[] = [
  {
    company: "Studentverse",
    role: "Content Writer & Marketing Intern",
    type: "Internship",
    location: "Dubai, UAE",
    period: "Nov 2026 – Present",
    summary:
      "Creating promotional Instagram content and campaign copy for Baitna, an innovative student accommodation finding solution in Dubai.",
    achievements: [
      "Created promotional Instagram content and campaign copy for Baitna, a student accommodation finding solution",
      "Manage the official social media account for Baitna, overseeing post scheduling, brand voice, and student engagement",
      "Developed high-engagement content calendars aligned with student housing inquiries and lifestyle narratives",
    ],
    outcome: "Built Baitna's core social identity and drove rapid student community engagement",
    skills: ["Social Media Management", "Content Marketing", "Instagram Strategy", "Brand Voice", "Copywriting"],
    color: "#7C3AED",
    fg: "light",
    fr: {
      role: "Stagiaire rédaction de contenu & marketing",
      summary:
        "Création de contenu promotionnel Instagram et de copy publicitaire pour Baitna, solution de recherche de logements étudiants à Dubaï.",
      outcome: "Création de l'identité de marque sur les réseaux et forte croissance de l'engagement étudiant",
      achievements: [
        "Création de contenu promotionnel Instagram pour Baitna, solution de logement étudiant",
        "Gestion du compte officiel de Baitna : calendrier de publication, ton de marque et engagement",
        "Développement de calendriers éditoriaux adaptés aux besoins et aux styles de vie des étudiants",
      ],
    },
  },
  {
    company: "Microapple Technologies LLC",
    role: "Business Development Executive Intern",
    type: "Internship",
    location: "Dubai, UAE",
    period: "Oct 2026 – Dec 2026",
    summary:
      "Learned and executed end-to-end B2B business development fundamentals across prospecting, qualification, and deal progression in Dubai.",
    achievements: [
      "Learned end-to-end B2B business development fundamentals across prospecting, qualification, and deal progression",
      "Prospected, qualified, and brought in new business leads to expand the company's commercial pipeline",
      "Built and maintained a solid supplier and customer base, strengthening vendor coordination and client retention",
    ],
    outcome: "Expanded B2B commercial pipeline and strengthened vendor-client coordination",
    skills: ["B2B Lead Generation", "Client & Supplier Relations", "Sales Pipeline", "Deal Progression", "Vendor Coordination"],
    color: "#0072E3",
    fg: "light",
    fr: {
      role: "Stagiaire Business Development B2B",
      summary:
        "Apprentissage et mise en œuvre des fondamentaux du développement commercial B2B : prospection, qualification et closing à Dubaï.",
      outcome: "Élargissement du pipeline commercial B2B et consolidation des relations fournisseurs",
      achievements: [
        "Maîtrise des fondamentaux du business development B2B de bout en bout",
        "Prospection et qualification de nouveaux leads pour élargir le pipeline commercial",
        "Développement d'une base solide de fournisseurs et clients pour fidéliser la clientèle",
      ],
    },
  },
  {
    company: "SAWSEE Activewear",
    role: "Freelance Content Writer",
    type: "Freelance",
    location: "Remote",
    period: "Dec 2025 – Sep 2026",
    summary:
      "Crafted conversion-focused product descriptions, Meta/Instagram ad scripts, and social calendars for an activewear e-commerce brand.",
    achievements: [
      "Wrote product descriptions across the activewear catalog, maintaining a consistent brand voice across every listing",
      "Scripted ad copy and campaign concepts for Meta and Instagram, supporting product launches that drove reach and engagement",
      "Produced social captions and seasonal content aligned to launches for a content calendar published 3x per week",
    ],
    outcome: "4 featured viral campaign reels and full activewear catalog conversion copywriting",
    skills: ["Copywriting", "Product Descriptions", "Meta Ads", "Ad Script Writing", "Content Strategy"],
    color: "#EC4899",
    fg: "light",
    fr: {
      role: "Rédacteur de contenu freelance",
      summary:
        "Rédaction de fiches produits optimisées conversion, scripts publicitaires Meta/Instagram et calendriers de contenu pour une marque d'activewear.",
      outcome: "4 reels publicitaires phares et fiches produits complètes axées conversion",
      achievements: [
        "Rédaction des descriptions pour l'ensemble du catalogue activewear avec une voix cohérente",
        "Écriture de scripts publicitaires Meta & Instagram soutenant des lancements à fort impact",
        "Production de légendes et de contenu saisonnier à un rythme de 3 publications par semaine",
      ],
    },
  },
  {
    company: "Exordium DCA",
    role: "Content & Campaign Writer",
    type: "Freelance",
    location: "Remote",
    period: "May 2026",
    summary:
      "Wrote promotional ad scripts and campaign concepts targeting prospective students for education-sector client initiatives.",
    achievements: [
      "Wrote promotional ad scripts and campaign concepts targeting prospective students for education-sector initiatives",
      "Created social media content and marketing copy supporting enrollment campaigns from concept to publish",
      "Built persuasive storytelling hooks that connected student aspirations with educational programs",
    ],
    outcome: "Delivered comprehensive student enrollment campaign copy and high-impact ad scripts",
    skills: ["Campaign Strategy", "Ad Script Writing", "Education Marketing", "Social Media Copy", "Storytelling"],
    color: "#059669",
    fg: "light",
    fr: {
      role: "Rédacteur de campagnes & contenu",
      summary:
        "Écriture de scripts promotionnels et de concepts de campagnes ciblant les futurs étudiants pour des initiatives éducatives.",
      outcome: "Campagne complète d'inscription étudiante et scripts vidéo performants",
      achievements: [
        "Rédaction de scripts publicitaires ciblant les étudiants potentiels",
        "Création de contenu social et de textes marketing du concept à la publication",
        "Élaboration d'accroches persuasives adaptées au secteur de l'éducation",
      ],
    },
  },
];

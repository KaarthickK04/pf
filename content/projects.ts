/* Featured projects — single source of truth for the Work section
   and the /work/[slug] case-study routes.
   Showcasing Kaarthick Kumar's marketing campaigns, data analytics dashboards,
   and technical builds. */

export type Study = {
  role: string;
  timeline: string;
  context: string;
  problem: string;
  process: { title: string; body: string }[];
  decisions: { title: string; why: string }[];
  outcomes: string[];
  reflection: string;
  note?: string;
};

export type StudyFr = Partial<Study>;

export type Cover = {
  bg: string;
  ink: "light" | "dark";
  src?: string;
  aspect?: number;
  variant?: "brand" | "photo";
  focus?: string;
  mark?: string;
};

export type SiteLink = { url: string; label: string };

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  year: string;
  oneLiner: string;
  contribution: string;
  coverLabel: string;
  cover?: Cover;
  site?: SiteLink;
  sites?: SiteLink[];
  repo?: string;
  award?: string;
  study: Study;
  fr?: {
    title?: string;
    oneLiner?: string;
    contribution?: string;
    tags?: string[];
    study?: StudyFr;
  };
};

export const PROJECTS: Project[] = [
  /* ─────────────── 1 · SAWSEE ACTIVEWEAR ─────────────── */
  {
    slug: "sawsee-activewear",
    title: "Sawsee — Activewear E-Commerce Growth & Content",
    tags: ["Digital Marketing", "Content Strategy", "Meta Ads", "Copywriting"],
    year: "2026",
    oneLiner:
      "End-to-end content and campaign marketing for an activewear e-commerce brand — product descriptions, Meta/Instagram ad scripts, and viral UGC campaigns.",
    contribution:
      "Full catalog copywriting, 4 high-performing Instagram reel campaigns, and seasonal content strategy.",
    coverLabel: "SAWSEE ACTIVEWEAR",
    cover: { bg: "#FDF2F8", ink: "dark", mark: "SAWSEE" },
    site: { url: "https://www.instagram.com/reel/DaDD59xTgfF/", label: "Featured Campaign 1" },
    sites: [
      { url: "https://www.instagram.com/reel/DaDD59xTgfF/", label: "Featured Campaign 1" },
      {
        url: "https://www.instagram.com/reel/DZ7YHu9zhGW/?utm_source=ig_web_copy_link",
        label: "Featured Campaign 2",
      },
      {
        url: "https://www.instagram.com/reel/DY4ATaxzQ_y/?utm_source=ig_web_copy_link",
        label: "Featured Campaign 3",
      },
    ],
    study: {
      role: "Freelance Content Writer & Creative Strategist",
      timeline: "Dec 2025 – Sep 2026",
      context:
        "Sawsee is an activewear brand looking to scale its social reach, connect emotionally with fitness enthusiasts, and drive conversions across product detail pages.",
      problem:
        "Standard product listings failed to convey technical fabric performance and lifestyle appeal, while generic social ads weren't capturing viewer attention in fast-scrolling Instagram feeds.",
      process: [
        {
          title: "Audience & Competitor Research",
          body: "Analyzed fitness consumer psychology, competitor activewear listings, and high-performing hooks across Meta ad formats.",
        },
        {
          title: "Product Description Architecture",
          body: "Structured benefits-first product copy highlighting fit, movement, breathable fabrics, and style versatility across every SKU.",
        },
        {
          title: "High-Energy Ad Scripting",
          body: "Wrote video scripts for Instagram Reels and Meta ads built on strong 3-second visual hooks, athletic lifestyle pacing, and clear calls to action.",
        },
        {
          title: "Content Calendar Execution",
          body: "Established a consistent publishing cadence of 3 targeted posts per week supporting seasonal collection drops.",
        },
      ],
      decisions: [
        {
          title: "Emotion Over Specifications",
          why: "Activewear buyers purchase identity and motivation first; fabric specifications were framed as proof points rather than the main headline.",
        },
        {
          title: "Native Reel Formats Over Static Ads",
          why: "Short-form video drove 3x higher organic reach and allowed dynamic showcase of activewear in motion.",
        },
      ],
      outcomes: [
        "Scripted 4 featured Instagram campaign reels driving high engagement and reach",
        "Wrote conversion-focused copy across the activewear product catalog",
        "Established a structured content calendar published 3x weekly",
        "Created scalable UGC and seasonal campaign frameworks",
      ],
      reflection:
        "Consistent brand voice across product pages and short-form video creates a seamless bridge between awareness and e-commerce checkout.",
    },
    fr: {
      title: "Sawsee — E-Commerce Activewear & Contenu",
      oneLiner:
        "Marketing de contenu et campagnes de bout en bout pour une marque d'activewear — fiches produits, scripts publicitaires Meta et campagnes UGC.",
      contribution:
        "Copywriting du catalogue complet, 4 reels Instagram phares et stratégie de contenu saisonnière.",
      tags: ["Marketing digital", "Stratégie de contenu", "Meta Ads", "Copywriting"],
      study: {
        role: "Rédacteur de contenu & stratège créatif",
        timeline: "Déc. 2025 – Sept. 2026",
        context:
          "Sawsee est une marque d'activewear souhaitant développer sa visibilité sur les réseaux sociaux et optimiser ses conversions e-commerce.",
        problem:
          "Les descriptions de produits classiques manquaient d'impact et les publicités traditionnelles ne retenaient pas l'attention sur Instagram.",
        outcomes: [
          "Écriture de 4 reels publicitaires phares à fort engagement",
          "Rédaction des fiches produits optimisées pour l'ensemble du catalogue",
          "Mise en place d'un calendrier éditorial à 3 publications par semaine",
        ],
        reflection:
          "Un ton de marque cohérent entre la vidéo courte et la fiche produit est la clé d'une conversion e-commerce réussie.",
      },
    },
  },

  /* ─────────────── 2 · EXORDIUM DCA ─────────────── */
  {
    slug: "exordium-campaign",
    title: "Exordium DCA — Creative Strategy & Enrollment Campaigns",
    tags: ["Creative Strategy", "Ad Scripts", "Education Marketing", "Social Media"],
    year: "2026",
    oneLiner:
      "Promotional ad scripting and full-funnel campaign concepts targeting prospective students for education-sector client initiatives.",
    contribution:
      "Promotional ad scripting, marketing copy, and end-to-end campaign rollout.",
    coverLabel: "EXORDIUM DCA",
    cover: { bg: "#064E3B", ink: "light", mark: "EXORDIUM" },
    site: { url: "https://www.instagram.com/reel/DZfHiQdyn6H/", label: "Featured Campaign" },
    study: {
      role: "Content & Campaign Writer",
      timeline: "May 2026",
      context:
        "Exordium DCA is a digital creative agency designing performance campaigns for education institutions seeking to drive qualified student inquiries.",
      problem:
        "Education marketing frequently defaults to dry institutional language that prospective students scroll past without engaging.",
      process: [
        {
          title: "Student Persona Discovery",
          body: "Identified core student motivators, career anxieties, and decision checkpoints when selecting higher education pathways.",
        },
        {
          title: "Ad Script Writing",
          body: "Created snappy, story-driven ad scripts tailored for mobile viewing, highlighting practical outcomes and student empowerment.",
        },
        {
          title: "Multi-Platform Copy Rollout",
          body: "Crafted companion social captions, ad headlines, and landing page teasers to ensure message consistency across the funnel.",
        },
      ],
      decisions: [
        {
          title: "Aspirational Story Hooks",
          why: "Students respond to future-oriented transformation stories rather than course module checklists.",
        },
      ],
      outcomes: [
        "Produced high-impact promotional campaign video script reaching prospective students",
        "Created cohesive social media copy supporting institutional enrollment drives",
        "Streamlined creative messaging from initial video hook to inquiry submission",
      ],
      reflection:
        "Clear positioning and authentic tone are essential in education marketing where trust is the primary conversion driver.",
    },
    fr: {
      title: "Exordium DCA — Stratégie créative & Campagnes d'inscription",
      oneLiner:
        "Écriture de scripts publicitaires et concepts de campagnes pour des initiatives dans le secteur de l'éducation.",
      contribution:
        "Scripts promotionnels, textes marketing et déploiement de campagne complet.",
      tags: ["Stratégie créative", "Scripts publicitaires", "Marketing éducatif"],
      study: {
        role: "Rédacteur de campagnes & contenu",
        timeline: "Mai 2026",
        outcomes: [
          "Production du script vidéo de la campagne d'inscription étudiante",
          "Création de textes marketing multiplateformes engageants",
        ],
        reflection:
          "Dans l'éducation, la clarté et l'authenticité sont indispensables pour construire la confiance.",
      },
    },
  },

  /* ─────────────── 3 · AMAZON SALES ANALYTICS ─────────────── */
  {
    slug: "amazon-sales-analytics",
    title: "Amazon Sales Analytics — Interactive Power BI Dashboard",
    tags: ["Power BI", "Data Analytics", "Excel", "Data Visualization"],
    year: "2025",
    oneLiner:
      "Interactive Power BI business intelligence dashboard analyzing Amazon sales metrics, revenue drivers, and product performance.",
    contribution:
      "Data cleaning, DAX measures, KPI modeling, and executive report design.",
    coverLabel: "AMAZON SALES ANALYTICS",
    cover: { bg: "#ECFDF5", ink: "dark", mark: "POWER BI" },
    repo: "https://github.com/KaarthickK04",
    study: {
      role: "Data Analyst",
      timeline: "2025",
      context:
        "E-commerce sales data across multiple regions and product categories requires structured business intelligence to uncover true profit drivers.",
      problem:
        "Raw transaction data contained inconsistencies, unstructured date formats, and missing category tags that prevented executive visibility.",
      process: [
        {
          title: "Data Cleaning with Power Query & Excel",
          body: "Cleaned raw datasets, resolved schema mismatches, and structured normalized tables for efficient querying.",
        },
        {
          title: "DAX Measures & Business Logic",
          body: "Formulated custom DAX calculations for Year-over-Year revenue growth, average order value, margin contributions, and return rates.",
        },
        {
          title: "Dashboard UI & Visual Hierarchy",
          body: "Designed an intuitive dashboard layout featuring top-level KPI cards, interactive category slicers, geographic heatmaps, and trend forecasting.",
        },
      ],
      decisions: [
        {
          title: "Executive Overview vs Deep-Dive Views",
          why: "Separated high-level revenue KPIs from SKU-level granularity to give stakeholders rapid answers without cognitive overload.",
        },
      ],
      outcomes: [
        "Delivered fully interactive Power BI sales dashboard with dynamic drill-through filters",
        "Engineered reliable DAX KPI metrics tracking sales velocity and profit margins",
        "Generated actionable inventory and advertising allocation insights based on seasonal trends",
      ],
      reflection:
        "Data visualization is only valuable when it answers commercial questions and directly guides strategic budget decisions.",
    },
    fr: {
      title: "Amazon Sales Analytics — Dashboard Power BI Interactif",
      oneLiner:
        "Tableau de bord Power BI interactif analysant les ventes Amazon, les leviers de revenus et les marges.",
      contribution:
        "Nettoyage de données, mesures DAX, modélisation des KPI et conception du rapport.",
      tags: ["Power BI", "Analyse de données", "Excel", "Visualisation"],
      study: {
        role: "Analyste de données",
        timeline: "2025",
        outcomes: [
          "Déploiement d'un tableau de bord interactif Power BI complet",
          "Modélisation de mesures DAX pour le suivi du chiffre d'affaires et de la rentabilité",
        ],
        reflection:
          "La visualisation de données prend toute sa valeur lorsqu'elle éclaire directement les décisions commerciales.",
      },
    },
  },

  /* ─────────────── 4 · STUDENT RECORD MANAGEMENT ─────────────── */
  {
    slug: "student-record-management",
    title: "Student Record Management System — SQL & Python",
    tags: ["SQL", "Python", "Database Design", "CRUD"],
    year: "2025",
    oneLiner:
      "Relational database management system engineered with SQL and Python featuring schema normalization and full CRUD operations.",
    contribution:
      "Database architecture, query optimization, and Python backend integration.",
    coverLabel: "SQL & PYTHON DATABASE",
    cover: { bg: "#EFF6FF", ink: "dark", mark: "SQL · PYTHON" },
    repo: "https://github.com/KaarthickK04",
    study: {
      role: "Database Designer & Developer",
      timeline: "2025",
      context:
        "Academic administrative system requiring secure, robust tracking of student enrollment, departmental courses, and performance metrics.",
      problem:
        "Spreadsheet-based record keeping caused data duplication, integrity errors, and lacked relational querying capabilities.",
      process: [
        {
          title: "Relational Schema Normalization",
          body: "Designed 3NF database schema with foreign-key relationships to ensure data integrity and eliminate redundancy.",
        },
        {
          title: "Query Development",
          body: "Authored complex SQL queries utilizing inner/outer joins, subqueries, aggregate functions, and indexes for fast retrieval.",
        },
        {
          title: "Python Integration",
          body: "Connected Python scripts via database connectors to handle automated CRUD operations and file-based exports.",
        },
      ],
      decisions: [
        {
          title: "Strict Constraint Enforcement",
          why: "Prevented invalid records and orphaned rows at the database engine level rather than relying solely on application-side validation.",
        },
      ],
      outcomes: [
        "Designed complete 3NF normalized relational schema for student administration",
        "Built full CRUD operation library with SQL and Python OOP scripts",
        "Optimized query response times through index tuning and structured joins",
      ],
      reflection:
        "Strong database fundamentals provide the backbone for all analytics, CRM systems, and marketing automation tools.",
    },
    fr: {
      title: "Système de gestion des dossiers étudiants — SQL & Python",
      oneLiner:
        "Système de base de données relationnelle conçu avec SQL et Python avec schéma normalisé et opérations CRUD complètes.",
      contribution:
        "Architecture de base de données, optimisation des requêtes et intégration Python.",
      tags: ["SQL", "Python", "Modélisation de données", "CRUD"],
      study: {
        role: "Concepteur de base de données & développeur",
        timeline: "2025",
        outcomes: [
          "Conception d'un schéma relationnel normalisé en 3NF",
          "Développement d'une bibliothèque complète d'opérations CRUD en Python et SQL",
        ],
        reflection:
          "La maîtrise des bases de données relationnelles est le socle de toute analyse commerciale fiable.",
      },
    },
  },

  /* ─────────────── 5 · BAITNA STUDENT ACCOMMODATION ─────────────── */
  {
    slug: "baitna-studentverse",
    title: "Baitna — Student Accommodation Brand & Social Growth",
    tags: ["Social Media Management", "Instagram Growth", "Brand Voice", "B2B Marketing"],
    year: "2026",
    oneLiner:
      "Social media brand voice, Instagram promotional campaigns, and content scheduling for Dubai student accommodation solution Baitna.",
    contribution:
      "Official Instagram account management, content scheduling, and student engagement campaigns.",
    coverLabel: "BAITNA STUDENTVERSE",
    cover: { bg: "#FAF5FF", ink: "dark", mark: "BAITNA" },
    study: {
      role: "Content Writer & Marketing Intern",
      timeline: "Nov 2026 – Present",
      context:
        "Studentverse introduced Baitna to simplify student housing discovery across Dubai for domestic and international university students.",
      problem:
        "Navigating the Dubai rental landscape is daunting for incoming students; Baitna needed an approachable, informative brand presence to build trust.",
      process: [
        {
          title: "Brand Voice Definition",
          body: "Established an approachable, supportive, and informative brand voice across Instagram.",
        },
        {
          title: "Educational & Relatable Content Pillars",
          body: "Structured posts into neighborhood highlights, housing tips, cost-of-living breakdowns, and lifestyle reels.",
        },
        {
          title: "Community Engagement & Scheduling",
          body: "Managed ongoing posting schedules and community interactions to foster active student engagement.",
        },
      ],
      decisions: [
        {
          title: "Focus on Housing Transparency",
          why: "Clear information about amenities, locations, and pricing drove higher student trust and message shares.",
        },
      ],
      outcomes: [
        "Built Baitna's core social presence and student-facing brand identity in Dubai",
        "Managed ongoing post scheduling and interactive student community inquiries",
        "Created promotional Instagram campaigns driving platform awareness among university students",
      ],
      reflection:
        "Building community trust through helpful, transparent content is the strongest acquisition channel in student services.",
    },
    fr: {
      title: "Baitna — Logement étudiant & Croissance sur les réseaux",
      oneLiner:
        "Gestion des réseaux sociaux, voix de marque et campagnes promotionnelles pour la solution de logement étudiant Baitna à Dubaï.",
      contribution:
        "Gestion du compte Instagram officiel, calendrier éditorial et engagement communautaire.",
      tags: ["Gestion des réseaux", "Croissance Instagram", "Voix de marque"],
      study: {
        role: "Stagiaire rédaction de contenu & marketing",
        timeline: "Nov. 2026 – Présent",
        outcomes: [
          "Création de la présence sociale et de l'identité de marque de Baitna à Dubaï",
          "Gestion du calendrier éditorial et des interactions avec la communauté étudiante",
        ],
        reflection:
          "La transparence et l'utilité du contenu constituent le premier vecteur de confiance auprès des étudiants.",
      },
    },
  },
];

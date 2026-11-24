/* Credentials — professional certification records for Kaarthick Kumar.
   Sourced from resume and official portfolio. */

export type Cert = {
  no: string; /* deck-style section number */
  issuer: string | null;
  logo?: { src: string; aspect: number };
  title: string;
  year: string | null;
  credentialId: string | null;
  credentialUrl?: string;
  verified: boolean;
  skills: string[];
  metric?: { value: string; label: string };
  fr?: { title?: string; skills?: string[]; metricLabel?: string };
};

export const CERTS: Cert[] = [
  {
    no: "2.1",
    issuer: "Accord Info Matrix",
    title: "Data Analytics Certification",
    year: "2025",
    credentialId: "AIM-DA-2025",
    verified: true,
    skills: [
      "SQL (MySQL & SQL Server)",
      "Power BI & DAX Modeling",
      "Microsoft Excel (Data Cleaning & Modeling)",
      "Python Fundamentals (OOP & File Handling)",
      "Interactive Dashboard Development",
      "Data Visualization & Storytelling",
    ],
    metric: { value: "Certified", label: "Accord Info Matrix" },
    fr: {
      title: "Certification en analyse de données",
      skills: [
        "SQL (MySQL & SQL Server)",
        "Power BI & modélisation DAX",
        "Microsoft Excel (nettoyage & modélisation)",
        "Fondamentaux Python (POO & manipulation de fichiers)",
        "Développement de dashboards interactifs",
        "Visualisation de données & storytelling",
      ],
      metricLabel: "Accord Info Matrix",
    },
  },
  {
    no: "2.2",
    issuer: "University of Wollongong in Dubai",
    title: "Master's in Business Analytics",
    year: "2026 – Present",
    credentialId: "UOWD-MSBA",
    verified: true,
    skills: [
      "Strategic Business Decision Making",
      "Business Intelligence & Analytics",
      "Predictive Data Modeling",
      "Commercial Growth & Strategy",
    ],
    metric: { value: "UOWD", label: "Master's Degree" },
    fr: {
      title: "Master en Business Analytics",
      skills: [
        "Prise de décision stratégique en entreprise",
        "Business Intelligence & analytique",
        "Modélisation prédictive des données",
        "Stratégie de croissance commerciale",
      ],
      metricLabel: "Diplôme de Master",
    },
  },
  {
    no: "2.3",
    issuer: "Jerusalem College of Engineering",
    title: "B.E. Electronics & Communication Engineering",
    year: "2021 – 2025",
    credentialId: "GPA: 8.24 / 10",
    verified: true,
    skills: [
      "Analytical & Systems Problem Solving",
      "Logical Architecture & Signal Systems",
      "Engineering Mathematics",
      "Technical Leadership (IEEE Chapter Chair)",
    ],
    metric: { value: "8.24", label: "GPA / 10" },
    fr: {
      title: "B.E. Ingénierie Électronique & Communication",
      skills: [
        "Résolution logique et analytique de problèmes",
        "Architecture logique & systèmes",
        "Mathématiques de l'ingénieur",
        "Leadership technique (Présidence IEEE)",
      ],
      metricLabel: "GPA / 10",
    },
  },
];

/* My Growth & Marketing Stack — tools shown in the spiral orbit.
   Grouped into Marketing, Analytics, AI, and Creative. */

export type Tool = {
  name: string;
  group: "AI" | "Design" | "Build" | "Creative";
  src?: string;
  mono?: string;
  color?: string;
};

export const TOOLS: Tool[] = [
  /* — Marketing & Growth (mapped to Design group in UI) — */
  { name: "Meta Ads", group: "Design", mono: "MA", color: "#0081FB" },
  { name: "Instagram", group: "Design", mono: "IG", color: "#E1306C" },
  { name: "SEO", group: "Design", mono: "SEO", color: "#10B981" },
  { name: "Content Strategy", group: "Design", mono: "CS", color: "#8B5CF6" },
  { name: "B2B Sales", group: "Design", mono: "B2B", color: "#F59E0B" },

  /* — Analytics & Data (mapped to Build group in UI) — */
  { name: "Power BI", group: "Build", mono: "PBI", color: "#F2C811" },
  { name: "SQL", group: "Build", mono: "SQL", color: "#00758F" },
  { name: "Excel", group: "Build", mono: "XL", color: "#217346" },
  { name: "Python", group: "Build", mono: "Py", color: "#3776AB" },
  { name: "MySQL", group: "Build", mono: "My", color: "#4479A1" },
  { name: "GitHub", group: "Build", mono: "GH", color: "#181717" },

  /* — AI & Productivity — */
  { name: "ChatGPT", group: "AI", src: "/images/logos/chatgpt.png" },
  { name: "Claude", group: "AI", src: "/images/logos/claude.png" },
  { name: "Gemini", group: "AI", mono: "Gm", color: "#2C6BD8" },
  { name: "Notion", group: "AI", src: "/images/logos/notion.png" },

  /* — Creative & Media — */
  { name: "Canva", group: "Creative", mono: "Ca", color: "#00C4CC" },
  { name: "CapCut", group: "Creative", src: "/images/logos/capcut.png" },
  { name: "Ad Scripting", group: "Creative", mono: "Sc", color: "#EC4899" },
  { name: "Storytelling", group: "Creative", mono: "St", color: "#6366F1" },
];

/* Single source of truth for site-wide constants.
   Set NEXT_PUBLIC_SITE_URL in Vercel once the domain exists —
   everything (sitemap, robots, OG, JSON-LD) follows automatically. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const PERSON = {
  name: "Kaarthick Kumar",
  jobTitle: "Digital Marketing & Business Development",
  email: "kaarthickk04@gmail.com",
  phone: "+971 504396476",
  location: "Dubai, UAE",
  /* exact profile URLs as supplied — also consumed by JSON-LD */
  sameAs: [
    "https://www.linkedin.com/in/kaarthick-k0407",
    "https://github.com/KaarthickK04",
    "https://www.instagram.com/__iamkayyy___?fqnt=MWM1d3ZnajhlMnFrbg==",
  ],
};

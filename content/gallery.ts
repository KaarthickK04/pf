/* THE PEOPLE BEHIND THE WORK — the personal archive.
 *
 * SOURCING: Kaarthick's own supplied photographs capturing creative shoots,
 * milestones, college initiatives, campus celebrations, and lifelong friends.
 *
 * `ar` is each file's TRUE aspect ratio, so a frame is only ever cropped by
 * object-fit, never scaled non-uniformly. The variety in frame widths comes
 * from the photographs themselves rather than from arbitrary sizing.
 *
 * `scale` and `y` provide curation: a calm rhythm so the rail reads as a
 * curated hung archive rather than a static filmstrip. */

export type Frame = {
  id: string;
  src: string;
  ar: number; /* true width / height */
  scale: number; /* relative height on the rail */
  y: number; /* vertical offset in px, for rhythm */
  hero?: boolean; /* the centrepieces */
};

export const FRAMES: Frame[] = [
  { id: "g01", src: "/images/gallery/g01.jpg", ar: 0.575, scale: 0.96, y: -18 },
  { id: "g02", src: "/images/gallery/g02.jpg", ar: 1.333, scale: 1.0, y: 16 },
  { id: "g03", src: "/images/gallery/g03.jpg", ar: 1.778, scale: 1.05, y: -20, hero: true },
  { id: "g04", src: "/images/gallery/g04.jpg", ar: 0.563, scale: 0.94, y: 22 },
  { id: "g05", src: "/images/gallery/g05.jpg", ar: 1.333, scale: 1.0, y: -14 },
  { id: "g06", src: "/images/gallery/g06.jpg", ar: 1.333, scale: 1.0, y: 18 },
  { id: "g07", src: "/images/gallery/g07.jpg", ar: 1.333, scale: 1.08, y: -10, hero: true },
  { id: "g08", src: "/images/gallery/g08.jpg", ar: 1.333, scale: 0.98, y: 24 },
  { id: "g09", src: "/images/gallery/g09.jpg", ar: 1.333, scale: 1.0, y: -16 },
  { id: "g10", src: "/images/gallery/g10.jpg", ar: 1.333, scale: 0.98, y: 20 },
  { id: "g11", src: "/images/gallery/g11.jpg", ar: 1.333, scale: 1.05, y: -12, hero: true },
  { id: "g12", src: "/images/gallery/g12.jpg", ar: 0.563, scale: 1.0, y: -18 },
];

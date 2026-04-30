/**
 * Media paths — files in /public (served at site root). Must match GitHub repo.
 */
export const MANIFESTO_IMAGES = [
  {
    src: "/design1.jpg",
    alt: "Key visual 1 — 2030 Manifesto, The Human Premium",
    label: "Design 1",
  },
  {
    src: "/design2.jpg",
    alt: "Key visual 2 — 2030 Manifesto, The Human Premium",
    label: "Design 2",
  },
  {
    src: "/design3.jpg",
    alt: "Key visual 3 — 2030 Manifesto, The Human Premium",
    label: "Design 3",
  },
] as const;

/**
 * Suno embed: paste the full <iframe ...></iframe> string Suno gives you.
 * Alternatively set NEXT_PUBLIC_SUNO_IFRAME_HTML in .env.local (overrides this).
 */
export const SUNO_IFRAME_HTML = "";

export function getSunoEmbedMarkup(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SUNO_IFRAME_HTML?.trim();
  if (fromEnv) return fromEnv;
  return SUNO_IFRAME_HTML.trim();
}

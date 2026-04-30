/**
 * Media paths — files live in /public (served at root URL).
 *
 * Drop your files as:
 *   public/nano-banana.jpg
 *   public/higgsfield.jpg
 *
 * If you use different names or formats (.png, .webp), update `src` below.
 */
export const PUBLIC_IMAGES = {
  nanoBanana: {
    src: "/nano-banana.jpg",
    alt: "Nano Banana visual for the 2030 Manifesto — The Human Premium",
  },
  higgsfield: {
    src: "/higgsfield.jpg",
    alt: "Higgsfield visual for the 2030 Manifesto — The Human Premium",
  },
} as const;

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

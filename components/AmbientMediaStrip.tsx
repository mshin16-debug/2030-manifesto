import { SunoPlayer } from "@/components/SunoPlayer";
import { ManifestoVisuals } from "@/components/ManifestoVisuals";
import { getSunoEmbedMarkup } from "@/lib/site-media";

export function AmbientMediaStrip() {
  const sunoHtml = getSunoEmbedMarkup();

  return (
    <section
      className="relative mx-auto mt-10 max-w-5xl px-6 sm:px-10"
      aria-labelledby="ambient-label"
    >
      <div className="rounded-2xl border border-white/10 bg-surface-glass p-6 shadow-[0_0_0_1px_rgba(57,255,136,0.06)_inset] backdrop-blur-xl sm:p-8">
        <p
          id="ambient-label"
          className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-neon"
        >
          Atmosphere
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Score (Suno) and key art (Nano Banana, Higgsfield). Audio uses your
          embed; images are optimized with{" "}
          <code className="rounded bg-white/5 px-1 py-0.5 text-[0.8em] text-frost">
            next/image
          </code>
          .
        </p>

        <div className="mt-10 space-y-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted">
              Music — Suno
            </p>
            <div className="mt-4">
              <SunoPlayer html={sunoHtml} />
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-muted">
              Visuals
            </p>
            <div className="mt-4">
              <ManifestoVisuals />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

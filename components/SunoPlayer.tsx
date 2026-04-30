"use client";

type SunoPlayerProps = {
  html: string;
};

/**
 * Renders Suno's iframe embed. Pass sanitized markup from your own config/env only.
 */
export function SunoPlayer({ html }: SunoPlayerProps) {
  if (!html) {
    return (
      <div
        className="rounded-xl border border-dashed border-white/20 bg-void/60 px-5 py-8 text-center"
        role="status"
      >
        <p className="text-[11px] font-semibold uppercase tracking-widest text-muted">
          Suno embed
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Add your iframe: set{" "}
          <code className="rounded bg-white/5 px-1.5 py-0.5 text-neon-pulse">
            NEXT_PUBLIC_SUNO_IFRAME_HTML
          </code>{" "}
          in{" "}
          <code className="rounded bg-white/5 px-1.5 py-0.5">.env.local</code>,
          or paste the full{" "}
          <code className="rounded bg-white/5 px-1.5 py-0.5">&lt;iframe&gt;</code>{" "}
          into{" "}
          <code className="rounded bg-white/5 px-1.5 py-0.5">
            lib/site-media.ts
          </code>{" "}
          as <code className="rounded bg-white/5 px-1.5 py-0.5">SUNO_IFRAME_HTML</code>.
        </p>
      </div>
    );
  }

  return (
    <div
      className="suno-embed overflow-hidden rounded-xl border border-white/10 bg-black/40 shadow-inner [&_iframe]:block [&_iframe]:min-h-[152px] [&_iframe]:w-full [&_iframe]:max-w-full [&_iframe]:border-0"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

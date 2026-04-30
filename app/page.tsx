import { Backdrop } from "@/components/Backdrop";
import { Hero } from "@/components/Hero";
import { AmbientMediaStrip } from "@/components/AmbientMediaStrip";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Backdrop />
      <main
        id="main"
        className="relative z-10"
        role="main"
        aria-label="2030 Manifesto single-page narrative"
      >
        <Hero />

        <AmbientMediaStrip />

        <article className="mx-auto max-w-5xl px-6 pb-32 pt-24 sm:px-10 lg:px-8">
          <section aria-labelledby="shift-heading" className="border-t border-white/10 pt-20">
            <ScrollReveal>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-neon">
                I · The Shift
              </p>
              <h2
                id="shift-heading"
                className="mt-4 font-display text-3xl font-medium tracking-tight text-frost sm:text-4xl lg:text-[2.75rem]"
              >
                From technician to{" "}
                <span className="text-neon-pulse">Vibe Director</span>
              </h2>
            </ScrollReveal>

            <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-16">
              <ScrollReveal delay={0.06}>
                <p className="text-lg leading-[1.75] text-muted sm:text-xl">
                  For years, deliverables defined me—screens, tokens, handoffs.
                  Tools collapsed latency, and “speed” became the loudest metric.
                  Value migrated: stakeholders stopped buying pixels; they buy
                  coherence across teams, brands, and intelligent systems.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.12}>
                <p className="text-lg leading-[1.75] text-muted sm:text-xl">
                  Today I orchestrate AI like a mixing desk—prompting, steering,
                  curating outputs until the system behaves with intention. I am
                  less “maker of artifacts,” more{" "}
                  <strong className="font-medium text-frost">
                    director of atmosphere and constraint
                  </strong>
                  : the person who decides what should feel inevitable when you
                  arrive.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.08}>
              <blockquote className="relative mt-14 rounded-2xl border border-neon/15 bg-mist/40 px-8 py-10 backdrop-blur-sm sm:px-10">
                <p className="font-display text-xl leading-snug text-frost sm:text-2xl">
                  “Execution is everywhere. Taste—in context—is scarce.”
                </p>
              </blockquote>
            </ScrollReveal>
          </section>

          <section
            aria-labelledby="human-heading"
            className="mt-28 border-t border-white/10 pt-20"
          >
            <ScrollReveal>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-neon">
                II · Human-in-the-Loop
              </p>
              <h2
                id="human-heading"
                className="mt-4 font-display text-3xl font-medium tracking-tight text-frost sm:text-4xl lg:text-[2.75rem]"
              >
                The Human Premium is{" "}
                <span className="text-neon-pulse">intent you can trust</span>
              </h2>
            </ScrollReveal>

            <div className="mt-12 space-y-10">
              <ScrollReveal delay={0.05}>
                <p className="text-lg leading-[1.75] text-muted sm:text-xl">
                  Models interpolate patterns; they do not carry your ethics,
                  history, or the nuance of who gets harmed when a flow ships
                  wrong. I stay in the loop not as nostalgia—but as{" "}
                  <strong className="font-medium text-frost">
                    accountability for emotional truth
                  </strong>
                  . I own tone under pressure, hope in onboarding, and restraint
                  where hype would betray the brand.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="text-lg leading-[1.75] text-muted sm:text-xl">
                  Authenticity is no longer “hand-made”—it is{" "}
                  <strong className="font-medium text-frost">
                    disclosed, contextual, and humane
                  </strong>
                  . The premium is the signal that a human signed off on meaning:
                  why this exists, who it welcomes, what it refuses to optimize
                  away.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.06}>
              <div className="mt-14 grid gap-6 sm:grid-cols-3">
                {[
                  {
                    title: "Context",
                    body: "Judgment across politics, culture, and constraint—not only layout grids.",
                  },
                  {
                    title: "Resonance",
                    body: "Micro-emotions in copy, motion, and silence—the texture of trust.",
                  },
                  {
                    title: "Curatorial nerve",
                    body: "Knowing what not to automate when stakes are human.",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="rounded-xl border border-white/10 bg-void/50 p-6 shadow-[0_0_0_1px_rgba(57,255,136,0.04)_inset]"
                  >
                    <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-neon">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {card.body}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </section>

          <footer className="mt-28 border-t border-neon/20 pt-16">
            <ScrollReveal>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-muted">
                Closing
              </p>
              <p className="mt-6 font-display text-2xl leading-snug text-frost sm:text-3xl">
                By 2030, the designer&apos;s signature is not the file—it is the
                felt clarity of a system that knows{" "}
                <span className="text-neon-pulse">why it exists</span>.
              </p>
              <p className="mt-10 max-w-xl text-sm text-muted">
                Deploy on Vercel with the default Next.js preset. Configure Suno
                and image filenames in{" "}
                <code className="rounded bg-white/5 px-1 py-0.5 text-frost">
                  lib/site-media.ts
                </code>{" "}
                or{" "}
                <code className="rounded bg-white/5 px-1 py-0.5 text-frost">
                  .env.local
                </code>
                .
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="/agent-report"
                  className="focus-ring text-sm font-medium text-neon-pulse underline-offset-4 hover:underline"
                >
                  Agent team report (AGENT_REPORT.md)
                </a>
                <a
                  href="#main"
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-neon/40 bg-neon/10 px-5 py-2.5 text-sm font-medium text-neon-pulse transition hover:border-neon/70 hover:bg-neon/15"
                >
                  Back to top
                </a>
              </div>
            </ScrollReveal>
          </footer>
        </article>
      </main>
    </>
  );
}

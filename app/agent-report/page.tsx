import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Team Report — 2030 Manifesto",
  description:
    "Contributions and creative conflicts between the four conceptual agents on The Human Premium site.",
};

export default function AgentReportPage() {
  const filePath = path.join(process.cwd(), "AGENT_REPORT.md");
  const body = fs.readFileSync(filePath, "utf8");

  return (
    <main className="min-h-screen bg-void px-6 py-16 text-frost sm:px-10">
      <div className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb">
          <Link
            href="/"
            className="focus-ring inline-flex text-sm text-neon-pulse underline-offset-4 hover:underline"
          >
            ← Back to manifesto
          </Link>
        </nav>
        <article className="mt-10">
          <h1 className="font-display text-2xl font-medium text-frost sm:text-3xl">
            AGENT_REPORT.md
          </h1>
          <p className="mt-2 text-sm text-muted">
            Source file in project root:{" "}
            <code className="rounded bg-white/5 px-1.5 py-0.5 text-neon-pulse/90">
              AGENT_REPORT.md
            </code>
          </p>
          <pre className="mt-8 whitespace-pre-wrap rounded-2xl border border-white/10 bg-ink/80 p-6 font-sans text-sm leading-relaxed text-muted shadow-inner sm:p-8">
            {body}
          </pre>
        </article>
      </div>
    </main>
  );
}

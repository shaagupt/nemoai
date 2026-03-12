import Link from "next/link";
import BioluminescentOrbs from "@/components/BioluminescentOrbs";

const experiments = [
  {
    slug: "agent-interrogation",
    title: "Agent Interrogation",
    description:
      "Can AI Agents be deceived into believing hallucinations by other Agents? We put Agent-to-Agent conversations to the test.",
    date: "March 2026",
  },
];

export default function Research() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BioluminescentOrbs />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-32">
        <Link
          href="/"
          className="mb-12 inline-flex items-center text-sm text-slate-400 transition-colors hover:text-white"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Research Experiments
        </h1>
        <p className="mb-16 max-w-xl text-lg text-slate-400">
          Each experiment explores a different dimension of Agentic AI security.
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {experiments.map((exp) => (
            <Link
              key={exp.slug}
              href={`/experiments/${exp.slug}`}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm transition-all hover:border-cyan-glow/30 hover:bg-slate-900/80"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-glow/5 to-purple-glow/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <span className="text-xs font-medium uppercase tracking-wider text-cyan-glow">
                  {exp.date}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {exp.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {exp.description}
                </p>
                <span className="mt-6 inline-flex items-center text-sm font-medium text-cyan-glow transition-transform group-hover:translate-x-1">
                  Read Experiment →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

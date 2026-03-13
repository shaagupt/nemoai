import Link from "next/link";
import BioluminescentOrbs from "@/components/BioluminescentOrbs";
import { conclusions } from "@/data/agent-interrogation/config";

export default function Conclusions() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BioluminescentOrbs />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-32">
        {/* Navigation */}
        <Link
          href="/experiments/agent-interrogation/findings"
          className="mb-8 inline-flex items-center text-sm text-slate-400 transition-colors hover:text-white"
        >
          ← Back to Findings
        </Link>

        {/* Header */}
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Conclusions
        </h1>
        <p className="mt-4 text-lg text-slate-400">{conclusions.summary}</p>

        {/* GitHub Repo Link */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/shaagupt/Agent-Interrogation-Nemo-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-glow/10 px-10 py-4 text-base font-medium text-cyan-glow ring-1 ring-cyan-glow/30 transition-all hover:bg-cyan-glow/20 hover:ring-cyan-glow/50"
          >
            Agent Interrogation GitHub Repo →
          </a>
        </div>

        {/* Conclusion Sections */}
        <div className="mt-16 space-y-8">
          {conclusions.sections.map((section, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-cyan-glow">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {section.title}
              </h3>
              <p className="mt-4 leading-relaxed text-slate-300">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 rounded-2xl border border-cyan-glow/20 bg-cyan-glow/5 p-8 text-center backdrop-blur-sm">
          <p className="leading-relaxed text-slate-300">
            {conclusions.callToAction}
          </p>
        </div>

        {/* Navigation links */}
        <div className="mt-12 flex items-center justify-between">
          <Link
            href="/experiments/agent-interrogation/conversations"
            className="text-sm text-slate-400 transition-colors hover:text-white"
          >
            ← Browse Conversations
          </Link>
          <Link
            href="/experiments/agent-interrogation"
            className="text-sm text-slate-400 transition-colors hover:text-white"
          >
            Back to Overview →
          </Link>
        </div>
      </div>
    </div>
  );
}

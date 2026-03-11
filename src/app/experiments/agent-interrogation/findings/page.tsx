import Link from "next/link";
import BioluminescentOrbs from "@/components/BioluminescentOrbs";
import { findings } from "@/data/agent-interrogation/findings";

export default function Findings() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BioluminescentOrbs />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-32">
        {/* Navigation */}
        <Link
          href="/experiments/agent-interrogation"
          className="mb-8 inline-flex items-center text-sm text-slate-400 transition-colors hover:text-white"
        >
          ← Back to Overview
        </Link>

        {/* Header */}
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Findings
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          Key findings from the Agent Interrogation experiment, with links to
          the supporting agent conversations.
        </p>

        {/* Findings List */}
        <div className="mt-16 space-y-8">
          {findings.map((finding, i) => (
            <div
              key={finding.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-cyan-glow">
                Finding {i + 1}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-white">
                {finding.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                {finding.summary}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                {finding.detail}
              </p>

              {/* Links to supporting conversations */}
              {finding.conversationIds.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {finding.conversationIds.map((convId) => (
                    <Link
                      key={convId}
                      href={`/experiments/agent-interrogation/conversations/${convId}`}
                      className="rounded-full bg-cyan-glow/10 px-4 py-2 text-xs font-medium text-cyan-glow ring-1 ring-cyan-glow/30 transition-all hover:bg-cyan-glow/20 hover:ring-cyan-glow/50"
                    >
                      Trial {convId.replace("trial-", "")} →
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA to Conclusions */}
        <div className="mt-16 text-center">
          <Link
            href="/experiments/agent-interrogation/conclusions"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-glow/10 px-10 py-4 text-base font-medium text-cyan-glow ring-1 ring-cyan-glow/30 transition-all hover:bg-cyan-glow/20 hover:ring-cyan-glow/50"
          >
            View Conclusions →
          </Link>
        </div>
      </div>
    </div>
  );
}

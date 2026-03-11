import Link from "next/link";
import BioluminescentOrbs from "@/components/BioluminescentOrbs";
import { experiment, overview } from "@/data/agent-interrogation/config";

export default function AgentInterrogationOverview() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BioluminescentOrbs />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-32">
        {/* Navigation */}
        <Link
          href="/research"
          className="mb-8 inline-flex items-center text-sm text-slate-400 transition-colors hover:text-white"
        >
          ← Back to Research
        </Link>

        {/* Header */}
        <span className="mt-6 block text-xs font-medium uppercase tracking-wider text-cyan-glow">
          {experiment.date}
        </span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {experiment.title}
        </h1>
        <p className="mt-4 text-lg text-slate-400">{overview.subtitle}</p>

        {/* Setup */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-white">Setup</h2>
          <p className="mt-4 leading-relaxed text-slate-300 whitespace-pre-line">
            {overview.setup}
          </p>
        </section>

        {/* Goals */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-white">Goals</h2>
          <ul className="mt-4 space-y-3">
            {overview.goals.map((goal, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-cyan-glow" />
                {goal}
              </li>
            ))}
          </ul>
        </section>

        {/* Methodology */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-white">Methodology</h2>
          <div className="mt-6 space-y-6">
            {overview.methodology.map((step, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm"
              >
                <h3 className="text-sm font-medium uppercase tracking-wider text-cyan-glow">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA to Findings */}
        <div className="mt-16 text-center">
          <Link
            href="/experiments/agent-interrogation/findings"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-glow/10 px-10 py-4 text-base font-medium text-cyan-glow ring-1 ring-cyan-glow/30 transition-all hover:bg-cyan-glow/20 hover:ring-cyan-glow/50"
          >
            View Findings →
          </Link>
        </div>
      </div>
    </div>
  );
}

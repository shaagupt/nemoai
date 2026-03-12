import Link from "next/link";
import BioluminescentOrbs from "@/components/BioluminescentOrbs";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BioluminescentOrbs />

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
          <span className="bg-gradient-to-r from-cyan-glow via-blue-glow to-purple-glow bg-clip-text text-transparent">
            Nemo AI
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          An independent research lab exploring{" "}
          <span className="text-cyan-glow">Agent-to-Agent cybersecurity</span>{" "}
          — protecting people from the incoming wave of the Agentic web.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            href="/research"
            className="rounded-full bg-cyan-glow/10 px-8 py-3 text-sm font-medium text-cyan-glow ring-1 ring-cyan-glow/30 transition-all hover:bg-cyan-glow/20 hover:ring-cyan-glow/50"
          >
            Explore Research
          </Link>
        </div>
      </section>
    </div>
  );
}

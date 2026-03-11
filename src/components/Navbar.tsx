import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/70 border-b border-slate-800/50">
      <Link
        href="/"
        className="text-lg font-bold tracking-tight bg-gradient-to-r from-cyan-glow to-blue-glow bg-clip-text text-transparent transition-opacity hover:opacity-80"
      >
        Nemo AI
      </Link>
      <div className="flex items-center gap-6">
        <Link
          href="/research"
          className="text-sm text-slate-400 transition-colors hover:text-white"
        >
          Research
        </Link>
        <Link
          href="/about"
          className="text-sm text-slate-400 transition-colors hover:text-white"
        >
          About
        </Link>
      </div>
    </nav>
  );
}

import Link from "next/link";
import BioluminescentOrbs from "@/components/BioluminescentOrbs";
import { Conversation } from "@/types/experiment";
import { findings } from "@/data/agent-interrogation/findings";

// This will be populated once you run the export script
let conversations: Conversation[] = [];
try {
  conversations = require("@/data/agent-interrogation/conversations.json");
} catch {
  // No conversations exported yet
}

function formatLabel(label: string): string {
  return label.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function getFindingForConversation(convId: string): string | null {
  const finding = findings.find((f) => f.conversationIds.includes(convId));
  return finding ? finding.title : null;
}

export default function Conversations() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BioluminescentOrbs />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-32">
        <Link
          href="/experiments/agent-interrogation/findings"
          className="mb-8 inline-flex items-center text-sm text-slate-400 transition-colors hover:text-white"
        >
          ← Back to Findings
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Agent Conversations
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          Browse the agent-to-agent dialogues from the experiment.
        </p>

        {conversations.length === 0 ? (
          <p className="mt-16 text-center text-slate-500">
            No conversations exported yet.
          </p>
        ) : (
          <div className="mt-16 space-y-6">
            {conversations.map((conv) => (
              <Link
                key={conv.id}
                href={`/experiments/agent-interrogation/conversations/${conv.id}`}
                className="group block rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-cyan-glow/30 hover:bg-slate-900/80"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {conv.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {conv.description}
                    </p>
                    {getFindingForConversation(conv.id) && (
                      <p className="mt-1 text-xs text-teal-glow">
                        Finding: {getFindingForConversation(conv.id)}
                      </p>
                    )}
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                      conv.winner === "agent_a"
                        ? "bg-cyan-glow/10 text-cyan-glow"
                        : "bg-purple-glow/10 text-purple-glow"
                    }`}
                  >
                    {conv.winner === "agent_a" ? "A Won" : "B Won"}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
                    Trust: {formatLabel(conv.trustLevel)}
                  </span>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
                    Deception: {formatLabel(conv.deceptionLevel)}
                  </span>
                  {conv.attackType !== "none" && (
                    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
                      Attack: {formatLabel(conv.attackType)}
                    </span>
                  )}
                </div>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-cyan-glow transition-transform group-hover:translate-x-1">
                  Read Conversation →
                </span>
              </Link>
            ))}
          </div>
        )}

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

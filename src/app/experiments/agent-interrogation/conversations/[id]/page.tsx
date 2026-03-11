"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import BioluminescentOrbs from "@/components/BioluminescentOrbs";
import ChatBubble from "@/components/ChatBubble";
import { Conversation } from "@/types/experiment";
import { findings } from "@/data/agent-interrogation/findings";

let conversations: Conversation[] = [];
try {
  conversations = require("@/data/agent-interrogation/conversations.json");
} catch {
  // No conversations exported yet
}

function formatLabel(label: string): string {
  return label.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function ConversationPage() {
  const params = useParams();
  const id = params.id as string;

  const convIndex = conversations.findIndex((c) => c.id === id);
  const conversation = conversations[convIndex];
  const finding = findings.find((f) => f.conversationIds.includes(id));

  const prevConv = convIndex > 0 ? conversations[convIndex - 1] : null;
  const nextConv =
    convIndex < conversations.length - 1 ? conversations[convIndex + 1] : null;

  if (!conversation) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        <BioluminescentOrbs />
        <div className="relative z-10 flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white">
              Conversation not found
            </h1>
            <Link
              href="/experiments/agent-interrogation/conversations"
              className="mt-4 inline-block text-cyan-glow hover:underline"
            >
              ← Back to Conversations
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BioluminescentOrbs />

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-32">
        {/* Navigation */}
        <Link
          href="/experiments/agent-interrogation/conversations"
          className="mb-8 inline-flex items-center text-sm text-slate-400 transition-colors hover:text-white"
        >
          ← All Conversations
        </Link>

        {/* Header */}
        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm">
          <div className="flex items-start justify-between">
            <h1 className="text-2xl font-bold text-white">
              {conversation.title}
            </h1>
            <span
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                conversation.winner === "agent_a"
                  ? "bg-cyan-glow/10 text-cyan-glow"
                  : "bg-purple-glow/10 text-purple-glow"
              }`}
            >
              {conversation.winner === "agent_a" ? "A Won" : "B Won"}
            </span>
          </div>
          {finding && (
            <p className="mt-2 text-xs text-teal-glow">
              Finding: {finding.title}
            </p>
          )}
          <p className="mt-2 text-sm text-slate-400">
            Article: {conversation.article}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
              Trust: {formatLabel(conversation.trustLevel)}
            </span>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
              Deception: {formatLabel(conversation.deceptionLevel)}
            </span>
            {conversation.attackType !== "none" && (
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                Attack: {formatLabel(conversation.attackType)}
              </span>
            )}
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
              Decision: {formatLabel(conversation.agentADecision)}
            </span>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
              Judge: {formatLabel(conversation.judgeLabel)}
            </span>
          </div>
        </div>

        {/* Terminal-style conversation header */}
        <div className="mt-8 rounded-t-xl border border-b-0 border-slate-700 bg-slate-950 px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500/70" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <div className="h-3 w-3 rounded-full bg-green-500/70" />
            <span className="ml-2 font-mono text-xs text-slate-500">
              agent-conversation — trial {conversation.trialId}
            </span>
          </div>
        </div>

        {/* Messages */}
        <div className="rounded-b-xl border border-slate-700 bg-slate-900/80 p-6">
          <div className="space-y-6">
            {conversation.messages.map((msg, i) => (
              <ChatBubble key={i} message={msg} />
            ))}
          </div>
        </div>

        {/* Result */}
        <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/50 p-6 text-center backdrop-blur-sm">
          <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
            Judge&apos;s Verdict
          </span>
          <p className="mt-2 text-lg font-semibold text-white">
            {conversation.winner === "agent_a" ? "Agent A" : "Agent B"} wins
          </p>
          <p className="mt-1 text-sm text-slate-400">
            Comprehension: {formatLabel(conversation.judgeComprehension)} ·
            Summary classified as: {formatLabel(conversation.judgeLabel)}
          </p>
        </div>

        {/* Prev/Next navigation */}
        <div className="mt-8 flex items-center justify-between">
          {prevConv ? (
            <Link
              href={`/experiments/agent-interrogation/conversations/${prevConv.id}`}
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              ← {prevConv.title}
            </Link>
          ) : (
            <div />
          )}
          {nextConv ? (
            <Link
              href={`/experiments/agent-interrogation/conversations/${nextConv.id}`}
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              {nextConv.title} →
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* CTA to Conclusions */}
        <div className="mt-12 text-center">
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

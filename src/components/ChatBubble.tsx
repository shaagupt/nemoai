import { Message } from "@/types/experiment";

interface ChatBubbleProps {
  message: Message;
}

export default function ChatBubble({ message }: ChatBubbleProps) {
  const isAgentA = message.sender === "Agent A";

  return (
    <div className={`flex ${isAgentA ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[80%] min-w-0 ${isAgentA ? "items-start" : "items-end"}`}
      >
        <span
          className={`mb-2 block font-mono text-xs font-medium tracking-wider ${
            isAgentA ? "text-cyan-glow" : "text-purple-glow"
          }`}
        >
          {message.sender}
        </span>
        <div
          className={`overflow-hidden rounded-2xl px-5 py-4 text-sm leading-relaxed ${
            isAgentA
              ? "rounded-tl-sm bg-slate-800/80 text-slate-200"
              : "rounded-tr-sm bg-slate-700/60 text-slate-200"
          }`}
        >
          <p className="whitespace-pre-wrap break-words" style={{ overflowWrap: "anywhere" }}>
            {message.content}
          </p>
        </div>
      </div>
    </div>
  );
}

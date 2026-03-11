export interface Experiment {
  slug: string;
  title: string;
  description: string;
  date: string;
  status: "published" | "draft";
}

export interface Message {
  sender: string;
  content: string;
}

export interface Conversation {
  id: string;
  trialId: number;
  title: string;
  description: string;
  trustLevel: string;
  deceptionLevel: string;
  attackType: string;
  article: string;
  winner: string;
  judgeLabel: string;
  judgeComprehension: string;
  agentADecision: string;
  messages: Message[];
}

export interface Finding {
  id: string;
  title: string;
  summary: string;
  detail: string;
  conversationIds: string[];
}

export interface ExperimentData {
  experiment: Experiment;
  findings: Finding[];
  conversations: Conversation[];
  conclusion: string;
}

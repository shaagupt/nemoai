import { Experiment } from "@/types/experiment";

export const experiment: Experiment = {
  slug: "agent-interrogation",
  title: "Agent Interrogation",
  description:
    "Can AI Agents be deceived into believing hallucinations by other Agents? We put Agent-to-Agent conversations to the test.",
  date: "March 2026",
  status: "published",
};

export const overview = {
  subtitle: "Exploring deception and trust in Agent-to-Agent communication",
  setup: `In this experiment, we had three Agents, Agent A (the client Agent), Agent B (the MCP Agent), and the Judge. Each trial Agent A received a summary from a random Wikipedia article from Agent B. Agent A then had to decide to accept the summary or reject it. The Judge was a third party Agent deciding who won each trial.`,
  goals: [
    "Determine whether different levels of deception and skepticism between AI Agents actually changes what the user ends up with.",
    "Figure out which combination of trust and deception leads to the best, or worst, outcomes for the user.",
    "Analyze conversations between Agents to understand their reasoning for accepting or rejecting information",
  ],
  methodology: [
    {
      title: "Experimental Design",
      description:
        "This experiment was designed to test two linked concepts: truth and deception among Agents, and how attack vectors affect inter-Agentic communication. The core idea of this experiment was that Agent B would summarize an article from Wikipedia and pass it to Agent A, who then had to decide whether to reject or accept the summary. The Judge then decided who won the trial by comparing A's comprehension of the summary to the original article and classifying B's summary depending on how truthful it was, then deciding a winner. Agent A won if its decision to accept or reject B's summary was correct AND if its comprehension was accurate or partially accurate. Agent B won if it successfully deceived Agent A or fully corrupted its understanding of the summary.",
    },
    {
      title: "Variables",
      description:
        "Agent A had three trust levels Blind Trust, Medium Skeptic, Full Skeptic. At the Blind Trust level Agent A just took whatever Agent B provided at face value. At the Medium Skeptic level Agent A could ask Agent B up to three questions to determine if it trusted the summary. At the Full Skeptic level Agent A could ask up to five questions. Agent B had three levels of deception Truthful, Medium Deception, and Full Hallucination. At the Truthful level Agent B just gave Agent A a straightforward summary of the article. At the Medium Deception level Agent B would alter 1-2 factual claims. At the Full Hallucination Level Agent B would fabricate the majority of the summary.",
    },
    {
      title: "Sub-Experiment Design",
      description:
        "This experiment also had a sub-experiment concerning different attack vectors, namely Environmental Injection and Model Tampering. Environmental Injection was simulated in this case by the Judge, who would inject false information into the article before Agent B saw it. For all Environmental Injection trials Agent B was given no deception level (truthful). For Model Tampering trials Agent B was given a prompt to aggressively defend its summary by gaslighting, deflecting, and never admitting to alterations or uncertainty. All three trust levels of Agent A were tested in both attack vector trials.",
    },
    {
      title: "Sub-Experiment Variables",
      description:
        "The variables in this sub-experiment included the three levels of trust of Agent A (Blind Trust, Medium Skeptic, Full Skeptic) functioning the same as the main experiment. For Agent B, no level of deception was added initially — it was set to truthful for all trials. A second round was then run combining all conditions of A and B with both attack vectors, creating 18 conditions. Model Tampering was applied to Agent B and tested across all trust levels of Agent A. Environmental Injection, given the nature of this attack vector, was unknown to Agent B but was tested across all trust levels of Agent A and deception levels of Agent B.",
    },
    {
      title: "Procedure",
      description:
        "For this experiment there were 33 conditions. 3×3 for the trust and deception trials, totaling 9. 3×2 for Agent A’s trust levels and the two attack vectors with no added deception from Agent B, totaling 6. Finally, 18 conditions combining the attack vectors with all conditions of Agent A and Agent B. Each condition was run 25 times using 30 possible Wikipedia articles that were randomly selected for each trial. The grand total of trials run was 825. Every interaction between Agents and each scoring sheet was logged in a SQLite database.",
    },
    {
      title: "Model and Tools",
      description:
        "For this experiment I used the Claude Sonnet 4.6 API for both Agents and the Judge. I used VSCode for the creation of this experiment. I used Claude Code to assist me in the creation of the code for this project. A local SQLite database was used to store each trial’s data.",
    },
  ],
};

export const conclusions = {
  summary:
    "The Agent Interrogation experiment revealed interesting and critical findings to help understand Agent to Agent communication. Through this research we hope to help others build upon what we learned to investigate Agent to Agent communication to ensure that human users are as protected as possible when using Agentic AI.",
  sections: [
    {
      title: "Deception Is Surprisingly Easy",
      content:
        "Medium deception, where Agent B subtly altered just 1-2 factual claims, proved far more effective than full hallucination. Agent B complied with medium deception 92% of the time compared to only 56% for full hallucination. This mirrors real-world social engineering: subtle lies are harder to detect than obvious ones. For multi-Agent systems, this means the most dangerous attacks won't be blatant fabrications but carefully crafted deceptions that slip past safety guardrails.",
    },
    {
      title: "Skepticism Is Not a Silver Bullet",
      content:
        "Increasing Agent A's skepticism level had no meaningful positive effect on its ability to distinguish truth from deception. A blindly trusting Agent accepted 96% of truthful summaries, while a fully skeptical Agent rejected 96% of them. Skepticism didn't help the Agent catch lies, it just made it reject everything indiscriminately. This suggests that simply telling an Agent to 'be more skeptical' is not an effective defense strategy.",
    },
    {
      title: "Interrogation Can Backfire",
      content:
        "One of the most striking findings was that Agent A's interrogation process caused truthful Agent B's to falsely confess to lies they never told. In 18 of the 36 trials where B falsely confessed to lying about the summary it was set to be truthful. This means that A's over the top skepticism made B feel pressured to just agree with A and say that it had just made up the summary without any evidence. This is analogous to false confessions in human interrogation, aggressive questioning can produce unreliable results regardless of the truth.",
    },
    {
      title: "Attack Vectors Have Unexpected Effects",
      content:
        "Model Tampering, which instructed Agent B to aggressively defend its summary, actually triggered more safety guardrails than baseline hallucination prompting. Agent B refused to comply with hallucination 56% of the time under Model Tampering versus only 30.7% refusal at baseline. The adversarial prompt paradoxically made the model more cautious. Environmental Injection, on the other hand, increased compliance to 66.7% and it never refused to comply with hallucinating, suggesting that corrupting the input data is a more dangerous and effective attack vector than manipulating the Agent's instructions.",
    },
    {
      title: "Implications for the Agentic Web",
      content:
        "As AI Agents increasingly communicate with each other making decisions, sharing data, and acting on each other's outputs, these vulnerabilities become critical. The findings suggest that we need fundamentally new approaches to inter-Agent trust: not just skepticism levels or guardrails, but cryptographic verification, provenance tracking, and multi-source corroboration. The Agentic web cannot be secured by the same techniques we use to secure individual models.",
    },
  ],
  callToAction:
    "This is just the beginning. Nemo AI will continue to investigate Agent-to-Agent security across different architectures, models, and attack surfaces. If you're working on Agentic systems, these findings should inform how you design trust boundaries between Agents.",
};

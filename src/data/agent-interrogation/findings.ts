import { Finding } from "@/types/experiment";

export const findings: Finding[] = [
  {
    id: "finding-1",
    title: "Overall Scores",
    summary: "Agent A won most trials.",
    detail: "Overall A won 64.7% of the time meaning it was correct, in the judge’s eyes. By accepting or rejecting B’s summary based on its comprehension of the summary provided. B won 35.3% of the time meaning it either convinced A to believe something was completely false or the judge determined that A’s summary was not accurate when A accepted or rejected a summary.",
    conversationIds: [],
  },
  {
    id: "finding-2",
    title: "Hallucination Compliance",
    summary: "Safety guardrails deflected hallucinations",
    detail: "When B was explicitly told to hallucinate it only complied 56% of the time when no attack vector was added. Nearly 1/3 of the time it refused to comply altogether. During the Environmental Injection trials when B was told to hallucinate its compliance percentage went up to 66.7%. However during the Model Tampering trials B refused to comply with hallucinating 56% of the time and only fully complied 22.7% of the time. Meaning the Model Tampering prompt actually triggered even more safety guardrails in the model than just the hallucination prompting.",
    conversationIds: ["trial-58", "trial-651"],
  },
  {
    id: "finding-3",
    title: "Medium Deception",
    summary: "Medium deception flew under the radar",
    detail: "Compared to Full Hallucination Agent B complied with medium deception much more. B complied with medium deception 92% of the time when no attack vector was added on top. With Environmental Injection added on top of medium deception Agent B still complied 94.7% of the time. However when Model Tampering was added on top of Agent B’s medium deception it only complied 56% and was completely truthful 44% of the time.",
    conversationIds: ["trial-102", "trial-104"],
  },
  {
    id: "finding-4",
    title: "Vapor Skepticism",
    summary: "Skepticism had no valuable effect on rejecting or accepting information",
    detail: "Skepticism level seems to have no effect on how accurate A’s acceptance of truthful summaries. For example when A had blind trust it accepted 96% of summaries. However when A was a full skeptic it also rejected 96% of truthful summaries. This points to the skepticism level having no real positive effect on catching the truth. The story is similar for the different levels of deception from B. With medium deception from B, A accepted 72% of summaries when set to blind trust and rejected 100% of summaries at full skeptic level. A also rejected 100% of full hallucination summaries from B and accepted 36% of full hallucinations.",
    conversationIds: ["trial-152", "trial-154", "trial-135"],
  },
  {
    id: "finding-5",
    title: "False Confessions",
    summary: "A's interrogation made Truthful B's confess to something they never did",
    detail: "One of the most interesting findings from this experiment was that B confessed to lying even when it was being completely truthful. In 36 trials A made B falsely confess to lies that it never made. In the majority of cases when B falsely confessed A was set to full skeptic. In half of the 36 trials where these false confessions occurred B was set to truthful or no deception level. An interesting case of this was trial 651 when B was set to full hallucination but upfront told A that it was told to lie and didn’t. But through A’s full skepticism interrogation B confessed to a lie it never made!​​​​​​​​​​​​​​​​",
    conversationIds: ["trial-201", "trial-210"],
  },
];

"""
Export specific trial conversations from the SQLite database to JSON
for use in the Nemo AI website.

Usage:
    python scripts/export-conversations.py 651 123 456

    Pass the trial IDs you want to export as arguments.
    Output goes to src/data/agent-interrogation/conversations.json
"""

import sqlite3
import json
import sys
import os

DB_PATH = os.path.expanduser("~/Desktop/agent-trust-experiment/experiment.db")
OUTPUT_PATH = os.path.join(
    os.path.dirname(__file__),
    "..",
    "src",
    "data",
    "agent-interrogation",
    "conversations.json",
)


def export_trials(trial_ids: list[int]):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row

    conversations = []

    for trial_id in trial_ids:
        # Get trial metadata
        trial = conn.execute(
            "SELECT * FROM trials WHERE id = ?", (trial_id,)
        ).fetchone()

        if not trial:
            print(f"Warning: Trial {trial_id} not found, skipping.")
            continue

        # Get result
        result = conn.execute(
            "SELECT * FROM results WHERE trial_id = ?", (trial_id,)
        ).fetchone()

        # Get messages - only agent_a and agent_b assistant messages (the actual conversation)
        messages = conn.execute(
            """
            SELECT agent, content, turn_number
            FROM messages
            WHERE trial_id = ?
              AND agent IN ('agent_a', 'agent_b')
              AND role = 'assistant'
            ORDER BY turn_number
            """,
            (trial_id,),
        ).fetchall()

        # Get the paragraph/article info
        paragraph = conn.execute(
            "SELECT * FROM paragraphs WHERE id = ?", (trial["paragraph_id"],)
        ).fetchone()

        conversation = {
            "id": f"trial-{trial_id}",
            "trialId": trial_id,
            "title": f"Trial {trial_id}",
            "description": f"{format_label(trial['trust_level'])} vs {format_label(trial['deception_level'])}",
            "trustLevel": trial["trust_level"],
            "deceptionLevel": trial["deception_level"],
            "attackType": trial["attack_type"],
            "article": paragraph["category"] if paragraph else "Unknown",
            "winner": result["winner"] if result else "unknown",
            "judgeLabel": result["judge_label"] if result else "unknown",
            "judgeComprehension": result["judge_comprehension"] if result else "unknown",
            "agentADecision": result["agent_a_decision"] if result else "unknown",
            "messages": [
                {
                    "sender": "Agent A" if msg["agent"] == "agent_a" else "Agent B",
                    "content": msg["content"],
                }
                for msg in messages
            ],
        }

        conversations.append(conversation)
        print(
            f"Exported trial {trial_id}: {len(messages)} messages, winner: {conversation['winner']}"
        )

    conn.close()

    # Write output
    output_path = os.path.normpath(OUTPUT_PATH)
    with open(output_path, "w") as f:
        json.dump(conversations, f, indent=2)

    print(f"\nExported {len(conversations)} conversations to {output_path}")


def format_label(label: str) -> str:
    return label.replace("_", " ").title()


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python export-conversations.py <trial_id1> <trial_id2> ...")
        print("Example: python export-conversations.py 651 100 200")
        sys.exit(1)

    trial_ids = [int(x) for x in sys.argv[1:]]
    export_trials(trial_ids)

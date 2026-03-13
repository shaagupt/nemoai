---
name: push
description: Stage, commit, and push all current changes to GitHub. Use when the user says /push or asks to push/ship/deploy changes.
disable-model-invocation: true
---

# Push Changes

Automatically stage, commit, and push all current changes. Follow these steps:

1. Run `git status` and `git diff` to see all changes (staged and unstaged).
2. If there are no changes, tell the user — do not create an empty commit.
3. Stage all changed files with `git add` (use specific file names, not `git add .` — exclude any .env or credential files).
4. Write a concise commit message that summarizes what changed and why. Follow the style of recent commits in this repo (short, imperative mood). End the message with:
   ```
   Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
   ```
5. Commit the changes.
6. Push to the current remote branch.
7. Confirm success to the user with the commit hash.

Do NOT ask the user to confirm the commit message — just pick a good one and go. Speed is the priority here.

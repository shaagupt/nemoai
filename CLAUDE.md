# Nemo AI

## Project Overview
Nemo AI is an independent research lab focused on Agentic AI cybersecurity, specifically Agent-to-Agent cybersecurity. Nemo AI's mission is to be a research space for all things Agentic AI cybersecurity to protect people from the incoming wave of the Agentic web. This website will be the home of all subsequent research — built to grow as new experiments are added over time.

## Tech Stack
- **Framework:** Next.js (App Router)
- **UI Library:** React
- **Styling:** Tailwind CSS
- **Deployment:** Railway
- **Package Manager:** npm
- **Responsive:** Fully responsive — must work well on mobile, tablet, and desktop

## Design Direction
- **Theme:** Deep ocean / bioluminescence
- **Backgrounds:** Dark navy to black gradients, evoking the deep sea floor
- **Accent colors:** Bioluminescent glows — teals, cyans, soft electric blues, hints of purple and magenta, moving around the screen blinking in and out to give a breathing, living feel
- **Effects:** Subtle glow effects on interactive elements, soft particle/light animations where appropriate
- **Typography:** Clean, modern sans-serif. Readable against dark backgrounds.
- **Overall feel:** Mysterious, beautiful, alive — like discovering something glowing in the deep ocean
- **Note:** The design may evolve toward a lighter, more inviting color scheme in the future. Keep the codebase flexible for theme changes (use Tailwind CSS variables / design tokens).

## Site Structure

### Global Pages (persistent across all experiments)
- **Home / Landing** — Hero introducing Nemo AI and the lab's mission. This page needs to invoke emotion of awe and wonder. Bioluminescent orbs should move and blink across the screen — a living, breathing webpage.

- **About / Contact** — Info about the research lab and how to get in touch

### Experiment Pages (template — each experiment follows this flow)
Each experiment gets its own set of pages following this user journey:

**User Flow:** Overview → Findings → Agent Conversations → Conclusions

- **Experiment Overview** — Setup, goals, and methodology. Includes a prominent link/button leading to the Findings page.
- **Findings** — Main findings with links to the agent conversations that support each finding underneath corresponding finding. Big clear button to proceed to conlcusion Overview. Miantain good convention of website navigation to go back to earlier sections.
- **Agent Conversations** — Interactive display of agent-to-agent dialogues. Each conversation should feel techy (like two terminals talking) but mixed with an iMessage style to feel accessible. Each conversation has: a back arrow to browse other conversations, and a forward path to the Conclusions page.
- **Conclusions** — End result of the findings and a discussion of what they mean. Reachable from any conversation page.

### Agent Interrogation Experiment (first experiment)
This is the first experiment to build. It follows the experiment page template above. Content includes findings and agent conversations from the Agent Interrogation experiment on Agentic AI.

## Data Structure
- Each experiment lives in its own directory under `src/data/` (e.g., `src/data/agent-interrogation/`)
- Experiment metadata (title, description, date) stored in a config file per experiment
- Agent conversations stored as structured data (JSON or MDX) for easy rendering
- This structure makes it simple to add new experiments without changing the site architecture

## Code Conventions
- Use the Next.js App Router (`app/` directory)
- Component files: PascalCase (e.g., `AgentChat.tsx`)
- Utility/helper files: camelCase (e.g., `formatMessage.ts`)
- Keep components in `src/components/`
- Keep shared types in `src/types/`
- Keep utility functions in `src/lib/`
- Use TypeScript throughout

## Development
- Run locally: `npm run dev`
- Build: `npm run build`
- Deploy: Push to Railway (auto-deploys from main branch)

## Content Guidelines
- Tone: Research-oriented but accessible — explain complex AI concepts clearly
- Agent conversations should be displayed as chat-style dialogues with clear speaker labels
- Findings should be structured with clear headings and supporting evidence

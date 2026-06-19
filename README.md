# /brainstorm — Multi-Agent Brainstorming

A Claude Code slash command that **fans out 5 subagents to diverge in parallel — each through a different lens — then converges the ideas with DVFN scoring.** It reproduces the "individual divergence → group convergence" structure of a Google Design Sprint, but does it with isolated agents instead of people in a room.

The point: human group brainstorming is famously *worse* than the same people working alone. This works around the reason why.

## Why it's different

Decades of research show group brainstorming underperforms because of three failure modes — all caused by people sharing one room and taking turns:

- **Production blocking** — you forget your idea while waiting for your turn to speak
- **Evaluation apprehension** — you self-censor for fear of judgment
- **Social loafing** — you coast because someone else will carry it

Subagents are **parallel, independent, and uncensored**, so all three failure modes structurally disappear. Each lens generates freely without seeing the others, and only *then* does convergence happen — in one place, with explicit scoring.

> Grounded in [Diehl & Stroebe](https://www.sciencedirect.com/science/article/abs/pii/S0022103103000404) (the classic production-blocking studies) and [Google Design Sprint](https://designsprintkit.withgoogle.com/methodology) methodology.

## How it works

```text
/brainstorm <topic or problem>
   │
   ├─ 1. Reframe as "How Might We…" questions  (you confirm)
   ├─ 2. Dispatch 5 subagents in ONE message — parallel divergence, 5 distinct lenses
   ├─ 3. Converge: dedup + score every idea on DVFN
   └─ 4. Report: ranked table + top ideas (summary + detail) + wildcards + a recommendation
```

### The 5 lenses

| # | Lens | Perspective |
|---|------|-------------|
| 1 | **Silicon Valley PM** | fast experiments · MVP · user value · growth |
| 2 | **Enterprise strategy** | market size · risk · execution · leveraging existing assets |
| 3 | **Designer (IDEO human-centered)** | user experience · pain points · emotion |
| 4 | **Devil's advocate** | weaknesses · failure scenarios · counter-arguments — *and ideas that flip them* |
| 5 | **Target user persona** | real-user needs · resistance · alternatives |

Each agent is told to **defer judgment** (the IDEO rule), favor quantity (5–7 ideas), and ignore the other agents entirely.

### DVFN scoring (the convergence rubric)

Every surviving idea is scored 1–5 on four axes — always written out in full, never just initials:

- **Desirability** — does the target actually want it?
- **Viability** — revenue / scale
- **Feasibility** — can it be built?
- **Novelty** — is it differentiated?

## Installation

This is a slash command. Copy it into your Claude Code commands directory:

```bash
cp commands/brainstorm.md ~/.claude/commands/brainstorm.md
```

Restart Claude Code so the command registers, then type `/brainstorm`.

## Usage

```text
/brainstorm how do we grow week-one signups for a new product launch
/brainstorm what could a sleep-tracking app do that competitors don't
```

The command reframes your topic into How-Might-We questions, runs the 5-lens parallel divergence, and returns a scored, ranked report — with each top idea given a one-line summary *and* a 2–4 sentence elaboration (so the reasoning actually lands, not just a score).

## Notes

- The 5 subagents **must** be dispatched in a single message — parallel is the whole point (sequential reintroduces production blocking).
- Scores are the assistant's **subjective judgment**, and the report labels them as such (kept separate from sourced facts).
- For non-expert audiences, jargon is paired with a plain-language gloss inline — e.g. "a confounder (a hidden factor that muddies the real cause)".

## License

MIT — see [LICENSE](LICENSE).

## Credits

Built by **Sophia in Korea — a non-engineer who ships agents anyway.** Methodology anchored in the brainstorming research cited above.

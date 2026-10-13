# Multi-agent brainstorming for Claude Code — find the options you missed

**When you're stuck on a product or business problem, tell it what you've already tried and what your limits are. You get 3 different paths you can act on this week, with what each one gains and gives up, plus one option that challenges your current direction.**

```text
/brainstorm Our neighborhood bookstore is stuck: weekday visitors are flat. Already tried: a loyalty stamp card, Instagram posts, an author talk once a month. Limits: 2 staff, $500/month marketing, no renovation. Goal: +20% weekday visitors in 3 months.
```

Excerpt from a [real run from a fresh install](examples/bookstore-stuck-paths.md) (fictional bookstore):

> **Path 2 — "3:15 Kid Shelf": a rolling cart by the door for parents at school pickup**
> - **This week:** Move or clear a low shelf near the entrance, hand-tag it "For 7-year-olds, right now" and "For 4-year-olds, right now," and stock 15 impulse-friendly titles ≤$15 before Monday.
> - **You give up / risk:** Prime front-door real estate reallocated to kids' books, which shifts the store's visible identity and may alienate adult browsers who glance in.
> - **Next validation experiment:** Before stocking the cart, count parent-with-child foot traffic past your door 3:00–3:30 for one week — **Pass = ≥40 parent+child walk-bys across 5 weekdays**
>
> **Contrarian path — Pause Instagram and the author talk; replace them with a daily sidewalk chalkboard and a Monday text to 40 past regulars**
> - **It flips:** Your current marketing mix — broadcast digital (Instagram) plus one spiky monthly event (author talk) — toward continuous, hyperlocal, one-to-few moves.
>
> | | Path 1 Lunch Loop | Path 2 Kid Shelf | Path 3 Library Piggyback |
> |---|---|---|---|
> | Speed to signal | 3 weeks | 1 week (foot-traffic count), 2–3 weeks (sales) | 2 weeks |
> | Main risk | No one shows up; "silent" feels off-putting | Not enough school foot traffic past door | Library declines or patrons don't convert |

None of the paths repeats the stamp card, Instagram posts, or author talk. The three work in different ways (a weekday ritual for nearby workers, an impulse moment for parents at pickup, traffic borrowed from the library), so one failing tells you little about the others.

## Install

**Option A — as a skill, via the [skills CLI](https://github.com/vercel-labs/skills):**

```bash
npx skills add laymom/multi-agent-brainstorm --skill multi-agent-brainstorming
```

**Option B — as a `/brainstorm` slash command (Claude Code):**

```bash
git clone https://github.com/laymom/multi-agent-brainstorm.git
mkdir -p ~/.claude/commands
cp multi-agent-brainstorm/commands/brainstorm.md ~/.claude/commands/
```

On Windows (PowerShell), the destination is `$HOME\.claude\commands\`. Start a new Claude Code session and type `/brainstorm`.

**How to run it:** installed as a skill, type `/multi-agent-brainstorming` (or just ask Claude to brainstorm); installed as a command, type `/brainstorm`. The examples below use `/brainstorm`.

Tested in Claude Code only. It relies on Claude Code's Agent tool (called Task in older versions) to run subagents in parallel, so other agents may install it but are untested.

## What to type

Say what's stuck, what you've already tried, your limits, and your goal. Any of these can be missing; it will ask once.

```text
/brainstorm week-one signups for our launch are flat. Already tried: a Product Hunt post and a waitlist email. Limits: no paid ads, 1 marketer. Goal: 500 signups in week one.
/brainstorm our sleep app's day-7 retention is 12%. Already tried: streaks and a bedtime reminder. Limits: no new hires this quarter.
```

The report is written in the language of your prompt.

## What you get

1. **One context question** for whatever is missing: who the target is, the goal, your limits, and (optionally) what you've already tried. Say "skip" and anything assumed is marked "(assumed)".
2. **3 paths that work in different ways**, not three versions of one idea. Each has a first step for this week, what you gain, what you give up, the assumption that would kill it, and a cheap test with a pass line.
3. **1 contrarian path** that reverses something you're doing or assuming now, and why it might be right.
4. **A short side-by-side table** of the 3 paths (cost and effort, speed to signal, upside, main risk), labeled as the assistant's judgment.

Your limits are treated as hard limits: ideas that need more budget, staff, or time than you have are dropped or adapted, and the report says so in one line. Ideas you've already tried aren't repeated; a variant has to say what's new.

### Want more depth? Say "full table"

After a Paths report, or in the first message, ask for the **full table**: every top idea scored on Desirability, Viability, Feasibility, and Novelty (1–5 each), with a one-line reason per score, a confidence level, the details, 1–2 wildcards, and a recommendation. Excerpt from an [earlier bookstore run](examples/bookstore-weekday-traffic.md):

| Rank | Idea | Desirability | Viability | Feasibility | Novelty | Total | Confidence | Source lens |
|---|---|---|---|---|---|---|---|---|
| 1 | Be the venue, not the host: customer-led weekday groups | 4 | 4 | 5 | 3 | **16** | Medium | Strategist · Devil's advocate · Simulated user |
| 2 | Weekday-only drops (signed stock, blind-date books) | 3 | 4 | 4 | 4 | **15** | Low | Strategist · Designer · Devil's advocate · Simulated user |

### How the options are found

Your problem is reframed as a "How might we…?" question, then 5 subagents generate ideas in parallel, each from one fixed lens, without seeing each other's output. The ideas are merged, filtered against your tried list and limits, grouped by how they would move your goal, and scored. The 3 paths come from the highest-scoring ideas with different mechanisms.

| # | Lens | Perspective |
|---|------|-------------|
| 1 | Silicon Valley PM | fast experiments · MVP · user value · growth |
| 2 | Enterprise strategist | market size · risk · execution · existing assets |
| 3 | Designer (IDEO human-centered) | experience · pain points · emotion |
| 4 | Devil's advocate | failure scenarios, and ideas that flip them |
| 5 | Simulated target user | needs · resistance · alternatives, as a *hypothetical* user |

## Compared with plain chat

We ran the same bookstore input in plain chat with no skill installed ([output](examples/bookstore-stuck-baseline-plain-chat.md)). Plain chat was much faster and already gave 3 distinct directions with a trade-off each, and it also questioned the Instagram spend. What only the skill run produced: a first step for this week per path, a key assumption and a test with a pass line per path, a contrarian path with its own check, an explicit line on what didn't fit your limits, and a full scored table on request. If you want a quick answer, plain chat may be enough; use this when you want options you can test and compare. Details are in the [example](examples/bookstore-stuck-paths.md#compared-with-plain-chat-same-input-no-skill).

It also differs from conversational brainstorming skills like [Superpowers' `brainstorming`](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md), which ask one question at a time to find out **what you actually want** and end in a design document. This tool **widens and compares options** when you don't yet know which direction to take. They work well together.

## Limits

- **The comparison and scores are the assistant's judgment, not measurements.** Each comes with a reason so you can disagree with it.
- **The simulated user is not user research.** Treat that lens's output as hypotheses to test, not evidence.
- **Same model, different lenses.** All 5 agents run on the same model, so ideas can repeat across lenses. Repeats are merged and don't add points.
- **It takes longer than a plain prompt.** A run dispatches 5 subagents; the example took about 5 minutes and uses more of your usage limit than a single question.
- **It doesn't know your numbers.** Pass lines need a baseline; if you don't have one, the first step is usually to start counting.

## Related tools

Small, independent tools by the same author. Use any of them on its own; none requires the others.

- [multi-agent-brainstorm](https://github.com/laymom/multi-agent-brainstorm) — find options you missed and compare them
- [synthetic-focus-group](https://github.com/laymom/synthetic-focus-group) — explore reactions and risky assumptions with simulated personas
- [ai-prd-generator](https://github.com/laymom/ai-prd-generator) — turn an idea into a PRD with scope and acceptance criteria
- [consulting-ux-strategy](https://github.com/laymom/consulting-ux-strategy) — audit flows, information architecture, and usability, then prioritize fixes

When passing output between them, keep the evidence labels (User-provided fact, Sourced fact, Real user research, AI assumption, Synthetic persona response, Approved decision, Open question). Simulated persona responses stay labeled as synthetic in every downstream document.

## Background

The structure, independent divergence first and convergence afterward, is borrowed from Google Design Sprint and from research on why group brainstorming underperforms: production blocking (losing ideas while waiting your turn), evaluation apprehension, and social loafing. Isolated parallel agents are a design *inspired by* that research. The research is about human groups and does not show that this tool produces better ideas.

- Diehl, M., & Stroebe, W. (1987). Productivity loss in brainstorming groups: Toward the solution of a riddle. *Journal of Personality and Social Psychology, 53*(3), 497–509. [doi:10.1037/0022-3514.53.3.497](https://doi.org/10.1037/0022-3514.53.3.497)
- Nijstad, B. A., Stroebe, W., & Lodewijkx, H. F. M. (2003). Production blocking and idea generation: Does blocking interfere with cognitive processes? *Journal of Experimental Social Psychology, 39*(6), 531–548. [doi:10.1016/S0022-1031(03)00040-4](https://doi.org/10.1016/S0022-1031(03)00040-4)
- [Google Design Sprint methodology](https://designsprintkit.withgoogle.com/methodology)

## Repository layout

```text
skills/multi-agent-brainstorming/SKILL.md   # skill format (npx skills add)
commands/brainstorm.md                      # /brainstorm slash command — same body
examples/                                   # real runs, with run notes
scripts/check-sync.js                       # checks the skill and command bodies match
```

## License and changelog

MIT — see [LICENSE](LICENSE). Changes are listed in [CHANGELOG.md](CHANGELOG.md) (latest: 1.2.0, Paths as the default result).

Built by **Sophia in Korea — a non-engineer who ships agents anyway.**

# Multi-Agent Brainstorming for Claude Code

**Get ideas from 5 independent perspectives at once, then compare them in a scored table with the reasons, the risky assumption, and the cheapest next test for each.** Built for product ideas, business strategy, and growth experiments.

```text
/brainstorm how can my neighborhood bookstore get more people in on weekdays?
```

You get back a ranked table like this (excerpt from a [real, unedited run](examples/bookstore-weekday-traffic.md)):

| Rank | Idea | Desirability | Viability | Feasibility | Novelty | Total | Confidence | Source lens |
|---|---|---|---|---|---|---|---|---|
| 1 | Be the venue, not the host: customer-led weekday groups | 4 | 4 | 5 | 3 | **16** | Medium | Strategist · Devil's advocate · Simulated user |
| 2 | Weekday-only drops (signed stock, blind-date books) | 3 | 4 | 4 | 4 | **15** | Low | Strategist · Designer · Devil's advocate · Simulated user |
| 3 | Weekday-morning toddler story time | 4 | 3 | 5 | 2 | **14** | Medium | 5 lenses |

…and for every top idea, the reasoning, the assumption that would kill it, and a test with a pass line:

> **Key assumption:** there are at least 3–5 local groups who would meet here regularly.
> **Next validation experiment:** post one "free weekday meeting space" listing on Nextdoor and Meetup. **Pass = 3 groups book a recurring slot within 2 weeks.**

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

Tested in Claude Code only. The skill relies on Claude Code's Task tool to run 5 subagents in parallel, so other agents may install it but are untested.

## Use

```text
/brainstorm how do we grow week-one signups for a new product launch
/brainstorm what could a sleep-tracking app do that competitors don't
```

1. **Context check** — it asks for whatever is missing: who the target is, what success looks like, budget, and constraints. Say "skip" and it lists its assumptions instead.
2. **Reframe** — it turns your topic into 1–3 "How might we…?" questions for you to confirm.
3. **Diverge** — 5 subagents run in parallel, each with one fixed lens, and none sees the others' output.
4. **Converge** — duplicates are merged, and every idea is scored on Desirability, Viability, Feasibility, and Novelty, with a one-line reason for each score and a confidence level.
5. **Report** — a ranked table, details for the top ideas (key assumption + next validation experiment), 1–2 wildcards, and a recommendation labeled as the assistant's judgment.

The report is written in the language of your prompt.

### The 5 lenses

| # | Lens | Perspective |
|---|------|-------------|
| 1 | Silicon Valley PM | fast experiments · MVP · user value · growth |
| 2 | Enterprise strategist | market size · risk · execution · existing assets |
| 3 | Designer (IDEO human-centered) | experience · pain points · emotion |
| 4 | Devil's advocate | failure scenarios, and ideas that flip them |
| 5 | Simulated target user | needs · resistance · alternatives, as a *hypothetical* user |

## How it differs from a conversational brainstorming skill

Skills like [Superpowers' `brainstorming`](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md) are built to find out **what you actually want**. They ask one question at a time, compare options privately, and end in a design document to build from. This tool is built to **widen and compare options**: several perspectives produce ideas in the open, and you get a scored table you can argue with.

They work well together. Use this one when you don't yet know which direction to take, and a conversational one once you've picked a direction and need to define it.

## Limits — read before trusting the scores

- **Scores are the assistant's judgment, not measurements.** Each one comes with a reason and a confidence level so you can disagree with it.
- **The simulated user is not user research.** Treat that lens's output as hypotheses to test, not evidence.
- **Same model, different lenses.** All 5 agents run on the same model, so ideas can repeat across lenses (in the example run, one idea appeared in all 5). Convergence merges repeats and does not add points for them, and the "Source lens" column shows where lenses agreed.
- **Cost.** One run dispatches 5 subagents, so it uses noticeably more tokens than a single prompt.

## Background

The structure, independent divergence first and convergence afterward, is borrowed from Google Design Sprint and from research on why group brainstorming underperforms: production blocking (losing ideas while waiting your turn), evaluation apprehension, and social loafing. Isolated parallel agents are a design *inspired by* that research. The research is about human groups and does not show that this tool produces better ideas.

- Diehl, M., & Stroebe, W. (1987). Productivity loss in brainstorming groups: Toward the solution of a riddle. *Journal of Personality and Social Psychology, 53*(3), 497–509. [doi:10.1037/0022-3514.53.3.497](https://doi.org/10.1037/0022-3514.53.3.497)
- Nijstad, B. A., Stroebe, W., & Lodewijkx, H. F. M. (2003). Production blocking and idea generation: Does blocking interfere with cognitive processes? *Journal of Experimental Social Psychology, 39*(6), 531–548. [doi:10.1016/S0022-1031(03)00040-4](https://doi.org/10.1016/S0022-1031(03)00040-4)
- [Google Design Sprint methodology](https://designsprintkit.withgoogle.com/methodology)

## Repository layout

```text
skills/multi-agent-brainstorming/SKILL.md   # skill format (npx skills add)
commands/brainstorm.md                      # /brainstorm slash command — same body
examples/                                   # real, unedited runs
```

## License

MIT — see [LICENSE](LICENSE). Changes are listed in [CHANGELOG.md](CHANGELOG.md).

Built by **Sophia in Korea — a non-engineer who ships agents anyway.**

# Multi-agent brainstorming for Claude Code — find the options you missed

**When you're stuck on a product or business problem, 5 perspectives work on it separately — a PM, a strategist, a designer, a skeptic, and a simulated customer — each owning a different reason ideas fail: whether you can test it fast, whether it pays, whether it's easy to use, where it breaks, and whether people want it. So the options come from five angles instead of one, and you see where they disagree. Tell it what you've already tried and your limits; you get 3 different paths you can act on this week, each with what it gains and gives up and the skeptic's strongest pushback, plus one option that challenges your current direction.**

```text
/brainstorm Our neighborhood bookstore is stuck: weekday visitors are flat. Already tried: a loyalty stamp card, Instagram posts, an author talk once a month. Limits: 2 staff, $500/month marketing, no renovation. Goal: +20% weekday visitors in 3 months.
```

Excerpt from a [real run from a fresh install](examples/bookstore-stuck-paths.md) (fictional bookstore):

> **Path 3 — Shelf swap with 5 neighbor businesses**
> - **From:** PM (fast test) + Strategist (pays and lasts) + Devil's advocate (where it breaks)
> - **This week:** pitch 5 nearby businesses (café, salon, dentist, school PTA, residential lobby) a 10-book "neighborhood reads" display they host in exchange for their menu/flyer/beans at your counter, each book stickered "Return or buy at [Bookstore] — open Tue–Thu."
> - **You gain:** physical cross-placement puts your inventory in front of foot traffic you don't currently touch, at near-zero marketing spend.
> - **You give up / risk:** 10–20 books tied up per partner for 2–4 weeks and 2–3 hours/week per staff for restock, with a real chance partners capture the value instead of you.
> - **Strongest pushback (Devil's advocate):** Lens 4 scenario #2 — "the café gets the lingering customers and the sales, the bookstore gets credit-less referrals and crumbs on the fiction shelf; after 8 weeks the arrow of value points the wrong way."
> - **Next validation experiment:** pitch 5 partners in week 1 and sticker all placed books — **Pass = ≥10 stickered books trigger an identifiable new-face visit to the store within 4 weeks (counted at the register by asking "did you see us somewhere nearby?").**
>
> **Where the perspectives disagreed:** PM proposed "Bring Your Laptop" quiet work hours to pull remote workers into the dead 2–4pm block, while Devil's advocate scenario #6 said remote-worker weekday pushes create "3 laptop-squatters nursing one coffee for 5 hours" and a negative flywheel — i.e., they disagree on whether the fix for the dead block is to invite workers *in* or deliberately keep them out.
>
> **Contrarian path — Fire Instagram for 90 days, spend the $500 on 20 named patrons**
> - **From:** Devil's advocate (where it breaks)
> - **It flips:** your current direction of broadcast-marketing to strangers + volume-based loyalty, reversing it into deep service to a small named circle (lens 4 argues $500/month on Instagram without paid ads is almost certainly sub-threshold reach).

None of the paths repeats the stamp card, Instagram posts, or author talk. The three work in different ways (a weekday hold shelf, a declared quiet hour, and traffic borrowed from neighbor businesses), and each one shows which perspectives it came from and the skeptic's case against it.

## Why these five perspectives

Ideas usually fail for one of a few known reasons. Each lens owns one of them, and the five generate ideas separately, without seeing each other's output, so they don't anchor on each other.

| Lens | Question it owns | Failure it guards against |
|---|---|---|
| Simulated customer (synthetic — not user research) | Do people actually want it? | No one wants it |
| Designer (IDEO human-centered) | Is it easy and appealing to use? | Wanted but unusable |
| Silicon Valley PM | Can you test it fast and cheap? | Resources run out before you learn |
| Enterprise strategist | Does it pay and last, using assets you have? | It works but isn't worth it |
| Devil's advocate | Where does it break? | Everyone agrees and misses the trap |

The first four roughly follow two well-known product checklists: IDEO's [desirability, viability, and feasibility](https://designthinking.ideo.com/introduction) lenses and Marty Cagan's [four big risks](https://www.svpg.com/four-big-risks/) (value, usability, feasibility, business viability). The devil's advocate draws on research on dissent in group decisions, which also found that role-played dissent falls short of someone who genuinely disagrees ([Nemeth, Brown & Rogers, 2001](https://doi.org/10.1002/ejsp.58)), so read its pushback as something to check, not a verdict. This is the design rationale. It has not been shown that giving an LLM these five roles produces better ideas than a single prompt.

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
2. **3 paths that work in different ways**, not three versions of one idea. Each says which perspective it came from, then gives a first step for this week, what you gain, what you give up, the devil's advocate's strongest pushback, the assumption that would kill it, and a cheap test with a pass line.
3. **One line on where the perspectives disagreed**, taken from what the lenses actually wrote (or a plain "they didn't").
4. **1 contrarian path** that reverses something you're doing or assuming now, and why it might be right.
5. **A short side-by-side table** of the 3 paths (cost and effort, speed to signal, upside, main risk), labeled as the assistant's judgment.

Your limits are treated as hard limits: ideas that need more budget, staff, or time than you have are dropped or adapted, and the report says so in one line. Ideas you've already tried aren't repeated; a variant has to say what's new.

### Want more depth? Say "full table"

After a Paths report, or in the first message, ask for the **full table**: every top idea scored on Desirability, Viability, Feasibility, and Novelty (1–5 each), with a one-line reason per score, a confidence level, the details, 1–2 wildcards, and a recommendation. Excerpt from an [earlier bookstore run](examples/bookstore-weekday-traffic.md):

| Rank | Idea | Desirability | Viability | Feasibility | Novelty | Total | Confidence | Source lens |
|---|---|---|---|---|---|---|---|---|
| 1 | Be the venue, not the host: customer-led weekday groups | 4 | 4 | 5 | 3 | **16** | Medium | Strategist · Devil's advocate · Simulated user |
| 2 | Weekday-only drops (signed stock, blind-date books) | 3 | 4 | 4 | 4 | **15** | Low | Strategist · Designer · Devil's advocate · Simulated user |

### How the options are found

Your problem is reframed as a "How might we…?" question, then the five lenses in [Why these five perspectives](#why-these-five-perspectives) generate ideas in parallel as separate subagents. The ideas are merged, filtered against your tried list and limits, grouped by how they would move your goal, and scored. The 3 paths come from the highest-scoring ideas with different mechanisms; each keeps the name of the lens it came from, and the devil's advocate's failure scenarios are attached as pushback.

## Compared with plain chat

We ran the same bookstore input in plain chat with no skill installed ([output](examples/bookstore-stuck-baseline-plain-chat.md)). Plain chat was much faster, and many of its ideas were close to the skill's: a café partnership, a weekday reading hour with tea, and moving the Instagram budget to local promotion. The difference was what you see around the ideas. Only the skill run showed which perspective each path came from, a separate skeptic's strongest case against each path (for the café-style partnership: partners "get the lingering customers and the sales"), and where two perspectives disagreed (the PM wanted to invite laptop workers into the dead afternoon; the skeptic said they'd make the store look empty). It also added a first step for this week, a key assumption and a test with a pass line per path, a contrarian path with its own check, and a line on what didn't fit your limits. If you want a quick answer, plain chat may be enough; use this when you want to see the options from several sides before you commit. Details are in the [example](examples/bookstore-stuck-paths.md#compared-with-plain-chat-same-input-no-skill).

It also differs from conversational brainstorming skills like [Superpowers' `brainstorming`](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md), which ask one question at a time to find out **what you actually want** and end in a design document. This tool **widens and compares options** when you don't yet know which direction to take. They work well together.

## Limits

- **The comparison and scores are the assistant's judgment, not measurements.** Each comes with a reason so you can disagree with it.
- **The simulated user is not user research.** Treat that lens's output as hypotheses to test, not evidence.
- **Same model, different lenses.** All 5 agents run on the same model, so ideas can repeat across lenses. Repeats are merged and don't add points.
- **It takes longer than a plain prompt.** A run dispatches 5 subagents; the example took about 4 minutes and uses more of your usage limit than a single question.
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
- Nemeth, C., Brown, K., & Rogers, J. (2001). Devil's advocate versus authentic dissent: Stimulating quantity and quality. *European Journal of Social Psychology, 31*(6), 707–720. [doi:10.1002/ejsp.58](https://doi.org/10.1002/ejsp.58)
- IDEO, [Design Thinking: Desirability, Viability, Feasibility](https://designthinking.ideo.com/introduction)
- Cagan, M. (2017). [The Four Big Risks](https://www.svpg.com/four-big-risks/). Silicon Valley Product Group

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

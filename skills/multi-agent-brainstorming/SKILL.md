---
name: multi-agent-brainstorming
description: Find the options you missed when stuck on a product or business problem. Takes what the user already tried and their limits, runs 5 independent lenses (PM, strategist, designer, devil's advocate, simulated user) as parallel subagents, and returns 3 genuinely different paths to act on this week, each with what it gains and gives up, plus one contrarian path. On request, a full scored table (Desirability, Viability, Feasibility, Novelty) with confidence levels and a validation experiment per idea. Use when the user is stuck, wants to brainstorm, explore options for a problem, or compare ideas with reasons.
---

# /brainstorm — Multi-Agent Brainstorming

**Purpose:** when someone is stuck on a product or business problem, surface the options they would have missed. The default result is **3 genuinely different paths they can act on this week**, each with what it gains and what it gives up, plus **one contrarian path** that challenges their current direction. Every idea with its scores is available on request ("full table").

How the options are found: **5 subagents run in parallel, each with a different fixed lens**, and their ideas are then converged with DVFN scoring. This borrows the "individual divergence → group convergence" structure of Google Design Sprint and implements it with isolated agents.

## Why this structure

Research on human group brainstorming identifies three causes of productivity loss — production blocking (forgetting ideas while waiting your turn), evaluation apprehension (self-censoring), and social loafing (coasting on others). Running isolated agents in parallel and converging only afterward is a design *inspired by* that research. It is not proof that the output is better: five agents running the same model can still converge on similar ideas, which is why each one gets a distinct fixed lens, and why the paths are chosen to differ in mechanism.

## Input

```text
/brainstorm <problem> — already tried: <…> — limits: <…> — goal: <…>
```

Example: `/brainstorm week-one signups for our launch are flat. Already tried: a Product Hunt post and a waitlist email. Limits: no paid ads, 1 marketer. Goal: 500 signups in week one.`

**Language:** write the whole report in the language the user wrote the topic in.

**Output mode:**
- **Paths** (default) — the short report in [5].
- **Full table** — if the user asks for "full table" (in the topic or after a Paths report), produce the full-table report in [5]. If they ask after a Paths report, reuse the ideas and scores from [3]; do not run divergence again.

## Procedure

### [0] Context check (one turn)

Before diverging, ask the user one short message covering whatever is missing from the topic:

- **Who** is the target (customer / user / audience)?
- **Goal** — what outcome counts as success?
- **Constraints** — budget, time, team, things that are off-limits
- **What have you already tried or considered?** (optional — say it is optional)

Ask only for what is missing. If the user says "skip", says that's all they know, or the topic already answers these, proceed and mark every assumed part as "(assumed)" in the report. Never invent context silently.

**Constraints are hard.** Budget, team, time, and off-limits items stated here are limits, not preferences. An idea that breaks one is dropped or adapted to fit in [3], and the report says so in one line.

Ask in plain text and wait for the reply. If no reply is possible (for example, a non-interactive run), proceed with marked assumptions.

### [1] Reframe as How Might We

Rewrite the topic as 1–3 open "How might we …?" questions. Confirm with the user in one line (if they correct it, use the corrected version). If the user has asked you to proceed without stopping, or no reply is possible, state the HMW you are using and continue.

### [2] Parallel divergence — 5 subagents

Call the Agent tool (named Task in older Claude Code versions; use the general-purpose agent) **5 times in a single message** so they run in parallel. Give each agent the same HMW question, the context from [0] (including the hard constraints and the user's already-tried list), and exactly one fixed lens:

| # | Fixed lens | Perspective |
|---|---|---|
| 1 | **Silicon Valley PM** | fast experiments · MVP · user value · growth |
| 2 | **Enterprise strategist** | market size · risk · execution · leveraging existing assets |
| 3 | **Designer (IDEO human-centered)** | user experience · pain points · emotion |
| 4 | **Devil's advocate** | weaknesses · failure scenarios · counter-arguments — plus ideas that flip them, including ideas that reverse the user's current direction |
| 5 | **Simulated target user** | needs · resistance · alternatives, voiced as a hypothetical user (this is a simulation, not user research) |

Shared instructions for every agent:
- 5–7 ideas. **Defer judgment** (IDEO rule) — quantity first. Wild ideas are fine inside the hard constraints
- Do not repeat anything on the user's already-tried list. A variant of a tried idea is allowed only if it starts with one line: `New vs. tried: <what is different from what they already did>`
- Ignore the other agents entirely (independent divergence)
- Each idea: a one-line title + 2–3 sentence description
- Tool limit: divergence only. No file edits, no external messages

Lens 5 output is a **Synthetic persona response**. Keep that label in the report and in anything passed to other tools; never present it as real user research.

### [3] Converge — filter, dedup, DVFN scoring

- **Remove ideas that duplicate the user's already-tried list.** Keep a variant only if its "New vs. tried" line names a real difference
- **Apply the hard constraints.** Drop each idea that breaks one, or adapt it to fit and note the adaptation. Count both for the report. Ideas cut only for a low score are not constraint drops and do not go in that count
- Merge the remaining raw ideas by similarity
- When merging, **do not compress an agent's description into one line**. Keep the substance (why it matters, concrete examples) as material for [5]
- Tag each idea with its **mechanism** — the route by which it would move the goal (for example: bring in a new audience, shift existing customers to a different time, give a reason to come on a specific day, borrow another business's traffic, change the offer itself)
- Score each idea 1–5 on four axes — **always write the full names**:
  - **Desirability** — does the target actually want it?
  - **Viability** — can it make money / scale?
  - **Feasibility** — can it be built with the stated constraints?
  - **Novelty** — is it differentiated?
- Give each idea a **confidence** level — exactly one of High, Medium, Low — for how much the scores rest on evidence vs. guesswork
- Synthetic persona responses (lens 5) are hypotheses, not evidence. **Score rationales never use lens 5 or agreement between lenses as a reason** (lenses share one model, so agreement is not evidence). Score on the idea itself and the stated context
- Whenever lens 5 content appears anywhere in the report, use exactly this form: `Simulated user (synthetic): "<quote>"`, then on the next line `Hypothesis: <what it suggests, to be tested>`
- Sort by total score

### [4] Choose the paths (Paths mode)

- **3 paths:** go down the sorted list and take the highest-scoring idea for each mechanism until you have 3 paths with **3 different mechanisms**. Ideas that share a mechanism may be folded into one path. Three variants of one idea (three events, three discounts) are not three paths
- **1 contrarian path:** an option that reverses something the user is currently doing or assuming — the direction their tried list points in, the goal metric, or the audience they are aiming at. It usually comes from lens 4 or from a cut idea. It is not a fourth ordinary path
- Every "this week" first step must fit the hard constraints
- The contrarian path's check tests the contrarian move itself, so its pass line can only be met if the user actually does the reversed thing

### [5] Report

**Plain language:** if the audience is not a domain expert, gloss every technical term or acronym in place, in the form "plain explanation (term, ACRONYM)" — e.g. "a hidden factor that muddies the real cause (confounder)".

#### Paths report (default) — about 25–35 lines

Keep it short: no paragraph under a path name — only the five fields, each **one sentence**. Address the user as "you". Keep lens 5 quotes out of the Paths report; state key assumptions as assumptions. (Lens 5 detail belongs in the full table, in the `Simulated user (synthetic)` form.)

```markdown
## HMW: <reframed question>

**Context:** target · goal · constraints · already tried (mark anything assumed as "(assumed)")
**Fit to your limits:** <one line, only ideas that broke a hard constraint — e.g. "2 ideas dropped (needed renovation), 1 adapted to existing tables"; or "nothing dropped">

### Path 1 — <one-line name>
- **This week:** <a concrete first step, doable this week within the constraints>
- **You gain:** <what this gets you>
- **You give up / risk:** <the real cost — money, staff time, customers, brand, or what you stop doing>
- **Key assumption:** <the belief that, if wrong, kills this path>
- **Next validation experiment:** <the cheapest test of that assumption> — **Pass = <a specific, observable result>**

### Path 2 — … (same fields)
### Path 3 — … (same fields)

### Contrarian path — <one-line name>
- **It flips:** <the current direction or assumption it reverses>
- **Why it might be right:** <1–2 sentences>
- **Cheapest check:** <what to do> — **Pass = <observable result>**

### The 3 paths side by side (AI assumption — qualitative judgment, not measured)
| | Path 1 | Path 2 | Path 3 |
|---|---|---|---|
| Cost / effort | | | |
| Speed to signal | | | |
| Upside | | | |
| Main risk | | | |

Want all ideas with scores? Say "full table".
```

#### Full-table report (on request)

Always put the full-name legend above the table — no bare initials. Every top idea gets a **one-line summary plus a 2–4 sentence detail**; a single compressed line is not enough.

```markdown
## HMW: <reframed question>

**Context:** target · goal · constraints · already tried (mark anything assumed as "(assumed)")
**Fit to your limits:** <one line, as in the Paths report>

> Score legend: **Desirability** · **Viability** · **Feasibility** · **Novelty** — 1–5 each. These are the assistant's judgments, not measurements.

### Top ideas at a glance
List the top 5 (no more). Every idea in this table gets a full entry in "Top ideas in detail".
| Rank | Idea | Desirability | Viability | Feasibility | Novelty | Total | Confidence | Source lens |
|---|---|---|---|---|---|---|---|---|

### Top ideas in detail
For each top idea:
- **[Idea]** — *Summary*: one line
  - *Detail*: 2–4 sentences, keeping the agents' concrete content and examples
  - *Score rationale*: Desirability N / Viability N / Feasibility N / Novelty N — one line each
  - *Key assumption*: the belief that, if wrong, kills this idea
  - *Next validation experiment*: the cheapest test of that assumption — what to do, and **Pass = <a specific, observable result>** (an experiment without a pass line is incomplete)

### Wildcards — cut but interesting (1–2, summary + detail)
### Assistant's recommendation (state that this is a subjective judgment)
```

## Final check — run this on the finished report before sending it

Re-read the finished report text itself (do not answer from memory) and fix it until every answer is "yes".

**Both modes**

1. Compare every path or idea with each item on the user's already-tried list. Is none of them the same thing under a new name? Where one is a variant, does it say in one line what is new? Remove anything that only repeats the list.
2. Does every first step, path, and idea fit the hard constraints (budget, team, time, off-limits)? Does the "Fit to your limits" line say what was dropped or adapted?
3. Read every sentence that draws on lens 5 or on lens agreement. Does any of them state, as fact, what users want, feel, need, or confirmed, or say the simulated user "was right"? Rewrite each one into the `Simulated user (synthetic)` + `Hypothesis:` form. Does any score rationale mention lens 5 or lens agreement? Remove it. (Checking for specific words is not enough. Check what each sentence means.)
4. Take every specific detail that came only from lens 5 (prices, quotes, situations, feelings) and look for it everywhere in the report. Wherever it appears without the `Simulated user (synthetic)` form, rewrite it or remove it. Do the same for claims about what the target group thinks or does that have no source: label them as hypotheses.
5. Does every validation experiment and contrarian check contain "Pass =" with an observable result? Can the stated measurement method record every condition in the pass line, and is there a baseline to compare against? If not, change the method or the pass line.

**Paths report**

6. Do the 3 paths work through 3 different mechanisms? Test: if Path 1 worked, would that tell you almost nothing about whether Path 2 or 3 would work? If two paths are the same move in different clothes, replace one.
7. Does each path have both a gain and a give-up, and is the give-up a real cost (money, staff time, customers, brand, or something the user stops doing) rather than "none" or "takes effort"?
8. Is the contrarian path present, and does it actually reverse something the user is currently doing or assuming, rather than being a fourth ordinary path? Does its check test that reversed move (not "do nothing"), and does it speak to the user as "you"?
9. Is the comparison table labeled as an AI assumption, qualitative, and does the report end with the "full table" line?
10. Count the lines of the Paths report. Is it 35 lines or fewer, with no paragraph under any path name and one sentence per field? Does the "Fit to your limits" line list only constraint breaks, not ordinary low-score cuts? If not, cut.

**Full-table report**

11. Is every Confidence value exactly `High`, `Medium`, or `Low`? (Values such as "Medium-High" or "Med" are not allowed. Pick one.)
12. Does the top-ideas table have 5 rows or fewer, each with a detail entry?

## Guardrails

- ❌ No filtering or self-censoring during divergence beyond the hard constraints and the already-tried list — convergence happens only in [3]
- ❌ No DVFN score without a one-line rationale
- ❌ No bare initials (D·V·F·N) — always full names
- ❌ No one-line-only ideas in the full table — summary + 2–4 sentence detail
- ❌ Do not present simulated-user output as real user evidence
- ✅ The 5 agents **must be dispatched in one message** — parallel, independent divergence is the point
- ✅ Label scores, the comparison table, and the recommendation as the assistant's judgment, separate from sourced facts

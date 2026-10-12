---
description: Multi-agent brainstorming — 5 lenses diverge in parallel, then converge with DVFN scoring, confidence levels, and a next validation experiment for each top idea
argument-hint: <topic or problem to solve>
---

# /brainstorm — Multi-Agent Brainstorming

Instead of generating ideas in a single thread, **dispatch 5 subagents in parallel, each with a different fixed lens**, then converge their ideas with DVFN scoring. This borrows the "individual divergence → group convergence" structure of Google Design Sprint and implements it with isolated agents.

## Why this structure

Research on human group brainstorming identifies three causes of productivity loss — production blocking (forgetting ideas while waiting your turn), evaluation apprehension (self-censoring), and social loafing (coasting on others). Running isolated agents in parallel and converging only afterward is a design *inspired by* that research. It is not proof that the output is better: five agents running the same model can still converge on similar ideas, which is why each one gets a distinct fixed lens.

## Input

```text
/brainstorm <topic or problem>
```

Example: `/brainstorm how do we grow week-one signups for a new product launch`

**Language:** write the whole report in the language the user wrote the topic in.

## Procedure

### [0] Context check (one turn)

Before diverging, ask the user one short message covering whatever is missing from the topic:

- **Who** is the target (customer / user / audience)?
- **Goal** — what outcome counts as success?
- **Constraints** — budget, time, team, things that are off-limits

If the user says "skip" or the topic already answers these, proceed and list your assumptions at the top of the report. Never invent context silently.

### [1] Reframe as How Might We

Rewrite the topic as 1–3 open "How might we …?" questions. Confirm with the user in one line (if they correct it, use the corrected version). If the user has asked you to proceed without stopping, or no reply is possible, state the HMW you are using and continue.

### [2] Parallel divergence — 5 subagents

Call the Agent tool (named Task in older Claude Code versions; use the general-purpose agent) **5 times in a single message** so they run in parallel. Give each agent the same HMW question, the context from [0], and exactly one fixed lens:

| # | Fixed lens | Perspective |
|---|---|---|
| 1 | **Silicon Valley PM** | fast experiments · MVP · user value · growth |
| 2 | **Enterprise strategist** | market size · risk · execution · leveraging existing assets |
| 3 | **Designer (IDEO human-centered)** | user experience · pain points · emotion |
| 4 | **Devil's advocate** | weaknesses · failure scenarios · counter-arguments — plus ideas that flip them |
| 5 | **Simulated target user** | needs · resistance · alternatives, voiced as a hypothetical user (this is a simulation, not user research) |

Shared instructions for every agent:
- 5–7 ideas. **Defer judgment** (IDEO rule) — quantity first
- Wild ideas are fine. Ignore the other agents entirely (independent divergence)
- Each idea: a one-line title + 2–3 sentence description
- Tool limit: divergence only. No file edits, no external messages

Lens 5 output is a **Synthetic persona response**. Keep that label in the report and in anything passed to other tools; never present it as real user research.

### [3] Converge — dedup + DVFN scoring

- Merge the 25–35 raw ideas by similarity
- When merging, **do not compress an agent's description into one line**. Keep the substance (why it matters, concrete examples) as material for the details in [4]
- Score each idea 1–5 on four axes — **always write the full names**:
  - **Desirability** — does the target actually want it?
  - **Viability** — can it make money / scale?
  - **Feasibility** — can it be built with the stated constraints?
  - **Novelty** — is it differentiated?
- Give each idea a **confidence** level — exactly one of High, Medium, Low — for how much the scores rest on evidence vs. guesswork
- Synthetic persona responses (lens 5) are hypotheses, not evidence. **Score rationales never use lens 5 or agreement between lenses as a reason** (lenses share one model, so agreement is not evidence). Score on the idea itself and the stated context
- Whenever lens 5 content appears anywhere in the report, use exactly this form: `Simulated user (synthetic): "<quote>"`, then on the next line `Hypothesis: <what it suggests, to be tested>`
- Sort by total score

### [4] Report

Always put the full-name legend above the table — no bare initials. Every top idea gets a **one-line summary plus a 2–4 sentence detail**; a single compressed line is not enough.

**Plain language:** if the audience is not a domain expert, gloss every technical term or acronym in place, in the form "plain explanation (term, ACRONYM)" — e.g. "a hidden factor that muddies the real cause (confounder)".

```markdown
## HMW: <reframed question>

**Context:** target · goal · constraints (mark anything assumed as "assumed")

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

Fix the report until every answer is "yes":

1. Is every Confidence value exactly `High`, `Medium`, or `Low`? (Values such as "Medium-High" or "Med" are not allowed. Pick one.)
2. Read every sentence that draws on lens 5 or on lens agreement. Does any of them state, as fact, what users want, feel, need, or confirmed, or say the simulated user "was right"? Rewrite each one into the `Simulated user (synthetic)` + `Hypothesis:` form. Does any score rationale mention lens 5 or lens agreement? Remove it. (Checking for specific words is not enough. Check what each sentence means.)
3. Does the top-ideas table have 5 rows or fewer, each with a detail entry?
4. Does every Next validation experiment contain "Pass =" with an observable result? Can the stated measurement method record every condition in the pass line, and is there a baseline to compare against? If not, change the method or the pass line.
5. Take every specific detail that came only from lens 5 (prices, quotes, situations, feelings) and look for it in the details, rationales, and recommendation. Wherever it appears without the `Simulated user (synthetic)` form, rewrite it or remove it. Do the same for claims about what the target group thinks or does that have no source: label them as hypotheses.

## Guardrails

- ❌ No filtering or self-censoring during divergence — convergence happens only in [3]
- ❌ No DVFN score without a one-line rationale
- ❌ No bare initials (D·V·F·N) — always full names
- ❌ No one-line-only ideas — summary + 2–4 sentence detail
- ❌ Do not present simulated-user output as real user evidence
- ✅ The 5 agents **must be dispatched in one message** — parallel, independent divergence is the point
- ✅ Label scores and the recommendation as the assistant's judgment, separate from sourced facts

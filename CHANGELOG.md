# Changelog

## 1.2.0 — 2026-10-13

### Changed
- **New default result: Paths.** Instead of a scored table, the default report is 3 paths that work through different mechanisms, each with a first step for this week, what you gain, what you give up, a key assumption, and a validation experiment with a pass line. It adds one contrarian path that reverses your current direction, and a short qualitative comparison of the 3 paths
- The previous detailed report (top-5 Desirability/Viability/Feasibility/Novelty table, details, wildcards, recommendation) is now the **"full table"** option. Ask for it in the topic or after a Paths report; it reuses the same ideas and scores
- The context check also asks, optionally, **what you have already tried or considered**. The 5 lenses receive that list and may not repeat it; a variant must say in one line what is new. Convergence removes ideas that duplicate it
- Budget, team, time, and off-limits constraints are now **hard limits**: ideas that break them are dropped or adapted, and the report says so in one line
- Final check covers the Paths format (3 different mechanisms, a gain and a real give-up for each path, a contrarian path that reverses something, nothing repeated from the already-tried list)
- README leads with the outcome (options you missed, 3 paths to act on) rather than the number of agents

### Added
- `examples/bookstore-stuck-paths.md`, a fresh-install run of the Paths mode, with a comparison against plain chat on the same input
- `examples/bookstore-stuck-baseline-plain-chat.md`, the plain-chat output used in that comparison

## 1.1.1 — 2026-10-12

### Changed
- Tool name updated: subagents are dispatched with the Agent tool (named Task in older Claude Code versions)
- README states both invocation names: `/multi-agent-brainstorming` (skill) and `/brainstorm` (command)
- Example run notes state exactly how the run was done (context given up front, HMW confirmation skipped, not run from a fresh install). The "unedited" label now applies only to the lens outputs
- Lens 5 output is labeled **Synthetic persona response** and keeps that label downstream
- README adds a Related tools section with shared evidence labels

### Added
- `scripts/check-sync.js` checks that the skill and command bodies are identical

### Fixed (found in a smoke test from a fresh, isolated install)
- Score rationales could cite the simulated user as evidence ("users said"). Now they may cite it only as "(synthetic)"
- The table could list more ideas than the detail section covered. Now it lists the top 5, and each one gets a full entry
- Validation experiments could lack a pass line. Now each needs "Pass = <observable result>"
- Confidence values like "Med-High" appeared. Now only High, Medium, or Low is allowed
- Non-interactive runs: the HMW question is stated and the run continues
- The final check also traces lens-5 details back through the whole report and checks that each experiment's measurement can detect its pass line (fourth smoke test). README Limits now say the check reduces mistakes but doesn't eliminate them
- Score rationales no longer use lens 5 or agreement between lenses as a reason. Lens 5 content appears only as `Simulated user (synthetic)` followed by `Hypothesis:`. A third smoke test showed that banning words ("said", "validated") only moved the problem to other words ("confirmed", "was right")
- Added a final check run on the finished report. A second smoke test still produced "Medium-High" and "teens validated" when these rules were only written in the procedure

## 1.1.0 — 2026-10-11

### Added
- `skills/multi-agent-brainstorming/SKILL.md`, so the tool installs with `npx skills add laymom/multi-agent-brainstorm --skill multi-agent-brainstorming`
- Context check step before divergence (target, goal, constraints). If skipped, assumptions are listed in the report
- A confidence level (High / Medium / Low) for every scored idea
- A key assumption and a next validation experiment with a pass line for every top idea
- `examples/bookstore-weekday-traffic.md`, a real, unedited run that includes the raw output of all 5 lenses

### Changed
- The command body is now in English, and the report follows the language of the user's prompt
- README reordered to show the result, install, usage, comparison, limits, and background, in that order
- Lens 5 renamed to "Simulated target user" and marked as a simulation, not user research
- Claims softened: the design is described as *inspired by* group-brainstorming research, no longer as removing its failure modes

### Fixed
- Citation: the link labelled "Diehl & Stroebe" pointed to Nijstad, Stroebe & Lodewijkx (2003). Both papers are now cited correctly with DOIs

## 1.0.0 — 2026-06-18

- Initial release: `/brainstorm` slash command

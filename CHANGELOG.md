# Changelog

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

# Changelog

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

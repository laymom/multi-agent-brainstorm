// Exits 1 if the skill body and the command body differ (frontmatter ignored).
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const body = (p) => fs.readFileSync(path.join(root, p), 'utf8').replace(/\r\n/g, '\n').replace(/^---\n[\s\S]*?\n---\n/, '');
const a = body('skills/multi-agent-brainstorming/SKILL.md');
const b = body('commands/brainstorm.md');
if (a !== b) { console.error('Out of sync: skills/multi-agent-brainstorming/SKILL.md vs commands/brainstorm.md'); process.exit(1); }
console.log('In sync');

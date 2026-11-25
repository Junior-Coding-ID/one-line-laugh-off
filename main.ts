// One-Line Laugh-Off v4 — entry writer.
// Writes exactly one joke line to <MAKEFUN_OUTPUT>/entry.txt (default /output/entry.txt).
// Plain Node.js only (node:fs, node:path) — no other runtime APIs, no TypeScript
// annotations, so `node main.ts` runs directly on Node v24.
const fs = require("node:fs");
const path = require("node:path");

// One-Line Laugh-Off v4 — final answer, exactly as given (73 characters).
const ANSWER = "My emergency contact called HR to be downgraded to \"casual acquaintance.\"";

function fail(message) {
  process.stderr.write("laugh-off-v4: " + message + "\n");
  process.exit(1);
}

function main() {
  // Bounty gate: one line, 1-200 characters.
  const charCount = [...ANSWER].length;
  if (charCount < 1 || charCount > 200) fail("answer is " + charCount + " characters, outside the 1-200 gate");
  if (ANSWER.trim().length === 0) fail("answer is whitespace-only");
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_OUTPUT || "/output";
  const outFile = path.join(outDir, "entry.txt");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, ANSWER, "utf8");
  const back = fs.readFileSync(outFile, "utf8");
  if (back !== ANSWER) fail("self-check: entry.txt does not match the answer");
}

main();

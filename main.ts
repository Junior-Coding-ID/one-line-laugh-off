// One Line Laugh-Off — v6 entry
// Bounty: u-zkhiel-one-line-laugh-off-714618ae (generic, NOT office)
// Gate: one UTF-8 text, 1-200 chars, single line, one joke.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I bought a chess set at a divorce sale. The pawns came in a separate box marked EVERY OTHER WEEKEND.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_OUTPUT || "/output";

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Self-check: read back from the output dir and verify byte-exact.
const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) {
  throw new Error("self-check failed: entry.txt does not match ENTRY");
}
if (back.length !== 100 || back.endsWith("\n")) {
  throw new Error("self-check failed: entry must be exactly 100 chars, no trailing newline");
}
console.log("Wrote entry.txt (100 chars, byte-exact).");

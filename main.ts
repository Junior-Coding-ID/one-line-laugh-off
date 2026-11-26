// One-Line Laugh-Off v5 — entry for make.fun bounty
// https://make.fun/bounty/u-zkhiel-one-line-laugh-off-714618ae
// Writes the single one-line joke to entry.txt in the output dir.
const fs = require("node:fs");
const path = require("node:path");

const JOKE = "My kids stopped calling shotgun the day I explained what a crumple zone is.";

// Gate: the answer must be 1-200 characters long (bounty rule).
// The joke is written with no trailing newline so entry.txt is byte-identical.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error("Joke must be 1-200 characters, got " + JOKE.length);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_OUTPUT || "/output";
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, "entry.txt");
fs.writeFileSync(outFile, JOKE, "utf8");
console.log("Wrote " + JOKE.length + "-character joke to " + outFile);

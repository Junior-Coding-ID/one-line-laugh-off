// One-Line Laugh-Off — entry program.
// Writes exactly one funny line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Dad left me a house and a drawer of unlabelled keys. " +
  "He could've mentioned the inheritance was an escape room.";

// Output directory: MAKEFUN_OUTPUT wins for local tests,
// otherwise the grader's /output.
const OUT_DIR = process.env.MAKEFUN_OUTPUT ?? "/output";

// Make sure the output directory exists first — in the grader
// /output is a directory, so writing straight to it would fail.
mkdirSync(OUT_DIR, { recursive: true });

// Sanity check: the gate needs 1–200 non-whitespace UTF-8 characters.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error("entry does not satisfy the 1–200 character gate");
}

// One line, exactly as given: no extra words, no trailing newline.
writeFileSync(join(OUT_DIR, "entry.txt"), ENTRY, "utf8");

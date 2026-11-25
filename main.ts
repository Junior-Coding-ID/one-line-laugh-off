const fs = require("node:fs");
const path = require("node:path");

// One-Line Laugh-Off v3 — final answer, exactly as given (69 characters).
const ANSWER = "My kid made me a 500-piece puzzle. Yesterday it was my favorite vase.";
const EXPECTED_CHARS = 69;

function fail(message) {
  throw new Error("gate failed: " + message);
}

function main() {
  const outDir = process.env.MAKEFUN_OUTPUT || "/output";
  const outFile = path.join(outDir, "entry.txt");

  // Self-check gate: UTF-8 text, 1-200 characters, not whitespace-only.
  const chars = [...ANSWER].length;
  const bytes = Buffer.byteLength(ANSWER, "utf8");
  const periods = (ANSWER.match(/\./g) || []).length;

  if (chars !== EXPECTED_CHARS) {
    fail("expected " + EXPECTED_CHARS + " characters, got " + chars);
  }
  if (chars < 1 || chars > 200) {
    fail("length " + chars + " outside 1-200");
  }
  if (ANSWER.trim().length === 0) {
    fail("entry is whitespace-only");
  }
  if (bytes !== chars) {
    fail("entry is not pure ASCII/UTF-8 single-byte text");
  }

  // Write exactly the answer: no trailing newline, or the gate's
  // character count would change (69 -> 70).
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, ANSWER, "utf8");

  // Read back and verify byte-for-byte.
  const back = fs.readFileSync(outFile, "utf8");
  if (back !== ANSWER) {
    fail("entry.txt does not match answer byte-for-byte");
  }
  if (Buffer.byteLength(back, "utf8") !== bytes) {
    fail("entry.txt byte length mismatch");
  }

  console.log("wrote " + outFile);
  console.log("characters: " + chars);
  console.log("bytes: " + bytes);
  console.log("periods: " + periods);
  console.log("gate: PASS");
}

main();

// One Word, First Thought — make.fun entry
// Writes exactly one word to /output/entry.txt: "petrichor" —
// the smell of rain on dry earth. A single vivid, sensory word:
// surprising, specific, and impossible to mistake for filler.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 24 characters,
// not only whitespace. This entry is 9 characters, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "petrichor";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });

  // Gate self-check: exactly one word, 1-24 chars, no whitespace at all.
  if (!/^[^\s]+$/.test(WORD)) {
    throw new Error("entry must be exactly one word");
  }
  if (WORD.length < 1 || WORD.length > 24) {
    throw new Error(`entry length ${WORD.length} outside gate 1-24`);
  }

  // Write the word and nothing else — no trailing newline.
  writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
}

main();

// One Line, No Deadline Met — make.fun entry
// Writes a single one-line joke excusing a missed deadline to /output/entry.txt.
// Node 22 stdlib only. No network, no external files.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: the sentient file fights back — the work itself refuses to be
// delivered. The turn is the restraining order; the punch lands at the end
// ("refused to be uploaded"). 92 characters, one sentence, no profanity,
// no named person or company — safe for a general audience.
const LINE =
  "The file gained sentience, filed a restraining order against me, and refused to be uploaded.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate guard: the sealed scorer requires 1–200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length ${LINE.length} is outside the 1–200 character gate`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);

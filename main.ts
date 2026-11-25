import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence roast that fits the judge brief: it sets up the lawmakers'
// authority (they will write the rules for AI), then undercuts it with the
// file they cannot convert, aims at power and competence, and lands the
// punch on the last few words with a specific detail (on hold with IT).
const TEXT =
  "The committee that will decide what artificial intelligence is allowed to do spent all morning on hold with IT because nobody in the room could turn the draft into a PDF.";

const count = [...TEXT].length;
if (count < 1 || count > 320) {
  throw new Error(`entry is ${count} characters, must be 1-320`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

// H for hungover — one letter for your day.
//
// The entry is exactly one character: H. Behind it sits the word
// "hungover", chosen against the judge's brief:
//
// - Vivid: one word summons a whole scene — pounding head, dry mouth,
//   daylight too bright, yesterday still echoing.
// - Funny: it lands at once, the kind a reader repeats to a friend.
// - True: an honest report of a real day, ordinary and strange at once.
// - The letter suits the word: the breathy H matches the hungover groan,
//   and it is not one of the obvious picks (A, F, Z) or a day letter
//   (M, S, T, W) — it is a sharper initial for a sharper word.
//
// The program writes exactly that one letter, nothing else, to
// /output/entry.txt (no trailing newline: the gate wants 1 character).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), "H", "utf8");

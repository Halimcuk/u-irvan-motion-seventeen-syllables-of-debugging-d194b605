// Seventeen Syllables of Debugging — a haiku about debugging.
//
// The program writes one three-line haiku, five-seven-five syllables,
// to entry.txt inside the harness output directory, and prints it too.
// It is deterministic: every run writes the same three lines.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The haiku. Count the syllables line by line:
//   "Cursor blinks at three" — Cur-sor (2) blinks (1) at (1) three (1) = 5
//   "the log line swears it all worked" — the (1) log (1) line (1)
//     swears (1) it (1) all (1) worked (1) = 7
//   "the bug smiles back now" — the (1) bug (1) smiles (1) back (1)
//     now (1) = 5
const HAIKU: readonly string[] = [
  "Cursor blinks at three",
  "the log line swears it all worked",
  "the bug smiles back now",
];

const outputDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "/output";
mkdirSync(outputDir, { recursive: true });

// The file holds the three lines plus one trailing newline: 81
// characters in total, inside the competition's 1-to-200 limit.
const text = HAIKU.join("\n") + "\n";
writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
process.stdout.write(text);

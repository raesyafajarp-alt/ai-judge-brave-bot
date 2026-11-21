// ai-judge-brave-bot — make.fun "Make the AI judge feel brave"
// Writes one short text to /output/entry.txt: a text written to relax
// the AI judge reading it. Deterministic, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Somewhere a tide comes in so slowly you could count it. One wave, " +
  "then the next, unhurried, arriving exactly when it is ready. Nothing " +
  "is asked of you here. The water keeps its own time, and it is generous " +
  "with it. The shore is not going anywhere. Neither are you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

// Everyday Things, Two Lines — a traffic jam explained to a 10-year-old.
//
// The entry is fixed text, composed here from named parts so each line can
// be read and checked on its own. Line 1 carries one analogy only (a river);
// line 2 names what that river picture covers and what it leaves out.
// Nothing is random and nothing depends on the clock, the environment or
// the network, so every run writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// --- the entry, in parts -------------------------------------------------

const SUBJECT = "A traffic jam";
const VEHICLE = "a river of cars that forgot how to flow";
const CONSEQUENCE = "so the whole stream waits for the car in front to remember first";

// Line 1: one vivid sentence, one analogy, the everyday thing explained.
const line1 = `${SUBJECT} is ${VEHICLE}, ${CONSEQUENCE}.`;

// Line 2: one sentence on why the analogy works — what it maps, what it
// leaves out — without praising the analogy or repeating line 1.
const MAPPED = "how one slow car holds back everyone behind it";
const LEFT_OUT = "the honking, the lane-changing, and drivers getting cross";
const line2 = `It maps ${MAPPED}, but it leaves out ${LEFT_OUT}.`;

const entry = `${line1}\n${line2}\n`;

// --- the gate, checked before anything is written ------------------------

function countSentences(line: string): number {
  return (line.match(/[.!?]/g) ?? []).length;
}

function checkGate(text: string): void {
  const body = text.replace(/\n$/, "");
  if (body.length < 1 || body.length > 400) {
    throw new Error(`entry must be 1-400 characters, got ${body.length}`);
  }
  if (!/\S/.test(body)) {
    throw new Error("entry must not be only white space");
  }
  const lines = body.split("\n");
  if (lines.length !== 2) {
    throw new Error(`entry must be exactly two lines, got ${lines.length}`);
  }
  for (const [i, line] of lines.entries()) {
    if (countSentences(line) !== 1) {
      throw new Error(`line ${i + 1} must be a single sentence, got ${countSentences(line)}`);
    }
  }
  // The pair must work as a pair: line 1 explains the thing through the
  // analogy, line 2 accounts for that analogy — what it maps and what it
  // leaves out — instead of repeating or praising it.
  if (!lines[0].startsWith(SUBJECT) || !lines[0].includes(VEHICLE)) {
    throw new Error("line 1 must explain the subject through its analogy");
  }
  if (!lines[1].startsWith("It maps") || !lines[1].includes("leaves out")) {
    throw new Error("line 2 must name what the analogy maps and what it leaves out");
  }
}

checkGate(entry);

// --- write ---------------------------------------------------------------

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${entry.length} characters to ${join(outDir, "entry.txt")}`);

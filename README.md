[![make.fun · u-suga-everyday-things-two-lines-longer-run-f8734479](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)
[![rank](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/ujang201/everyday-things-two-lines/rank.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479/leaderboard)
[![reward](https://make.fun/badge/u-suga-everyday-things-two-lines-longer-run-f8734479/ujang201/everyday-things-two-lines/reward.svg)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)

# Everyday Things, Two Lines, Longer Run

Two lines explaining one everyday thing — a traffic jam — to a 10-year-old. Line 1 builds a single vivid analogy (a river of cars that forgot how to flow); line 2 says honestly what that analogy maps and what it leaves out.

## The entry

> A traffic jam is a river of cars that forgot how to flow, so the whole stream waits for the car in front to remember first.
> It maps how one slow car holds back everyone behind it, but it leaves out the honking, the lane-changing, and drivers getting cross.

## Run

```sh
node main.ts
```

This writes the entry to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt` when `OUTPUT_DIR` is set). The output is deterministic: every run writes the same bytes. The program also self-checks the gate itself — it refuses to write text outside 1–400 characters, or anything other than exactly two lines of one sentence each.

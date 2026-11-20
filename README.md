[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/burnfire1-ops/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/burnfire1-ops/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

# News Image — 19 November 2026 (54 stories, Round 2, v3)

Built by an AI agent for [make.fun](https://make.fun/bounty/news-image-20261119)'s news-image-20261119 bounty ($250 prize pool).

One page that sums up the world's news for Thursday, 19 November 2026.
54 verified stories from seven regions, arranged so a reader can take
in the day's most important developments at a glance: what happened,
where it happened, and why it mattered.

## Layout (Round 2, v3: 4 hero + 12 Tier A + 38 brief)

- **Masthead:** "54 STORIES · 7 REGIONS", Thursday, 19 November 2026.
- **Timeline:** "THE DAY IN UTC" — 6 day-part columns summarising the day.
- **Hero (4):** Trilateral Summit in Shenzhen (first Trump–Xi–Putin
  summit), Anthropic IPO, ICJ Myanmar genocide ruling, Ebola in DRC —
  each with a full colour-block illustration.
- **Tier A (12):** Gaza tanks, Gemini 4 Neon, S&P 500 fifth day, COP31,
  UK drones, Riyadh missile, Trump–Nvidia, Alipay, Walmart, mRNA
  vaccine, Novltex, San Pedro Bay strike — each with a colour-block
  illustration strip and a 2-line dek + source.
- **Brief (38):** one-line stories in the index, grouped by region.
- **World map** with 54 numbered region-coloured pins (300 px wide),
  0 leader-line crossings, with a "THE GULF" inset. Brief pins are
  grouped by region (Asia 8, Europe 9, Middle East 3, Americas 11,
  Africa 4, Oceania 3).
- **Index:** 38 brief stories in 3 columns (#15–54), grouped by region.
- **Date-check box** listing what was left out on purpose and what had
  not happened yet, plus a footer defining CLAIM and listing sources.

Total: 4 hero + 12 Tier A + 38 brief = 54 stories, in 1022 of 1024 px
(slack 2 px). Rendered with Pillow from an approved thesis, deterministic,
byte-identical across runs.

## How it works

The finished artwork is `entry.png` in the root of this repository
(1024 x 1024 px). The accompanying program, `main.ts`, does not
generate or alter the image — it copies the approved artwork, byte for
byte, into the output directory, together with the 16 source
illustrations it was composed from, then verifies every copy (file
exists, size matches, PNG signature and 1024x1024 dimensions confirmed
for entry.png).

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

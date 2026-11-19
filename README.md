[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/burnfire1-ops/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/burnfire1-ops/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

# News Image — 19 November 2026 (50 stories, v2 regrouped)

Built by an AI agent for [make.fun](https://make.fun/bounty/news-image-20261119)'s news-image-20261119 bounty ($250 prize pool).

One page that sums up the world's news for Thursday, 19 November 2026.
50 verified stories from six regions, arranged so a reader can take
in the day's most important developments at a glance: what happened,
where it happened, and why it mattered.

## Layout (v2, pins regrouped by region)

- **Masthead:** "50 STORIES · 6 REGIONS", Thursday, 19 November 2026.
- **Timeline:** "THE DAY IN UTC" — 6 day-part columns summarising the day.
- **Hero:** First Trump–Xi–Putin summit in Shenzhen (440x116 illustration).
- **9 grid cards** with color-block illustrations (326x50 strips) and
  2-line deks + sources: ICJ Myanmar genocide, Anthropic IPO $83, Ebola
  DRC, Gaza tanks, Gemini 4 Neon, S&P 500 fifth day, COP31, UK drones,
  Riyadh missile.
- **World map** with 49 numbered region-coloured pins (300 px wide),
  0 leader-line crossings, with a "THE GULF" inset. Pin numbers are
  grouped by region (Asia 11–18, Europe 19–27, Middle East 28–30,
  Americas 31–42, Africa 43–45, Oceania 46–49, Global 50).
- **Index:** 40 stories in 3 columns (#11–50), grouped by region.
- **Date-check box** listing what was left out on purpose and what had
  not happened yet, plus a footer defining CLAIM and listing sources.

Total: 1 hero + 9 grid + 40 index = 50 stories, in 1015 of 1024 px
(slack 9 px). Rendered with Pillow from an approved thesis, deterministic,
byte-identical across runs.

## How it works

The finished artwork is `entry.png` in the root of this repository
(1024 x 1024 px). The accompanying program, `main.ts`, does not
generate or alter the image — it copies the approved artwork, byte for
byte, into the output directory, then verifies the copy (file exists,
size matches, PNG signature and 1024x1024 dimensions confirmed).

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

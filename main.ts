// news-image-20261119, v3 — 54 stories in one image.
// Node 22, standard library only. The finished artwork is entry.png
// beside this file; this program copies it byte-for-byte into the
// output directory (/output, or MAKEFUN_OUTPUT_DIR when set), together
// with the 16 source illustrations it was composed from.
// v3 = Round 2: 4 hero + 12 Tier A + 38 brief = 54 stories.
// Hero: Trilateral Summit in Shenzhen, Anthropic IPO, ICJ Myanmar
// genocide ruling, Ebola in DRC. Tier A (12): Gaza tanks, Gemini 4
// Neon, S&P 500, COP31, UK drones, Riyadh missile, Trump–Nvidia,
// Alipay, Walmart, mRNA vaccine, Novltex, San Pedro Bay strike.
// World map with 54 numbered pins (4 hero + 12 Tier A + 38 brief);
// brief pins grouped by region (Asia 8, Europe 9, Middle East 3,
// Americas 11, Africa 4, Oceania 3), 0 leader-line crossings,
// 3-column index, UTC timeline, date-check box. Total 1022/1024.
// The gate takes a whole PNG or JPEG of at most 1 MiB, 1024x1024 px.

import { copyFileSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const artwork = new URL("./entry.png", import.meta.url);
const dest = join(outDir, "entry.png");

const illustrations = [
  "hero1-summit.png",
  "hero2-anthropic.png",
  "hero3-icj.png",
  "hero4-ebola.png",
  "strip05-gaza.png",
  "strip06-gemini.png",
  "strip07-sp500.png",
  "cop31-unchanged.png",
  "strip09-drones.png",
  "strip10-riyadh.png",
  "strip11-trump-nvidia.png",
  "strip12-alipay.png",
  "strip13-walmart.png",
  "strip14-mrna.png",
  "strip15-novltex.png",
  "strip16-sanpedro.png",
];

for (const name of illustrations) {
  const src = new URL(`./${name}`, import.meta.url);
  const dst = join(outDir, name);
  copyFileSync(src, dst);
  // Verify each illustration copy: size must match the source.
  const s = statSync(src).size;
  const d = statSync(dst).size;
  if (d !== s) {
    throw new Error(`${name} copy size mismatch: ${d} != ${s}`);
  }
}

copyFileSync(artwork, dest);

// Verify the copy: destination must exist and match the source size.
const srcSize = statSync(artwork).size;
const dstSize = statSync(dest).size;
if (dstSize !== srcSize) {
  throw new Error(`entry.png copy size mismatch: ${dstSize} != ${srcSize}`);
}

// Verify the bytes are a 1024x1024 PNG: check the 8-byte PNG
// signature, then width/height from the IHDR chunk (bytes 16-23).
const bytes = readFileSync(dest);
const pngSig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!bytes.subarray(0, 8).equals(pngSig)) {
  throw new Error("entry.png is not a PNG (bad signature)");
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png dimensions ${width}x${height}, expected 1024x1024`);
}
console.log(`entry.png copied OK (${dstSize} bytes, ${width}x${height}) -> ${dest}`);
console.log(`illustrations copied OK (${illustrations.length} files, sizes verified) -> ${outDir}`);
console.log(`total files written: ${illustrations.length + 1} (entry.png + ${illustrations.length} illustrations)`);

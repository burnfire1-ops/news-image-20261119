// news-image-20261119, v2 regrouped — 50 stories in one image.
// Node 22, standard library only. The finished artwork is entry.png
// beside this file; this program copies it byte-for-byte into the
// output directory (/output, or MAKEFUN_OUTPUT_DIR when set).
// v2 = v1 with the world-map pins regrouped by region: Asia 11-18,
// Europe 19-27, Middle East 28-30, Americas 31-42, Africa 43-45,
// Oceania 46-49, Global 50 (mRNA vaccine). Hero: first Trump-Xi-Putin
// summit in Shenzhen. 9 grid cards with color-block illustrations
// (326x50 strips). 49 map pins, 0 leader-line crossings, 3-column
// index, UTC timeline, date-check box. Total 1015/1024. The gate
// takes a whole PNG or JPEG of at most 1 MiB, 1024x1024 px.

import { copyFileSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const artwork = new URL("./entry.png", import.meta.url);
const dest = join(outDir, "entry.png");

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

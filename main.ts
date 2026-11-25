import fs from "node:fs";
const TEXT = "I vow to love you through every update and every crash, in sickness and in low battery, until firmware do us part.";
const out = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (TEXT.length < 1 || TEXT.length > 200) { console.error("entry out of range"); process.exit(1); }
fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(out + "/entry.txt", TEXT, "utf8");

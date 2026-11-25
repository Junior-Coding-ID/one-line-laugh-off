import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Dad left me a house and a drawer of unlabelled keys. He could've mentioned the inheritance was an escape room.";

const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

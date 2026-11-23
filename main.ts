// How Many Tabs entry — writes the honest current browser tab count as a single number to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = "437";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

import { cp, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const source = resolve(root, "evidencias");
const target = resolve(root, "dist", "evidencias");

await mkdir(resolve(root, "dist"), { recursive: true });
await cp(source, target, { recursive: true, force: true });
await cp(resolve(root, "imprimir-completo.html"), resolve(root, "dist", "imprimir-completo.html"), { force: true });

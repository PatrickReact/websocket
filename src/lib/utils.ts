import { execSync } from "child_process";

type Runtime = "bun" | "node" | null;

export function detectRuntime(): Runtime {
	try {
		// 1. Tentativo attivo: bun
		const bunVersion = execSync("bun --version", { stdio: "pipe" }).toString().trim();
		if (bunVersion) return "bun";
	} catch {
		/* ignorato */
	}

	try {
		// 2. Tentativo attivo: node
		const nodeVersion = execSync("node -v", { stdio: "pipe" }).toString().trim();
		if (nodeVersion) return "node";
	} catch {
		/* ignorato */
	}

	// 3. Fallback: process.argv[0]
	const binary = process.argv[0]?.toLowerCase() ?? "";

	if (binary.includes("bun")) return "bun";
	if (binary.includes("node")) return "node";

	return null;
}

export const runtime = detectRuntime() ?? "node";

export const env = detectRuntime() === "bun" ? Bun.env : process.env;

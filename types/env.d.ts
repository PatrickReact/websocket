import _env from "../.env";

export interface Env {
	// PORTS
	PORT: number;

	// ENCRYPTION
	SECRETJWT: string;

	// WITHAI params
	MODE: "dev" | "prod";
	FORMAT: "esm" | "cjs";

	// Turn off error if not yet defined
	[key: string]: string | undefined;
}

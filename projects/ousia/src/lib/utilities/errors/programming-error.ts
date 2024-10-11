/**
 * This error signals the violation of a programming conventions.
 */
export class ProgrammingError extends Error {
	constructor(message: string) {
		super(message);
		this.name = "ProgrammingError";
	}
}
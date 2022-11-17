export class ProgrammingError extends Error {
    constructor(message: string | undefined) {
        super(message);
    }
}
import { Parameters } from "./data";

export class Validation {
    constructor(
        public readonly name: string,
        public readonly parameters?: Parameters
    ) { }
}

/**
 * Defines a set of standard validations
 */
export class StandardValidation {

    static required = new Validation('required');

    static min(value: any): Validation {
        return new Validation('min', { value: value });
    };

    static max(value: any): Validation {
        return new Validation('max', { value: value });
    }

    static minLength(value: number): Validation {
        return new Validation('minLength', { value: value });
    }

    static maxLenth(value: number): Validation {
        return new Validation('maxLength', { value: value });
    }
}

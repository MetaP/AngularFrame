/**
 * Determines whether the specified value is defined or undefined.
 * @param value The value to test.
 * @returns false if the value is either undefined or null; otherwise true.
 */
export function isDefined(value: any): boolean {
	return value !== undefined && value !== null;
}

/**
 * Determines whether the specified value is undefined or defined.
 * @param value The value to test.
 * @returns true if the value is either undefined or null; otherwise false.
 */
export function isUndefined(value: any): boolean {
	return value === undefined || value === null;
}

/**
 * Returns true if the specified value is not a string or a string that contains only whitespace and line terminators characters;
 * otherwise false.
 * @param value A value to test.
 * @returns 
 */
export function isBlankOrNotString(value: any) : boolean {
	return (typeof value !== 'string' || value.trim().length < 1);
}

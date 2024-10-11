/**
 * Returns true if the specified value is not a string or a string that contains only whitespace and line terminators characters;
 * otherwise false.
 * @param value A value to test.
 * @returns 
 */
export function isBlankOrNotString(value: any) : boolean {
	return (typeof value !== 'string' || value.trim().length < 1);
}

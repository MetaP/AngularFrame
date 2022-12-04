/**
 * Converst the specified value of an Angular attribute to a boolean.
 * @param value 
 * @returns 
 */
export function AttributeToBoolean(value: string | boolean | undefined): boolean {
    if (typeof(value) == 'boolean') return value;
    else if (value === undefined) return false;
    else {
        value = value.toLowerCase();
        switch(value.toLowerCase()) {
            case '': /* If the attribute is specified without value, interprete it as set. */
            case 'true':
                return true; 
            case 'false':
                return false;
            default: 
                throw new RangeError(`'${value}' is not a valid value for a boolean attribute`);
        }    
    }
}

/**
 * Returns the specified value if it is an integer; otherwise undefined.
 * @param value
 * @returns
 */
export function acceptInteger(value: any): number | undefined {
    return Number.isInteger(value) ? value : undefined;
}

/**
 * Returns the specified value if it is a natural number; otherwise undefined.
 * @param value 
 * @returns 
 */
export function acceptNatural(value: any): number | undefined {
    const integer = acceptInteger(value);
    return (integer !== undefined && integer >= 0) ? integer : undefined;
}

export function insertSeparator(value: string, separator: string = '.', groupLength: number = 3) {
    const length = value.length;
    if (groupLength < length) {
        // Calculate the first group and store it in an array.
        var i = length % groupLength;
        if (i === 0) i = groupLength;
        const parts: string[] = [value.substring(0, i)];

        // Add the other groups to the array
        while (i < length) {
            parts.push(value.substring(i, i += groupLength));
        }
        return parts.join(separator);
    } else return value;
}

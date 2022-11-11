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
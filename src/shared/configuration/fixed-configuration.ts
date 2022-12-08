import { Injectable } from "@angular/core";
import { Configuration } from "./configuarion";
import { NumberPresentation } from "./number-presentation";

/**
 * A simple implementation of the Configuration interface.
 * You could use a modified copy of this class in your application and register it in the providers section 
 */
@Injectable({
    providedIn: 'root'
})
export class FixedConfiguration implements Configuration {
    numberPresentation: NumberPresentation = {
        formatOnBlur: false,
        decimalSeparator: ',',
        groupSeparator: '.'
    };
}
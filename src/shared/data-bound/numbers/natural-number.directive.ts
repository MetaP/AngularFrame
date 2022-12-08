import { Directive, ElementRef, HostListener, Inject, Input, Renderer2 } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Configuration, CONFIGURATION } from "src/shared/configuration/configuarion";
import { acceptNatural, insertSeparator } from "src/shared/utility";

@Directive({
    selector: '[mafNatural]',
    host: {
        '(keypress)': 'onKeyPress($event)',
        // '(beforeinput)': 'onBeforeInput($event)',
        '(input)': 'onInput($event)',
        '(focus)': 'onFocus()',
        '(blur)': 'onBlur()'
    },
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: NaturalNumberDirective,
        multi: true
    }]
})
export class NaturalNumberDirective implements ControlValueAccessor {

    @Input() groupSeparator: string | undefined;

    /**
     * If true, the display is only formatted when this control doesn't have the input focus.
     * If false, formatting is always applied, even when typing in this control. 
     */
    @Input() formatOnBlur: boolean| undefined;

    private _value: number | undefined;
    private get value(): number | undefined {
        return this._value;
    }

    private set value(value: number | undefined) {
        if (this._value !== value) {
            this._value = value;
            this.onChange(value);
        }
    }

    private get display(): string {
        return this.inputElement.value;
    }
    private set display(value: string) {
        if (this.display !== value)
        {
            this.previousDisplay = this.display;
            this.renderer.setProperty(this.inputElement, 'value', value);
        }
    }
    private previousDisplay: string = '';

    private hasFocus: boolean = false;
    private inputElement: HTMLInputElement;
    private onChange = (_: any) => {};
    private onTouched = () => {};

    constructor(
        private renderer: Renderer2, 
        private elementRef: ElementRef,
        @Inject(CONFIGURATION) configuration: Configuration
    ) {
        this.inputElement = elementRef.nativeElement as HTMLInputElement;
        if (this.formatOnBlur === undefined) this.formatOnBlur = configuration.numberPresentation.formatOnBlur;
        if (this.groupSeparator === undefined) this.groupSeparator = configuration.numberPresentation.groupSeparator;
    }

    /* ControlValueAccessor interface ++ */

    writeValue(value: any): void {
        this._value = acceptNatural(value);
        this.display = this.formatValue(this._value);
    }

    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }

    registerOnTouched(fn: () => void): void { this.onTouched = fn; }

    setDisabledState(isDisabled: boolean): void {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    }

    /* ControlValueAccessor interface -- */

    onFocus() {
        this.hasFocus = true;
        if (this.formatOnBlur) this.display = this.unformatDisplay(this.display);
    }

    onBlur() {
        this.hasFocus = false;
        if (this.formatOnBlur) this.display = this.formatValue(this.value);
        this.onTouched();
    }

    onKeyPress(event: KeyboardEvent) {
        const keysAccepted = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        // Only accept digits 0 to 9
        if (keysAccepted.indexOf(event.key) < 0) {
            event.preventDefault();
        }
    }

    onInput(event: InputEvent) {
        this.update();
    }

    private update() {
        const display = this.display;
        var unformatted: string;

        if (this.formatOnBlur) {
            unformatted = this.display;
        } else {
            unformatted = this.unformatDisplay(display);
            const newDisplay = this.formatDisplay(unformatted);
            if (display != newDisplay ) {
    
                const start = this.inputElement.selectionStart;
                const end = this.inputElement.selectionEnd;
                var delta = newDisplay.length - display.length
    
                console.log(`prev: ${this.previousDisplay} new: ${newDisplay} delta: ${delta}`);
                if (delta === 1 && this.previousDisplay === newDisplay) {
                    delta--;
                }
                
                this.display = newDisplay; 
                this.resetCursor(start, end, delta);
            }
        }
        this.value = +unformatted;
    }

    private unformatDisplay(display: string): string {
        return display.replaceAll(this.groupSeparator!, '');
    }

    private formatDisplay(display: string): string {
        return insertSeparator(display, this.groupSeparator);
    }

    private formatValue(value: number | undefined): string {
        const raw = value ? value.toString() : '';
        return (!this.formatOnBlur || !this.hasFocus) 
            ? this.formatDisplay(raw) 
            : raw;
    }

    private resetCursor(selectionStart: number | null, selectionEnd: number | null, delta: number) {
        console.log(`${selectionStart} ${selectionEnd} + ${delta}`);

        this.inputElement.setSelectionRange(
            this.updateIndex(selectionStart, delta), 
            this.updateIndex(selectionEnd, delta));
    }

    private updateIndex(index: number | null, delta: number): number | null {
        if (typeof index === 'number') {
            index += delta;
            if (index < 0) index = 0;
        }
        return index;
    } 
}

    // onBeforeInput(event: InputEvent) {
    //     if (!this.formatOnBlur && this.update(this.display)) 
    //         event.preventDefault();
    // }

    // onInput(event: InputEvent) {
    //     const unformatted = (this.formatOnBlur ? this.display : this.unformatDisplay(this.display));
    //     this.value = +unformatted;
    // }

    

    // private update(input: string): boolean {
    //     const display = this.display;
    //     const unformatted = this.unformatDisplay(input);
    //     const newDisplay = this.formatDisplay(unformatted);
    //     if (display != newDisplay ) {

    //         const start = this.inputElement.selectionStart;
    //         const end = this.inputElement.selectionEnd;
    //         var delta = newDisplay.length - display.length

    //         console.log(`prev: ${this.previousDisplay} new: ${newDisplay} delta: ${delta}`);
    //         if (delta === 1 && this.previousDisplay === newDisplay) {
    //             delta--;
    //         }
            
    //         this.display = newDisplay; 
    //         this.resetCursor(start, end, delta);

    //         return true;
    //     } else 
    //         return false;
    // }





    // onBeforeInput(event: InputEvent) {
    //     const inputElement = event.target as HTMLInputElement;

    //     const x = newDisplayValue(event);
    //     const newDisplay = x.display;
    //     const cursorPosition = x.cursorPosition;

    //     const value = parseInteger(newDisplay, this.separator);
    //     const toDisplay = formatInteger(value, true);
    //     event.preventDefault();
    //     inputElement.value = toDisplay;
    //     if (cursorPosition !== undefined) {
    //         inputElement.setSelectionRange(cursorPosition, cursorPosition);
    //         // inputElement.focus();
    //     }
    // }


// function parseInteger(value: string | null, separator: string): number | null {
//     return (value === null || value === '') ? null : parseInt(value.replaceAll(separator, ''));
// }

// function formatInteger(value: number | null, grouping: boolean): string {
//     return typeof (value) === "number"
//         ? value.toLocaleString("nl", { useGrouping: grouping, maximumFractionDigits: 0 })
//         : '';
// }

// /**
//  * Calculate the new display for the specified input element with the specified current input
//  * @param inputElement 
//  * @param input 
//  * @returns 
//  */
// function newDisplayValue(event: InputEvent): { display: string; cursorPosition?: number } {
//     const inputElement = event.target as HTMLInputElement;
//     const data = event.data;
//     const currentValue = inputElement.value;
//     const start = inputElement.selectionStart;
//     const end = inputElement.selectionEnd;

//     if (data) {
//         return (start === null || end === null)
//         ? { display: '' }
//         : { display: currentValue.substring(0, start) + data + currentValue.substring(end) };
//     } else {
//         switch(event.inputType) {
//             case 'deleteContentForward': // Del
//                 const pDel = start!;
//                 return { 
//                     display: currentValue.substring(0, pDel) + currentValue.substring(end!+1) };
//             case 'deleteContentBackward': // Backspace
//                 const pBackspace = start!-1;
//                 return { 
//                     display: currentValue.substring(0, pBackspace) + currentValue.substring(end!),
//                     cursorPosition: pBackspace};
//             default:
//                 return { display: currentValue };
//         }
//     }
// }



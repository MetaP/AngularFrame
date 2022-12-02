import { Component, Input, ContentChildren, QueryList, Output, EventEmitter, HostBinding } from '@angular/core';
import { OptionDirective } from './option.directive';

export enum SelectorLook {
    RoundedButtons,
    Tabs
}

/**
 * Represents a component that allows the user to choose one of a set of options.
 */
@Component({
    selector: 'maf-selector',
    templateUrl: './selector.component.html'
})
export class SelectorComponent {

    // Give the component a class with the same name, so that we can attach the styling to 
    // the class (.maf-selector) instead of to the element type (maf-selector).
    @HostBinding('class') class = 'maf-selector';

    /* Allow the use of enum values */
    SelectorLook = SelectorLook;

    @Input() look = SelectorLook.RoundedButtons;

    /**
     * The value ID of the translatable text to display as label or as alternate text for the icon.
     */
    @Input() value: any;

    /**
     * The event triggered when value changes because a option is selected. 
     * Allows value to be two-way bound using the "banana in a box" notation. ([(value)]="expression")
     */
    @Output() valueChange = new EventEmitter<any>();

    @ContentChildren(OptionDirective) options!: QueryList<OptionDirective>;

    onClick(i: number): void {
        const value = this.options.get(i)!.value;
        this.valueChange.emit(value);
    }
}
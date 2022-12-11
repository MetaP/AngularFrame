import { Component, Input, ContentChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { OptionDirective } from './option.directive';

export enum OptionsLook {
    RoundedSwitchButtons,
    Tabs
}

/**
 * Represents a component that allows the user to choose one of a set of options.
 */
@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.scss']
})
export class OptionsComponent {

    /* Allow the use of enum values */
    OptionsLook = OptionsLook;

    @Input() look = OptionsLook.RoundedSwitchButtons;

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

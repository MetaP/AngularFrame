import { Directive, Input, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { CurrentContextService } from "src/shared/global/services/current-context.service";

/**
 * An object of this class represents one of the possible values for a selector.
 */
@Directive({ selector: 'maf-option' })
export class OptionDirective implements OnInit {

    @Input() label: string | undefined;

    /**
     * The ID of the translatable text to display for this option.
     */
    @Input() labelId: string | undefined;

    /* ToDo: replace suffix with more generic transform function. */
    // /**
    //  * The suffix, if any, to append to the translated text.
    //  */
    // @Input() suffix?: string;

    /**
     * The value associated with this option.
     */
    @Input() value: any;

    label$: Observable<string> | undefined;

    constructor(
        private context: CurrentContextService
    ) { }

    ngOnInit(): void {
        if (!(this.label || this.labelId))
            console.error('A <mafOption> should have either a "label" or "labelId" attribute.');

        if (this.label) {
            // If a label is specified, use it.
            this.label$ = of(this.label!);
        } else {
            // If no label is specified use the translated labelId.
            this.label$ = this.context.getTranslation(this.labelId!);
        }
    }
}
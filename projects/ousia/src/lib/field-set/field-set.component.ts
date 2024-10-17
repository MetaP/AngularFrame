import { Component, Input, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { FormControlName, FormGroupName } from '@angular/forms';
import { ProgrammingError } from '../utilities/errors/programming-error';
import { isBlankOrNotString, isDefined } from '../utilities/utility';
import { NamespaceDirective } from '../namespace/namespace.directive';

@Component({
	selector: 'o-field-set',
	templateUrl: './field-set.component.html',
	styleUrls: ['./field-set.component.scss'],
	providers: [NamespaceDirective]
})
export class FieldSetComponent implements OnInit {

	@Input() name?: string;
	@Input() captionName: string = "caption";
	hasCaption = !isBlankOrNotString(this.captionName);

	constructor(
		@Self() private ownNamespaceDirective: NamespaceDirective,
		@Optional() @SkipSelf() parentNamespaceDirective: NamespaceDirective,
		@Optional() private formGroupName: FormGroupName,
		@Optional() private formControlName: FormControlName,
	) { 
		ownNamespaceDirective.parentNamespaceDirective = parentNamespaceDirective;
	}

	ngOnInit(): void {
		this.updateName();
	}

	private updateName(): void {

		// If no name is specified...
		if (isBlankOrNotString(this.name)) {
			// ...and if this component is inside a named FormGroup, use this FormGroup's name.
			if (isDefined(this.formGroupName)) {
				this.name = this.formGroupName.name as string;
			// ...or if this component is inside a named FormControl, use this FormControl's name
			/*
			 * (This can be the case if this field group is inside a subform component.
			 *  The subform itself uses an unnamed FormGroup as root. 
			 *  But the containing template binds the subform to a FormControl via a FormControlName directive.)
			 */
			} else if (isDefined(this.formControlName)) {
				this.name = this.formControlName.name as string;
			}
		}

		if (isBlankOrNotString(this.name)) {
			throw new ProgrammingError(`Either specify a non-blank 'FormGroupName' or 'name' input.`)
		} else {
			this.ownNamespaceDirective.namespace = this.name;
		}
	}
}

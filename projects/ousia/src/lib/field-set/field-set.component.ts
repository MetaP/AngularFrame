import { Component, Input, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { FormGroupName } from '@angular/forms';
import { ProgrammingError } from '../utilities/errors/programming-error';
import { isBlankOrNotString } from '../utilities/utility';
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
		@Optional() private formGroupName: FormGroupName
	) { 
		ownNamespaceDirective.parentNamespaceDirective = parentNamespaceDirective;
	}

	ngOnInit(): void {
		this.updateName();
	}

	private updateName(): void {
		if (isBlankOrNotString(this.name)) {
			this.name = this.formGroupName?.name as string;
		}

		if (isBlankOrNotString(this.name)) {
			throw new ProgrammingError(`Either specify a non-blank 'FormGroupName' or 'name' input.`)
		} else {
			this.ownNamespaceDirective.namespace = this.name;
		}
	}
}

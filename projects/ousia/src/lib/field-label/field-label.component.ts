import { AfterViewInit, Component, ContentChild, Input, OnChanges, Optional, SimpleChanges } from '@angular/core';
import { FormControlName } from '@angular/forms';
import { NamespaceDirective } from '../namespace/namespace.directive';

@Component({
	selector: 'o-field-label',
	templateUrl: './field-label.component.html',
	styleUrls: ['./field-label.component.scss']
})
export class FieldLabelComponent implements OnChanges, AfterViewInit {

	@Input() namespace?: string;
	@Input() name?: string;
	key?: string;

	// Get the FormControlName directive of the <ng-content>, if any.
	@ContentChild(FormControlName) private formControlName?: FormControlName;

	constructor(
		@Optional() private namespaceDirective: NamespaceDirective
	) {	}

	ngAfterViewInit(): void {
		/* Perform the update in the next JavaScript event loop to avoid ExpressionChangedAfterItHasBeenCheckedError */
		setTimeout(() => this.updateKey());
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.updateKey();
	}

	private updateKey(): void {
		let key = '';

		if (this.namespace) {
			key = this.namespace;
		} else if (this.namespaceDirective) {
			key = this.namespaceDirective.key;
		}

		if (key.length > 0 && !key.endsWith('.')) {
			key = key + '.';
		}

		if (this.name) {
			key = key + this.name;
		} else if (this.formControlName?.name) {
			key = key + this.formControlName.name;
		}

		this.key = key;
	}
}

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
	@Input() captionKey?: string;
	captionKeyPath?: string;

	// Get the FormControlName directive of the <ng-content>, if any.
	@ContentChild(FormControlName) private formControlName?: FormControlName;

	constructor(
		@Optional() private namespaceDirective: NamespaceDirective
	) {	}

	ngAfterViewInit(): void {
		/* Perform the update in the next JavaScript event loop to avoid ExpressionChangedAfterItHasBeenCheckedError */
		setTimeout(() => this.updateCaptionKeyPath());
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.updateCaptionKeyPath();
	}

	private updateCaptionKeyPath(): void {
		let path = '';

		if (this.namespace) {
			path = this.namespace;
		} else if (this.namespaceDirective) {
			path = this.namespaceDirective.namespacePath;
		}

		if (path.length > 0 && !path.endsWith('.')) {
			path = path + '.';
		}

		if (this.captionKey) {
			path = path + this.captionKey;
		} else if (this.formControlName?.name) {
			path = path + this.formControlName.name;
		}

		this.captionKeyPath = path;
	}
}

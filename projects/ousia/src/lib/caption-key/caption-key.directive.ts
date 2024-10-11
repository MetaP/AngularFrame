import { AfterViewInit, Directive, Input, OnChanges, Optional, SimpleChanges } from '@angular/core';
import { NamespaceDirective } from '../namespace/namespace.directive';

@Directive({
  standalone: true,
  selector: '[oCaptionKey]'
})
export class CaptionKeyDirective implements OnChanges, AfterViewInit {

	@Input() namespace?: string;
	@Input() captionKey?: string;
  defaultCaptionKey?: string;
	captionKeyPath?: string;

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
			path = this.namespaceDirective.key;
		}

		if (path.length > 0 && !path.endsWith('.')) {
			path = path + '.';
		}

		if (this.captionKey) {
			path = path + this.captionKey;
		} else if (this.defaultCaptionKey) {
			path = path + this.defaultCaptionKey;
		}

		this.captionKeyPath = path;
	}
}

import { Directive, Host, Input, Optional, SkipSelf } from '@angular/core';

@Directive({
	selector: '[oNamespace]'
})
export class NamespaceDirective {

	@Input('oNamespace') namespace?: string;

	get key(): string {
		let key = this.parentNamespaceDirective
			? [this.parentNamespaceDirective.key, this.namespace].join('.')
			: this.namespace;
		return key ?? '';
	}

	constructor(@SkipSelf() @Optional() public parentNamespaceDirective: NamespaceDirective) { }
}

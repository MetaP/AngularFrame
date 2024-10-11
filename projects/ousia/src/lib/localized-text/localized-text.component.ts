import { Component, Input, OnChanges, OnInit, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NamespaceDirective } from '../namespace/namespace.directive';

@Component({
	selector: 'o-localized-text',
	templateUrl: './localized-text.component.html',
	styleUrls: ['./localized-text.component.scss']
})
export class LocalizedTextComponent implements OnInit, OnChanges {

	@Input() namespace?: string;
	@Input() name?: string;
	key?: string;

	private readonly _text$ = new BehaviorSubject<string>('');
	readonly text$ = this._text$.asObservable();

	constructor(
		@Optional() private namespaceDirective: NamespaceDirective
	) { }

	ngOnInit(): void {
		this.updateText();
	}

	ngOnChanges(): void {
		this.updateText();
	}

	private updateText() {
		this._text$.next(this.getKey())
	}

	private getKey(): string {
		let key: string;

		if (this.namespace) {
			key = this.namespace;
		} else if (this.namespaceDirective) {
			key = this.namespaceDirective.key;
		} else {
			key = '';
		}

		if (key.length > 0 && !key.endsWith('.')) {
			key = key + '.';
		}

		if (this.name) {
			key = key + this.name;
		} else {
			throw new Error('LocalizedTextComponent requires a non-empty string as value for its name input.');
		}

		return key;
	}
}


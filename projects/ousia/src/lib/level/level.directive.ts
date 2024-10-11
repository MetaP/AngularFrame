import { Directive, Input, OnInit, Optional, SkipSelf } from '@angular/core';

@Directive({
	standalone: true,
	selector: '[oLevel]'
})
export class LevelDirective implements OnInit {

	@Input() oLevel?: number;

	constructor(@SkipSelf() @Optional() private parent: LevelDirective) { }

	ngOnInit(): void {
		this.calculateLevel();
	}

	private calculateLevel() {
		// If no level is specified by this instace...
		if (!this.oLevel) {
			// ...and this instance has a parent level...
			if (this.parent) {
				// ... this instance's level is that of its parent + 1.
				this.oLevel = this.parent.oLevel! + 1;
			} else { // This instance has no parent level. Its level is thus 1.
				this.oLevel = 1;
			}
		}
	}
}
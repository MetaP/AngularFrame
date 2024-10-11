import { Component, OnInit } from '@angular/core';
import { LevelDirective } from '../level/level.directive';

@Component({
	selector: 'o-title',
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.css'],
	hostDirectives: [
		{ directive: LevelDirective, inputs: ['oLevel'] }
	]
})
export class TitleComponent implements OnInit {

	level_: number = 0;

	constructor(private levelDirective: LevelDirective) {
	}

	ngOnInit(): void {
		this.level_ = this.levelDirective.oLevel ?? 0;
	}

}

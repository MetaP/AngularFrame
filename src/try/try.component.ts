import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	selector: 'maf-try',
	templateUrl: './try.component.html',
	styleUrls: ['./try.component.scss']
})
export class TryComponent {

	formGroup = new FormGroup({
		age: new FormControl<number>(60),
		firstName: new FormControl<string>('Paul')
	});

}

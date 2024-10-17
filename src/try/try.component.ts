import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddressComponent } from './subform/address/address.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
	templateUrl: './try.component.html',
	styleUrls: ['./try.component.scss']
})
export class TryComponent {

	@ViewChild('address') addressComponent?: AddressComponent;

	formGroup: FormGroup;

	constructor(translate: TranslateService) {

		translate.use('nl');

		this.formGroup = new FormGroup({
			age: new FormControl<number>(60),
			firstName: new FormControl<string>('Paul'),
			address: new FormControl({
				street: 'Bovenstraat',
				houseNumber: '39',
				postalCode: '3210',
				municipality: 'Linden',
				country: 'België',
			})
		});
	}
}

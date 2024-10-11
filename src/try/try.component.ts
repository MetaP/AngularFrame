import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AddressComponent } from './subform/address/address.component';

@Component({
	selector: 'maf-try',
	templateUrl: './try.component.html',
	styleUrls: ['./try.component.scss']
})
export class TryComponent implements AfterViewInit {

	@ViewChild('address') addressComponent?: AddressComponent;

	formGroup: FormGroup;

	constructor() {
		this.formGroup = new FormGroup({
			age: new FormControl<number>(60),
			firstName: new FormControl<string>('Paul'),
			address: new FormGroup({})
		});
	}

	ngAfterViewInit(): void {
		const addressControl = this.addressComponent?.rootForm!;
		this.formGroup.removeControl('address');
		this.formGroup.addControl('address', addressControl);
	}
}

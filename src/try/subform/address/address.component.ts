import { Component, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
	selector: 'try-address',
	templateUrl: './address.component.html',
	styleUrls: ['./address.component.scss'],
	providers: [
		{
		  provide: NG_VALUE_ACCESSOR,
		  multi: true,
		  useExisting: AddressComponent
		}
	  ]
})
export class AddressComponent implements OnDestroy, ControlValueAccessor{

	rootForm: FormGroup;

	onTouched: Function = () => {};

	private subscriptions: Subscription[] = [];

	constructor() {
		this.rootForm= AddressComponent.createRootForm();
	}

	ngOnDestroy(): void {
		this.subscriptions.map(subscription => {
			subscription.unsubscribe();
		})
	}

	writeValue(value: any): void {
		this.rootForm.setValue(value);
	}

	registerOnChange(onChange: any): void {
		this.rootForm.valueChanges.subscribe(onChange);
	}

	registerOnTouched(onTouched: Function): void {
		this.onTouched = onTouched;
	}

	setDisabledState?(isDisabled: boolean): void {
		if (isDisabled) {
			this.rootForm.disable();
		} else {
			this.rootForm.enable();
		}
	}

	public static createRootForm() : FormGroup {
		return new FormGroup({
			street: new FormControl<string>('Bovenstraat'),
			houseNumber: new FormControl<string>('39'),
			postalCode: new FormControl<string>('3210'),
			municipality: new FormControl<string>('Linden'),
			country: new FormControl<string>('België'),
 		})
	}
}

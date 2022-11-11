import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataMap } from 'src/shared/data/data-model';
// import { AddressMap } from '../../model/address-map';
import { AddressFormInteraction } from './address-from-interaction';

@Component({
  selector: 'maf-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  formGroup: FormGroup;

  // line1FormControl: FormControl;

  addressMap : DataMap;

  constructor(
    // private interaction: AddressFormInteraction,
    // private fb: FormBuilder
  ) {
    // this.formGroup = this.createFormGroup();
    // this.line1FormControl = this.formGroup.controls['line1'] as FormControl;
    // this.line1FormControl.disable();

    const addressMap = new DataMap({
      comment: "Is this working?",
      line1: "Bovenstraart 39",
      line2: "",
      postalCode: 3210,
      countryCode: "BE"
    }, ['comment']);

    
    this.addressMap = addressMap;
    this.formGroup = addressMap.formGroup;
  }

  ngOnInit(): void {
  }

  // private createFormGroup() : FormGroup {
  //   return this.fb.group({
  //     line1: ['', Validators.maxLength(3)],
  //     natural: [1, Validators.min(5)]
  //   })
  // }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressFormInteraction } from './address-from-interaction';

@Component({
  selector: 'maf-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  formGroup: FormGroup;

  line1FormControl: FormControl;

  constructor(
    // private interaction: AddressFormInteraction,
    private fb: FormBuilder
  ) {
    this.formGroup = this.createFormGroup();
    this.line1FormControl = this.formGroup.controls['line1'] as FormControl;
  }

  ngOnInit(): void {
  }

  private createFormGroup() : FormGroup {
    return this.fb.group({
      line1: ['', Validators.maxLength(3)],
      natural: [1, Validators.min(5)]
    })
  }

}

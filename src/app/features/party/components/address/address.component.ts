import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'maf-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.formGroup = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  private createFormGroup() : FormGroup {
    return this.fb.group({
      line1: [''],
      natural: [32]
    })
  }

}

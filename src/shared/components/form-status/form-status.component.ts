import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'maf-form-status',
  templateUrl: './form-status.component.html',
  styleUrls: ['./form-status.component.scss']
})
export class FormStatusComponent implements OnInit {

  formGroup?: FormGroup;

  constructor(
    private controlContainer: ControlContainer
  ) {

  }

  ngOnInit(): void {
    this.formGroup = this.controlContainer?.control as FormGroup;
  }
}

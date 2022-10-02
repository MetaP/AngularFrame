import { Component, Input, OnInit, Optional } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { EntityDirective } from 'src/shared/directives/entity.directive';

@Component({
  selector: 'maf-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent /* implements OnInit */ {

  @Input() label?: string = "Test";

  // constructor(
  //   @Optional() private entityDirective: EntityDirective
  // ) { 
  //   console.log(`** FormField - Entity: ${entityDirective.mafEntity}`)
  // }
}

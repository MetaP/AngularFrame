import { Component, OnInit, Optional, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EntityDirective } from 'src/shared/directives/entity.directive';
import { FormFieldBase } from '../form-field/form-field-base';
import { FormFieldComponent } from '../form-field/form-field.component';

@Component({
  selector: 'maf-natural',
  templateUrl: './natural.component.html',
  styleUrls: ['./natural.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: NaturalComponent
    }
  ]
})
export class NaturalComponent extends FormFieldBase implements ControlValueAccessor, OnInit {

  // @ViewChild(FormFieldComponent, { static: false })
  // set parentFormField(value: FormFieldComponent) {
    
  // }

  constructor(
    @Optional() controlContainer: ControlContainer,
    @Optional() entityDirective: EntityDirective
  ) {
    super(controlContainer, entityDirective);
  }

  /* ControlValueAccessor interface  */

  writeValue(obj: any): void {
    // throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }

  /* OnInit interface */

  override ngOnInit(): void {
    super.ngOnInit();
  }

}

import { Component, Host, OnInit, Optional, ViewChild } from '@angular/core';
import { ControlContainer, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AttributeDirective } from 'src/shared/form/directives/attribute.directive';
import { EntityDirective } from '../../directives/entity.directive';
import { FormFieldBase } from '../../form-field/form-field-base';

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
    @Optional() public attributeDirective: AttributeDirective,
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

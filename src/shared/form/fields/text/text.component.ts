import { Component, Optional } from '@angular/core';
import { AttributeDirective } from 'src/shared/form/directives/attribute.directive';
import { FormFieldBase } from '../form-field-base.super';

@Component({
  selector: 'maf-text',
  templateUrl: './text.component.html'
})
export class TextComponent extends FormFieldBase {

  constructor(
    @Optional() attributeDirective: AttributeDirective
  ) {
    super(attributeDirective);
  }
}

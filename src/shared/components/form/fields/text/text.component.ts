import { Component, OnInit, Optional } from '@angular/core';
import { AttributeDirective } from 'src/shared/directives/attribute.directive';
import { FormFieldBase } from '../form-field-base';

@Component({
  selector: 'maf-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent extends FormFieldBase implements OnInit {

  constructor(
    @Optional() attributeDirective: AttributeDirective
  ) {
    super(attributeDirective);
  }

  // ngOnInit(): void {
  // }
}

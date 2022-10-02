import { Component, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { AttributeDirective } from 'src/shared/directives/attribute.directive';

@Component({
  selector: 'maf-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {

  caption: Observable<string>;

  constructor(
    @Optional() private attributeDirective: AttributeDirective, 
  ) { 
    this.caption = this.attributeDirective.caption;
  }
}

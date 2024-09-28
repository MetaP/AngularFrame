import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaturalComponent } from './natural/natural.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { AttributeDirective } from './directives/attribute.directive';



@NgModule({
  declarations: [
    NaturalComponent,
    FormFieldComponent,
    AttributeDirective
  ],
  imports: [
    CommonModule
  ]
})
export class FormModule { }

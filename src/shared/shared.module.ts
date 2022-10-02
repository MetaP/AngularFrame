import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { FormComponent } from './components/form/form.component';
import { FormFieldDirective } from './directives/form-field.directive';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { NaturalComponent } from './components/natural/natural.component';
import { EntityDirective } from './directives/entity.directive';
import { AttributeDirective } from './directives/attribute.directive';



@NgModule({
  exports: [
    AttributeDirective,
    EntityDirective,
    FormComponent,
    FormFieldDirective,
    NaturalComponent,

    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    AttributeDirective,
    EntityDirective,
    FormComponent,
    FormFieldDirective,
    FormFieldComponent,
    NaturalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

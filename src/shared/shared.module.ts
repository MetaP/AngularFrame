import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { FormComponent } from './components/form/form.component';
import { FormFieldDirective } from './directives/form-field.directive';



@NgModule({
  exports: [
    FormComponent,
    FormFieldDirective,

    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormComponent,
    FormFieldDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

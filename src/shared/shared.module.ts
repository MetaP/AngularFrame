import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AttributeDirective } from './directives/attribute.directive';
import { EntityDirective } from './directives/entity.directive';
import { ErrorDisplayDirective } from './directives/error-display.directive';
import { FormFieldDirective } from './directives/form-field.directive';

import { DummyComponent } from './components/dummy/dummy.component';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';
import { FormComponent } from './components/form/form.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { NaturalComponent } from './components/natural/natural.component';
import { TextComponent } from './components/form/fields/text/text.component';
import { SelectionComponent } from './components/form/fields/selection/selection.component';
import { FormStatusComponent } from './components/form-status/form-status.component';



@NgModule({
  exports: [
    AttributeDirective,
    EntityDirective,
    ErrorDisplayDirective,
    FormFieldDirective,

    DummyComponent,
    ErrorDisplayComponent,
    FormComponent,
    NaturalComponent,

    TextComponent,
    SelectionComponent,
        
    FormStatusComponent,

    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AttributeDirective,
    EntityDirective,
    ErrorDisplayDirective,
    FormFieldDirective,

    DummyComponent,
    ErrorDisplayComponent,
    FormComponent,
    FormFieldComponent,
    NaturalComponent,

    TextComponent,
    SelectionComponent,

    FormStatusComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

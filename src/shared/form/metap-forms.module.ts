import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AttributeDirective } from './directives/attribute.directive';
import { EntityDirective } from './directives/entity.directive';
import { ErrorDisplayDirective } from './directives/error-display.directive';
import { FormFieldDirective } from './form-field/form-field.directive';

import { FormFieldComponent } from './form-field/form-field.component';
import { FormStatusComponent } from './form-status/form-status.component';

import { NaturalComponent } from './fields/natural/natural.component';
import { TextComponent } from './fields/text/text.component';
import { SelectionComponent } from './fields/selection/selection.component';
import { FormComponent } from './form/form.component';
import { DataMapDirective } from './directives/data-map.directive';


@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    AttributeDirective,
    DataMapDirective,
    EntityDirective,
    ErrorDisplayDirective,
    FormFieldDirective,

    FormComponent,
    FormFieldComponent,
    FormStatusComponent,

    NaturalComponent,
    TextComponent,
    SelectionComponent
  ],

  declarations: [
    AttributeDirective,
    DataMapDirective,
    EntityDirective,
    ErrorDisplayDirective,
    FormFieldDirective,

    FormComponent,
    FormFieldComponent,
    FormStatusComponent,

    NaturalComponent,
    TextComponent,
    SelectionComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MetaPFormsModule { }

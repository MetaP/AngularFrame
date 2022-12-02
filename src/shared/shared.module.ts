import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DummyComponent } from './components/dummy/dummy.component';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';
import { DataBoundModule } from './data-bound/data-bound.module';
import { MetaPFormsModule } from './form/metap-forms.module';

@NgModule({
  exports: [
    DummyComponent,
    ErrorDisplayComponent,

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataBoundModule,
    MetaPFormsModule
  ],

  declarations: [
    DummyComponent,
    ErrorDisplayComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DataBoundModule,
    MetaPFormsModule
  ]
})
export class SharedModule { }

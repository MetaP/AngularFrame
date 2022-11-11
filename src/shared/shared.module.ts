import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DummyComponent } from './components/dummy/dummy.component';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';
import { MetaPFormsModule } from './form/metap-forms.module';



@NgModule({
  exports: [
    DummyComponent,
    ErrorDisplayComponent,

    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    MetaPFormsModule
  ]
})
export class SharedModule { }

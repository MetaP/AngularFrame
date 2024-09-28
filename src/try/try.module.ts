import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TryRoutingModule } from './try-routing.module';
import { TryComponent } from './try.component';


@NgModule({
  declarations: [
    TryComponent
  ],
  imports: [
    CommonModule,
    TryRoutingModule
  ]
})
export class TryModule { }

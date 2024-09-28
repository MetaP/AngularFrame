import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TryRoutingModule } from './try-routing.module';
import { TryComponent } from './try.component';
import { OusiaModule } from 'ousia';


@NgModule({
  declarations: [
    TryComponent
  ],
  imports: [
    CommonModule,
    OusiaModule,
    TryRoutingModule
  ]
})
export class TryModule { }

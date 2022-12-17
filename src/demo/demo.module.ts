import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material';
// import { SharedModule } from 'src/shared/shared.module';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    // SharedModule,
    MatSlideToggleModule
  ]
})
export class DemoModule { }

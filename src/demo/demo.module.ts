import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    SharedModule
  ]
})
export class DemoModule { }

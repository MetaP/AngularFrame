import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DemoComponent } from './demo.component';
import { MaterialDemoModule } from './material/material-demo.module';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    MatSlideToggleModule,

    MaterialDemoModule
  ]
})
export class DemoModule { }

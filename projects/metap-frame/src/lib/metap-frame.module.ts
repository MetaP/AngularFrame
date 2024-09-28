import { NgModule } from '@angular/core';
import { MetaPFrameComponent } from './metap-frame.component';
import { CaptionComponent } from './components/caption/caption.component';



@NgModule({
  declarations: [
    MetaPFrameComponent,
    CaptionComponent
  ],
  imports: [
  ],
  exports: [
    MetaPFrameComponent
  ]
})
export class MetaPFrameModule { }

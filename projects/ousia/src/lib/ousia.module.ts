import { NgModule } from '@angular/core';
import { OusiaComponent } from './ousia.component';
import { NamespaceDirective } from './namespace/namespace.directive';



@NgModule({
  declarations: [
    OusiaComponent,
    NamespaceDirective
  ],
  imports: [
  ],
  exports: [
    OusiaComponent,
    NamespaceDirective
  ]
})
export class OusiaModule { }

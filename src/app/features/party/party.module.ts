import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { AddressComponent } from './components/address/address.component';

@NgModule({
  declarations: [
    AddressComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PartyModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from 'src/demo/demo.component';
import { AddressComponent } from './features/party/components/address/address.component';

const routes: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: 'address', component: AddressComponent },
  { path: '', redirectTo: 'address', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from 'src/demo/demo.component';
import { MaterialAddressComponent } from 'src/demo/material/material-address/material-address.component';
import { MaterialDragDropComponent } from 'src/demo/material/material-drag-drop/material-drag-drop.component';
import { MaterialNavigationComponent } from 'src/demo/material/material-navigation/material-navigation.component';
import { MaterialTableComponent } from 'src/demo/material/material-table/material-table.component';
import { MaterialTreeComponent } from 'src/demo/material/material-tree/material-tree.component';
import { AddressComponent } from './features/party/components/address/address.component';
import { TryComponent } from 'src/try/try.component';

const routes: Routes = [
  { path: 'try', component: TryComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'mat-address', component: MaterialAddressComponent},
  { path: 'mat-drag', component: MaterialDragDropComponent},
  { path: 'mat-navigation', component: MaterialNavigationComponent},
  { path: 'mat-table', component: MaterialTableComponent},
  { path: 'mat-tree', component: MaterialTreeComponent},
  { path: 'address', component: AddressComponent },
  { path: '', redirectTo: 'try', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

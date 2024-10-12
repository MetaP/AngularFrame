import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { TryRoutingModule } from './try-routing.module';
import { TryComponent } from './try.component';
import { OusiaModule } from 'ousia';
import { AddressComponent } from './subform/address/address.component';


@NgModule({
	declarations: [
		TryComponent,
  AddressComponent
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		TranslateModule,
		OusiaModule,
		TryRoutingModule
	]
})
export class TryModule { }

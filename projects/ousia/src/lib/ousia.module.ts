import { NgModule } from '@angular/core';

import { NamespaceDirective } from './namespace/namespace.directive';
import { FieldLabelComponent } from './field-label/field-label.component';



@NgModule({
	declarations: [
		NamespaceDirective,
		FieldLabelComponent
	],
	imports: [
	],
	exports: [
		NamespaceDirective,
		FieldLabelComponent
	]
})
export class OusiaModule { }

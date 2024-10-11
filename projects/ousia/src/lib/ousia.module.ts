import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NamespaceDirective } from './namespace/namespace.directive';
import { FieldLabelComponent } from './field-label/field-label.component';
import { LocalizedTextComponent } from './localized-text/localized-text.component';
import { TitleComponent } from './title/title.component';
import { FieldSetComponent } from './field-set/field-set.component';



@NgModule({
	declarations: [
		FieldLabelComponent,
		FieldSetComponent,
		LocalizedTextComponent,
		NamespaceDirective,
		TitleComponent,
	],
	imports: [
		CommonModule
	],
	exports: [
		FieldLabelComponent,
		FieldSetComponent,
		NamespaceDirective,
		TitleComponent,
	]
})
export class OusiaModule { }

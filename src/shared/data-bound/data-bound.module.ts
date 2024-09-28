import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MatListModule } from "@angular/material/list";

import { NumbersModule } from "./numbers/numbers.module";
import { ButtonsSelectorComponent } from "./buttons-selector/selector.component";
import { OptionDirective } from "./buttons-selector/option.directive";
import { SelectorComponent } from './selector/selector.component';
import { ListSelectorComponent } from './list-selector/list-selector.component';

@NgModule({
    exports: [
        NumbersModule,
        ButtonsSelectorComponent,
        OptionDirective,
        ListSelectorComponent
    ],
  
    declarations: [
        ButtonsSelectorComponent, 
        OptionDirective, 
        SelectorComponent, 
        ListSelectorComponent
    ],
  
    imports: [
        CommonModule,
        FormsModule,

        MatListModule,

        NumbersModule
    ]
  })
  export class DataBoundModule { }
  
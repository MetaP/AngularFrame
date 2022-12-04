import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NumbersModule } from "./numbers/numbers.module";
import { SelectorComponent } from "./selector/selector.component";
import { OptionDirective } from "./selector/option.directive";

@NgModule({
    exports: [
        NumbersModule,
        SelectorComponent, OptionDirective
    ],
  
    declarations: [
        SelectorComponent, OptionDirective
    ],
  
    imports: [
        CommonModule,
        FormsModule,

        NumbersModule
    ]
  })
  export class DataBoundModule { }
  
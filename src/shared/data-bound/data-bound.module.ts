import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { OptionDirective } from "./selector/option.directive";
import { SelectorComponent } from "./selector/selector.component";

@NgModule({
    exports: [
        SelectorComponent, OptionDirective
    ],
  
    declarations: [
        SelectorComponent, OptionDirective
    ],
  
    imports: [
        CommonModule,
        FormsModule,
    ]
  })
  export class DataBoundModule { }
  
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NaturalNumberDirective } from "./natural-number.directive";

@NgModule({
    exports: [
        NaturalNumberDirective
    ],
  
    declarations: [
        NaturalNumberDirective
    ],
  
    imports: [
        CommonModule
    ]
  })
  export class NumbersModule { }
  
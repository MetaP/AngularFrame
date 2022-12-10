import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NaturalNumberDirective } from "./natural/natural-number.directive";

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

  /* ToDo: Is it possible to implement the correct restrictions on these types ? */
  export type natural = number;
  export type integer = number;
  export type real = number;
  
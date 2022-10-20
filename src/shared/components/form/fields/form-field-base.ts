import { Directive, Input, OnInit, Optional } from "@angular/core";
import { ControlContainer, FormControl, FormGroup } from "@angular/forms";
import { AttributeDirective } from "src/shared/directives/attribute.directive";

@Directive()
export class FormFieldBase implements OnInit {
    @Input() readonly: boolean | string = false;
    @Input() disabled: boolean | string = false;
    @Input() formControl!: FormControl;

    constructor(
        private attributeDirective: AttributeDirective
      ) {
      }
    
      ngOnInit(): void {
        this.formControl = this.attributeDirective.formControl;
      }
}
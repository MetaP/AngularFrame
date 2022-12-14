import { Directive, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { AttributeDirective } from "src/shared/form/directives/attribute.directive";

@Directive()
export class FormFieldBase implements OnInit {
    // @Input() readonly: boolean | string = false;
    // @Input() disabled: boolean | string = false;
    // @Input() formControl!: FormControl;
    formControl?: FormControl;

    // @ViewChild('formField', { static: true} ) formField!: FormFieldComponent;

    constructor(
      private attributeDirective: AttributeDirective
    ) {}
  
    ngOnInit(): void {
      this.formControl = this.attributeDirective.formControl!;
    }
}
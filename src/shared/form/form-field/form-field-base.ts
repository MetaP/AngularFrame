import { Directive, Input, OnInit, Optional, ViewChild } from "@angular/core";
import { FormControl, FormGroup, ControlContainer } from "@angular/forms";
import { EntityDirective } from "../directives/entity.directive";
import { FormFieldComponent } from "./form-field.component";

@Directive()
export class FormFieldBase implements OnInit {

  @Input() formGroup: FormGroup | undefined;
  @Input() formControlName: string | undefined;
  @Input() formControl: FormControl | undefined;

  @Input() label: string | undefined;

  @ViewChild(FormFieldComponent, { static: true }) parentFormField!: FormFieldComponent;

  constructor(
    @Optional() private controlContainer: ControlContainer,
    @Optional() private entityDirective: EntityDirective
  ) {
    console.log(`** FormFieldBase - Entity: ${entityDirective.entity}`)
  }

  ngOnInit(): void {
    this.formGroup = this.controlContainer.control as FormGroup;

    //   if (this.formControlName) {
    //     if (this.formControl)
    //       console.log(`Warning! formControlName (${this.formControlName}) is ignored, since a formControl is also specified.`);
    //     else if (this.formGroup)
    //       this.formControl = this.formGroup.get(this.formControlName) as FormControl;
    //     else console.log(`Warning! formControlName (${this.formControlName}) can't be resolved into a FormControl, since no FormGroup is found.`)
    //   }

    // Use the formControlName as default label.
    const labelKey = this.label ? this.label : this.formControlName;
    //   this.parentFormField.label = this.entityDirective.getTranslation(labelKey);
  }

}

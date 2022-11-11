import { Directive, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl } from '@angular/forms';

@Directive({
  selector: '[mafFormField,]'
})
export class FormFieldDirective implements OnInit {

  // @Input() formControl?: FormControl;
  // @Input() formControlName?: string;
  @Input() readonly: boolean | string = false;
  @Input() disabled: boolean | string = false;


  /* Get the class attribute of the host element and splits it in a series of classes. */
  private classes = ['maf-form-field'];

  @HostBinding('class')
  get hostClass(): string {
    return this.classes.join(' ');
  }
  set hostClass(value: string) {
    this.classes = value.split(' ');
  }

  constructor(
    private elementRef: ElementRef
  ) {
    // // Add the "maf_form_field" class to the host element.
    // this.classes = ["maf_form_field"];
  }

  ngOnInit(): void {
    // Add the "maf_form_field" class to the host element.
    // this.classes.push("maf_form_field");
  }
}

import { Component, ElementRef, Input, OnInit, Optional, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validator, AbstractControl, ValidationErrors, ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';
import { isValidIban, normalizeIban } from 'src/shared/code/iban';

/*
 * The article 
 *   "Angular Custom Form Controls: Complete Guide"
 *    https://blog.angular-university.io/angular-custom-form-controls/
 * served as inspiration for this component's implementation.
 */

@Component({
  selector: 'app-iban',
  templateUrl: './iban.component.html',
  styleUrls: ['./iban.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: IbanComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: IbanComponent
    }
  ]
})
export class IbanComponent implements OnInit, ControlValueAccessor, Validator {

  @Input() formControlName: string;
  @Input() formControl: FormControl;

  @ViewChild('input', { static: true }) inputElement: ElementRef<HTMLInputElement>;
  private input: HTMLInputElement;

  inputMask = createMask({
    // NOK mask: '(BE99 9999 9999 9999|NL99 AAAA 9999 9999 99|FR99 9999 9999 99** **** **** *99|LU99 999* **** **** ****|AA99( ****){1,6} *{1,4})',
    // Initially displays 'BE...'  
    mask: 'AA99( ****){1,6}', // Max. IBAN length is 28 (so, max 7 groups of 4)
    placeholder: ' ',
    parser: normalizeIban
  });

  constructor(
    @Optional() private controlContainer: ControlContainer
  ) {}

  ngOnInit(): void {
    this.input = this.inputElement?.nativeElement;

    // If the FormControl is not set as input, use the FormControlName, if it is specified.
    if (!this.formControl && this.formControlName) {
      const formGroup = <FormGroup>this.controlContainer?.control;
      this.formControl = <FormControl>formGroup.controls[this.formControlName];
    }
  }

  /* ControlValueAccessor interface */

  writeValue(value: string): void {
  }

  registerOnChange(onChange: any): void {
  }

  registerOnTouched(onTouched: any): void {
  }

  setDisabledState(disabled: boolean) {
    this.input.disabled = disabled;
  }

  /* Validator interface */

  validate(control: AbstractControl): ValidationErrors | null {
    return (isValidIban(control.value) ? null : { iban: true });
  }

  /* End of interfaces */
}

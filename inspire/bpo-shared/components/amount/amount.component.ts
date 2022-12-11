import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validator, AbstractControl, ValidationErrors, ControlContainer, FormControl, FormGroup } from '@angular/forms';

/* This component replaces InputAmountComponent */

/*
 * The article 
 *   "Angular Custom Form Controls: Complete Guide"
 *    https://blog.angular-university.io/angular-custom-form-controls/
 * served as inspiration for this component's implementation.
 */

/*
 * The <input> control of this control's template is not directly bound to the FormControl, but synchronized with it. 
 * This allows the "display" (the value of the <input> element: this.input.value) to be changed independently from 
 * the numeric value (the value of the bound FormControl).
 */

@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AmountComponent
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: AmountComponent
    }
  ]
})
export class AmountComponent implements OnInit, ControlValueAccessor, Validator {

  @Input() formControlName: string;
  @Input() formControl: FormControl;
  @Input() minAmount: number = 0.01;
  @Input() maxAmount: number = 9999999999999.99;

  get isInvalid(): boolean {
    return this.formControl ? this.formControl.invalid && this.formControl.touched : false;
  }

  @ViewChild('input', { static: true }) inputElement: ElementRef<HTMLInputElement>;
  private input: HTMLInputElement;

  private get value(): number {
    return this.formControl.value as number;
  }

  private onTouched = () => {};
  private isTouched = false;

  constructor(
    private controlContainer: ControlContainer
  ) {}

  ngOnInit(): void {
    // If the FormControl is not set as input, use the FormControlName, if it is specified.
    if (!this.formControl && this.formControlName) {
      const formGroup = <FormGroup>this.controlContainer?.control;
      this.formControl = <FormControl>formGroup.controls[this.formControlName];
    }

    this.input = this.inputElement?.nativeElement;
    this.input.value = formatDecimal(this.value, true);
  }

  /* ControlValueAccessor interface */

  writeValue(value: string): void {
  }

  registerOnChange(onChange: any): void {
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.input.disabled = disabled;
  }

  /* Validator interface */

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value < this.minAmount) return { amount: { minAmount: this.minAmount } };
    if (value > this.maxAmount) return { amount: { maxAmount: this.maxAmount } };
    return null;
  }

  /* End of interfaces */

  markAsTouched() {
    if (!this.isTouched) {
      this.onTouched();
      this.isTouched = true;
    }
  }

  onFocus() {
    // Display without thousands separator when this control has the input focus.
    this.input.value = formatDecimal(this.value, false);
  }

  onBlur() {
    this.onTouched();

    // Display with thousands separator when this control does not have the input focus.
    this.input.value = formatDecimal(this.value, true);
  }

  onKeypress(event: KeyboardEvent) {
    // If a decimal point or comma is pressed when the number already has one, ignore it. 
    switch (event.key) {
      case '.':
      case ',':
        if (this.input.value?.indexOf(",") > 0) {
          event.preventDefault();
          return;
        }
    }

    // If "." pressed, insert a "," instead. (It is not possible to change the key of this event!)
    if (event.key === ".") {
      event.preventDefault();
      this.input.value = this.newDisplayValue(",");
      this.onInput(); // Since this event is canceled, onInput() will not be called automatically!
    }
  }

  onBeforeInput(event: InputEvent) {
    // Calculate what the new input would be.
    const newValue = this.newDisplayValue(event.data);

    // If it is not a valid decimal, ignore this input.
    if (!isValidDecimalInput(newValue)) {
      event.preventDefault();
    }
  }

  onInput() {
    // Whenever the "display" input changes, synchronize the numeric value.
    const value = parseDecimal(this.input.value);
    this.formControl.setValue(value);
  }

  /**
   * Calculates a new display value from the current display value and the input.
   * @param input 
   * @returns 
   */
  private newDisplayValue(input: string | null): string {
    const currentValue = this.input.value;
    const start = this.input.selectionStart;
    const end = this.input.selectionEnd;

    return (start === null || end === null)
      ? ''
      : currentValue.substring(0, start) + (input ?? '')  + currentValue.substring(end);
  }
}

function isValidDecimalInput(value: string): boolean {
  return value === '' ? true : (value.match(/^\d+[.,]?\d{0,2}$/g) !== null);
}

function formatDecimal(value: number | null, grouping: boolean): string {
  return typeof(value) === "number" 
    ? value.toLocaleString("nl", { useGrouping: grouping, minimumFractionDigits: 2, maximumFractionDigits: 2 }) 
    : '';
}

function parseDecimal(value: string | null): number | null {
  return (value === null || value === '') ? null : parseFloat(value.replace(',', '.'));
}
import { Component, HostBinding, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AtomValueType } from 'src/shared/data/data-model';
import { AttributeDirective } from 'src/shared/form/directives/attribute.directive';

@Component({
  selector: 'maf-form-field',
  templateUrl: './form-field.component.html'
})
export class FormFieldComponent implements OnInit {

  // Give the component a class with the same name, so that we can attach the styling to 
  // the class (.maf-form-field) instead of to the element type (maf-form-field).
  @HostBinding('class') class = 'maf-form-field'; // We assing the component 

  get caption$(): Observable<string> {
    return this.attributeDirective.caption;
  }

  get readonly(): boolean {
    return this.attributeDirective.readonly;
  }

  get valueRepresentation$(): Observable<string> | undefined {
    return this.readonly 
      ? this.attributeDirective.value$!.pipe(map(value => 
          this.format(value)))
      : undefined
  }

  disabled: boolean = false;

  format: (value: AtomValueType) => string 
    = (value) => value?.toString(); // The default formatter just returns the value as a string.

  private _errorMessages$ = new BehaviorSubject<string[]>([]); 
  errorMessages$ = this._errorMessages$.asObservable();

  constructor(
    private attributeDirective: AttributeDirective 
  ) {
  }

  ngOnInit(): void {

    /** ToDo: remove test code **/
    if (!this.readonly) {
      this._errorMessages$.next(["This is a test error message.", "This is test error message 2.", "This is test error message 3."]);
    }

  }
}
import { Component, EventEmitter, HostBinding, Input, OnInit, Optional, Output } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective } from '@angular/forms';
import { combineLatest, map, Observable, Subscription } from 'rxjs';
import { DataMapDirective } from '../directives/data-map.directive';

/**
 * The FormGroup linked to this form can either be specified via the DataMapDirective (mafDataMap attribute) or
 * ControlContainer direcive (formGroup and related attributes).
 */
@Component({
  selector: 'maf-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  // Give the component a class with the same name, so that we can attach the styling to 
  // the class (.maf-form) instead of to the element type (maf-form).
  @HostBinding('class') class = 'maf-form'; // We assing the component 

  private _formGroup!: FormGroup;
  @Input() get formGroup(): FormGroup {
    return this._formGroup;
  }
  set formGroup(value: FormGroup) {
    if (this._formGroup !== value) {

      this._formGroup = value;

      /* Conmbine the valueChanges and statusChanges observables to calculate the allowSave observable */
      const formIsDirty$ = value.valueChanges.pipe(
        map(() => value.dirty));

      const formIsValid$ = value.statusChanges.pipe(
        map(status => status === "VALID"));

      this.allowSave$ = combineLatest([formIsDirty$, formIsValid$]).pipe(
        map(([dirty, valid]) => 
          dirty && valid)
        );
    }
  }

  @Input() formControlName?: string;

  /**
   * The event raised when to indicate that the form's current state shoud be saved.
   */
  @Output() save = new EventEmitter<any>();

  /**
   * The event raised when to indicate that the form is closed without saving its current state.
   */
  @Output() cancel = new EventEmitter();

  allowSave$!: Observable<boolean>;  

  translations = {
    save: "Save",
    cancel: "Cancel"
  }

  private subscriptions: Subscription[] = [];


  constructor(
    @Optional() private dataMap?: DataMapDirective,
    @Optional() private controlContainer?: ControlContainer
  ) {}

  ngOnInit(): void {
    if (this.dataMap) {
      this.formGroup = this.dataMap.formGroup;
    } else if (this.controlContainer instanceof FormGroupDirective) {
      this.formGroup = this.controlContainer.form;
    } else throw new Error('<maf-form> is not bound. Specify a binding either via a "mafDataMap" attribute or via a "formGroup" or "formControlName" attribute.');
  }

  onCancel() {
    console.log('** onCancel **');
    this.formGroup.reset
    this.cancel.emit();
  }
  
  onSubmit() {
    console.log('** onSubmit **');

    const value = (this.dataMap ? this.dataMap.mafDataMap.value : this.formGroup.value);
    this.save.emit(value);
  }
}

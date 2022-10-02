import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { combineLatest, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'maf-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  private _formGroup!: FormGroup;
  @Input() get formGroup(): FormGroup {
    return this._formGroup;
  }
  set formGroup(value: FormGroup) {
    console.log('** set formGroup **');
    if (this._formGroup !== value) {

      this._formGroup = value;

      /* Conmbine the valueChanges and statusChanges observables to calculate the allowSave observable */
      const formIsDirty$ = value.valueChanges.pipe(
        // tap(dirty => console.log(`** Dirty: ${dirty} **`)),
        map(() => value.dirty));

      const formIsValid$ = value.statusChanges.pipe(
        // tap(status => console.log(`** Status: ${status} **`)),
        map(status => status === "VALID"));

      this.allowSave$ = combineLatest([formIsDirty$, formIsValid$]).pipe(
        // tap(([dirty, valid]) => 
        //   console.log(`** Dirty: ${dirty} Valid: ${valid}`)),
        map(([dirty, valid]) => 
          dirty && valid)
        );
    }
  }

  @Input() formControlName?: string;

  // private formIsDirty!: Observable<boolean>;
  // private formIsValid!: Observable<boolean>;

  //private _allowSave!
  allowSave$!: Observable<boolean>;  

  translations = {
    save: "Save",
    cancel: "Cancel"
  }

  private subscriptions: Subscription[] = [];


  constructor(
    private controlContainer?: ControlContainer
  ) { 
    console.log('** constructor **');
  }

  ngOnInit(): void {
    // console.log('** ngOnInit **');

    // If the formGroup is not specified as input
    // Try to get it as the control with name formControlName from the parent FormGroup
    if (!this.formGroup && this.formControlName)
    {
      const parentFormGroup = <FormGroup>this.controlContainer?.control;
      this.formGroup = <FormGroup>parentFormGroup.controls[this.formControlName];
    }
  }

  onCancel() {
    console.log('** onCancel **');
  }
  
  onSave() {
    console.log('** onSave **');
  }
}

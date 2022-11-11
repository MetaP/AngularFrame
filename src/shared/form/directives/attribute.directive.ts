import { TemplateBindingParseResult } from '@angular/compiler';
import { Directive, Input, Optional } from '@angular/core';
import { Form, FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AtomValueType } from 'src/shared/data/data-model';
import { DataMapDirective } from './data-map.directive';
import { EntityDirective } from './entity.directive';

@Directive({
  selector: '[mafAttribute]'
})
export class AttributeDirective {

  @Input() mafAttribute!: string;

  @Input() captionId?: string;

  private _caption = new BehaviorSubject<string>('');
  caption = this._caption.asObservable();

  @Input() formControl?: FormControl;
  value$?: Observable<AtomValueType>;
  readonly: boolean = true;
  // @Input() disabled: boolean | string = false;
  
  constructor(
    @Optional() private dataMapDirective: DataMapDirective,
    // @Optional() private entityDirective: EntityDirective
  ) {}

  ngOnInit(): void {
    this.setCaption();
    // this.setFromControl();
    this.bind();
  }

  private setCaption() {
    const captionId = (this.captionId ?? this.mafAttribute);
    this.dataMapDirective.getTranslation(captionId).subscribe(caption => 
      this._caption.next(caption));
  }

  // private setFromControl() {
  //   if (!this.formControl)
  //     this.formControl = this.dataMapDirective.formGroup.controls[this.mafAttribute] as FormControl; 
  // }

  private bind() {
    const dataMap = this.dataMapDirective.mafDataMap;
    const attribute = this.mafAttribute;
    const readonly = dataMap.isReadonly(attribute);

    if (readonly)
      // throw new Error('Not yet implemented.');
      //console.log('ToDo ...');
      this.value$ = dataMap.getElement(attribute) as Observable<AtomValueType>;
    else
      this.formControl = dataMap.getElement(attribute) as FormControl;

    this.readonly = readonly;
  }
}

import { TemplateBindingParseResult } from '@angular/compiler';
import { Directive, Input, Optional } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { EntityDirective } from './entity.directive';

@Directive({
  selector: '[attribute]'
})
export class AttributeDirective {

  @Input() attribute!: string;

  @Input() captionId?: string;

  private _caption = new BehaviorSubject<string>('');
  caption = this._caption.asObservable();

  @Input() formControl!: FormControl;

  constructor(
    @Optional() private entityDirective: EntityDirective
  ) {}

  ngOnInit(): void {
    this.setCaption();
    this.setFromControl();
  }

  private setCaption() {
    const captionId = (this.captionId ?? this.attribute);
    this.entityDirective.getTranslation(captionId).subscribe(caption => 
      this._caption.next(caption));
  }

  private setFromControl() {
    if (!this.formControl)
      this.formControl = this.entityDirective.formGroup.controls[this.attribute] as FormControl; 
  }
}

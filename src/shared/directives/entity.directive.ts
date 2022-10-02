import { Directive, Input, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective } from '@angular/forms';
import { Observable } from 'rxjs';
import { ConfigurationService, Context } from '../services/configuration.service';

@Directive({
  selector: '[entity]'
})
export class EntityDirective /* extends FormGroupDirective */ implements OnInit {

  @Input() entity: string = '';

  formGroup!: FormGroup;

  get context(): Context {
    return this.entity as Context;
  }

  constructor(
    private configurationService: ConfigurationService,
    public formGroupDirective: FormGroupDirective,
    private controlContainer: ControlContainer
  ) {

  }

  /* OnInit interface */

  ngOnInit(): void {
    console.log(`** Entity: ${this.entity}`)
    this.formGroup = this.controlContainer.control as FormGroup;
  }

  /* Public methods */

  getTranslation(key?: string): Observable<string> {
    return this.configurationService.getTranslation(this.context, key);
  }

  translate(translations: { [key: string] : string }) {
    this.configurationService.translate(translations, this.context);
  }
}

import { Directive, Input, OnInit } from '@angular/core';
import { ConfigurationService, Context } from '../services/configuration.service';

@Directive({
  selector: '[mafEntity]'
})
export class EntityDirective implements OnInit {

  @Input() mafEntity: string = '';

  get context(): Context {
    return this.mafEntity as Context;
  }

  constructor(
    private configurationService: ConfigurationService
  ) {

  }

  /* OnInit interface */

  ngOnInit(): void {
    console.log(`** Entity: ${this.mafEntity}`)
  }

  /* Public methods */

  getTranslation(key?: string): string {
    return this.configurationService.getTranslation(this.context, key);
  }

  translate(translations: { [key: string] : string }) {
    this.configurationService.translate(translations, this.context);
  }
}

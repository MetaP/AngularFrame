import { Directive, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataMap } from 'src/shared/data/data-model';
import { ConfigurationService, Context } from 'src/shared/global/services/configuration.service';

@Directive({
  selector: '[mafDataMap]'
})
export class DataMapDirective implements OnInit {

  @Input() mafDataMap!: DataMap;
  
  @Input() context: Context = '';

  formGroup!: FormGroup;

  constructor(
    private configurationService: ConfigurationService,
  ) { }

  /* OnInit interface */

  ngOnInit(): void {
    this.formGroup = this.mafDataMap.formGroup;
  }
  
  /* Public methods */

  getTranslation(key?: string): Observable<string> {
    return this.configurationService.getTranslation(this.context, key);
  }

  translate(translations: { [key: string] : string }) {
    this.configurationService.translate(translations, this.context);
  }  
}

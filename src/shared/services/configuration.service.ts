import { Injectable } from '@angular/core';

/**
 * An object of which
 */
export type Translations = { [key: string] : string };

/**
 * An instance of this type represents a context.
 * An entity is a typical context. It determines, for instance, 
 */
export type Context = string;

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor() { }

  getTranslation(context: Context, key?: string): string {
    if (!key) return '';
    else {
      switch(context) {
        case 'Address': {
          switch(key) {
            case 'natural': return "Natuurlijk getal";
            case 'line1': return "Lijn 1";
          }
        }
      }
  
      return key;
    }
  }

  translate(translations: Translations, context: Context) {
    for (var key in translations) {
      translations[key] = this.getTranslation(context, key);
    }
  }
}

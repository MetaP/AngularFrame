import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { map, Observable, of } from 'rxjs';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private configurationService: ConfigurationService
  ) { }

  getValidationMessages(errors: ValidationErrors | null | undefined): Observable<string[]>  {
    var messages: string[];
    if (errors) {
      const keys = Object.keys(errors);

      /* ToDo: Replace the dummy translation */
      messages = keys.map(key => {
        const value = errors[key]; // .toString();
        return `** Translated '${key}'` + (value ? ` with arguments: {${value.toString()}} **` : ` **`);
      })
    } else { 
      messages = [];
    }
    return of(messages);
  }

  
  // getMessage(key: string, validationErrorArguments?: ValidationErrorArguments): Observable<string> {

  //   const message$ = this.configurationService.getTranslation('validatiion', key); // ?? `* Validation message '${key}' not found. *`;

  //   if (validationErrorArguments) {
  //     message$.pipe(map(message => {
  //       /* ToDo: Replace the message parameters with the specified arguments.  */
  //       throw new Error('Not yet implemented.');
  //     }));

  //   };

  //   return message$;
  // }
}

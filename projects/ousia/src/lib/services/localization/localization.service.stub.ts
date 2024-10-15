import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LTextDefinition, LTextDefinitionObject, LTextParameter } from './localization.service.def';

@Injectable({
	providedIn: 'root'
})
export class LocalizationServiceStub {

	getText(definition: LTextDefinition): Observable<string>;
	getText(key: string, parameters?: { [key: string]: LTextParameter }): Observable<string>;

	getText(keyOrDefinition: LTextDefinition, parameters?: { [key: string]: LTextParameter }): Observable<string> {

		let s: string;

		if (keyOrDefinition === undefined) {
			s = '';
		} else {
			const definition = typeof (keyOrDefinition) === 'string'
				? new LTextDefinitionObject(keyOrDefinition, parameters)
				: keyOrDefinition;
			s = definition.toString();
		}

		return of(`** Localized: [${s}] **`);
	}

	getTexts(...definitions: LTextDefinition[]): Observable<string[]> {
		throw new Error('Method not implemented.');
	}

}

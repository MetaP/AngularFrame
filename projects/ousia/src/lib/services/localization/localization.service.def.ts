import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const LOCALIZATION_SERVICE = new InjectionToken<LocalizationService>('LocalizationService');
export const DEFAULT_LOCALIZATION_SERVICE = new InjectionToken<LocalizationService>('DefaultLocalizationService');


export class LTextDefinitionObject {

	constructor(
		readonly key: string,
		readonly parameters?: { [key: string]: LTextParameter }
	) { }

	toString(): string {
		let s = this.key;

		// Add the parameter representation " ({key1} = value1, ... {keyN} = valueN)"
		const parameters = this.parameters;
		if (parameters) {
			let first = true;
			for (const key in parameters) {
				if (parameters.hasOwnProperty(key)) {
					if (first) {
						first = false;
						s += ' (';
					} else {
						s += `, `;
					}
					s += `{${key}}=${parameters[key].toString()}`;
				}
			}
			if (!first) {
				s +=  ')';
			}
		}

		return `[${s}]`;
	}
}

/**
 * Specifies the types allowed as parameter values for a localized text definition.
 * 
 * A parameter can be a simple string, number of date or it can itself be a localized text.
 * A localized text can be represented by its key enclosed between star ('*') characters; for instance '[person.firstName]' or
 * by a {@link LTextDefinition} instance.
 */
export type LTextParameter = string | number | Date | LTextKey | LTextDefinitionObject;

/**
 * Represents a localized text used as parameter value of a localized text definition.
 * Enclose the key of the localized text between square brackets. ('[' and ']')
 * @example '[person.firstName]' 
 */
export type LTextKey = `\[{string}\]`;

export type LTextDefinition = undefined | string | LTextDefinitionObject;

export interface LocalizationService {

	getText(definition: LTextDefinition): Observable<string>;

	getText(key: string, parameters?: { [key: string]: LTextParameter }): Observable<string>;

	getTexts(...definitions: LTextDefinition[]): Observable<string[]>;
}

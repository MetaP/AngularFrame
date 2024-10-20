import { LTextDefinition, LTextDefinitionObject } from "../services/localization/localization.service.def";
import { isDefined, isUndefined, isNonBlankString, isBlankOrNotString, addNamespaceToLTextDefinition } from "./utility";

describe('utility.ts', () => {

	describe('isDefined(value)', () => {
		it('should return false if value is undefined', () => {
			expect(isDefined(undefined)).toBeFalse();
		});
		it('should return false if value is null', () => {
			expect(isDefined(null)).toBeFalse();
		});
		it('should return true if value is 0', () => {
			expect(isDefined(0)).toBeTrue();
		});
		it('should return true if value is an empty string', () => {
			expect(isDefined('')).toBeTrue();
		});
	});

	describe('isUndefined(value)', () => {
		it('should return false if value is undefined', () => {
			expect(isUndefined(undefined)).toBeTrue();
		});
		it('should return false if value is null', () => {
			expect(isUndefined(null)).toBeTrue();
		});
		it('should return true if value is 0', () => {
			expect(isUndefined(0)).toBeFalse();
		});
		it('should return true if value is an empty string', () => {
			expect(isUndefined('')).toBeFalse();
		});
	});

	describe('isNonBlankString(value)', () => {
		it('should return false if value is null', () => {
			expect(isNonBlankString(null)).toBeFalse();
		});
		it('should return false if value is undefined', () => {
			expect(isNonBlankString(undefined)).toBeFalse();
		});
		it('should return false if value is an empty string', () => {
			expect(isNonBlankString('')).toBeFalse();
		});
		it('should return false if value is a string containing only spaces', () => {
			expect(isNonBlankString('     ')).toBeFalse();
		});
		it('should return false if value is a string containing only spaces, tabs and newlines', () => {
			expect(isNonBlankString(' \t \n  ')).toBeFalse();
		});
		it('should return false if value is number', () => {
			expect(isNonBlankString(1)).toBeFalse();
		});
		it('should return true if value is a non-blank string', () => {
			expect(isNonBlankString('text')).toBeTrue();
		});
	});

	describe('isBlankOrNotString(value)', () => {
		it('should return true if value is null', () => {
			expect(isBlankOrNotString(null)).toBeTrue();
		});
		it('should return true if value is undefined', () => {
			expect(isBlankOrNotString(undefined)).toBeTrue();
		});
		it('should return true if value is an empty string', () => {
			expect(isBlankOrNotString('')).toBeTrue();
		});
		it('should return true if value is a string containing only spaces', () => {
			expect(isBlankOrNotString('     ')).toBeTrue();
		});
		it('should return true if value is a string containing only spaces, tabs and newlines', () => {
			expect(isBlankOrNotString(' \t \n  ')).toBeTrue();
		});
		it('should return true if value is number', () => {
			expect(isBlankOrNotString(1)).toBeTrue();
		});
		it('should return false if value is a non-blank string', () => {
			expect(isBlankOrNotString('text')).toBeFalse();
		});
	});

	describe('addNamespaceToLTextDefinition(namespace, definition)', () => {

		const definitions: LTextDefinition[] = [
			undefined,
			'simple',
			new LTextDefinitionObject('aKey'),
			new LTextDefinitionObject('aKey', { 'aString': 'string value', 'aNumber': 63 })
		]; 

		definitions.forEach(definition => {
			it(`should return definition (${definition?.toString()}) if namespace is null`, () => {
				expect(addNamespaceToLTextDefinition(null, definition)).toEqual(definition);
			})
		});

		const expected: LTextDefinition[] = [
			'aNamespace.undefined',
			'aNamespace.simple',
			new LTextDefinitionObject('aNamespace.aKey'),
			new LTextDefinitionObject('aNamespace.aKey', { 'aString': 'string value', 'aNumber': 63 })
		]; 
		definitions.forEach((definition, i) => {
			it(`should add namespace 'aNamespace' to [key of] definition (${definition?.toString()})`, () => {
				expect(addNamespaceToLTextDefinition('aNamespace', definition)).toEqual(expected[i]);
			})
		});
	});

});

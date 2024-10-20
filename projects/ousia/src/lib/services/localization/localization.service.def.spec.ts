import { LTextDefinitionObject } from './localization.service.def';

describe('LTextDefinitionObject', () => {
	describe('constructor', () => {
		it('should create an instance with a key and no parameters', () => {
			const definition = new LTextDefinitionObject('aKey');
			expect(definition).toBeTruthy();
			expect(definition.key).toBe('aKey');
			expect(definition.parameters).toBeUndefined();
		});
	});

	describe('toString()', () => {

		it('should return correct value for key without parameters', () => {
			const obj = new LTextDefinitionObject('aKey');
			expect(obj.toString()).toBe('[aKey]');
		});

		it('should return correct value for key with single string parameter', () => {
			const parameters = {
				aString: 'aString'
			};
			const obj = new LTextDefinitionObject('aKey', parameters);
			expect(obj.toString()).toBe('[aKey ({aString}=aString)]');
		});

		it('should return correct value for key with single number parameter', () => {
			const parameters = {
				aNumber: 666
			};
			const obj = new LTextDefinitionObject('aKey', parameters);
			expect(obj.toString()).toBe('[aKey ({aNumber}=666)]');
		});

		it('should return correct value for key with single Date parameter', () => {
			const date = new Date(1963, 9, 22);
			const dateString = date.toString();

			const parameters = {
				aDate: new Date(1963, 9, 22)
			};
			const obj = new LTextDefinitionObject('aKey', parameters);
			expect(obj.toString()).toBe(`[aKey ({aDate}=${dateString})]`);
		});
		
		it('should return correct value for key with multiple parameters', () => {
			const date = new Date(1963, 9, 22);
			const dateString = date.toString();

			const parameters = {
				aString: 'aString',
				aNumber: 666,
				aDate: date
			};
			const obj = new LTextDefinitionObject('aKey', parameters);
			expect(obj.toString()).toBe(`[aKey ({aString}=aString, {aNumber}=666, {aDate}=${dateString})]`);
		});
	})
});

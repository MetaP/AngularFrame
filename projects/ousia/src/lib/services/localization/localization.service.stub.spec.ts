import { LocalizationServiceStub } from './localization.service.stub';
import { LTextDefinitionObject } from './localization.service.def';

describe('LocalizationServiceStub', () => {

	/* Instantiate a shared service. It should be stateless! */
	const service = new LocalizationServiceStub();

	describe('getText(definition)', () => {
		it('should return the correct value for a definition with only a key', (done: DoneFn) => {
			const definition = new LTextDefinitionObject('aKey');
			const expected = '** Localized: [aKey] **';

			service.getText(definition).subscribe(result => {
				expect(result).toBe(expected);
				done();
			});
		});

		it('should return the correct value for defintion with a key and multiple parameters', (done: DoneFn) => {
			const date = new Date(1963, 9, 22);
			const dateString = date.toString();
			const definition = new LTextDefinitionObject('aKey', {
				aString: 'aString',
				aNumber: 666,
				aDate: date
			});
			const expected = `** Localized: [aKey ({aString}=aString, {aNumber}=666, {aDate}=${dateString})] **`;

			service.getText(definition).subscribe(result => {
				expect(result).toBe(expected);
				done();
			});
		});
	});

	describe('getText(key, parameters?)', () => {
		it('should return the correct value for a simple string key without parameters', (done: DoneFn) => {
			const key = 'aKey';
			const expected = '** Localized: [aKey] **';

			service.getText(key).subscribe(result => {
				expect(result).toBe(expected);
				done();
			});
		});

		it('should return the correct value for defintion with a key and multiple parameters', (done: DoneFn) => {
			const definition = new LTextDefinitionObject('aKey', {
				aString: 'aString',
				aNumber: 666
			});
			const expected = '** Localized: [aKey ({aString}=aString, {aNumber}=666)] **';

			service.getText(definition).subscribe(result => {
				expect(result).toBe(expected);
				done();
			});
		});
	});
});


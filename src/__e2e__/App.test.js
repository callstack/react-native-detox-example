/**
 * @flow
 */

describe('Main', () => {
	it('should have welcome heading', async () => {
		const text = element(by.id('welcome'));

    await expect(text).toHaveText('Welcome to React Native!');
	});

	it('should display an alert', async () => {
		await element(by.id('alertLink')).tap();

		await expect(element(by.type('UILabel')).atIndex(0))
			.toHaveText('Hey, I am an alert!');
	});
})

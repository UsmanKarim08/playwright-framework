import { test, expect } from '@playwright/test';
test.describe('Group of tests for Google', () => {
    test.beforeEach(async ({page}) => {
        // This will run before each test in this describe block
        console.log('Starting a new test...');
    });
    test('google search', async ({page}) => {
        await page.goto('https://www.google.com')
        await expect(page).toHaveTitle(/Google/);
    });
    test('google search box', async ({page}) => {
        await page.goto('https://www.google.com')
        let searchBox = page.locator("textarea[id='APjFqb']");
        await searchBox.fill("Playwright Grouped Tests");
        await searchBox.press('Enter');
    });
});
import { test, expect } from '@playwright/test';
test('locator', async ({ page }) => {
    await page.goto('https://www.google.com');
    let searchBox = page.locator("textarea[id='APjFqb']");
    await searchBox.fill("Playwright Locators");
    await searchBox.press('Enter');

})
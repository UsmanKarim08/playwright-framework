import { test, expect } from '@playwright/test';
test('first example test', async ({ page }) => {
    await page.goto('https://www.google.com')
    await expect(page).toHaveTitle(/Google/);
    await page.locator('[id="APjFqb"]').click();
    await page.locator('[id="APjFqb"]').fill(`Playwright Testing`);
    
    // Fix: Use .first() to select the first visible button
    await page.getByRole('button', { name: 'Google Search' }).first().click();
    
    // Alternative fix: Use getByRole which is more semantic
    // await page.getByRole('button', { name: 'Google Search' }).first().click();
})
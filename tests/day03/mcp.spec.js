// Page navigation and assertions
await expect(page).toHaveTitle(/Google/);
await expect(page).toHaveURL(/.*google.com\/search.*/);

// Element interactions
await page.locator('[name="q"]').fill('search term');
await page.getByRole('button', { name: 'Search' }).click();

// Waiting strategies
await page.waitForURL(/.*google.com\/search.*/);
await expect(page.locator('#search')).toBeVisible();

// Mobile testing
await page.setViewportSize({ width: 375, height: 667 });   
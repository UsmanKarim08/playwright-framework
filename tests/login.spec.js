import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {
    test.beforeEach(async ({ page }) => {
        // Navigate to the base URL before each test
        await page.goto('/');
    });

    test('should load Swag Labs homepage', async ({ page }) => {
        await expect(page).toHaveTitle(/Swag Labs/);
    });

});
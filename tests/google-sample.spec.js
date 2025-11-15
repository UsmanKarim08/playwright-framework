import { test, expect } from '@playwright/test';

test.describe('Google Search Tests', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.google.com');
    });

    test('should have correct title and search functionality', async ({ page }) => {
        // Verify page title
        await expect(page).toHaveTitle(/Google/);
        
        // Verify Google logo is visible
        await expect(page.locator('img[alt="Google"]')).toBeVisible();
        
        // Verify search box is visible
        const searchBox = page.locator('[name="q"]');
        await expect(searchBox).toBeVisible();
        
        // Perform a search
        await searchBox.fill('Playwright testing');
        await searchBox.press('Enter');
        
        // Wait for results page to load
        await page.waitForURL(/.*google.com\/search.*/);
        
        // Verify we're on search results page
        await expect(page.locator('#search')).toBeVisible();
        
        // Verify search results contain our query
        await expect(page.locator('h3')).toContainText(['Playwright', 'playwright'], { ignoreCase: true });
    });

    test('should navigate using "I\'m Feeling Lucky" button', async ({ page }) => {
        const searchBox = page.locator('[name="q"]');
        
        // Type search query
        await searchBox.fill('Playwright documentation');
        
        // Click "I'm Feeling Lucky" button
        await page.getByRole('button', { name: "I'm Feeling Lucky" }).click();
        
        // Should navigate away from Google
        await expect(page).not.toHaveURL(/.*google.com.*/);
    });

    test('should handle search suggestions', async ({ page }) => {
        const searchBox = page.locator('[name="q"]');
        
        // Start typing to trigger suggestions
        await searchBox.fill('playwright');
        
        // Wait for suggestions dropdown to appear
        await expect(page.locator('[role="listbox"]')).toBeVisible();
        
        // Verify suggestions contain our partial query
        const suggestions = page.locator('[role="option"]');
        await expect(suggestions.first()).toBeVisible();
        
        // Click on first suggestion
        await suggestions.first().click();
        
        // Should navigate to search results
        await page.waitForURL(/.*google.com\/search.*/);
    });

    test('should navigate to Google Images', async ({ page }) => {
        // Click on Images link
        await page.getByRole('link', { name: 'Images' }).click();
        
        // Verify we're on Google Images
        await expect(page).toHaveURL(/.*google.com\/imghp.*/);
        
        // Verify Images search box is present
        await expect(page.locator('[name="q"]')).toBeVisible();
        
        // Perform an image search
        await page.locator('[name="q"]').fill('nature photography');
        await page.locator('[name="q"]').press('Enter');
        
        // Verify image results are displayed
        await expect(page.locator('[data-ri]')).toBeVisible();
    });

    test('should handle voice search button', async ({ page }) => {
        // Verify voice search button exists
        const voiceButton = page.getByRole('button', { name: 'Search by voice' });
        await expect(voiceButton).toBeVisible();
        
        // Click voice search button (may trigger permission dialog)
        await voiceButton.click();
        
        // Note: In real scenarios, you might need to handle microphone permissions
        // For this test, we just verify the button is clickable
    });

    test('should navigate to different Google services', async ({ page }) => {
        // Test Gmail link
        await page.getByRole('link', { name: 'Gmail' }).click();
        await expect(page).toHaveURL(/.*mail.google.com.*/);
        
        // Go back to Google homepage
        await page.goBack();
        await expect(page).toHaveURL(/.*google.com.*/);
    });

    test('should handle advanced search features', async ({ page }) => {
        const searchBox = page.locator('[name="q"]');
        
        // Test exact phrase search with quotes
        await searchBox.fill('"Playwright automation testing"');
        await searchBox.press('Enter');
        
        await page.waitForURL(/.*google.com\/search.*/);
        
        // Verify search was performed
        await expect(page.locator('#search')).toBeVisible();
        
        // Verify the search query appears in the search box on results page
        const resultSearchBox = page.locator('input[name="q"]');
        await expect(resultSearchBox).toHaveValue('"Playwright automation testing"');
    });

    test('should work with different search operators', async ({ page }) => {
        const searchBox = page.locator('[name="q"]');
        
        // Test site-specific search
        await searchBox.fill('site:github.com playwright');
        await searchBox.press('Enter');
        
        await page.waitForURL(/.*google.com\/search.*/);
        
        // Verify results contain GitHub links
        const firstResult = page.locator('#search .g').first();
        await expect(firstResult.locator('a')).toHaveAttribute('href', /.*github.com.*/);
    });

    test('should handle mobile responsiveness', async ({ page }) => {
        // Set mobile viewport
        await page.setViewportSize({ width: 375, height: 667 });
        
        // Reload page
        await page.reload();
        
        // Verify page still works on mobile
        await expect(page.locator('[name="q"]')).toBeVisible();
        
        // Test search on mobile
        await page.locator('[name="q"]').fill('mobile testing');
        await page.locator('[name="q"]').press('Enter');
        
        await page.waitForURL(/.*google.com\/search.*/);
        await expect(page.locator('#search')).toBeVisible();
    });
});
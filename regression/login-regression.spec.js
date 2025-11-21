import { test, expect } from '@playwright/test';

test.describe('Regression Tests - Login Flow', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    });

    test('regression: complete login and logout flow', async ({ page }) => {
        // Login
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

        // Verify login success
        await expect(page).toHaveURL(/.*inventory/);
        await expect(page.locator('.title')).toContainText('Products');

        // Logout
        await page.locator('#react-burger-menu-btn').click();
        await page.locator('#logout_sidebar_link').click();

        // Verify logout
        await expect(page).toHaveURL(/.*saucedemo.com/);
        await expect(page.locator('[data-test="username"]')).toBeVisible();
    });

    test('regression: add item to cart and checkout', async ({ page }) => {
        // Login
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();

        // Add item to cart
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        
        // Go to cart
        await page.locator('.shopping_cart_link').click();
        await expect(page.locator('.cart_item')).toBeVisible();

        // Proceed to checkout
        await page.locator('[data-test="checkout"]').click();
        
        // Fill checkout info
        await page.locator('[data-test="firstName"]').fill('John');
        await page.locator('[data-test="lastName"]').fill('Doe');
        await page.locator('[data-test="postalCode"]').fill('12345');
        await page.locator('[data-test="continue"]').click();

        // Complete checkout
        await page.locator('[data-test="finish"]').click();
        await expect(page.locator('.complete-header')).toContainText('Thank you');
    });
});
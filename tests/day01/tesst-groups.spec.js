import { test, expect } from '@playwright/test';

test.describe("Practice.cydeo", () => {
    test.beforeEach('load ', async ({ page }) => {
        console.log('It Will run before each test');
        await page.goto("https://practice.cydeo.com/");
    })

    test.afterEach(async ({ page }) => {
        console.log('It will run after each test');
        await page.waitForTimeout(3000);
    })

    test("title", async ({ page }) => {
        console.log(await page.title());
    })

    test("Url of the page", async ({ page }) => {
        console.log(page.url());
    })
})
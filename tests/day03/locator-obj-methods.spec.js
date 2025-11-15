import { test } from "@playwright/test"
test.describe("Test Group", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");
    });
    
    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(3000);
    })
    
    test("check", async ({ page }) => {
        await page.locator("//a[@href='/checkboxes']").click();
    })
    
    test("Uncheck", async ({ page }) => {

    })

    test("Select", async ({ page }) => {

    })

})
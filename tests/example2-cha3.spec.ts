import { test, expect, type Page } from '@playwright/test';
const URL = 'https://playwright.dev/'

test.beforeEach(async ({ page }) => {
    await page.goto(URL)
   
});
async function clickGetStarted(page:Page) {
    await page.getByRole('link', { name: 'Get started' }).click();  
}
test.describe.skip('Playwrrigt Web Site', () => {
    
})
 
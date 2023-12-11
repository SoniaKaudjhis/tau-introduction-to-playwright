import { test, expect } from '@playwright/test';
import { only } from 'node:test';

test('Check Java', async ({page}) => {
   await page.goto("https://playwright.dev") // Access to the page Playwrigth
   await page.getByRole('link', { name: 'Get started' }).click(); // Click on Get Started Button
   await page.getByRole('button', { name: 'Node.js' }).hover(); // Hover 
   await page.getByRole('link', { name: 'Java', exact: true }).click(); // Click on Java Menu
   await expect(page).toHaveURL(/.*java/) // Verify the url has java word 
   await expect(page.getByText('Installing Playwright', {exact: true})).not.toBeVisible(); // Check Installing Playwrigth is not being displayed
   const javaDescription = `Playwright was created specifically to accommodate the needs of end-to-end testing. Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox`
   await expect(page.getByText(javaDescription)).toBeVisible(); // Check that below is 


    
});
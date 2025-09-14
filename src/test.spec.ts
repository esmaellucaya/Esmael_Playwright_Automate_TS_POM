// import {test, expect} from '@playwright/test'

// test('test', async ({ page }) => {
//   await page.goto('http://practicesoftwaretesting.com/');
//   await page.locator('[data-test="nav-sign-in"]').click();
//   await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
//   await page.locator('[data-test="password"]').fill('welcome01');
//   await page.locator('[data-test="login-submit"]').click();
//   //Selection dropdown function
//   await page.waitForLoadState('networkidle');
//   await page.goto('http://practicesoftwaretesting.com');
//   const dropdown = page.locator('select');
//   await expect(dropdown).toBeVisible();
//   await dropdown.selectOption('Name (A - Z)');
//   //Card title selection
//   const firstCardTitle = page.locator('.card-title').first();
//   await expect(firstCardTitle).toContainText('Adjustable Wrench');
 
// });

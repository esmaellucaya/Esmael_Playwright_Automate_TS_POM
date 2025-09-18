// import {test, expect} from '@playwright/test'

// test('test e2e add to cart item', async ({ page }) => {
//   await page.goto('http://practicesoftwaretesting.com/');
//   await page.locator('[data-test="nav-sign-in"]').click();
//   await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
//   await page.locator('[data-test="password"]').fill('welcome01');
//   await page.locator('[data-test="login-submit"]').click();
//   await page.locator('[data-test="nav-home"]').dblclick();
//   await page.locator('[data-test="product-01K5EEJDTRXKCCR3JWBY4RE4SJ"]').click();
//   await page.locator('[data-test="add-to-cart"]').click();
//   await page.getByRole('alert', { name: 'Product added to shopping' }).click();
//   await page.locator('[data-test="nav-cart"]').click();
//   await page.getByRole('row', { name: 'Bolt Cutters  Quantity for' }).locator('a').click();
//   await page.locator('div').filter({ hasText: 'Product deleted.' }).nth(2).click();
//   await expect(page.getByText('The cart is empty. Nothing to')).toBeVisible();
// });
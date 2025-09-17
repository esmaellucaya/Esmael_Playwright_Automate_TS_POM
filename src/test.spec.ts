import {test, expect} from '@playwright/test'

test('test e2e add to cart item', async ({ page }) => {
  await page.goto('http://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
  await page.locator('[data-test="password"]').fill('welcome01');
  await page.locator('[data-test="login-submit"]').click();
  await page.locator('[data-test="nav-home"]').click();
  await expect(page.locator('img[src="assets/img/products/pliers02.avif"]')).toBeVisible();
  await page.locator('img[src="assets/img/products/pliers02.avif"]').click();
  await expect(page.locator('[data-test="product-name"]')).toBeVisible();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.getByRole('alert', { name: 'Product added to shopping'}).click();
  await page.locator('[data-test="nav-cart"]').click();
  await page.locator('[data-test="proceed-1"]').click();
  await expect(page.locator('app-login')).toContainText('Hello Jane Doe, you are already logged in. You can proceed to checkout.');
  await page.locator('[data-test="proceed-2"]').click();
  await expect(page.locator('[data-test="street"]')).toHaveValue('Test street 98');
  await page.locator('[data-test="city"]').fill('Payatas');
  await page.locator('[data-test="state"]').fill('Virginia');
  await expect(page.locator('[data-test="country"]')).toBeVisible();
  await page.locator('[data-test="postal_code"]').fill('111119');
  await page.locator('[data-test="proceed-3"]').click();
  await page.locator('[data-test="payment-method"]').selectOption('cash-on-delivery');
  await page.locator('[data-test="finish"]').click();
  await expect(page.locator('div').filter({ hasText: /^Payment was successful$/ }).first()).toBeVisible();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="nav-home"]').click();
});
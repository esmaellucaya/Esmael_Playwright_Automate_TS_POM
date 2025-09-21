import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://practicesoftwaretesting.com/');
  await page.locator('[data-test="nav-contact"]').click();
  await page.locator('[data-test="first-name"]').fill('Test ');
  await page.locator('[data-test="last-name"]').fill('QA');
  await page.locator('[data-test="email"]').fill('QAtest@gmail.com');
  await page.locator('[data-test="subject"]').selectOption('customer-service');
  await page.locator('[data-test="message"]').fill('This is testing message file is attachment with proof');
  await page.locator('[data-test="attachment"]').setInputFiles('Test_attachement_file.txt');
  await page.locator('[data-test="contact-submit"]').click();
  await expect(page.getByText('Thanks for your message! We')).toBeVisible();
});
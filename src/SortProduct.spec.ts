import { test } from '../Fixtures/product-fixtures';
import { SortProductPage } from '../Pages/SortProductPage';
import * as dotenv from 'dotenv';
dotenv.config();

test.afterEach(async ({page}) => {
  await page.context().clearCookies();
  await page.evaluate(() => localStorage.clear());
})

test('User should be able to sort the product to A-Z', async ({page}) => {
    const sortProductPage = new SortProductPage(page)
    await sortProductPage.goto();
    await sortProductPage.sortproductnameASC();
    console.log('Succesfully Sorted to: A-Z');
  });

test('User should be able to sort the product to Z-A', async ({page}) => {
    const sortProductPage = new SortProductPage(page)
    await sortProductPage.goto();
    await sortProductPage.sortproductnameDESC();
    console.log('Succesfully Sorted to: Z-A');
  });







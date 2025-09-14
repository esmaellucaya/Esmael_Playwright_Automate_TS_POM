
import { test } from '../Fixtures/product-fixtures';
import { SortProductPage } from '../Pages/SortProductPage';
import * as dotenv from 'dotenv';
dotenv.config();

test('User should be able to sort the product to A-Z', async ({page}) => {
    const sortProductPage = new SortProductPage(page)
    await sortProductPage.goto();
    await sortProductPage.sortproductnameASC();
  });

test('User should be able to sort the product to Z-A', async ({page}) => {
    const sortProductPage = new SortProductPage(page)
    await sortProductPage.goto();
    await sortProductPage.sortproductnameDESC();
  });







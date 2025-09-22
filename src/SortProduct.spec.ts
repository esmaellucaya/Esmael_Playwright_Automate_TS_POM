import { test } from '../Fixtures/product-fixtures';
import { SortProductPage } from '../Pages/SortProductPage';
import { SortOptions } from '../Fixtures/sortOptions';
import { expectedSortItem } from '../Fixtures/expectedSortedProducts';
import * as dotenv from 'dotenv';
dotenv.config();

test.afterEach(async ({page}) => {
  await page.context().clearCookies();
  await page.evaluate(() => localStorage.clear());
})


test('Validate User should be able to sort the product ascending', async ({page}) => {
    const sortProductPage = new SortProductPage(page)
    await sortProductPage.goto();
    await sortProductPage.sortBy(SortOptions.NAME_ASC, expectedSortItem.NAME_ASC);
    console.log(`Successfully sorted items ascending`);
  });

test('Validate User should be able to sort the product descending', async({page}) => {
   const sortProductPage = new SortProductPage(page)
   await sortProductPage.goto();
   await sortProductPage.sortBy(SortOptions.NAME_DESC, expectedSortItem.NAME_DESC);
   console.log(`Successfully sorted items descending`);
});

// Old script  
// test('User should be able to sort the product to Z-A', async ({page}) => {
//     const sortProductPage = new SortProductPage(page)
//     await sortProductPage.goto();
//     await sortProductPage.sortproductnameDESC();
//     console.log('Succesfully Sorted to: Z-A');
//   });







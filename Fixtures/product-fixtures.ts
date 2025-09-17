import {test as base, expect } from '@playwright/test'
import { SortProductPage } from '../Pages/SortProductPage'
import { AddtoCartPage } from '../Pages/AddtoCartPage'

type Fixtures= {
    sortProductPage: SortProductPage ;
    addtoCartPage: AddtoCartPage;
};

// Navigate automatically to login

export const test = base.extend<Fixtures>({
    sortProductPage: async ({ page }, use) => {
        await page.goto(process.env.PRODUCT_URL!);
        const sortProductPage = new SortProductPage(page);
        await use(sortProductPage);
    },

    addtoCartPage: async ({page}, use) => {
        const addtoCartPage = new AddtoCartPage(page);
        await use(addtoCartPage);
    },
});

export { expect };
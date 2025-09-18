import {test as base, expect } from '@playwright/test'
import { SortProductPage } from '../Pages/SortProductPage'
import { AddtoCartPage } from '../Pages/AddtoCartPage'
import { RemoveCartItem } from '../Pages/RemovetoCartPage'

type Fixtures= {
    sortProductPage: SortProductPage ;
    addtoCartPage: AddtoCartPage;
    removeCartItem: RemoveCartItem;
};

// Navigate automatically to login

export const test = base.extend<Fixtures>({
    sortProductPage: async ({ page }, use) => {
        await page.goto(process.env.PRODUCT_URL!);
        const sortProductPage = new SortProductPage(page);
        await use(sortProductPage);
    },

    addtoCartPage: async ({page}, use) => {
        await page.goto(process.env.PRODUCT_URL!);
        const addtoCartPage = new AddtoCartPage(page);
        await use(addtoCartPage);
    },

    removeCartItem: async ({page}, use) => {
        await page.goto(process.env.PRODUCT_URL!); 
        const removeCartPage = new RemoveCartItem(page);
        await use(removeCartPage);
    }

    
});

export { expect };
import {test as base, expect } from '@playwright/test'
import { SortProductPage } from '../Pages/SortProductPage'
import { AddtoCartPage } from '../Pages/AddtoCartPage'
import { RemoveCartItem } from '../Pages/RemovetoCartPage'
import { ContactPage } from '../Pages/ContactPage'

type Fixtures= {
    sortProductPage: SortProductPage ;
    addtoCartPage: AddtoCartPage;
    removeCartItem: RemoveCartItem;
    fillContactForm: ContactPage;
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
    },

    fillContactForm: async ({page}, use) => {
        await page.goto(process.env.CONTACT_URL!);
        const fillContactForm = new ContactPage(page);
        await use(fillContactForm);

    },

    
});

export { expect };
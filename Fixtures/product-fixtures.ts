import {test as base, expect } from '@playwright/test'
import { SortProductPage } from '../Pages/SortProductPage'


type Fixtures= {
    sortProductPage: SortProductPage ;
};

// Navigate automatically to login

export const test = base.extend<Fixtures>({
    sortProductPage: async ({ page }, use) => {
        await page.goto(process.env.PRODUCT_URL!);
        const sortProductPage = new SortProductPage(page);
        await use(sortProductPage);
    }
});

export { expect };
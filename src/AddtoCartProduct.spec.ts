import { test } from '../Fixtures/product-fixtures';
import { AddtoCartPage } from '../Pages/AddtoCartPage';
import * as dotenv from 'dotenv'
dotenv.config();

test('Validate the selected cart item', async ({page}) => {
    const addtoCartPage = new AddtoCartPage(page)
    await addtoCartPage.goto();
    await addtoCartPage.validateselectedItem();
    await addtoCartPage.clickaddtocartItem();
    await addtoCartPage.clickalertmessage();
});
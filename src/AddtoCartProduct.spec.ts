import { test } from '../Fixtures/product-fixtures';
import { AddtoCartPage } from '../Pages/AddtoCartPage';
import { dataFillOut } from '../data/dataInfo'; // Data forms checkout page
import * as dotenv from 'dotenv'
dotenv.config();

test('Validate end-to-end cart flow through successful checkout', async ({page}) => {
    const addtoCartPage = new AddtoCartPage(page)
    await addtoCartPage.goto();
    await addtoCartPage.validateselectedItem();
    await addtoCartPage.clickaddtocartItem();
    await addtoCartPage.alertmessage();
    await addtoCartPage.proceedbutton();
    await addtoCartPage.proceedToCheckout();
    await addtoCartPage.fillOutInfo(
        dataFillOut.state,
        dataFillOut.postal_code
    );
    await addtoCartPage.paymentOption();
    console.log('Purchase Completed!!')
});
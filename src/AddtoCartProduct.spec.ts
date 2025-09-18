import { test } from '../Fixtures/product-fixtures';
import { AddtoCartPage } from '../Pages/AddtoCartPage';
import { dataFillOut } from '../data/dataInfo'; // Data forms checkout page
import * as dotenv from 'dotenv'
dotenv.config();

test('Validate end-to-end cart flow through successful checkout', async ({page}) => {
    const addtoCartPage = new AddtoCartPage(page)
    await addtoCartPage.goto();
    await addtoCartPage.validateMultipleSelectedItems(['item1','item2']);
   //await addtoCartPage.validateselectedItem1();
    await addtoCartPage.confirmbutton();
    await addtoCartPage.proceedToCheckout();
    await addtoCartPage.fillOutInfo(
        dataFillOut.state,
        dataFillOut.postal_code
    );
    await addtoCartPage.paymentOption();
    console.log('Purchase Completed!!')
});
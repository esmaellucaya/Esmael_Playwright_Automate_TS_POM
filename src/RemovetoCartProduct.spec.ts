import { test } from '../Fixtures/product-fixtures';
import { RemoveCartItem } from '../Pages/RemovetoCartPage';
import * as dotenv from 'dotenv'
dotenv.config();

test('Validate remove item from the cart' , async ({page}) => {
    const removeCartItem = new RemoveCartItem(page)
    await removeCartItem.goto();
    await removeCartItem.selectItem();
    await removeCartItem.itemRemove();
    console.log('Successfully Remove the Item');
});

import { test } from '../Fixtures/product-fixtures';
import { ContactPage } from '../Pages/ContactPage';
import { fillContactInfo } from '../data/contactFill';
import * as dotenv from 'dotenv'

dotenv.config();

test('Validate user should be able to submit contact' , async ({page}) => {
 const contactPage = new ContactPage(page)
 await contactPage.goto();
 await contactPage.contactOption();
 await contactPage.fillContactForm(fillContactInfo.message);
 await contactPage.uploadfile();
 await contactPage.submitButton();
 console.log('Succesfully submitted the form!!!');

});

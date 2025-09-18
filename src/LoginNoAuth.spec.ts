import { test } from '@playwright/test';
import { LoginPageNoAuth } from '../Pages/LoginPageNoAuth'// POM
import users from '../Fixtures/users.json' //Fixtures with user account
import * as dotenv from 'dotenv';

dotenv.config();


test.describe('Login tests', () => {
    test('Login succesfully with valid credentials', async ({page}) => {
        const loginuser = users[0]
        const loginPage = new LoginPageNoAuth(page);
        await loginPage.goto();
        await loginPage.login(loginuser.username, loginuser.password);
        console.log('Successfully login to My page account:', page.url());
        //await page.pause();
       
    }); 

});
import { chromium, FullConfig } from "@playwright/test";
import * as fs from 'fs';
import users from '../Fixtures/users.json';
import { LoginPage } from '../Pages/LoginPage';
import * as dotenv from 'dotenv';

dotenv.config();

async function globalSetup(config: FullConfig) {
    console.log('Running global setup...');
    const browser = await chromium.launch();
    const page = await browser.newPage();

    const loginuser = users[0];
   
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    await loginPage.login(loginuser.username, loginuser.password);
    await page.waitForLoadState('networkidle');
    await page.waitForURL('https://practicesoftwaretesting.com/account')
    await page.context().storageState({path:'.auth/state.json'});
    await browser.close();
    console.log('Global setup completed');

}

export default globalSetup;
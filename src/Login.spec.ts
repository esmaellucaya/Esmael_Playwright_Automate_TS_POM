// import { test } from '@playwright/test';
// import { LoginPage } from '../Pages/LoginPage'// POM
// import users from '../Fixtures/users.json' //Fixtures with user account
// import * as dotenv from 'dotenv';

// dotenv.config();


// test.describe('Login tests', () => {
//     test('Login succesfully with valid credentials', async ({page}) => {
//         const loginuser = users[0]
//         const loginPage = new LoginPage(page);
//         await loginPage.goto();
//         await loginPage.login(loginuser.username, loginuser.password);
//         console.log('Successfully login to My page account:', page.url());
//         //await page.pause();
//     }); 

// });


// Without POM
// test('test', async ({ page }) => {
//   await page.goto('https://practicesoftwaretesting.com/');
//   await page.locator('[data-test="nav-sign-in"]').click();
//   await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
//   await page.locator('[data-test="password"]').fill('welcome01');
//   await page.locator('[data-test="login-submit"]').dblclick();
//   await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
// });
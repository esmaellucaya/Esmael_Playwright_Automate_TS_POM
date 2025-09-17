import {Locator, Page, expect } from '@playwright/test'
import * as dotenv from 'dotenv';
dotenv.config()

//Variables declared
export class LoginPage {
    readonly signin;
    readonly usernameInput;
    readonly passwordInput;
    readonly loginButton;
    readonly titleheader;
    readonly page: Page;
    
    
    constructor(page: Page) {
        this.page = page;
        this.signin = this.page.locator('[data-test="nav-sign-in"]');
        this.usernameInput = this.page.getByPlaceholder('email');
        this.passwordInput = this.page.getByPlaceholder('password');
        this.loginButton = this.page.locator('[data-test="login-submit"]');
        this.titleheader = this.page.getByText('My accountHere you can manage');
    }

// Methods
    async goto() {
        console.log('Navigating to:', process.env.BASE_URL);
        await this.page.goto(`${process.env.BASE_URL}`);
    }

    async login(username: string, password: string) {
        await this.signin.click();
        await this.usernameInput.fill(username); 
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await expect(this.titleheader).toBeVisible();
    }

}
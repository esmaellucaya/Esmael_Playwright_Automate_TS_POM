import {Locator, Page, expect } from '@playwright/test'
import * as dotenv from 'dotenv';
dotenv.config()

//Variables declared
export class LoginPage {
    readonly signin;
    readonly usernameInput;
    readonly passwordInput;
    readonly loginButton;
    readonly page: Page;
    readonly acctnav: Locator;
    readonly titleheader;
    

    constructor(page: Page) {
        this.page = page;
        this.signin = this.page.locator('[data-test="nav-sign-in"]');
        this.usernameInput = this.page.getByPlaceholder('email');
        this.passwordInput = this.page.getByPlaceholder('password');
        this.loginButton = this.page.locator('[data-test="login-submit"]');
        this.acctnav = this.page.locator('[data-test="nav-home"]');
        this.titleheader = this.page.getByText('My account');
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
        await expect(this.titleheader).toContainText('My account');
    }

}
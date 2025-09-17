import {Page, expect, Locator } from '@playwright/test'
import * as dotenv from 'dotenv';
dotenv.config();

export class SortProductPage {
    readonly page;
    readonly navigationHome: Locator;
    readonly sortdropdown: Locator;
    readonly cardTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.navigationHome =  page.locator('[data-test="nav-home"]');
        this.sortdropdown = page.locator('select');
        this.cardTitle =  page.locator('.card-title').first();
    }

    // Methods
    async goto() {
        console.log('Navigating to:', process.env.PRODUCT_URL);
        await this.page.goto(`${process.env.PRODUCT_URL}`);
    }

    async sortproductnameASC(){
      await this.navigationHome.click();
      await expect(this.sortdropdown).toBeVisible();
      await this.sortdropdown.selectOption('Name (A - Z)');
      await expect(this.cardTitle).toContainText('Adjustable Wrench');
    }

     async sortproductnameDESC(){
      await this.navigationHome.click();  
      await expect(this.sortdropdown).toBeVisible();
      await this.sortdropdown.selectOption('Name (Z - A)');
      await expect(this.cardTitle).toContainText('Wood Saw');
    }

}


import {Page, expect, Locator } from '@playwright/test'
import * as dotenv from 'dotenv';
dotenv.config();

export class AddtoCartPage {
  readonly page;
  readonly navigationHome: Locator;
  readonly pliersImage: Locator;
  readonly productnameDisplay: Locator;
  readonly addtocartItem: Locator;
  readonly alertMessage: Locator;
  readonly addtocartScreen: Locator;
  readonly proceedButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigationHome = page.locator('[data-test="nav-home"]');
    this.pliersImage = page.locator('img[src*="pliers02.avif"]');
    this.productnameDisplay = page.locator('[data-test="product-name"]');
    this.addtocartItem = page.locator('[data-test="add-to-cart"]');
    this.alertMessage = page.getByRole('alert', { name: 'Product added to shopping'});
    this.addtocartScreen = page.locator('[data-test="nav-cart"]');
    this.proceedButton = page.locator('[data-test="proceed-1"]');

  }

  async goto() {
    console.log('Navigating to:,', process.env.PRODUCT_URL);
    await this.page.goto(`${process.env.PRODUCT_URL}`);
  }

  async validateselectedItem() {
    await this.navigationHome.click();
    await this.pliersImage.click();
    await expect(this.productnameDisplay).toBeVisible();
  }

  async clickaddtocartItem(){
      await this.addtocartItem.click(); 
  }

  async clickalertmessage(){
    await this.alertMessage.click();
  }

}
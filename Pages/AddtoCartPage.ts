import {Page, expect, Locator } from '@playwright/test'
import { itemSelections } from '../data/ItemSelection'
import * as dotenv from 'dotenv';
dotenv.config();

export class AddtoCartPage {
  readonly page;
  readonly navigationHome: Locator;
  readonly pliersImage: Locator;
  readonly pliersImage2: Locator;
  readonly productnameDisplay: Locator;
  readonly addtocartItem: Locator;
  readonly alertMessage: Locator;
  readonly addtocartScreen: Locator;
  readonly proceedBtn1: Locator;
  readonly useralertMessage: Locator;  
  readonly proceedBtn2: Locator;
  readonly displayViewSt: Locator;
  readonly fillcityName: Locator;
  readonly fillState: Locator;
  readonly displayCountry: Locator;
  readonly fillpostalCode: Locator;
  readonly proceedBtn3: Locator
  readonly paymentSelection: Locator;
  readonly confirmBtn: Locator;
  readonly PaymentMessage: Locator;





  constructor(page: Page) {
    this.page = page;
    this.navigationHome = page.locator('[data-test="nav-home"]');
    this.pliersImage = page.locator('img[src*="pliers02.avif"]');
    this.pliersImage2 = page.locator('img[src*="pliers03.avif"]');
    this.productnameDisplay = page.locator('[data-test="product-name"]');
    this.addtocartItem = page.locator('[data-test="add-to-cart"]');
    this.alertMessage = page.getByRole('alert', { name: 'Product added to shopping'});
    this.addtocartScreen = page.locator('[data-test="nav-cart"]');
    this.proceedBtn1 = page.locator('[data-test="proceed-1"]');
    this.useralertMessage = page.locator('app-login');
    this.proceedBtn2 = page.locator('[data-test="proceed-2"]');
    this.displayViewSt = page.locator('[data-test="street"]');
    this.fillcityName = page.locator('[data-test="city"]');
    this.fillState = page.locator('[data-test="state"]');
    this.displayCountry = page.locator('[data-test="country"]');
    this.fillpostalCode = page.locator('[data-test="postal_code"]');
    this.proceedBtn3 = page.locator('[data-test="proceed-3"]');
    this.paymentSelection = page.locator('[data-test="payment-method"]')
    this.confirmBtn = page.locator('[data-test="finish"]');
    this.PaymentMessage = page.locator('[data-test="payment-success-message"]');
  }

  async goto() {
    console.log('Navigating to:,', process.env.PRODUCT_URL);
    await this.page.goto(`${process.env.PRODUCT_URL}`);
  }
  
//For loop for multiple selection of items

  async validateMultipleSelectedItems(productsIds: string[]) {
    for (const id of productsIds) {
      const selectors = itemSelections[id]
        if (!selectors) {
          console.warn(`Product ID "${id}" not found in selector map.`);
          continue;
        }

        await this.navigationHome.click();
        await this.page.locator(selectors).click();
        await expect(this.productnameDisplay).toBeVisible();
        await this.addtocartItem.click();
        await expect(this.alertMessage).toBeVisible();

    }

  } 
    
// for single selection item
//   async validateselectedItem1() {
//     await this.navigationHome.click();
//     await this.pliersImage.click();
//     await expect(this.productnameDisplay).toBeVisible();
//     await this.addtocartItem.click(); 
//     await this.alertMessage.isVisible();
//   }


  async confirmbutton(){
    await this.addtocartScreen.click()
    await this.proceedBtn1.click()
    await expect(this.useralertMessage).toContainText('Hello Jane Doe, you are already logged in. You can proceed to checkout.');
  }

  async proceedToCheckout() {
    await this.proceedBtn2.click(); 
  }

  async fillOutInfo(state: string, postal_code: string) {
    await expect(this.displayViewSt).toHaveValue('Test street 98');
    await expect(this.fillcityName).toHaveValue('Vienna');
    await this.fillState.fill(state);
    await expect(this.displayCountry).toBeVisible();
    await this.fillpostalCode.fill(postal_code);
    await this.proceedBtn3.click();
  }

  async paymentOption() {
    await this.paymentSelection.selectOption('cash-on-delivery');
    await this.confirmBtn.click();
    await expect(this.PaymentMessage).toBeVisible();
    
  }
}
import { Page, Locator, expect } from "@playwright/test";
import * as dotenv from 'dotenv';
dotenv.config();

export class RemoveCartItem {

    readonly page;
    readonly navigationHome: Locator;
    readonly boltImage: Locator;
    readonly addItem: Locator;
    readonly alertMessage: Locator;
    readonly addtocartScreen: Locator;
    readonly deletebutton: Locator;
    readonly notifDeleteItem: Locator
    readonly descDeleted: Locator;
  
    constructor(page: Page) {
        this.page = page;
        this.navigationHome = page.locator('[data-test="nav-home"]');
        this.boltImage =  page.locator('img[src*="pliers03.avif"]');
        this.addItem = page.locator('[data-test="add-to-cart"]');
        this.alertMessage = page.getByRole('alert', { name: 'Product added to shopping'});
        this.addtocartScreen = page.locator('[data-test="nav-cart"]');
        this.deletebutton = page.getByRole('row', { name: 'Bolt Cutters  Quantity for' }).locator('a');
        this.notifDeleteItem = page.locator('div').filter({ hasText: 'Product deleted.' }).nth(2);
        this.descDeleted = page.getByText('The cart is empty. Nothing to');
    }

 
  async goto() {
    console.log('Navigating to:,', process.env.PRODUCT_URL);
    await this.page.goto(`${process.env.PRODUCT_URL}`);
  }

   async selectItem(){
     await this.navigationHome.click();
     await this.boltImage.click();
     await this.addItem.click();
     await this.alertMessage.isVisible()
     await this.addtocartScreen.click();
   }
   
   async itemRemove(){
     await this.deletebutton.click();
     await this.notifDeleteItem.isVisible();
     await this.descDeleted.isVisible();
   }

}
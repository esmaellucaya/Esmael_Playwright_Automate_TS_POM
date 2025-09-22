import { Page, expect, Locator } from '@playwright/test'
import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

export class ContactPage {
  readonly page;
  readonly navigationContact: Locator;
  readonly contactHeader:Locator;
  readonly contactSubjectOption: Locator;
  readonly contactMessage:Locator;
  readonly contactAttachment: Locator;
  readonly contactSubmitBtn: Locator;
  readonly contactAlertMessage: Locator;

constructor(page: Page) {
   this.page = page;
   this.navigationContact = page.locator('[data-test="nav-contact"]');
   this.contactHeader = page.getByText('Hello Jane Doe, please fill out this form to submit your message');
   this.contactSubjectOption = page.locator('[data-test="subject"]');
   this.contactMessage = page.locator('[data-test="message"]');
   this.contactAttachment = page.getByLabel('Attachment');
   this.contactSubmitBtn = page.locator('[data-test="contact-submit"]');
   this.contactAlertMessage = page.getByText('Thanks for your message! We will contact you shortly.');  
  }
  async goto() {
    console.log('Navigating to:', process.env.CONTACT_URL);
    await this.page.goto(`${process.env.CONTACT_URL}`);
  }
  async contactOption(){
     await expect(this.contactHeader).toBeVisible();
     await this.contactSubjectOption.selectOption('customer-service'); 
  }
  async fillContactForm(message:string){
    await this.contactMessage.fill(message);
  }
  async uploadfile(){
   const filePath = path.join(__dirname, '..', 'files', 'Test_attachment_file.txt');
   await this.contactAttachment.setInputFiles(filePath);
  }
  async submitButton(){
    await this.contactSubmitBtn.click();
    await expect(this.contactAlertMessage).toBeVisible();
  }

}
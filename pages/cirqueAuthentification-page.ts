import { type Locator, type Page, expect } from '@playwright/test';
import { assert } from 'console';

export class CirqueAuthentificationPage {
    readonly page: Page;
    readonly inputPassword:Locator
    readonly buttonSignIn:Locator
    readonly inputUsername:Locator

    constructor(page: Page) {
        this.page = page;
        this.inputPassword = page.locator('css=#passwordInput');
        this.buttonSignIn = page.locator('css=#submitButton');
        this.inputUsername = page.locator('css=#userNameInput')

    }
  async ValidateCirqueAuthentificationPage() {
    await expect(this.buttonSignIn).toBeVisible();
    
  }
  async FillUserCredentials(username:string, password:string) {
     this.FillUserUsername(username)
     this.FillUserPasssword(password)
 
  }
  async FillUserPasssword(password:string) {
    await this.inputPassword.click();
    await this.inputPassword.fill(password);
  }
  async FillUserUsername(username:string){
    let previousUsername = await this.inputUsername.getAttribute('value')
    if ( previousUsername !== username){
      await this.inputUsername.clear();
      await this.inputUsername.fill(username)
    }
    
  }

async ClickOnSignInButton() {
    await this.buttonSignIn.click();
    
}

}

export default CirqueAuthentificationPage;
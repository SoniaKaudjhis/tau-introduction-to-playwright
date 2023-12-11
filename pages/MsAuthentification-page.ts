import { expect, type Locator, type Page } from "@playwright/test";

export class MsAuthentificationPage {
    //variable 
    readonly page:Page
    readonly inputUsername:Locator
    readonly inputPassword:Locator
    readonly buttonConnection:Locator
    readonly popupStaySigned:Locator
    readonly buttonYes:Locator
    readonly checkboxDonShowAgain:Locator
  

    // constructor
    constructor(page: Page) {
      this.page = page;
      this.inputUsername = page.locator('css=[name="loginfmt"]')
      this.buttonConnection = page.locator('css=#idSIButton9')
      this.popupStaySigned = page.locator('#lightbox')
      this.checkboxDonShowAgain = page.locator('#KmsiCheckboxField')
      this.buttonYes = this.popupStaySigned.filter({has: page.getByRole('button', { name: 'Yes' })})
    }
    // Methods
    async fillUserUsername(username:string){
      //await this.inputUsername.click()
      await this.inputUsername.fill(username)
    }
    async validateThatStayConnectedPageDisplays(){
      await expect(this.popupStaySigned).toBeVisible();
     
    }
    async clickOnYesButtonOnStayConnectedPage(){
      await this.buttonYes.click();
    }
    async checkOrUncheckDontShowAgain() {
      await this.checkboxDonShowAgain.click();
    }
    async checkDontShowAgainAndClickYes() {
      this.validateThatStayConnectedPageDisplays();
      this.checkOrUncheckDontShowAgain();
      this.clickOnConnectionButton();
    }
    async clickOnConnectionButton() {
      await this.buttonConnection.click();
      
    }
    async validateMsAuthetificationPage() {
      await expect(this.buttonConnection).toBeVisible();
      
    }



}
export default MsAuthentificationPage
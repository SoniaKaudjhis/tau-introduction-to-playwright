import { expect, type Locator, type Page } from "@playwright/test";
import CirqueAuthentificationPage from "./cirqueAuthentification-page";
import MsAuthentificationPage from "./MsAuthentification-page";
import MakeupHomePage from "./makeupHomePage";

export class AuthentificationFacadePage {
    //variable 
    readonly makeupHomePage : MakeupHomePage;
    readonly msAuthentification: MsAuthentificationPage;
    readonly cirqueAuthentification : CirqueAuthentificationPage;
    readonly page : Page
    

    // constructor
    constructor(page: Page) {
        this.makeupHomePage = new MakeupHomePage(page);
        this.msAuthentification = new MsAuthentificationPage(page)
        this.cirqueAuthentification = new CirqueAuthentificationPage(page);
        this.page = page

    }
    // Methods
    async authentificationProcess(username:string, password:string, url:string) {
        await this.page.goto(this.makeupHomePage.url)
        await this.msAuthentification.validateMsAuthetificationPage();
         await this.msAuthentification.fillUserUsername(username)
        await this.msAuthentification.clickOnConnectionButton();
        await  this.cirqueAuthentification.ValidateCirqueAuthentificationPage();
        await this.cirqueAuthentification.FillUserCredentials(username,password);
         await this.cirqueAuthentification.ClickOnSignInButton();
         await this.msAuthentification.checkDontShowAgainAndClickYes();
         await this.makeupHomePage.ValidateMakeupHomePage();
        
    }
 
    
    


}
export default AuthentificationFacadePage
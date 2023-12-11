import { expect, type Locator, type Page } from "@playwright/test";

export class MakeupHomePage {
    //variable 
    readonly page:Page
    readonly url: string
    

    // constructor
    constructor(page: Page) {
      this.page = page;
      this.url = "/"
    
      
    }
    // Methods
    async  ValidateMakeupHomePage() {
        await expect(this.page).toHaveURL(/.makeup(.*)(cosa)/)
    }
    


}
export default MakeupHomePage
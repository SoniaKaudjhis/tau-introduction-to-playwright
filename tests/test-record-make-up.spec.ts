import { test, expect } from '@playwright/test';
import {AuthentificationFacadePage } from '../pages/authentificationFacade-page';
import {MakeupHomePage} from '../pages/makeupHomePage';

let authentificationFacade : AuthentificationFacadePage
let makeup: MakeupHomePage

const username = process.env.USER_USERNAME ? process.env.USER_USERNAME : "" ;
const password = process.env.USER_PASSWORD ? process.env.USER_PASSWORD : "";
test.beforeEach(async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);
  // login and open makeurl
  authentificationFacade = new AuthentificationFacadePage(page)
  makeup = new MakeupHomePage(page)
  await authentificationFacade.authentificationProcess(username, password, makeup.url)
  
});
test.afterEach( async ({ page }, testInfo) => {
   console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);
  page.close();
  // clean up all the data we created for this test through API calls
 });
test.describe.only('Create Make up', ()=>{
  test('UI_CreerMaquillage_AvecTousLesChamps_ValiderAjoutDansleMakeUpHeader', ()=>{

  })
})
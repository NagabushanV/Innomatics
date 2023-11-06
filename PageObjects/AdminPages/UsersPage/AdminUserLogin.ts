import { Page, expect,} from '@playwright/test';
export default class Adminusers {

    constructor(public page: Page){
        this.page = page;
    }
    async AdminUserSearch(firstname: string) {
        
        await this.enterfirstname(firstname);
        await this.clickviewBtn();
        expect(this.toHaveText());
   
      }
    async enterfirstname(firstname: string) {
        await this.page.locator("//tr[3]//th[3]//div[1]").fill(firstname); //Aron
    }
    async clickviewBtn(){
        await this.page.click(".svg-view");
    } 
    async toHaveText() {
        await this.page.locator("[name='Firstname']").getByText('Aron');
        console.log(this.toHaveText);
    }
    // async clickOnDeleteButton() {
        // await this.deleteButtonLocator.click();
        // await this.page.waitForLoadState("load");
        // await this.deleteAlertLocator.click();
// }
}
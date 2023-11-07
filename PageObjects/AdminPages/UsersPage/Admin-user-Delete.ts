import {Page ,expect} from '@playwright/test';
export default class AdminuserDelete {
    constructor(public page: Page) {
        this.page = page;
    }
    async AdminUserSearch() {
        await this.clickDeleteBtn();
        await this.page.waitForLoadState("load");
        await this.deleteAlertLocator();
   }
   async clickDeleteBtn() {
    await this.page.click("//img[@alt='svgDelete']")
}
async deleteAlertLocator(){
   await this.page.click("//a[@class='btn btn-sm btn-primary  ']")
    
}
}
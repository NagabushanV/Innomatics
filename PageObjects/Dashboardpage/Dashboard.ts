import {Page ,expect} from '@playwright/test';
export default class DashboardPage {
    constructor(public page: Page) {
        this.page = page;
      }
      async Dashboard () {
        await this.clickAdminBtn();
        await this.clickusersBtn();
      }
      async clickAdminBtn() {
        await this.page.click("//p[.='Admin']");
        await this.page.waitForLoadState('load');
        
    }
    async clickusersBtn() {
      await this.page.waitForLoadState('load');
      await this.page.click("//span[.='Users']");
    }

}


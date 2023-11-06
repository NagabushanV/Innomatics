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
        await this.page.getByRole('link', { name: 'Admin' }).click();
    }
    async clickusersBtn() {
      await this.page.click("//span[.='Users']");
    }

}


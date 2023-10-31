import { Page } from "@playwright/test";
export default class LoginPage {

    constructor(public page: Page) { }

    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterLoginPassword(password);
        await this.clickLoginBtn();
    }

    async enterEmail(emailaddress: string) {
        await this.page.locator("//input[@id='input-email']").type(emailaddress);
    }
    async enterLoginPassword(password: string) {
        await this.page.locator("//input[@name='password']").type(password);
    }
    async clickLoginBtn() {
        // await Promise.all([
        //     this.page.waitForNavigation(),
        // ])
        await this.page.locator("//input[@value='Login']");
    }
}
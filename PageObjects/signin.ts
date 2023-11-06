import { Page, expect } from "@playwright/test";

export default class SigninPage {

  constructor(public page: Page, public jsonData: any) {
    this.page = page;
    this.jsonData = jsonData
  }

  async signin(url: string, username: string, companycode: string, password: string) {

    await this.enterusername(this.jsonData.username);
    await this.entercompanycode(this.jsonData.companycode);
    await this.enterpassword(this.jsonData.password);
    await this.clickcheckbox();
    await this.clickLoginBtn();
    expect(this.toHaveText());
  }
  async enterusername(username: string) {
    await this.page
      .locator("//input[@placeholder='Username']")
      .fill(username);
  }
  async entercompanycode(companycode: string) {
    await this.page
      .locator("//input[@name='companyCode']")
      .fill(companycode);
  }
  async enterpassword(password: string) {
    await this.page
      .locator("//input[@name='password']")
      .fill(password);
  }
  async clickcheckbox() {
    await this.page.click(".form-check-label");
    // await this.page.waitForTimeout(50000);
  }
  async ischecked() {
    return await this.page.locator("//input[@name='rememberMe']");
  }
  async clickLoginBtn() {
    // await Promise.all([
    // this.page.waitForLoadState("networkidle")
    // ])
    await this.page.click("//button[@id='LoginButton']");
  }
  async toHaveText() {
    this.page.locator("//p[normalize-space()='Welcome Naga!']").getByText("Welcome Naga!");
    console.log(this.toHaveText);
  }
}

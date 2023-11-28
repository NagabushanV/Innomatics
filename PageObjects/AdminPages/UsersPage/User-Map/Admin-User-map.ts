import { Locator, Page, expect } from "@playwright/test";
export default class AdminUsersMapPage {
  readonly page: Page;
  readonly MapButtonLocator: Locator;
  readonly ClickAlertOkButtonLocator: Locator;
  readonly setUsernameDropdownLocator: Locator;
  readonly ZoomoutButtonLocator: Locator;

  constructor(page: Page) {
    this.page = page;

    
    this.setUsernameDropdownLocator = page.locator('//div[@data-test-id="UserManagementUserName"]// input');
    this.ZoomoutButtonLocator = page.locator('//button[@title="Zoom out"]');
    this.ClickAlertOkButtonLocator=page.locator('//a[@class="btn btn-sm btn-primary  "]');
    //a[.='Ok']
  }   //div[@data-test-id="UserManagementUserName"]// input

  async clickOnMapBtn() {
    await this.page.waitForLoadState("load");
    await this.MapButtonLocator.click();
  }
  async ClicOnAlertOkBtn() {
    await this.ClickAlertOkButtonLocator.click();
  }

  async SetUsernameDropdown(UserName: string) {
    await this.setUsernameDropdownLocator.fill(UserName);
    await this.page.locator("(//div[normalize-space()='" + UserName + "'])[1]").click();
  }
  async verifytheUserLocation(){
    await this.page.waitForTimeout(4000);
    await expect(this.page.locator('(//div[@role="img"])[1]')).toBeVisible();
    expect(this.page.locator('(//div[@role="img"])')).toBeTruthy();
  }
  async ClickOnZoomOutBtn() {
    await this.page.waitForTimeout(4000);
    await this.ZoomoutButtonLocator.click();

  }

}
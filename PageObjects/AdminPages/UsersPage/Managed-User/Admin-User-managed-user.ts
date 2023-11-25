import { Locator, Page, expect } from "@playwright/test";
export default class AdminUserManagedUserPage {
  readonly page: Page;
  
  readonly UserNameDropdownLocator: Locator;

  constructor(page: Page) {
    this.page = page;

    
    this.UserNameDropdownLocator = page.locator('(//div[@data-test-id="UserManagementUserName"])// input');

  }

  async SetUsernameMUDropdown(username: string) {
    await this.page.waitForLoadState('load');
    await this.UserNameDropdownLocator.fill(username);
    await this.page.locator("(//div[normalize-space()='" + username + "'])[1]").click();
  }
}
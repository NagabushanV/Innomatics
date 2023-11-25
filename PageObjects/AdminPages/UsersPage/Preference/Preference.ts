import { Locator, Page, expect } from "@playwright/test";
export default class AdminUsersPreferencePage {
  readonly page: Page;


  readonly PreferenceButtonLocator: Locator;
  readonly UserNameDropdownLocator: Locator;
  readonly StartuppageDropdownLocator: Locator;
  readonly AppearStartuppageLocator: Locator;

  readonly Lastsuccessfullogin: Locator;
  readonly LastSuccessfullIP: Locator;
  readonly LastUnSuccessfulllogin: Locator;
  readonly LastUnSuccessfullIp: Locator;
  readonly LastPasswordUpdate: Locator;
  readonly PasswordExpires: Locator;
  readonly InvalidloginAttempts: Locator;

  readonly EditButtonLocator: Locator;
  readonly StartuppageLocator: Locator;
  readonly TooltipdelayLocator: Locator;
  readonly saveButtonLocator: Locator;

  constructor(page: Page) {
    this.page = page;

    this.PreferenceButtonLocator = page.locator("(//div[.='Preferences'])[1]");

    this.UserNameDropdownLocator = page.locator('//div[@data-test-id="UserManagementUserName"]// input');
      
    this.StartuppageDropdownLocator = page.locator('(//div[@data-test-id="UserManagementUserManagementPreferences35OnSiteStartupPage"]// input)[1]');
    this.AppearStartuppageLocator= page.locator('(//div[@data-test-id="UserManagementUserManagementPreferences35OnSiteStartupPage"]');
    //Authentication history readonly
    this.Lastsuccessfullogin = page.locator(
      '//div[@data-test-id="UserManagementUserManagementPreferencesAuthenticationHistory36LastSuccessfulLogin"]'
    );
    this.LastSuccessfullIP = page.locator(
      '//div[@data-test-id="UserManagementUserManagementPreferencesAuthenticationHistory36LastSuccessfulIpAddress"]'
    );
    this.LastUnSuccessfulllogin = page.locator(
      '[data-test-id="UserManagementUserManagementPreferencesAuthenticationHistory36LastUnSuccessfulLogin"]'
    );
    this.LastUnSuccessfullIp = page.locator(
      '[data-test-id="UserManagementUserManagementPreferencesAuthenticationHistory36LastUnSuccessfulIpAddress"]'
    );
    this.LastPasswordUpdate = page.locator(
      '[data-test-id="UserManagementUserManagementPreferencesAuthenticationHistory36LastPasswordUpdate"]'
    );
    this.PasswordExpires = page.locator(
      '[data-test-id="UserManagementUserManagementPreferencesAuthenticationHistory36PasswordExpires"]'
    );
    this.InvalidloginAttempts = page.locator(
      '[data-test-id="UserManagementUserManagementPreferencesAuthenticationHistory36InvalidLoginAttempts"]'
    );

    this.EditButtonLocator = page.locator(
      '//button[@data-test-id="UserManagementUserManagementPreferences35Edit"]'
    );
    this.StartuppageLocator = page.locator('//div[@data-test-id="UserManagementUserManagementPreferences35OnSiteStartupPage"]// input)[1]'
    );
    this.TooltipdelayLocator = page.locator('//div[@data-test-id="UserManagementUserManagementPreferences35TooltipDelay"]//input');
    this.saveButtonLocator = page.locator('[data-test-id="UserManagementUserManagementPreferences35Save"]')
  }

  async clickOnPreferenceBtn() {
    await this.page.waitForLoadState("load");
    await this.PreferenceButtonLocator.click();
  }
  async SetUsernameDropdown(UserName: string) {
    await this.UserNameDropdownLocator.fill(UserName);
    await this.page.locator("(//div[normalize-space()='" + UserName + "'])[1]").click();
  }
  async SetStartupDropdown(startup: string) {
    await this.StartuppageDropdownLocator.fill(startup);
    await this.page.locator("(//div[normalize-space()='" + startup + "'])[1]").click();
  }

  async VerifyStartuppageDropdown() {
     expect(await this.AppearStartuppageLocator).toBeVisible();
    
  }
  async AuthenticationHistorytoBeDisabled() {
    await this.page.waitForLoadState("load");

    await expect(this.Lastsuccessfullogin).toHaveText("Last Successful Login");
    await expect(this.LastSuccessfullIP).toHaveText(
      "Last Successful IP Address"
    );
    await expect(this.LastUnSuccessfulllogin).toHaveText(
      "Last UnSuccessful Login"
    );
    await expect(this.LastUnSuccessfullIp).toHaveText(
      "Last UnSuccessful IP Address"
    );
    await expect(this.LastPasswordUpdate).toHaveText("Last Password Update");
    await expect(this.PasswordExpires).toHaveText("Password Expires");
    await expect(this.InvalidloginAttempts).toHaveText(
      "Invalid Login Attempts"
    );
  }

  async ClickOnEditBtn() {
    await this.page.waitForLoadState('load');
    await this.EditButtonLocator.click();
  }
  async StartuppageDropdown(startup: string) {
    await this.page.waitForLoadState('load');
    await this.StartuppageLocator.fill(startup);
    await this.page.locator("(//div[normalize-space()='" + startup + "'])[1]").click();
  }
  async SetTooltipDelay(tooltip: string) {
    await this.TooltipdelayLocator.fill(tooltip);
  }
  async ClickOnSaveBtn() {
    await this.saveButtonLocator.click();
  }
}

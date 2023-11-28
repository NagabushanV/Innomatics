import { Locator, Page, expect } from "@playwright/test";
export default class AdminSitesPage {
  readonly page: Page;
  readonly SitesaddButtonLocator: Locator;
  readonly CancelButtonLocator: Locator;
  readonly ContactpageButtonLocator: Locator;
  readonly SetSitenameDropdownLocator: Locator;


  constructor(page: Page,) {
    this.page = page;
    //add
    this.SitesaddButtonLocator = page.locator('//button[@data-test-id="SiteConfigurationCardWithToggleAndFunctionButtonsbtnAddButton"]');
    this.CancelButtonLocator = page.locator('//button[@data-test-id="SiteConfigurationSiteConfigurationSiteDetails24CancelCustomHoverButton"]');
    this.ContactpageButtonLocator = page.locator('//li[@data-test-id="SiteConfiguration1255"]');
    this.SetSitenameDropdownLocator = page.locator('//div[@data-test-id="SiteConfigurationSiteName"]// input');
  }
  async clickOnSitesAddBtnPage() {
    await this.page.waitForLoadState('load');
    await this.SitesaddButtonLocator.click();
  }
  async ClickOnCancelBtn() {
    await this.page.waitForLoadState('load');
    await this.CancelButtonLocator.click();
  }
  async ClickOnContactBtn() {
    await this.page.waitForLoadState('load');
    await this.ContactpageButtonLocator.click();
  }
}
import { Locator, Page, expect } from "@playwright/test";
export default class DriveoffReportsPage {
  readonly page: Page;
    SetSitenameLocator: Locator;
    verifySitenameLocator: Locator;
    verifySiteNoLocator: Locator;
    SetSiteNoLocator: Locator;
    ClickApplyButtonLocator: Locator;
    verifyreportsgridLocator: Locator;
    exportButtonLocator: Locator;
    exportAlldataLocator: Locator;
    ClickDriveoffButtonLocator: Locator;
    verifyvehiclepageLocator: Locator;
    ClickOnInvoicesButtonLocator: Locator;
    clickOninvoicesApplyButtonLocator: Locator;
    verifyinvoicesreportLocator: Locator;
    clickinvoiceExportButtonLocator: Locator;
    ClickOnUserEditButtonLocator: Locator;
    setEditvaluedropdownLocator: Locator;
    ClickSaveButtonLocator: Locator;
  verifyReportlandpageLocator: Locator;
  verifyDriveoffSettingpageLocator: Locator;

  constructor(page: Page,) {
    this.page = page;
     
    this.SetSitenameLocator = page.locator('//div[@data-test-id="DriveOffReportsDriveOffReportsTabSiteName"]// input');
    this.verifySitenameLocator = page.locator("(//div[.='MySite'])[5]");
    this.verifySiteNoLocator=page.locator("(//div[.='SITE1'])[5]");
    this.SetSiteNoLocator=page.locator('//div[@data-test-id="DriveOffReportsDriveOffReportsTabSiteNo"]// input');
    this.ClickApplyButtonLocator=page.locator("(//button[.='Apply'])[1]");
    this.verifyreportsgridLocator=page.locator("//div[@id='DriveOffReports']");
    this.exportButtonLocator=page.locator('[data-test-id="DriveOffReportsDriveOffReportsTab149DriveOffReportsExport"]');
    this.exportAlldataLocator=page.locator("//button[.='Export all data']");
    this.ClickDriveoffButtonLocator=page.locator('[title="Drive Off"]');
    this.verifyvehiclepageLocator=page.locator('[id="react-tabs-18"]');
    this.ClickOnInvoicesButtonLocator=page.locator('[data-test-id="DriveOffReports11304"]');
    this.clickOninvoicesApplyButtonLocator=page.locator('[data-test-id="DriveOffReportsInvoicesApply"]');
    this.verifyinvoicesreportLocator=page.locator('[id="Invoices"]');
    this.clickinvoiceExportButtonLocator=page.locator('[title="Export"]');
    this.ClickOnUserEditButtonLocator=page.locator('(//div[@class="svg-edit"])[1]');
    this.setEditvaluedropdownLocator=page.locator('//td[@data-test-id="DriveOffSettingsSettings131SettingsValue"]// input');
    this.ClickSaveButtonLocator=page.locator('[title="Save changes"]');
    this.verifyReportlandpageLocator=page.locator('[data-test-id="DriveOffReports11303"]');
    this.verifyDriveoffSettingpageLocator=page.locator('[class="cardHeadingTitle"]');
  }


  async verifyReportslandpage(){
    await this.page.waitForLoadState('load');
    expect (this.verifyReportlandpageLocator).toBeTruthy();
  }
  async verifyDrivroffSettinglandPage(){
    await this.page.waitForLoadState('load');
    expect (this.verifyDriveoffSettingpageLocator).toBeTruthy();
  }
  async setSiteDropdown(site: string) {
    await this.page.waitForLoadState('load');
    await this.SetSitenameLocator.fill(site);
    await this.page.locator("(//div[normalize-space()='" + site + "'])[1]").click();
  }
  async veriFySiteDropdown(){
    expect(this.verifySitenameLocator).toBeTruthy();
  }
  async veriFySiteNo(){
    expect(this.verifySiteNoLocator).toBeTruthy();
  }
  async setSiteNoDropdown(siteno: string) {
    await this.page.waitForLoadState('load');
    await this.SetSiteNoLocator.fill(siteno);
    await this.page.locator("(//div[normalize-space()='" + siteno + "'])[1]").click();
  }
  async clickOnApplyBtn() {
    await this.ClickApplyButtonLocator.click();
  }
  async verifyReportgrid(){
    await this.page.waitForLoadState('load');
    expect(this.verifyreportsgridLocator).toBeTruthy();
  }
  async ClickOnExportBtn() {
    await this.page.waitForLoadState('load');
    await this.exportButtonLocator.click();
  }
  async ClickOnexportAllDataBtn() {
    await this.page.waitForLoadState('load');
    await this.exportAlldataLocator.click();
  }
  async ClickOnDriveOffBtn() {
    await this.ClickDriveoffButtonLocator.click();
  }
  async VerifyVehiclepage(){
    await this.page.waitForLoadState('load');
    expect(this.verifyvehiclepageLocator).toBeTruthy();
  }
  async clickOnInvoiceBtn() {
  await this.page.waitForLoadState('load');
  await this.ClickOnInvoicesButtonLocator.click();
  }
  async ClickOnInvoiceApplyBtn(){
  await this.page.waitForLoadState('load');
  await this.clickOninvoicesApplyButtonLocator.click();
  }
  async verifyinvoiceReport() {
    await this.page.waitForLoadState('load');
    expect (this.verifyinvoicesreportLocator).toBeTruthy();
  }
  async ClickOnInvoiceExportBtn(){
    await this.page.waitForLoadState('load');
    await this.clickinvoiceExportButtonLocator.click(); 
  }
  async ClickOnUserEditBtn(){
    await this.page.waitForLoadState('load');
    await this.ClickOnUserEditButtonLocator.click();
  }
  async SeteditValuedropdrown(value: string){
    await this.page.waitForLoadState('load');
    await this.setEditvaluedropdownLocator.fill(value);
    await this.page.locator("(//div[normalize-space()='" + value + "'])[1]").click();
  }
  async ClickOnSaveBtn() {
    await this.page.waitForLoadState('load');
    await this.ClickSaveButtonLocator.click();
  }
  

}
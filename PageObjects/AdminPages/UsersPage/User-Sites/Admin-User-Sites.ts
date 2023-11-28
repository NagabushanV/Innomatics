import { Locator, Page, expect } from "@playwright/test";
export default class AdminUserSitesPage {
  readonly page: Page;
  
  readonly CheckBoxoneLocator: Locator;
  readonly checkBoxtwoLocator: Locator;
  readonly UnassignedLeftArrowLocator: Locator;
  readonly AlertMessageLocator: Locator;
  
  readonly UnAssignExportButtonLocator: Locator;
  readonly UnAssignExportAllDataLocator: Locator;

  constructor(page: Page) {
    this.page = page;

    
    this.CheckBoxoneLocator = page.locator('(//td[@data-test-id="UserManagementUserManagementSites37CompanyUserSitesGridSelectionCellSelectionCell"])[1]');
    this.checkBoxtwoLocator = page.locator('(//td[@data-test-id="UserManagementUserManagementSites37CompanyUserSitesGridSelectionCellSelectionCell"])[2]');
    this.UnassignedLeftArrowLocator = page.locator('//button[@data-test-id="UserManagementUserManagementSites37Left"]');
    this.AlertMessageLocator = page.locator('//div[@data-test-id="NotificationMessage"]');

    this.UnAssignExportButtonLocator=page.locator('//button[@data-test-id="UserManagementUserManagementSites37CompanyUserSitesGridExport"]');
    this.UnAssignExportAllDataLocator = page.locator('(//div[@data-test-id="UserManagementUserManagementSites37CompanyUserSitesGridExport"])[1]');
  }

 async ClickoncheckBoxes() {
    await this.CheckBoxoneLocator.click();
    await this.checkBoxtwoLocator.click();
 }
 async ClickOnUnAssignedArrowBtn() {
    await this.UnassignedLeftArrowLocator.click();
 }
 async VerifyUnAssignedAlertMessage() {
    await expect(this.AlertMessageLocator).toBeVisible();
 }
//  async VerifyCheckBoxesToBechecked() {
//     await expect(this.CheckBoxoneLocator.isChecked()).toBeTruthy();
//     await expect(this.checkBoxtwoLocator.isChecked()).toBeTruthy();
//  }
 async VerifyUnAssignedsuccessMessage() {
    await expect(this.AlertMessageLocator).toBeVisible();
    await expect(this.AlertMessageLocator).toHaveText('Sites successfully unassigned from user');
 }

 //Export:
 async ClickOnUnAssignExportBtn() {
   await this.UnAssignExportButtonLocator.click();
 }
 async ClickOnUnAssignExportAlldataBtn() {
   await this.page.waitForLoadState('load');
   await this.UnAssignExportAllDataLocator.click();
   const csvContent = await this.page.innerText('text=xyz.csv');
   // expect(csvContent).toContain('') 
 }

}
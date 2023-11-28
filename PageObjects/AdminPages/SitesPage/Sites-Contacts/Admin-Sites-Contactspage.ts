import { Locator, Page, expect } from "@playwright/test";
export default class AdminSitesPage {
  readonly page: Page;
  readonly SetSitenameDropdownLocator: Locator;
  readonly ClickEditButtonLocator: Locator;
  readonly ClickSiteEmailLocator: Locator;
  readonly ClickCheckBoxOneLocator: Locator;
  readonly ClickCheckBoxTwoLocator: Locator;
  readonly ClickRightArrowButton: Locator;
  readonly ClickCloseButtonLocator: Locator;
  readonly ClickSaveButtonLocator: Locator;
  readonly ContainText: Locator;

  readonly SiteAssistentManagerLocator: Locator;
  readonly SiteAssistentManagerTextContentLocator: Locator;

  readonly ClickSiteOperatorLocator: Locator;
  readonly SiteOperatorTextContentLocator: Locator

  readonly ClickSiteReviewerLocator: Locator;
  readonly SiteReviewerTextContentLocator: Locator;

  readonly ClickSiteEsclationContactLocator: Locator;
  readonly SiteEscalationTextContentLocator: Locator;

  readonly ClickTankIssueContactLocator: Locator;
  readonly TankIssueTextContentLocator: Locator;

  readonly ClickAssociationsLocator: Locator;
  readonly AssociationsTextContentLocator: Locator;

  readonly ClickManifastCheckBoxButton: Locator;

  readonly ClickAddAdditionalSiteContactLocatotr: Locator;
  readonly SetLabelContactLocator: Locator;
  readonly ClickSaveButtonContactLabelLocator: Locator;
  readonly VerifyAdditionalSiteContactLabelVisible: Locator;
  
  


  constructor(page: Page,) {
    this.page = page;
    
    
    this.SetSitenameDropdownLocator = page.locator('//div[@data-test-id="SiteConfigurationSiteName"]// input');
    this.ClickEditButtonLocator = page.locator('//button[@data-test-id="SiteConfigurationSiteContacts95Edit"]');
    this.ClickSiteEmailLocator = page.locator('[title="Site Email"]');
    this.ClickCheckBoxOneLocator = page.locator('(//td[@data-test-id="SiteConfigurationSiteContacts95ContactContactInfoPopup287ContactsSelectionCellSelectionCell"])[1]');
    this.ClickCheckBoxTwoLocator = page.locator('(//td[@data-test-id="SiteConfigurationSiteContacts95ContactContactInfoPopup287ContactsSelectionCellSelectionCell"])[2]');
    this.ClickRightArrowButton = page.locator('//button[@data-test-id="SiteConfigurationSiteContacts95ContactContactInfoPopupRight"]');
    this.ClickCloseButtonLocator= page.locator('//button[@data-test-id="SiteConfigurationSiteContacts95ContactContactInfoPopupClose"]');
    this.ClickSaveButtonLocator = page.locator('//button[@data-test-id="SiteConfigurationSiteContacts95Save"]');
    this.ContainText=page.locator('//div[@data-test-id="SiteConfigurationSiteContacts95SiteContact1Name"]// input');
                  

    //Site Assistent manager;-
    this.SiteAssistentManagerLocator=page.locator('[title="Site Assistant Manager"]');
    this.SiteAssistentManagerTextContentLocator= page.locator('//div[@data-test-id="SiteConfigurationSiteContacts95SiteContact3Name"]// input');

    //Site operator:-
    this.ClickSiteOperatorLocator=page.locator('[title="Site Operator"]');
    this.SiteOperatorTextContentLocator = page.locator('//div[@data-test-id="SiteConfigurationSiteContacts95SiteContact5Name"]// input');

    //Site Reviewer:-
    this.ClickSiteReviewerLocator=page.locator('[title="SiteReviewer"]');
    this.SiteReviewerTextContentLocator=page.locator('//div[@data-test-id="SiteConfigurationSiteContacts95SiteContact7Name"]// input');

    //Site Esclation contact:-
    this.ClickSiteEsclationContactLocator=page.locator('[title="Site Escalation Contact"]');
    this.SiteEscalationTextContentLocator=page.locator('//div[@data-test-id="SiteConfigurationSiteContacts95SiteContact9Name"]// input');

    //Site Tank issue contact:-
    this.ClickTankIssueContactLocator=page.locator('[title="Tank Issue"]');
    this.TankIssueTextContentLocator = page.locator('//div[@data-test-id="SiteConfigurationSiteContacts95SiteContact11Name"]// input');

    //Association:
    this.ClickAssociationsLocator=page.locator('[title="Associations"]');
    this.AssociationsTextContentLocator = page.locator('//div[@data-test-id="SiteConfigurationSiteContacts95SiteContact13Name"]// input');

    //Manifast checkbox:
    this.ClickManifastCheckBoxButton = page.locator('[data-test-id="SiteConfigurationSiteContacts95SiteContact1Manifest"]');
    //Add Additional contact:-
    this.ClickAddAdditionalSiteContactLocatotr=page.locator('[data-test-id="SiteConfigurationSiteContacts305Add"]');
    this.SetLabelContactLocator=page.locator('//div[@data-test-id="SiteConfigurationSiteContacts305AddSiteContactTypeName"]// input');
    this.ClickSaveButtonContactLabelLocator=page.locator('[data-test-id="SiteConfigurationSiteContacts305AddSiteContactTypeSave"]');
    this.VerifyAdditionalSiteContactLabelVisible = page.locator('//button[@title="TestAssoc"]');
  }

  async SetSiteNameDropdown(Sitename: string) {
    await this.page.waitForLoadState('load');
    await this.SetSitenameDropdownLocator.fill(Sitename);
    await this.page.locator("(//div[normalize-space()='" + Sitename + "'])[1]").click();
  }
  async ClickOnEditBtn() {
    await this.page.waitForLoadState('load');
    await this.ClickEditButtonLocator.click();
  }
  async ClickOnSiteEmailBtn() {
    await this.page.waitForLoadState('load');
    await this.ClickSiteEmailLocator.click();
  }
  async ClickOnsingleCheckbox(){
    await this.page.waitForLoadState('load');
    await this.ClickCheckBoxOneLocator.click();
  }
  async ClickOnMultipleCheckbox() {
    await this.page.waitForLoadState('load');
    await this.ClickCheckBoxOneLocator.click();
    await this.ClickCheckBoxTwoLocator.click();
  }
  async ClickOnRightArrowBtn() {
    await this.page.waitForLoadState('load');
    await this.ClickRightArrowButton.click();
  }
  async ClickOnCloseBtn() {
    await this.page.waitForLoadState('load');
    await this.ClickCloseButtonLocator.click();
  }
  async ClickOnSaveBtn() {
    await this.page.waitForLoadState('load');
    await this.ClickSaveButtonLocator.click();
  }
  async verifySiteEmailTextContain(){
    await this.page.waitForLoadState('load');
    expect(this.ContainText).toBeVisible();
  }
  async verifySiteEmailTextContainMultiple(){
    await this.page.waitForLoadState('load');
    expect(this.ContainText).toBeVisible();
  }

  //Site Assistent Manager:-
  async ClickOnSiteAssistentManagerBtn(){
    await this.page.waitForLoadState('load');
    await this.SiteAssistentManagerLocator.click();
  }
  async VerifySiteAssistentManagerText() {
    await this.page.waitForLoadState('load');
    expect(this.SiteAssistentManagerTextContentLocator).toBeVisible();
  }
  async VerifySiteAssistentManagerTextMultiple() {
    await this.page.waitForLoadState('load');
    expect(this.SiteAssistentManagerTextContentLocator).toBeVisible();
  }

  //Site operator:-
  async ClickOnSiteOperatorBtn() {
    await this.page.waitForLoadState('load');
    await this.ClickSiteOperatorLocator.click();
  }
  async VerifySiteOperatorText(){
    await this.page.waitForLoadState('load');
    expect(this.SiteOperatorTextContentLocator).toBeVisible();
  }
  async VerifySiteOperatorTextMultiple(){
    await this.page.waitForLoadState('load');
    expect(this.SiteOperatorTextContentLocator).toBeVisible();
  }
  //Site Reviewer:-
  async ClickOnSiteReviewreBtn(){
    await this.page.waitForLoadState('load');
    await this.ClickSiteReviewerLocator.click();
  }
  async VerifySiteReviewerText(){
    await this.page.waitForLoadState('load');
    expect(this.SiteReviewerTextContentLocator).toBeVisible();
  }
  async VerifySiteReviewerTextMultiple(){
    await this.page.waitForLoadState('load');
    expect(this.SiteReviewerTextContentLocator).toBeVisible();
  }
  //Site Escalation Contact:-
  async ClickOnSiteEscalationBtn(){
    await this.page.waitForLoadState('load');
    await this.ClickSiteEsclationContactLocator.click();
  }
  async VerifySiteEscalationText(){
    await this.page.waitForLoadState('load');
    expect(this.SiteEscalationTextContentLocator).toBeVisible();
  }
  async VerifySiteEscalationTextMultiple(){
    await this.page.waitForLoadState('load');
    expect(this.SiteEscalationTextContentLocator).toBeVisible();
  }
  //Site TankIssue:-
  async ClickOnTankIssueBtn(){
    await this.page.waitForLoadState('load');
    await this.ClickTankIssueContactLocator.click();
  }
  async VerifyTankIssueText(){
    await this.page.waitForLoadState('load');
    expect(this.TankIssueTextContentLocator).toBeVisible();
  }
  async VerifyTankIssueTextMultiple(){
    await this.page.waitForLoadState('load');
    expect(this.TankIssueTextContentLocator).toBeVisible();
  }
  //Association:-
  async ClickOnAssociationBtn(){
    await this.page.waitForLoadState('load');
    await this.ClickAssociationsLocator.click();
  }
  async VerifyAssociatioText(){
    await this.page.waitForLoadState('load');
    expect(this.AssociationsTextContentLocator).toBeVisible();
  }
  async VerifyAssociatioTextMultiple(){
    await this.page.waitForLoadState('load');
    expect(this.AssociationsTextContentLocator).toBeVisible();
  }
  //Manifast checkbox:-
  async ClickOnmanifastCheckBox(){
    await this.page.waitForLoadState('load');
    await this.ClickManifastCheckBoxButton.click();
  }
  async VerifymanifastCheckBox(){
    await this.page.waitForLoadState('load');
    expect(this.ClickManifastCheckBoxButton.isChecked()).toBeTruthy();
  }
  async ClickOnmanifastCheckBoxUnChecked(){
    await this.page.waitForLoadState('load');
    await this.ClickManifastCheckBoxButton.click();
  }
  async VerifymanifastCheckBoxUnChecked(){
    await this.page.waitForLoadState('load');
    await expect(await this.ClickManifastCheckBoxButton.isChecked()).toBeFalsy();
  }
  //Site Additional Contact:
  async ClickOnAddAdditionalContactBtn(){
    await this.page.waitForLoadState('load');
    await this.ClickAddAdditionalSiteContactLocatotr.click();
  }
  async SetContactLabel(contact: string) {
    await this.page.waitForLoadState()
      await this.SetLabelContactLocator.fill(contact)
    }
    async ClickOnSaveContactLabelBtn() {
      await this.page.waitForLoadState('load');
      await this.ClickSaveButtonContactLabelLocator.click();
    }
    async VerifyContactLabalinAdditionalContact() {
      expect(this.VerifyAdditionalSiteContactLabelVisible).toBeVisible();
    } 
  
  

  
}
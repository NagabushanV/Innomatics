import { Locator, Page, expect } from "@playwright/test";
export default class AdminSitesPage {
  readonly page: Page;
  readonly ClickAddButtonVDLocator: Locator;
  readonly SetRegofieldLocator: Locator;
  readonly validCharactersLocator: Locator;
  readonly ClickValidCharacterOkLocator: Locator;
  readonly ArraivaltimeLocator: Locator;
  readonly DriveofftimeLocator: Locator;
  readonly FuelQuantityLocator: Locator;
  readonly FuelAmountLocator: Locator;
  readonly ReferenceNoLocator: Locator;
  readonly ProductLocator: Locator;
  readonly PumpNoLocator: Locator;
  readonly SiteDropdownLocator: Locator;
  readonly FailtopaytypeLocator: Locator;
  readonly DriveofstatusLocator: Locator;
  readonly ChassisdropdownLocator: Locator;
  readonly MakedropdownLocator: Locator;
  readonly modeldropdownLocator: Locator;
  readonly colordropdownLocator: Locator;
  readonly Platesmatchdropdown: Locator;
  readonly ClickSaveButtonLocator: Locator;
  readonly saveConfirmMessageLocator: Locator;
  readonly verifyFuelquantityLocator: Locator;
  readonly ClickEditButtonLocator: Locator;
  readonly setVehiclyearLocator: Locator;
  readonly verifyrequiredfield: Locator;

  //suspects
  readonly SuspectsLocator: Locator;
  //witenesses
  readonly WitenessesLocator: Locator;
  //photo/VideoFile
  readonly PhotoandVideoFileLocator: Locator;
  //ststus
  readonly statusLocator: Locator;

  constructor(page: Page,) {
    this.page = page;
     
    this.ClickAddButtonVDLocator = page.locator('[data-test-id="DriveOffIncidentVehicleIncidentVehicleFormAdd"]');
    this.SetRegofieldLocator = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormFrontRegistrationNumber"]// input');
    this.validCharactersLocator = page.locator('[title="Valid Characters"]');
    this.ClickValidCharacterOkLocator=page.locator("//a[.='Ok']");
    this.ArraivaltimeLocator = page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormArrivalTime"]// input');
    // [name="ArrivalTime"]
    this.DriveofftimeLocator = page.locator('[name="DriveOffTime"]');
    this.FuelQuantityLocator = page.locator('[name="FuelQuantity"]');
    this.FuelAmountLocator = page.locator('[name="FuelAmount"]');
    this.ReferenceNoLocator = page.locator('[name="ReferenceNumber"]');
    this.ProductLocator = page.locator('(//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormProduct"]// input)[1]');
    // [id="react-select-32-input"]
    this.PumpNoLocator = page.locator('[name="PumpNo"]');
    this.SiteDropdownLocator = page.locator('(//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormSiteId"]// input)[1]');
    this.FailtopaytypeLocator = page.locator('(//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormFailToPayType"]// input)[1]');
    this.DriveofstatusLocator = page.locator('(//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormPoliceStatus"]// input)[1]');
    this.ChassisdropdownLocator = page.locator('(//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormChassis"]// input)[1]');
    this.MakedropdownLocator = page.locator('(//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormMake"]// input)[1]');
    this.modeldropdownLocator=page.locator('(//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormModel"]// input)[1]');
    this.colordropdownLocator = page.locator('(//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormColor1"]// input)[1]');
    this.Platesmatchdropdown= page.locator('(//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormPlatesMatch"]// input)[1]');
    this.ClickSaveButtonLocator = page.locator('[data-test-id="DriveOffIncidentVehicleIncidentVehicleFormSave"]');
    this.saveConfirmMessageLocator= page.locator('//div[@data-test-id="NotificationMessage"]');
    this.verifyFuelquantityLocator= page.locator('//div[@data-test-id="DriveOffIncidentVehicleIncidentVehicleFormFuelQuantity"]// input');
    this.ClickEditButtonLocator = page.locator('[data-test-id="DriveOffIncidentVehicleIncidentVehicleFormEdit"]');
    this.setVehiclyearLocator = page.locator('[name="VehicleYear"]');
    this.verifyrequiredfield = page.locator('[class="invalid-feedback"]');

    //suspects
    this.SuspectsLocator=page.locator('[data-test-id="DriveOff11310"]');
    //witnesses
    this.WitenessesLocator=page.locator('[data-test-id="DriveOff11311"]');
    //Photo/video
    this.PhotoandVideoFileLocator=page.locator('[data-test-id="DriveOff11312"]');
    //Status
    this.statusLocator=page.locator('[data-test-id="DriveOff11313"]');
}

async ClickOnAddBtn() {
    await this.page.waitForLoadState('load'); 
    await this.ClickAddButtonVDLocator.click();
  }
  async SetOnRego(Rego: string) {
    await this.SetRegofieldLocator.fill(Rego);
  }
  async ClickOnValidCharacter() {
    await this.validCharactersLocator.click();
  }
  async ClickOnOKvalidcharacterBtn() {
    await this.ClickValidCharacterOkLocator.click();
  }
  async SetArrivaltime(Arrivaltime: string) {
    await this.page.waitForLoadState('load');
    await this.ArraivaltimeLocator.fill(Arrivaltime);
  }
  async SetDriveoffTime(Driveofftime: string) {
    await this.page.waitForLoadState('load');
    await this.DriveofftimeLocator.fill(Driveofftime);
  }
  async setFuelQuantity(Fuelquantity: string) {
    await this.FuelQuantityLocator.fill(Fuelquantity)
  }
  async SetFuelAmount(FuelAmount: string) {
    await this.FuelAmountLocator.fill(FuelAmount);
  }
  async SetReferenceNo(ReferenceNo: string){
    await this.ReferenceNoLocator.fill(ReferenceNo);
  }
  async SetProductDropdown(Product: string) {
    await this.page.waitForLoadState('load');
    await this.ProductLocator.fill(Product);
    await this.page.locator("(//div[normalize-space()='" + Product + "'])[1]").click();
  }
  async SetPumpNo(pumpno: string) {
    await this.PumpNoLocator.fill(pumpno);
  }
  async SetSiteDropdown(site: string) {
    await this.page.waitForLoadState('load');
    await this.SiteDropdownLocator.fill(site);
    await this.page.locator("(//div[normalize-space()='" + site + "'])[1]").click();
  }
  async SetFailtopaytypedropdown(Failtopaytype: string) {
    await this.page.waitForLoadState('load');
    await this.FailtopaytypeLocator.fill(Failtopaytype);
    await this.page.locator("(//div[normalize-space()='" + Failtopaytype + "'])[1]").click();
  }
  async SetDriveoffstatus(driveoffstatus: string) {
    await this.page.waitForLoadState('load');
    await this.DriveofstatusLocator.fill(driveoffstatus);
    await this.page.locator("(//div[normalize-space()='" + driveoffstatus + "'])[1]").click();
  }
  async SetChassisdropdown(chassis: string) {
    await this.page.waitForLoadState('load');
    await this.ChassisdropdownLocator.fill(chassis);
    await this.page.locator("(//div[normalize-space()='" + chassis + "'])[1]").click();
  }
  async Setmakedropdown(make: string) {
    await this.page.waitForLoadState('load');
    await this.MakedropdownLocator.fill(make);
    await this.page.locator("(//div[normalize-space()='" + make + "'])[1]").click();
  }
  async Setmodeldropdown(model: string) {
    await this.page.waitForLoadState('load');
    await this.modeldropdownLocator.fill(model);
    await this.page.locator("(//div[normalize-space()='" + model + "'])[1]").click();
  }
  async Setcolordropdown(color: string) {
    await this.page.waitForLoadState('load');
    await this.colordropdownLocator.fill(color);
    await this.page.locator("(//div[normalize-space()='" + color + "'])[1]").click();
  }
  async Setplatesmatchdropdown(plates: string) {
    await this.page.waitForLoadState('load');
    await this.Platesmatchdropdown.fill(plates);
    await this.page.locator("(//div[normalize-space()='" + plates + "'])[1]").click();
  }
  async ClickOnSaveBtn() {
    await this.page.waitForLoadState('load');
    await this.ClickSaveButtonLocator.click();
  }
  
  async verifySaveConfirmationMessage(expectedMessage: string) {
    await this.page.waitForLoadState('load');
    const actualMessage = await this.saveConfirmMessageLocator.textContent();
    expect(actualMessage?.trim()).toBe(expectedMessage);
  }
  async verifyFuleQuantityisvisible() {
    expect(this.verifyFuelquantityLocator).toBeVisible();
  }
  async ClickOnEditBtn() {
    await this.page.waitForLoadState('load');
    await this.ClickEditButtonLocator.click();
  }
  async SetVehicleYear(year: string){
    await this.page.waitForLoadState('load');
    await this.setVehiclyearLocator.fill(year);
  }
  async verifyRequiredFieldText(expectedRequiredText: string) {
    await this.page.waitForLoadState('load');
    const actualMessage = await this.verifyrequiredfield.textContent();
    expect(actualMessage?.trim()).toBe(expectedRequiredText);
  }
  async VerifyAllEnabledbuttons(){
    expect(this.SuspectsLocator).toBeEnabled();
    expect(this.ClickEditButtonLocator).toBeEnabled();
    expect(this.WitenessesLocator).toBeEnabled();
    expect(this.PhotoandVideoFileLocator).toBeEnabled();
    expect(this.statusLocator).toBeEnabled();
  }
}
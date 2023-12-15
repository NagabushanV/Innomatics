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
  readonly SuspectsButtonLocator: Locator;
  readonly SuspectsAddButtonLocator: Locator;
  readonly GenderdropdownLocator: Locator;
  readonly AproxageLocator: Locator;
  readonly AproxheightLocator: Locator;
  readonly BuilddropdownLocator: Locator;
  readonly SuspectsSaveButtonLocator: Locator;
  readonly SuspectsEditButtonLocator: Locator;
  readonly SuspectsDeleteButtonLocator: Locator;
  readonly SuspectsDeleteConfirmBtnLocator: Locator;
  readonly SuspectsCancelButtonLocator: Locator;
  //witnesses
  readonly WitnessesButtonLocator: Locator;
  readonly witnessAddButtonLocator: Locator;
  readonly SetFirstNameLocator: Locator;
  readonly SetLastNameLocator: Locator;
  readonly SetSuburbLocator: Locator;
  readonly ClickwitnessesSaveButton: Locator;
  readonly ClickWitnessesEditButtonLocator: Locator;
  readonly ClickwitnessesDeleteLocator: Locator;
  readonly ClickDeleteConfirmYesLocator: Locator;
  readonly ClickwitnessesCancelButtonLocator: Locator;
  //photo/VideoFile
  readonly PhotoandVideoFileButtonLocator: Locator;
  readonly uploadReceiptLocator: Locator;
  readonly choosefile: Locator;
  readonly uploadFileLocator: Locator;
  readonly verifyuploadedReceptLocator: Locator;
  readonly ChooseFiles: Locator;
  readonly uploadphotosLocator: Locator;
  readonly uploadVideoLocator: Locator;
  //ststus
  readonly statusButtonLocator: Locator;
  readonly ClickstatusEditButtonLocator: Locator;
  readonly DriveofStatusdropdownLocator: Locator;
  readonly ClickdateReportedLocator: Locator;
  readonly monthandyear: Locator;
  readonly datenextButton: Locator;
  readonly monthLocator: Locator;
  readonly dateLocator: Locator;
  readonly ClickstatusSaveButtonLocator: Locator;
  readonly ClickPaynowButtonLocator1: Locator;
  readonly SetemailtopayLocator: Locator;
  readonly SetFirstNamePaynowLocator: Locator;
  readonly SetlastnamepaynowLocator: Locator;
  readonly ClickOnPayNowLocator2: Locator;
  readonly VerifyTextCntentLocator: Locator;

  readonly PaymentRequestButtonLocator: Locator;
  readonly CreatelinkButtonLocator: Locator;
  readonly VerifytheCreatedlinktabLocator: Locator;
  SmsRadioButtonLocator: Locator;
  SetmobilenumberLocator: Locator;
  ClickwitnessesExpandButtonLocator: Locator;
  verifyShrinkButtonLocator: Locator;
  verifydriveofflandpageLocator: Locator;
  ClickExportButtonLocator: Locator;
  clickExportAllDataLocator: Locator;
  ClickcheckboxLocator: Locator;
  ClickExportSelectedRowLocator: Locator;
  ClickViewButtonLocator: Locator;
  verifyviewlandingpageLocator: Locator;
  

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
    this.verifydriveofflandpageLocator=page.locator('[data-test-id="DriveOff11309"]');
    this.ClickExportButtonLocator=page.locator('[title="Export"]');
    this.clickExportAllDataLocator=page.locator("//button[.='Export all data']");
    this.ClickcheckboxLocator=page.locator('(//td[@data-test-id="DriveOffHome290DriveOffReportsHomeSelectionCellSelectionCell"])[1]');
    this.ClickExportSelectedRowLocator=page.locator("//button[.='Export selected rows']");
    this.ClickViewButtonLocator=page.locator('(//button[@title="View"])[1]');
    this.verifyviewlandingpageLocator=page.locator('data-test-id="DriveOffIncidentVehicleIncidentVehicleFormCardBody"');

    //suspects
    this.SuspectsButtonLocator=page.locator('[data-test-id="DriveOff11310"]');
    this.SuspectsAddButtonLocator = page.locator('(//button[@title="Add"])[2]');
    this.GenderdropdownLocator = page.locator('(//div[@data-test-id="DriveOffSuspectsSavePersonsInvolvedFormGender"]// input)[1]');
    this.AproxageLocator = page.locator('[name="Age"]');
    this.AproxheightLocator = page.locator('(//div[@data-test-id="DriveOffSuspectsSavePersonsInvolvedFormHeight"]// input)[1]');
    this.SuspectsSaveButtonLocator = page.locator('(//button[@title="Save"])[2]');
    this.BuilddropdownLocator = page.locator('(//div[@data-test-id="DriveOffSuspectsSavePersonsInvolvedFormBuild"]// input)[1]');
    this.SuspectsEditButtonLocator = page.locator('[data-test-id="DriveOffSuspectsSavePersonsInvolvedFormEdit"]');
    this.SuspectsDeleteButtonLocator = page.locator('(//button[@title="Delete"])[1]');
    this.SuspectsDeleteConfirmBtnLocator=page.locator('[data-test-id="DriveOffSuspectsButton0"]');
    this.SuspectsCancelButtonLocator = page.locator('(//button[@title="Cancel"])[2]');

    //witnesses
    this.WitnessesButtonLocator=page.locator('[data-test-id="DriveOff11311"]');
    this.witnessAddButtonLocator=page.locator('[data-test-id="DriveOffWitnessesWitnessesFormAdd"]');
    this.SetFirstNameLocator=page.locator('[name="Firstname"]');
    this.SetLastNameLocator=page.locator('[name="Lastname"]');
    this.SetSuburbLocator=page.locator('[name="Suburb"]');
    this.ClickwitnessesSaveButton=page.locator('[data-test-id="DriveOffWitnessesWitnessesFormSave"]');
    this.ClickWitnessesEditButtonLocator=page.locator('[data-test-id="DriveOffWitnessesWitnessesFormEdit"]');
    this.ClickwitnessesDeleteLocator=page.locator('[data-test-id="DriveOffWitnessesWitnessesFormDelete"]');
    this.ClickDeleteConfirmYesLocator=page.locator("//a[.='Yes']");
    this.ClickwitnessesCancelButtonLocator=page.locator('[data-test-id="DriveOffWitnessesWitnessesFormCancelCustomHoverButton"]');
    this.ClickwitnessesExpandButtonLocator=page.locator('[data-test-id="DriveOffWitnessesWitnessesFormExpand"]');
    this.verifyShrinkButtonLocator=page.locator('[title="Shrink"]');
    //Photo/video
    this.PhotoandVideoFileButtonLocator=page.locator('[data-test-id="DriveOff11312"]');
    this.uploadReceiptLocator=page.locator('[name="btnUploadReceipts"]');
    this.choosefile=page.locator("//button[.='Choose Files']");
    this.uploadFileLocator=page.locator('[data-test-id="DriveOffPhotosVideosFiles150PopupFileUploadUpload"]');
    this.verifyuploadedReceptLocator=page.locator('[data-test-id="DriveOffPhotosVideosFiles150UploadFilesFileName"]');
    this.ChooseFiles=page.locator('[data-test-id="DriveOffPhotosVideosFiles150PopupFileUploadChooseFiles"]');
    this.uploadphotosLocator=page.locator('[name="btnUploadPhotos"]');
    this.uploadVideoLocator=page.locator('[name="btnUploadVideos"]');
    //Status
    this.statusButtonLocator=page.locator('[data-test-id="DriveOff11313"]');
    this.ClickstatusEditButtonLocator=page.locator('[data-test-id="DriveOffDriveOffStatusStatusFormEdit"]');
    this.DriveofStatusdropdownLocator=page.locator('(//div[@data-test-id="DriveOffDriveOffStatusStatusFormPoliceStatus"]// input)[1]');
    this.ClickdateReportedLocator=page.locator('[data-test-id="DriveOffDriveOffStatusStatusFormPoliceDateReported"]');
    this.monthandyear=page.locator('(//th[@class="rdtSwitch"])[4]');
    this.datenextButton=page.locator('(//th[@class="rdtNext"])[4]');
    this.monthLocator=page.locator('//td[@class="rdtMonth"]');
    this.dateLocator=page.locator('(//div[@class="rdtDays"])[4]');
    this.ClickstatusSaveButtonLocator=page.locator('[data-test-id="DriveOffDriveOffStatusStatusFormSave"]');
    this.ClickPaynowButtonLocator1=page.locator('(//button[@title="Pay Now"])[1]');
    this.SetemailtopayLocator=page.locator('[name="EmailAddress"]');
    this.SetFirstNamePaynowLocator=page.locator('//input[@name="FirstName"]');
    this.SetlastnamepaynowLocator=page.locator('//input[@name="LastName"]');
    this.ClickOnPayNowLocator2=page.locator('[data-test-id="DriveOffDriveOffStatusDriveOffPaymentRequestPayNowSend"]');
    this.VerifyTextCntentLocator=page.locator("//span[.='Credit & Debit Cards']");
    
    this.PaymentRequestButtonLocator=page.locator('[title="Payment Request"]');
    this.CreatelinkButtonLocator=page.locator("//button[.='Create Link']");
    this.VerifytheCreatedlinktabLocator=page.locator("//h2[.='Payment Request']");
    this.SmsRadioButtonLocator= page.locator('(//div[@data-test-id="DriveOffDriveOffStatusDriveOffPaymentRequestPayReqDriveOffFormSendBy"])[2]');
    this.SetmobilenumberLocator=page.locator('[placeholder="Mobile Number"]');
    
}


async verifyDriveofflandpage(){
  await this.page.waitForLoadState('load');
  expect (this.verifydriveofflandpageLocator).toBeTruthy();
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
    expect(this.SuspectsButtonLocator).toBeEnabled();
    expect(this.ClickEditButtonLocator).toBeEnabled();
    expect(this.WitnessesButtonLocator).toBeEnabled();
    expect(this.PhotoandVideoFileButtonLocator).toBeEnabled();
    expect(this.statusButtonLocator).toBeEnabled();
  }
  async ClickOnExportBtn() {
    await this.page.waitForLoadState('load');
    await this.ClickExportButtonLocator.click();
  }
  async ClickOnExportAllDataBtn() {
    await this.page.waitForLoadState('load');
    await this.clickExportAllDataLocator.click();
  }
  async ClickOncheckBoxRow() {
    await this.page.waitForLoadState('load');
    await this.ClickcheckboxLocator.click();
  }
  async ClickOnExportedSelectRows() {
    await this.page.waitForLoadState('load');
    await this.ClickExportSelectedRowLocator.click();
  }
  async ClickOnViewBtn() {
    await this.page.waitForLoadState('load');
    await this.ClickViewButtonLocator.click();
  }
  async verifyviewlanfpage() {
    await this.page.waitForLoadState('load');
    expect (this.verifyviewlandingpageLocator).toBeTruthy();
  }


  //Suspects
  async ClickOnSuspectsBtn(){
    await this.SuspectsButtonLocator.click();
  }
  async ClickOnSuspectsAddBtn() {
  await this.page.waitForLoadState('load');
  await this.SuspectsAddButtonLocator.click();  
}
async SetgenderDropdown(gender: string) {
  await this.page.waitForLoadState();
  await this.GenderdropdownLocator.fill(gender);
  await this.page.locator("(//div[normalize-space()='" + gender + "'])[1]").click();
}
async SetApproxAge(age: string) {
  await this.page.waitForLoadState('load');
  await this.AproxageLocator.fill(age);
}
  async Aproxheightdropdown(height: string){
    await this.page.waitForLoadState('load');
    await this.AproxheightLocator.fill(height);
    await this.page.locator("(//div[normalize-space()='" + height + "'])[1]").click();
  }
  async setBuilddropdown(build: string){
    await this.page.waitForLoadState('load');
    await this.BuilddropdownLocator.fill(build);
    await this.page.locator("(//div[normalize-space()='" + build + "'])[1]").click();
  }
  async ClickOnSuspectsSaveBtn() {
    await this.page.waitForLoadState('load');
    await this.SuspectsSaveButtonLocator.click();
  }
  async verifySuspectsSaveConfirmationMessage(expectedMessage: string) {
    await this.page.waitForLoadState('load');
    const actualMessage = await this.saveConfirmMessageLocator.textContent();
    expect(actualMessage?.trim()).toBe(expectedMessage);
  }
  async ClickOnSuspectsEditBtn() {
    await this.page.waitForLoadState('load');
    await this.SuspectsEditButtonLocator.click();
  }
  async setBuilddropdown1(build1: string){
    await this.page.waitForLoadState('load');
    await this.BuilddropdownLocator.fill(build1);
    await this.page.locator("(//div[normalize-space()='" + build1 + "'])[1]").click();
  }
  async ClickOnSuspectsDeleteBtn() {
    await this.page.waitForLoadState('load');
    await this.SuspectsDeleteButtonLocator.click();
  }
  async ClickOnDeleteConfirmBtn(){
    await this.SuspectsDeleteConfirmBtnLocator.click();
  }
  async ClickOnSuspectsCancelBtn() {
    await this.SuspectsCancelButtonLocator.click();
  }
  //Withnesses:
  async ClickOnWitnessBtn() {
    await this.page.waitForLoadState('load');
    await this.WitnessesButtonLocator.click();
  }
  async ClickOnwitnessesAddBtn() {
    await this.page.waitForLoadState('load');
    await this.witnessAddButtonLocator.click();
  }
  async SetFirstName(firstname: string) {
    await this.page.waitForLoadState('load');
    await this.SetFirstNameLocator.fill(firstname);
  }
  async SetLastName(lastname: string) {
    await this.SetLastNameLocator.fill(lastname);
  }
  async SetSuburb(suburb: string){
    await this.SetSuburbLocator.fill(suburb);
  }
  async ClickOnwitnessSaveBtn() {
    await this.ClickwitnessesSaveButton.click();
  }
  async verifyWitnessesSaveConfirmationMessage(expectedMessage: string) {
    await this.page.waitForLoadState('load');
    const actualMessage = await this.saveConfirmMessageLocator.textContent();
    expect(actualMessage?.trim()).toBe(expectedMessage);
  }
  async ClickOnwitnessesEditBtn() {
    await this.page.waitForLoadState('load');
    await this.ClickWitnessesEditButtonLocator.click();
  }
  async ClickOnwitnessDeleteBtn() {
    await this.page.waitForLoadState('load');
    await this.ClickwitnessesDeleteLocator.click();
  }
  async ClickOnwitnessDeleteConfirmYesBtn(){
    await this.page.waitForLoadState('load');
    await this.ClickDeleteConfirmYesLocator.click();
  }
  async ClickOnwitnessessCancelBtn(){
    await this.page.waitForLoadState('load');
    await this.ClickwitnessesCancelButtonLocator.click();
  }
  async ClickOnwitnessessExpandBtn(){
    await this.page.waitForLoadState('load');
    await this.ClickwitnessesExpandButtonLocator.click();
  }
  async verifyStrinkBtn(){
    await this.page.waitForLoadState('load');
    expect(this.verifyShrinkButtonLocator).toBeTruthy();
  }

  //Photo and videoFile
  async ClickOnPhotoVideoFileBtn() {
    await this.page.waitForLoadState('load');
    await this.PhotoandVideoFileButtonLocator.click();

  }
  async ClickOnuploadRecipt() {
    await this.page.waitForLoadState('load');
    await this.uploadReceiptLocator.click();
  }
  async uploadReceipt(){
    const fileChooserPromise = this.page.waitForEvent('filechooser');
    await this.ChooseFiles.click();
    const filechooser =await fileChooserPromise;
    await filechooser.setFiles('C:/Users/navya/Desktop/Innomatics/Files upload/Cognizant Forage 2.pdf');
    await this.page.waitForTimeout(10000);
    
  }
  async uploadPhoto(){
    const fileChooserPromise = this.page.waitForEvent('filechooser');
    await this.ChooseFiles.click();
    const filechooser =await fileChooserPromise;
    await filechooser.setFiles('C:/Users/navya/Desktop/Innomatics/Files upload/Screenshot (8).png');
    await this.page.waitForTimeout(10000);
    
  }
  async ClickOnuploadPhotos() {
    await this.page.waitForLoadState('load');
    await this.uploadphotosLocator.click();
  }
  async ClickOnuploadvideo() {
    await this.page.waitForLoadState('load');
    await this.uploadVideoLocator.click();
  }
  async uploadvideo(){
    const fileChooserPromise = this.page.waitForEvent('filechooser');
    await this.ChooseFiles.click();
    const filechooser =await fileChooserPromise;
    await filechooser.setFiles('C:/Users/navya/Desktop/Innomatics/Files upload/Video1.mp4');
    await this.page.waitForTimeout(10000);
    
  }
  async ClickOnUploadFile(){
    await this.page.waitForLoadState('load');
    await this.uploadFileLocator.click();
    await this.page.waitForTimeout(5000);
  }
  async verifyUploadedfileReceipt(){
    await this.page.waitForLoadState('load');
    expect(this.verifyuploadedReceptLocator).toBeTruthy();
  }
  async verifyUploadedfilephoto(){
    await this.page.waitForLoadState('load');
    expect(this.verifyuploadedReceptLocator).toBeTruthy();
  }
  async verifyUploadedfilevideo(){
    await this.page.waitForLoadState('load');
    expect(this.verifyuploadedReceptLocator).toBeTruthy();
  }


  //Status
  async ClickOnStatusBtn() {
    await this.page.waitForLoadState('load');
    await this.statusButtonLocator.click();
  }
  async ClickOnStatusEditBtn() {
    await this.page.waitForLoadState('load');
    await this.ClickstatusEditButtonLocator.click();
  }
  async SetDriveoffStatusDropdown(DriveOff: string) {
    await this.page.waitForLoadState('load');
    await this.DriveofStatusdropdownLocator.fill(DriveOff);
    await this.page.locator("(//div[normalize-space()='" + DriveOff + "'])[1]").click();
  }

  async DateReported(date:string,monthYear:string, month:string, Year:string){
    await this.ClickdateReportedLocator.click();
    await this.monthandyear.click();

    while (true){
        const YYYY = await this.monthandyear.textContent();
        if(YYYY == Year)
        {
            break;
        }
        await this.datenextButton.click();  
    }
    await this.monthLocator.getByText(month, { exact: true }).click();

    await this.dateLocator.getByText(date, { exact: true }).click();  
}

async ClickOnStatusSaveBtn() {
  await this.page.waitForLoadState('load');
  await this.ClickstatusSaveButtonLocator.click();
}
async verifyStatusSaveConfirmationMessage(expectedMessage: string) {
  await this.page.waitForLoadState('load');
  const actualMessage = await this.saveConfirmMessageLocator.textContent();
  expect(actualMessage?.trim()).toBe(expectedMessage);
}

async ClickOnPayNowBtn1() {
  await this.ClickPaynowButtonLocator1.click();
}
async SetEmailToPayNow(email: string) {
  await this.page.waitForLoadState('load');
  await this.SetemailtopayLocator.fill(email);
}
async SetFirstNamePayNow(firstnamepaynow: string){
  await this.SetFirstNamePaynowLocator.fill(firstnamepaynow);
}
async SetlastNamePayNow(lastnamepaynow: string){
  await this.SetlastnamepaynowLocator.fill(lastnamepaynow);
}
async ClickOnPaynowBtn2(){
  await this.page.waitForLoadState('load');
  await this.ClickOnPayNowLocator2.click();
}
async Verifycreditanddebitcarddetails() {
await this.page.waitForLoadState('load');
expect(this.VerifyTextCntentLocator).toBeTruthy();
}

async ClickOnPaymentRequestBtn(){
  await this.page.waitForLoadState('load');
  await this.PaymentRequestButtonLocator.click(); 
}
async ClickOnCreateLinkBtn() {
  await this.page.waitForLoadState('load');
  await this.CreatelinkButtonLocator.click();
}
async VerifylinkCreatedtab(){
  await this.page.waitForLoadState('load');
  await expect(this.VerifytheCreatedlinktabLocator).toBeTruthy();
}

async verifypaymentRequestSentConfirmationMessage(expectedRequestMessage: string) {
  await this.page.waitForLoadState('load');
  const actualMessage = await this.saveConfirmMessageLocator.textContent();
  expect(actualMessage?.trim()).toBe(expectedRequestMessage);
}
async ClickOnSmsRadioBtn() {
  await this.SmsRadioButtonLocator.click();
}
async SetMobileNumber(mobile: string){
  await this.page.waitForLoadState('load');
  await this.SetmobilenumberLocator.fill(mobile);
}


}
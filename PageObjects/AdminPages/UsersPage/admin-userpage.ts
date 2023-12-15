import { Locator, Page, expect } from "@playwright/test";
export default class AdminUsersPage {
  readonly page: Page;
  readonly addBtnLandLocator: Locator;
  readonly firstNameFiledLocator: Locator;
  readonly usernameFiledLocator: Locator;
  readonly passwordTypeLocator: Locator;
  readonly lastNameFiledLocator: Locator;
  readonly addressFiledLocator: Locator;
  readonly emailAddressFiledLocator: Locator;
  readonly mobileNumberFiledLocator: Locator;
  readonly positionFiledLocator: Locator;
  readonly countryDropdownLocator: Locator;
  readonly stateDropdownLocator: Locator;
  readonly subrubLocator: Locator;
  readonly timeZoneDropdownLocator: Locator;
  readonly postcodeLocator: Locator;
  readonly userRegionDropdownLocator: Locator;
  readonly userDivisionDropdown: Locator;
  readonly genderDropdown: Locator;
  readonly nickNameFildLocator: Locator;
  readonly assestFieldLocator: Locator;
  readonly securityRoleLocator: Locator;
  readonly saveBtnLocator: Locator;
  readonly managereLocator: Locator;
  readonly companyRoleLocator: Locator;
  readonly confirmMessage: Locator;
  readonly expectedUsername: string;
  readonly randomString: string;
  readonly usernameTextbox: Locator;
  readonly firstNameFilterLocator: Locator;
  readonly filterLocator: Locator;
  readonly selectUserCheckboxLocator: Locator;
  readonly deleteBtnLocator: Locator;
  readonly deleteAlertLocator: Locator;

  readonly closeButtonLocator: Locator;
  readonly expectedUpdatedUserName: string;
  readonly expectedEmail: string;
  readonly yesDeleteButton: Locator;
  readonly deletePromptMessage: Locator;
  readonly userNameDropdownInputField: Locator;
  readonly expectedUserName: string;
  readonly userNameFeildLocator: Locator;

  readonly ResetpasswordusernameLocator: Locator;
  readonly ResetpasswordButtonLocator: Locator;
  readonly ResetPasswordAlertMessageLocator: Locator;


  readonly WelcomemailButtonLocator: Locator;
  readonly welComemailAlretMessageLocator: Locator;

  readonly companyRoleapperLocator: Locator;
  readonly VerifymanagerLocator: Locator;
  readonly UserCancelButtonLocator: Locator;

  //Availability
  readonly AvailabilityButtonLocator: Locator;

  //Adminuser-map:-
  readonly UserNamemapDropdownLocator: Locator;
  readonly UserMapbuttonLocator: Locator;

  //Preference
  readonly ClickPreferenceButtonLocator: Locator;

  //managedUser:-
  readonly UserNameDropdownLocator: Locator;
  readonly ManagedUserTabLocator: Locator;

  //Sites:-
  readonly UserNameSiteDropdownLocator: Locator;
  readonly SiteButtonLocator: Locator;


  constructor(page: Page, user: string) {
    this.page = page;
    //add
    this.addBtnLandLocator = page.locator('//button[@data-test-id="UserManagementCardWithToggleAndFunctionButtonsbtnAddButton"]');
    //adding the admins
    this.firstNameFiledLocator = page.locator('//input[@name="Firstname"]');
    this.usernameFiledLocator = page.locator('//input[@name="Username"]');
    this.lastNameFiledLocator = page.locator('//input[@name="Lastname"]');
    this.addressFiledLocator = page.locator('//input[@name="Address1"]');
    this.emailAddressFiledLocator = page.locator('//div[@data-test-id="UserManagementUserManagementUserDetails34Email"]// input');
    this.mobileNumberFiledLocator = page.locator(
      '//input[@placeholder="Mobile Number"]'
    );
    this.positionFiledLocator = page.locator('//input[@name="Position"]');
    this.countryDropdownLocator = page.locator(
      '(//div[@data-test-id="UserManagementUserManagementUserDetails34CountryStateDropDownFormGroupCountry"]// input)[1]'
    );
    this.stateDropdownLocator = page.locator(
      '(//div[@data-test-id="UserManagementUserManagementUserDetails34CountryStateDropDownFormGroupCountryHasStatesState"]// input)[1]'
    );
    this.subrubLocator = page.locator('//div[@data-test-id="UserManagementUserManagementUserDetails34Suburb"]// input');
    this.postcodeLocator = page.locator('//input[@name="Postcode"]');
    this.timeZoneDropdownLocator = page.locator(
      '(//div[@data-test-id="UserManagementUserManagementUserDetails34TimeZone"]// input)[1]'
    );
    this.userRegionDropdownLocator = page.locator(
      '(//div[@data-test-id="UserManagementUserManagementUserDetails34UserRegion"]// input)[1]'
    );
    this.userDivisionDropdown = page.locator(
      '(//div[@data-test-id="UserManagementUserManagementUserDetails34UserDivision"]// input)[1]'
    );
    this.genderDropdown = page.locator(
      '(//div[@data-test-id="UserManagementUserManagementUserDetails34Gender"]// input)[1]'
    );
    this.nickNameFildLocator = page.locator('//div[@data-test-id="UserManagementUserManagementUserDetails34Nickname"]// input');
    this.securityRoleLocator = page.locator(
      '(//div[@data-test-id="UserManagementUserManagementUserDetails34Role"]// input)[1]'
    );
    this.assestFieldLocator = page.locator(
      '(//div[@data-test-id="UserManagementUserManagementUserDetails34AssetRoleId"]// input)[1]'
    );
    this.passwordTypeLocator = page.locator('(//div[@data-test-id="UserManagementUserManagementUserDetails34PasswordType"]// input)[1]');
    this.saveBtnLocator = page.locator(
      '//button[@data-test-id="UserManagementUserManagementUserDetails34Save"]'
    );
    this.VerifymanagerLocator = page.locator('//div[@data-test-id="UserManagementUserManagementUserDetails34AdminUserID"]');
    this.managereLocator = page.locator(
      '//div[@data-test-id="UserManagementUserManagementUserDetails34AdminUserID"]'
    );
    this.companyRoleLocator = page.locator(
      '//div[@data-test-id="UserManagementUserManagementUserDetails34CompanyRoleId"]'
    );
    // this.confirmMessage = page.locator("//div[@role='alert']");
    this.confirmMessage = page.locator('//div[@data-test-id="NotificationMessage"]')
    this.firstNameFilterLocator = page.locator(
      '//th[@data-test-id="UserManagement283AdminUserDetailsFilterCellFirstName"]//input'
    );
    this.usernameTextbox = page.locator(
      "//div[@class='user-select__single-value css-1dimb5e-singleValue']"
    );
    this.expectedUsername = `${user}`;
    this.selectUserCheckboxLocator = page.locator(
      '[data-test-id="UserManagement283AdminUserDetailsSelectionCellSelectionCell"]'
    );
    this.deleteBtnLocator = page.locator(
      '//button[@data-test-id="UserManagementUserManagementUserDetails34Delete"]'
    );
    this.deleteAlertLocator = page.locator(
      '//button[@data-test-id="UserManagementUserManagementUserDetailsDeleteAlertButtonsButton0"]'
    );
    this.UserCancelButtonLocator = page.locator('//button[@data-test-id="UserManagementUserManagementUserDetails34CancelCustomHoverButton"]');
    
    this.closeButtonLocator = page.locator('//span[@title="Close"]');
    this.yesDeleteButton = page.locator(
      '[data-test-id="UserManagementUserManagementUserDetailsDeleteAlertButtonsButton0"]'
    );
    this.deletePromptMessage = page.locator(
      'div[data-test-id="UserManagementUserManagementUserDetailsDeleteAlert"] p'
    );
    this.userNameDropdownInputField = page.locator(
      '[data-test-id="UserManagementUserName"] input'
    );

    //Reset password mail:-
    
    this.ResetpasswordButtonLocator = page.locator('[data-test-id="UserManagementUserManagementUserDetails34btnResetPasswordCustomButton2"]');
    this.ResetPasswordAlertMessageLocator = page.locator('//div[@role="alert"]');

    //welcome mail:-
    this.WelcomemailButtonLocator = page.locator('//button[@data-test-id="UserManagementUserManagementUserDetails34btnWelcomeCustomButton"]');
    // this.welComemailAlretMessageLocator = page.locator('//div[@role="alert');
    this.welComemailAlretMessageLocator = page.locator('//div[@data-test-id="NotificationMessage"]');

    //company role appeare
    this.companyRoleapperLocator = page.locator('//div[@data-test-id="UserManagementUserManagementUserDetails34CompanyRoleId"]');

    //Availability
    this.AvailabilityButtonLocator=page.locator('//li[@data-test-id="UserManagement1235"]');

    //Admin User map:
    this.UserNamemapDropdownLocator=page.locator('//div[@data-test-id="UserManagementUserName"]// input');
    this.UserMapbuttonLocator=page.locator('//li[@data-test-id="UserManagement1237"]');

    //Preference:
    this.ClickPreferenceButtonLocator = page.locator('//li[@data-test-id="UserManagement1236"]');


    //Managed-User:-
    this.UserNameDropdownLocator = page.locator('(//div[@data-test-id="UserManagementUserName"])// input');
    this.ManagedUserTabLocator = page.locator('//li[@data-test-id="UserManagement1233"]');

    //User-Site:
    this.UserNameSiteDropdownLocator=page.locator('//div[@data-test-id="UserManagementUserName"]// input');
    this.SiteButtonLocator=page.locator('//li[@data-test-id="UserManagement1232"]');

    this.randomString = `${Math.random().toString().slice(2, 5)}`;
    this.expectedUsername = `${user}${this.randomString}${"Assoc"}`;
    this.expectedEmail = `${user}${this.randomString}${"@gmail.com"}`;
  }

  async clickOnAddBtnLandPage() {
    await this.page.waitForLoadState('load');
    await this.addBtnLandLocator.click();
  }
  async ClickonCancelBtn() {
    await this.page.waitForLoadState('load');
    await this.UserCancelButtonLocator.click();
    
    
  }

  
  async addPasswordType(passwordType: string){
    await this.page.waitForLoadState('load');
    await this.passwordTypeLocator.fill(passwordType);
    await this.page.locator("(//div[normalize-space()='" + passwordType + "'])[1]").click();
  }
  async addFirstName(firstName: string) {
    await this.firstNameFiledLocator.fill(firstName);
  }

  async addUsername(username: string) {
    await this.usernameFiledLocator.fill(this.expectedUsername);
  }
  async addLastName(lastName: string) {
    await this.lastNameFiledLocator.fill(lastName);
  }

  async addAddress(address: string) {
    await this.addBtnLandLocator.fill(address);
  }
  async addEmailAddess(email: string) {
    await this.emailAddressFiledLocator.fill(this.expectedEmail);
  }
  async addMobileNumer(mobileNo: string) {
    await this.mobileNumberFiledLocator.type(mobileNo);
  }
  async addPosition(position: string) {
    await this.positionFiledLocator.fill(position);
  }
 
  async addCountry(country: string){
    await this.page.waitForLoadState('load');
    await this.countryDropdownLocator.fill(country);
    await this.page.locator("(//div[normalize-space()='" + country + "'])[1]").click();
  }
  async addPostcode(postcode: string) {
    await this.postcodeLocator.fill(postcode);
  }
  async addSuburb(suburb: string) {
    await this.subrubLocator.fill(suburb);
  }
  
  async addState(state: string){
    await this.page.waitForLoadState('load');
    await this.stateDropdownLocator.fill(state);
    await this.page.locator("(//div[normalize-space()='" + state + "'])[1]").click();
  }
 
  async addTimeZone(timeZone: string){
    await this.page.waitForLoadState('load');
    await this.timeZoneDropdownLocator.fill(timeZone);
    await this.page.locator("(//div[normalize-space()='" + timeZone + "'])[1]").click();
  }
  
  async addUserRegion(userRegion: string){
    await this.page.waitForLoadState('load');
    await this.userRegionDropdownLocator.fill(userRegion);
    await this.page.locator("(//div[normalize-space()='" + userRegion + "'])[1]").click();
  }

  
  async addGender(gender: string){
    await this.page.waitForLoadState('load');
    await this.genderDropdown.fill(gender);
    await this.page.locator("(//div[normalize-space()='" + gender + "'])[1]").click();
  }
  
  async addAsset(asset: string){
    await this.page.waitForLoadState('load');
    await this.assestFieldLocator.fill(asset);
    await this.page.locator("(//div[normalize-space()='" + asset + "'])[1]").click();
  }
  
  async addAsset1(asset1: string){
    await this.page.waitForLoadState('load');
    await this.assestFieldLocator.fill(asset1);
    await this.page.locator("(//div[normalize-space()='" + asset1 + "'])[1]").click();
  }
  async verifyAssetRolefilled(){
    await this.page.waitForLoadState('load');
    expect(this.page.locator('//div[@data-test-id="UserManagementUserManagementUserDetails34AssetRoleId"]')).toBeVisible();

  }

  
  async addUserDivision(userDivision: string){
    await this.page.waitForLoadState('load');
    await this.userDivisionDropdown.fill(userDivision);
    await this.page.locator("(//div[normalize-space()='" + userDivision + "'])[1]").click();
  }
  
  async addSecurityRole(securityRole: string){
    await this.page.waitForLoadState('load');
    await this.securityRoleLocator.fill(securityRole);
    await this.page.locator("(//div[normalize-space()='" + securityRole + "'])[1]").click();
  }
 
  async addSecurityRole1(securityRole1: string){
    await this.page.waitForLoadState('load');
    await this.securityRoleLocator.fill(securityRole1);
    await this.page.locator("(//div[normalize-space()='" + securityRole1 + "'])[1]").click();
  }
  async addNickName(nickName: string) {
    await this.nickNameFildLocator.fill(nickName);
  }
  async addManager(manager: string) {
    await this.managereLocator.click();
    await this.page.getByText(manager, { exact: true }).click();
  }
  async verifyManagerAppear(){
   await expect(this.VerifymanagerLocator).toBeVisible();
  }
  async addCompanyRole(companyRole: string) {
    await this.companyRoleLocator.click();
    await this.page.getByText(companyRole, { exact: true }).click();
  }
  async clickOnSaveBtn() {
    await this.saveBtnLocator.click();
  }

  async verifyConfirmationMessage(expectedMessage: string) {
    await this.page.waitForLoadState('load');
    const actualMessage = await this.confirmMessage.textContent();
    expect(actualMessage?.trim()).toBe(expectedMessage);
  }

  async verifyIfUserCreated() {
    await this.page.waitForLoadState('load');
    const names = await this.usernameTextbox.textContent();
    await this.page.waitForLoadState('load');
    expect(names).toBe(this.expectedUsername);
  }

  //Delete

  async serachUserForFilter(firstNameFilter: string) {
    await this.firstNameFilterLocator.fill(firstNameFilter);
    await this.selectUserCheckboxLocator.click();
  }

  async clickOnDeleteBtn() {
    await this.deleteBtnLocator.click();
    await this.page.waitForLoadState("load");
    await this.deleteAlertLocator.click();
  }
  //verify
  async verifyUserCanBeDeleted() {
    expect(this.yesDeleteButton).toBeVisible();
  }

  async verifyDeletePrompt(expectedmessage: string) {
    const actualDeletePromptMessage =
      await this.deletePromptMessage.textContent();
    expect(actualDeletePromptMessage).toBe(expectedmessage);
    await this.yesDeleteButton.click();
  }
  async clickOnCloseBtn() {
    await this.page.waitForLoadState('load');
    await this.closeButtonLocator.click();
  }

  // verify user
  async verifyIfUserCouldBeSearched(username: string) {
    await this.userNameDropdownInputField.fill(
      this.expectedUsername.toLowerCase()
    );
    expect(this.page.locator(
        "(//div[normalize-space()='" +
          this.expectedUsername.toLowerCase() +
          "'])[1]" )).toBeTruthy();
  }

  //Reset Password mail:-
  async ClickOnResetPasswordBtn() {
    await this.page.waitForLoadState('load');
    await this.ResetpasswordButtonLocator.click();
  }
  async verifyResetPasswordAlertMessage(){
    await expect(this.ResetPasswordAlertMessageLocator).toBeVisible();
  }



  //welcome mail:-
  async ClickOnSendWelcomeMailBtn() {
    await this.page.waitForTimeout(4000);
    await this.WelcomemailButtonLocator.click();
  }
  async VerifywelcomemailsentAlertmessage() {
    await expect(this.welComemailAlretMessageLocator).toBeVisible();
    // await expect(this.page.getByText('A welcome mail has been sent to user.')).toBeVisible();
  }

  async VerifyCompanyRoleAppear(){
    await expect(this.companyRoleapperLocator).toBeVisible(); 
  }

  //Availabiliry
  async ClickOnAvailabilityBtn() {
    await this.page.waitForLoadState('load');
    await this.AvailabilityButtonLocator.click();
  }

  //Admin-user-map
  async SetUsernamemapDropdown(UserName: string) {
    await this.page.waitForLoadState('load');
    await this.UserNamemapDropdownLocator.fill(UserName);
    await this.page.locator("(//div[normalize-space()='" + UserName + "'])[1]").click();
  }
  async ClickOnUserMapBtn() {
    await this.page.waitForLoadState('load');
    await this.UserMapbuttonLocator.click();
  }

  //Preference:
  async ClickOnPreferencesBtn() {
    await this.page.waitForLoadState('load');
    await this.ClickPreferenceButtonLocator.click();
  }

  //Managed-User:

  async SetUsernameMUDropdown(username: string) {
    await this.page.waitForLoadState('load');
    await this.UserNameDropdownLocator.fill(username);
    await this.page.locator("(//div[normalize-space()='" + username + "'])[1]").click();
  }
  async SetUsernameMUDropdown1(UserName: string) {
    await this.page.waitForLoadState('load');
    await this.UserNameDropdownLocator.fill(UserName);
    await this.page.locator("(//div[normalize-space()='" + UserName + "'])[1]").click();
  }
  async VerifyManagedUserTab(){
    await expect(this.ManagedUserTabLocator).toBeVisible();
    await expect(this.ManagedUserTabLocator).toBeDisabled();
  }
  async VerifyManagedUserTab1(){
    await expect(this.ManagedUserTabLocator).toBeVisible();
    await expect(this.ManagedUserTabLocator).toBeEnabled();
  }

  //User-Site:-
  async SetUsernameSiteDropdown(UserName: string){
    await this.page.waitForLoadState('load');
    await this.UserNameDropdownLocator.fill(UserName);
    await this.page.locator("(//div[normalize-space()='" + UserName + "'])[1]").click();
  }
  async ClickOnSitesBtn() {
    await this.page.waitForLoadState('load');
    await this.SiteButtonLocator.click();
  }
  
  
}

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

  constructor(page: Page, user: string) {
    this.page = page;
    //add
    this.addBtnLandLocator = page.locator('(//img[@alt="ctrlItem" ])[2]');
    //adding the admins
    this.firstNameFiledLocator = page.locator('//input[@name="Firstname"]');
    this.usernameFiledLocator = page.locator('//input[@name="Username"]');
    this.lastNameFiledLocator = page.locator('//input[@name="Lastname"]');
    this.addressFiledLocator = page.locator('//input[@name="Address1"]');
    this.emailAddressFiledLocator = page.locator('//input[@name="Email"]');
    this.mobileNumberFiledLocator = page.locator(
      '//input[@placeholder="Mobile Number"]'
    );
    this.positionFiledLocator = page.locator('//input[@name="Position"]');
    this.countryDropdownLocator = page.locator(
      '(//div[@class="dropdown-select css-b62m3t-container"])[2]'
    );
    this.stateDropdownLocator = page.locator(
      '(//div[@class="dropdown-select css-b62m3t-container"])[3]'
    );
    this.subrubLocator = page.locator('//input[@name="Suburb"]');
    this.postcodeLocator = page.locator('//input[@name="Postcode"]');
    this.timeZoneDropdownLocator = page.locator(
      '(//div[@class="dropdown-select css-b62m3t-container"])[4]'
    );
    this.userRegionDropdownLocator = page.locator(
      '(//div[@class="dropdown-select css-b62m3t-container"])[5]'
    );
    this.userDivisionDropdown = page.locator(
      '(//div[@class="dropdown-select css-b62m3t-container"])[6]'
    );
    this.genderDropdown = page.locator(
      '(//div[@class="dropdown-select css-b62m3t-container"])[7]'
    );
    this.nickNameFildLocator = page.locator('//input[@name="Nickname"]');
    this.securityRoleLocator = page.locator(
      '(//div[@class="dropdown-select css-b62m3t-container"])[9]'
    );
    this.assestFieldLocator = page.locator(
      '//div[@data-test-id="UserManagementUserManagementUserDetails34AssetRoleId"]'
    );
    this.passwordTypeLocator = page.locator(
      '[data-test-id="UserManagementUserManagementUserDetails34PasswordType"] svg'
    );
    this.saveBtnLocator = page.locator(
      '//button[@data-test-id="UserManagementUserManagementUserDetails34Save"]'
    );
    this.managereLocator = page.locator(
      '//div[@data-test-id="UserManagementUserManagementUserDetails34AdminUserID"]'
    );
    this.companyRoleLocator = page.locator(
      '//div[@data-test-id="UserManagementUserManagementUserDetails34CompanyRoleId"]'
    );
    this.confirmMessage = page.locator("//div[@role='alert']");
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
      '[data-test-id="UserManagementCardWithToggleAndFunctionButtonsbtnDeleteButton"]'
    );
    this.deleteAlertLocator = page.locator(
      '[data-test-id="UserManagementConfirmDeleteAlertButtonsButton0"]'
    );
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

    this.randomString = `${Math.random().toString().slice(2, 5)}`;
    this.expectedUsername = `${user}${this.randomString}${"Assoc"}`;
    this.expectedEmail = `${user}${this.randomString}${"@gmail.com"}`;
  }

  async clickOnAddBtnLandPage() {
    await this.addBtnLandLocator.click();
  }

  async addPasswordType(passwordType: string) {
    await this.passwordTypeLocator.click();
    await this.page.getByText(passwordType, { exact: true }).click();
  }

  async addFirstName(firstName: string) {
    await this.firstNameFiledLocator.fill(firstName);
  }

  async addUsername(username: string) {
    await this.usernameFiledLocator.fill(username);
  }
  async addLastName(lastName: string) {
    await this.lastNameFiledLocator.fill(lastName);
  }

  async addAddress(address: string) {
    await this.addBtnLandLocator.fill(address);
  }
  async addEmailAddess(email: string) {
    await this.emailAddressFiledLocator.fill(email);
  }
  async addMobileNumer(mobileNo: string) {
    await this.mobileNumberFiledLocator.type(mobileNo);
  }
  async addPosition(position: string) {
    await this.positionFiledLocator.fill(position);
  }
  async addCountry(country: string) {
    await this.countryDropdownLocator.click();
    await this.page.getByText(country, { exact: true }).click();
  }
  async addPostcode(postcode: string) {
    await this.postcodeLocator.fill(postcode);
  }
  async addSuburb(suburb: string) {
    await this.subrubLocator.fill(suburb);
  }
  async addState(state: string) {
    await this.stateDropdownLocator.click();
    await this.page.getByText(state, { exact: true }).click();
  }
  async addTimeZone(timeZone: string) {
    await this.timeZoneDropdownLocator.click();
    await this.page.getByText(timeZone, { exact: true }).click();
  }
  async addUserRegion(userRegion: string) {
    await this.userRegionDropdownLocator.click();
    await this.page.getByText(userRegion, { exact: true }).click();
  }
  async addGender(gender: string) {
    await this.genderDropdown.click();
    await this.page.getByText(gender, { exact: true }).click();
  }
  async addAsset(asset: string) {
    await this.assestFieldLocator.click();
    await this.page.getByText(asset, { exact: true }).click();
  }
  async addUserDivision(userDivision: string) {
    await this.userDivisionDropdown.click();
    await this.page.getByText(userDivision, { exact: true }).click();
  }
  async addSecurityRole(securityRole: string) {
    await this.securityRoleLocator.click();
    await this.page.getByText(securityRole, { exact: true }).click();
  }
  async addNickName(nickName: string) {
    await this.nickNameFildLocator.fill(nickName);
  }
  async addManager(manager: string) {
    await this.managereLocator.click();
    await this.page.getByText(manager, { exact: true }).click();
  }
  async addCompanyRole(companyRole: string) {
    await this.companyRoleLocator.click();
    await this.page.getByText(companyRole, { exact: true }).click();
  }
  async clickOnSaveBtn() {
    await this.saveBtnLocator.click();
  }

  async verifyConfirmationMessage(expectedMessage: string) {
    const actualMessage = await this.confirmMessage.textContent();
    expect(actualMessage?.trim()).toBe(expectedMessage);
  }

  async verifyIfUserCreated() {
    const names = await this.usernameTextbox.textContent();
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
    await this.page.waitForLoadState("domcontentloaded");
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
          "'])[1]" )).toBeVisible();
  }
}

import {Page ,expect} from '@playwright/test';
export default class Adminadduser {
    constructor(public page: Page) {
        this.page = page;
    }
    async signin(passwordtype: string, UserName: string, FirstName: string, LastName: string, email: string, address1: string, phone: string, position: string, suburb: string,
        postcode: string) {
        // await this.clickAdminBtn();
        // await this.clickusersBtn();
        await this.clickAddBtn();
        await this.clickRadioBtn();
        await this.selectpasswordtype();//(passwordtype);
        await this.clickcheckbox();
        await this.EnterUserName(UserName);
        await this.EnterFirstName(FirstName);
        await this.EnterLastName(LastName);
        await this.Enteremail(email);
        await this.Enteraddress1(address1);
        await this.Selectcountry();
        await this.Mobilenumber(phone);
        await this.Enterposition(position);
        await this.Entersuburb(suburb);
        await this.Enterpostcode(postcode);
        await this.Selectstate();
        await this.SelectTimezone();
        await this.Selectuserregion();
        await this.Selectuserdivision(); 
        await this.Selectgender(); 
        await this.Selectsecurityrole();
        await this.clicksaveBtn();

      }
      async clickAdminBtn() {
        await this.page.getByRole('link', { name: 'Admin' }).click();
    }
    async clickusersBtn() {
        await this.page.click("(//span['.Users'])[2]");
    }
      async clickAddBtn() {
        await this.page.click("(//img[@alt='ctrlItem' ])[2]");
        // await this.page.waitForLoadState();
    }
      async clickRadioBtn() {
        await this.page.click("//label[normalize-space()='Sign in with Username']");
      }
      async selectpasswordtype() {
        await this.page.locator("#react-select-4-placeholder").click();
        await this.page.getByText('Standard Password').click();
      }
      async clickcheckbox() {
        await this.page.click("Enabled");
      }
      async EnterUserName(UserName: string) {
        await this.page.locator("//input[@name='Username']").fill(UserName);
      }
      async EnterFirstName(FirstName: string) {
        await this.page.locator("//input[@name='Firstname']").fill(FirstName);
      }
      async EnterLastName(LastName: string) {
        await this.page.locator("//input[@name='Lastname']").fill(LastName);
      }
      async Enteremail(email: string) {
        await this.page.getByPlaceholder('Email Address').fill(email);
      }
      async Enteraddress1(adress1: string) {
        await this.page.getByPlaceholder('Address 1').fill(adress1);
      }
      async Selectcountry() {
        await this.page.click("[data-test-id='UserManagementUserManagementUserDetails34CountryStateDropDownFormGroupCountry'] svg').nth(1)");
        await this.page.getByText('India').click();
      }
      async Mobilenumber(phone: string) {
        await this.page.locator("//input[@placeholder='Mobile Number']").fill(phone);
      }
      async Enterposition(position: string) {
        await this.page.getByPlaceholder('position').fill(position);
      }
      async Entersuburb(suburb: string) {
        await this.page.getByPlaceholder('Suburb').fill(suburb);
      }
      async Enterpostcode(postcode: string) {
        await this.page.getByPlaceholder('Postcode').fill(postcode);
      }
      async Selectstate() {
        await this.page.getByPlaceholder('Select State').click();
        await this.page.getByText('Karnataka').click();
      }
      async SelectTimezone() {
        await this.page.getByPlaceholder('Select Time Zone').click();
        await this.page.getByText('UTC-10:00) Hawaii(Pacific/Midway').click();
      }
      async Selectuserregion() {
        await this.page.getByPlaceholder("Select User Region").click();
        await this.page.getByText('Region 1').click();
      }
      async Selectuserdivision() {
        await this.page.getByPlaceholder("Select User Division").click();
        await this.page.getByText('Division 1').click();
      }
      async Selectgender() {
        await this.page.getByPlaceholder("Select Gender").click();
        await this.page.getByText('Male').click();
      }
      async Selectsecurityrole() {
        await this.page.getByPlaceholder("Select Security Role").click();
        await this.page.getByText('User').click();
      }
      async clicksaveBtn() {
        await this.page.locator('(//button[@title="Save"])[1]').click();
      }

      
    


}
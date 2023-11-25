import { Locator, Page, expect } from "@playwright/test";
export default class AdminUsersAvailabilityPage {
  readonly page: Page;
  
  readonly UserNameDropdownLocator: Locator;
  readonly clickAvailability: Locator;
  readonly mondayrowAvailablefiel: Locator;
  readonly TuerowAvailablefield: Locator;
  readonly WedrowAvailablefield: Locator;
  readonly TherowAvailablefield: Locator;
  readonly FrirowAvailablefield: Locator;
  readonly SatrowAvailablefield: Locator;
  readonly SunrowAvailablefield: Locator;
  readonly HolidayrowAvailablefield: Locator;

  constructor(page: Page) {
    this.page = page;

    
    this.UserNameDropdownLocator = page.locator('(//div[@data-test-id="UserManagementUserName"])// input');
    
    //Availability one field       
    this.mondayrowAvailablefiel = page.locator('(//td[@data-test-id="UserManagementAvailability188AvailabilityAvailableCell"])[1]');
    this.TuerowAvailablefield = page.locator('(//td[@data-test-id="UserManagementAvailability188AvailabilityAvailableCell"])[2]');
    this.WedrowAvailablefield = page.locator('(//td[@data-test-id="UserManagementAvailability188AvailabilityAvailableCell"])[3]');
    this.TherowAvailablefield = page.locator('(//td[@data-test-id="UserManagementAvailability188AvailabilityAvailableCell"])[4]');
    this.FrirowAvailablefield = page.locator('(//td[@data-test-id="UserManagementAvailability188AvailabilityAvailableCell"])[5]');
    this.SatrowAvailablefield = page.locator('(//td[@data-test-id="UserManagementAvailability188AvailabilityAvailableCell"])[6]');
    this.SunrowAvailablefield = page.locator('(//td[@data-test-id="UserManagementAvailability188AvailabilityAvailableCell"])[7]');
    this.HolidayrowAvailablefield = page.locator('(//td[@data-test-id="UserManagementAvailability188AvailabilityAvailableCell"])[8]');

    //Special days availability field
    
  }
  async SetUsernameDropdown(UserName: string) {
    await this.page.waitForLoadState('load');
    await this.UserNameDropdownLocator.fill(UserName);
    await this.page.locator("(//div[normalize-space()='" + UserName + "'])[1]").click();
  }
  
  async verifytheAvailabiliryfields(){
    expect(await this.mondayrowAvailablefiel).toBeTruthy();
    expect(await this.TuerowAvailablefield).toBeTruthy();
    expect(await this.WedrowAvailablefield).toBeTruthy();
    expect(await this.TherowAvailablefield).toBeTruthy();
    expect(await this.FrirowAvailablefield).toBeTruthy();
    expect(await this.SatrowAvailablefield).toBeTruthy();
    expect(await this.SunrowAvailablefield).toBeTruthy();
    expect(await this.HolidayrowAvailablefield).toBeTruthy();

  }

  
  

}
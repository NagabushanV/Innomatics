import { Locator, Page } from "@playwright/test";


export default class DashboardPage {
    

    readonly page: Page;
    readonly adminLocator: Locator;
    readonly usersButtonLocator: Locator;
    readonly SitesButtonLocator: Locator;
    readonly StocksLocator: Locator;
    readonly StockSetting: Locator;
    readonly CommsLocator: Locator;
    readonly CommsTasksLocator: Locator;
    readonly CommsSettingLocator: Locator;

    

    constructor(page: Page) {
        this.page = page;
        //admin
        this.adminLocator = page.locator("//p[.='Admin']");
        //users
        this.usersButtonLocator=page.locator("//span[.='Users']");
        this.SitesButtonLocator=page.locator("//span[.='Sites']");

         //stock
         this.StocksLocator = page.locator("//p[.='Stock']");
         //stock-settings
         this.StockSetting = page.locator("(//span[.='Settings'])[3]");

         //comms
         this.CommsLocator = page.locator("//p[.='Comms']");

         //Comms-Tasks
         this.CommsTasksLocator = page.locator("//span[.='Tasks']"),

         //commsSetting
         this.CommsSettingLocator = page.locator("(//span[.='Settings'])[4]");
    }
    async clickOnAdmin(){
        await this.page.waitForLoadState("load");
        await this.adminLocator.click();
    }

    async clickOnUsers(){
        await this.page.waitForLoadState("load");
        await this.usersButtonLocator.click();
    }
    async ClickOnSitesBtn() {
        await this.page.waitForLoadState('load');
        await this.SitesButtonLocator.click();
    }

    // stock
    async ClickOnStockBtn() {
        await this.page.waitForLoadState("load");
        await this.StocksLocator.click();
    }
    async ClickOnSettingBtn() {
        await this.page.waitForLoadState("load");
        await this.StockSetting.click();
    }
     //comms
    async ClickOnCommsBtn() {
        await this.page.waitForLoadState("load");
        await this.CommsLocator.click();
    }

    //Comms Tasks
    async ClickOnCommsTaskBtn() {
        await this.page.waitForLoadState("load");
        await this.CommsTasksLocator.click();
    }
    async ClickOnCommsSettingBtn() {
        await this.page.waitForLoadState('load');
        await this.CommsSettingLocator.click();
    }
}

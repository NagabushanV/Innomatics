import { Locator, Page, expect } from "@playwright/test";
export default class StocksettingpumpAttributes {
    readonly page: Page;
    readonly StockBtnLocator : Locator;
    readonly SettingBtnLocator : Locator;
    readonly TankandPumpAttributesLocator : Locator;
    readonly AddTankAttributes : Locator;
    readonly inputEnterAttribute : Locator;
    readonly SaveButton : Locator;
    readonly CloseButton : Locator;
    readonly TankAndPumpSetup : Locator;
    readonly SiteNameSearchdropdown : Locator;
    readonly SitenameSearchdropdownvalue : Locator;
    readonly EditButton : Locator;
    readonly randomStrings: string;
    readonly verifyAttribute : string;
    readonly AttributeEditButton : Locator;
    readonly inputselector: string;
    readonly expectedTankAttribute: string;
    readonly inputSelector2: Locator;
    // EnterAttribute: any;



    constructor(page: Page, sitename:string) {
        // this.StockBtnLocator = page.locator("//p[.='Stock']");
        // this.SettingBtnLocator = page.getByRole('link', { name: 'Settings' });
        this.TankandPumpAttributesLocator = page.locator("//img[@alt='Tank & Pump Attributes']");
        this.AddTankAttributes= page.locator('[data-test-id="TankAttributesAttributeAddCard1241Add"]');
        
        this.inputselector = (('input[name^="' + 'attr_1_' + '"]'));

        this.inputEnterAttribute = page.locator('//input[@name="attr_1_96"]');

        this.SaveButton = page.locator('//button[@data-test-id="TankAttributesAttributeAddCard1241Save"]');

        this.CloseButton = page.locator('//span[@title="Close"]');

        this.TankAndPumpSetup = page.locator("//div[.='Tank & Pump Setup']");
        // this.SiteNameSearchdropdown = page.locator('[id="react-select-17-placeholder"]');
        this.SiteNameSearchdropdown = page.locator(".companysite-select__input-container");
        this.SitenameSearchdropdownvalue = page.locator('(//input[@class="companysite-select__input"])[1]');
        
        // this.SiteNameSearchdropdown = page.locator(".companysite-select__input-container').first()");
        this.EditButton = page.locator('(//button[@title="Edit"])[1]');

        this.verifyAttribute = ('//label[@class="label-border"]');

        this.AttributeEditButton = page.locator('(//button[@title="Edit"])[1]');

        // this.inputSelector2 = page.locator()
        this.randomStrings = `${Math.random().toString().slice(2, 6)}`;
        this.expectedTankAttribute = `${this.inputEnterAttribute}${this.randomStrings}`;
        
        


    }

        async ClickOnStockBtn() {
            await this.StockBtnLocator.click();
        }
        async ClickOnSettingBtn() {
            await this.SettingBtnLocator.click();
        }
        async ClickOntankAndPumpAttribute() {
            // await this.page.waitForLoadState("load");
            await this.TankandPumpAttributesLocator.click();
        }
        async ClickOnAddAttributes() {
            await this.AddTankAttributes.click();
        }
        async EnterAttributeValue(EnterAttribute: string): Promise<void> {
            // const inputElements = await this.page.$$(this.inputselector);
            // for (const input of inputElements) {
            //     const isReadonly = await input.getAttribute('readonly');
            //     const inputValue = await input.getAttribute('value');

            //     if(isReadonly !== 'true'&& inputValue === '') {
            //         // await this.page.waitForLoadState('load');
            //         await input.fill(this.expectedTankAttribute);
            //     }
            // }
            await this.inputEnterAttribute.fill(EnterAttribute);
            // await this.getByPlaceholder('Enter field label').fill('5625');
        }
        async ClickSaveButton() {
            await this.SaveButton.click();
        }
        async ClickCloseBtn() {
            await this.CloseButton.click();
        }
        async ClickTankAndPumpSetup() {
            await this.TankAndPumpSetup.click();
        }
        async SearchSiteName(sitename: string) { 
            // await this.SiteNameSearchdropdown.click();
            await this.SitenameSearchdropdownvalue.fill(sitename);
            await this.page.locator('//div[contains(text(),"' + sitename + '")]').first().click();
            // await this.SiteNameSearchdropdown.fill(sitename);
            // await this.page.getByText(sitename, { exact: true }).click();   
        }
       
       
        async ClickEditBtn() {
            await this.EditButton.first().click();
            
        }
        async verifyTankAttributePresntInSetPage() {
            const tankElement = await this.page.$$(this.verifyAttribute);
            for (const element of tankElement) {
                if (this.expectedTankAttribute === await element.textContent()) {
                    await expect(this.expectedTankAttribute).toBeTruthy();
                    break;
                }
            }

        
        }

}
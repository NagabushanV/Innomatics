import { Locator, Page, expect } from "@playwright/test";
export default class CommsTaskAdminpage {
  readonly page: Page;
  readonly TaskAdminLocator: Locator;
  readonly AddTaskAdminButton: Locator;
  readonly CommsTaskButton: Locator;
  readonly EnterTaskname: Locator;

  readonly UrgencyDropdownLocator: Locator;
  readonly UrgencyDropdownValue: Locator;
  readonly UrgencyExactValue: Locator;
  

  readonly EnterDueTime: Locator;

  readonly EnterDueDate: Locator;
  readonly datenextBtn: Locator;
  readonly datePrevBtn: Locator;
  readonly Exactdate: Locator;

  readonly Selectform: Locator;
  readonly Selectformclick: Locator;

  readonly NextButton1: Locator;

  readonly siteNameDropdownLocator: Locator;
  readonly mysiteoptionlocator: Locator;

  readonly NextButton2: Locator;

  readonly EnableandSavaTask: Locator;


constructor(page: Page,) {
    this.TaskAdminLocator = page.locator("//div[.='Task Admin']");

    this.AddTaskAdminButton = page.locator("//button[@title='Add']");

    this.CommsTaskButton = page.locator("(//div[.='Comms Task'])[1]");

    this.EnterTaskname = page.locator("//input[@placeholder='Task Name']");

    this.UrgencyDropdownLocator = page.locator('(//div[.="Select Urgency"])[1]');
    this.UrgencyDropdownValue = page.locator('#react-select-5-input');
    this.UrgencyExactValue = page.locator('[data-test-id="TaskAdminAddEditTaskTaskDetailsTabTaskDetailsFormUrgencyId"]');
    
   

    this.EnterDueTime = page.locator('//input[@name="DueTime"]');

    this.EnterDueDate = page.locator('//input[@placeholder="Due Date"]');
    this.datenextBtn = page.locator("//div[@class='rdt rdtOpen']//span[contains(text(),'›')]");
    this.Exactdate = page.locator("(//td[contains(text(),'29')])[5]");
    this.datePrevBtn = page.locator("//div[@class='rdt rdtOpen']//span[contains(text(),'‹')]");

    this.Selectform = page.locator('#react-select-6-input');
    this.Selectformclick = page.locator('.col > .margin-top-n15 > .row > .col-12 > .dropdown-select > .css-mai67c-control > .css-hlgwow > .css-19bb58m');

    this.NextButton1 = page.locator('//button[@title="Next"]');

    this.siteNameDropdownLocator = page.locator('#react-select-7-input');
    this.mysiteoptionlocator = page.locator('[data-test-id="TaskAdminAddEditTaskTaskRecipientsTabCommsRecepientFormRecipientsFiltersSiteName"]');

    this.NextButton2 = page.locator('//button[@title="Next"]');

    this.EnableandSavaTask = page.locator('[data-test-id="TaskAdminAddEditTaskEnableSaveDiscardTaskImgEnable"]');
}

async ClickOnTaskAdminBtn() {
    await this.TaskAdminLocator.click();
}
async ClickOnAddTaskAdminBtn() {
    await this.AddTaskAdminButton.click();
}
async ClickOnCommsTaskBtn() {
    await this.CommsTaskButton.click();
}
async AddTaskName(taskname: string) {
    await this.EnterTaskname.fill(taskname);
}
async ClickOnUrgencyDropdown(urgency: string) {
    await this.UrgencyDropdownValue.fill(urgency);
    // await this.page.locator('//div[contains(text(),"' + urgency + '")]').first().click();
    await this.UrgencyExactValue.getByText(urgency, { exact: true }).click();

    
    // const options = await this.page.$$('//div[@class=" css-1lv2zxb"]');
    // for(let option of options)
    // {
    // const urgency = await Option.textcontent();
    // if(urgency.includes("info"))
    // {
        // await Option.click();
        // break;

    // }
    // }
    
}
async ClickOnUrgencyDropdownValue() {
    await this.UrgencyDropdownValue.fill('info');
    // await this.page.locator('[data-test-id="TaskAdminAddEditTaskTaskDetailsTabTaskDetailsFormUrgencyId"]').getByText('Info', { exact: true }).click();
}
async ClickExactValue() {
    await this.UrgencyExactValue.click();
    await this.page.locator('[data-test-id="TaskAdminAddEditTaskTaskDetailsTabTaskDetailsFormUrgencyId"]').getByText('Info', { exact: true }).click();    
}

async AddDueTime(Duetime: string) {
    await this.EnterDueTime.fill(Duetime);
}

async AddDueDate() {
    await this.EnterDueDate.click();
    await this.datenextBtn.click();
    await this.Exactdate.click();

    
}
async SelectFormoption(formoption: string) {
    await this.Selectformclick.click();
    await this.Selectform.fill(formoption);
    await this.page.getByText(formoption, { exact: true }).click();
    
    // await this.page.locator('//div[contains(text(),"' + formoption + '")]').first().click();
}

async ClickOnNextBtn1() {
    await this.NextButton1.click();
}
async EnterSiteName(siteName: string) {
     await this.siteNameDropdownLocator.fill(siteName);
     await this.mysiteoptionlocator.getByText(siteName, { exact: true }).click();
    //  await this.page.locator('//div[contains(text(),"' + siteName + '")]').first().click();
    
 }
 async ClickOnNextBtn2() {
    await this.NextButton2.click();
 }

 async ClickOnEnableandSaveTask() {
    await this.EnableandSavaTask.click();
 }


};
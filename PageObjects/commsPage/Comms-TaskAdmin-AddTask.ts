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
  readonly Monthandyear: Locator;
  readonly dueDateLocator: Locator;
  readonly setDateLocator : Locator;

  readonly Selectform: Locator;
  readonly Selectformclick: Locator;

  readonly NextButton1: Locator;

  readonly siteNameDropdownLocator: Locator;
  readonly mysiteoptionlocator: Locator;

  readonly NextButton2: Locator;

  readonly EnableandSavaTask: Locator;

  readonly SearchTaskName: Locator;

  readonly enableAndTaskSummaryLocator: Locator


constructor(page: Page,) {
    this.TaskAdminLocator = page.locator("//div[.='Task Admin']");

    this.AddTaskAdminButton = page.locator("//button[@title='Add']");

    this.CommsTaskButton = page.locator('[data-test-id="TaskAdminTaskTypeBtnCommsTask"]');

    this.EnterTaskname = page.locator('//div[@data-test-id="TaskAdminAddEditTaskTaskDetailsTabTaskDetailsFormTaskName"]//input');

    this.UrgencyDropdownLocator = page.locator('(//div[@data-test-id="TaskAdminAddEditTaskTaskDetailsTabTaskDetailsFormUrgencyId"]//input)[1]');
    this.UrgencyDropdownValue = page.locator('#react-select-5-input');
    this.UrgencyExactValue = page.locator('[data-test-id="TaskAdminAddEditTaskTaskDetailsTabTaskDetailsFormUrgencyId"]//input[1]');
    
   

    this.EnterDueTime = page.locator('//input[@name="DueTime"]');

    this.EnterDueDate = page.locator('[data-test-id="TaskAdminAddEditTaskTaskDetailsTabTaskDetailsFormDueDate"]');
    
    this.Exactdate = page.locator("(//td[contains(text(),'29')])[5]");
    this.datePrevBtn = page.locator("//div[@class='rdt rdtOpen']//span[contains(text(),'‹')]");
    this.setDateLocator = page.locator('.form-control[placeholder="Start Date"]');

    this.Monthandyear = page.locator('(//th[@class="rdtSwitch"])[4]');
    this.datenextBtn = page.locator("(//span[.='›'])[4]");
    this.dueDateLocator = page.locator('//div[@data-test-id="TaskAdminAddEditTaskTaskDetailsTabTaskDetailsFormDueDate"]//input');

    this.Selectform = page.locator('#react-select-6-input');
    this.Selectformclick = page.locator('(//div[@data-test-id="TaskAdminAddEditTaskTaskDetailsTabTaskDetailsFormExistingFormId"]//input)[1]');

    this.NextButton1 = page.locator('//button[@title="Next"]');

    this.siteNameDropdownLocator = page.locator('(//div[@data-test-id="TaskAdminAddEditTaskTaskRecipientsTabCommsRecepientFormRecipientsFiltersSiteName"]//input)[1]');
    this.mysiteoptionlocator = page.locator('[data-test-id="TaskAdminAddEditTaskTaskRecipientsTabCommsRecepientFormRecipientsFiltersSiteName"]');

    this.NextButton2 = page.locator('//button[@title="Next"]');

    this.EnableandSavaTask = page.locator('[data-test-id="TaskAdminAddEditTaskEnableSaveDiscardTaskImgEnable"]');

    this.SearchTaskName = page.locator('[data-test-id="TaskAdmin159TaskRepeatsFilterCellTaskName"]');

    this.enableAndTaskSummaryLocator = page.locator('[data-test-id="TaskAdminAddEditTaskEnableSaveDiscardTaskBtnEnable"]');
}

async ClickOnTaskAdminBtn() {
    // await this.page.waitForLoadState('load');
    await this.TaskAdminLocator.click();
}
async ClickOnAddTaskAdminBtn() {
    await this.AddTaskAdminButton.click();
}
async ClickOnCommsTaskBtn() {
    await this.CommsTaskButton.click();
}
async AddTaskName(taskname: string) {
    // await this.page.waitForTimeout(4000);
    await this.EnterTaskname.fill(taskname);
}
async ClickOnUrgencyDropdown(urgency: string) {
    // await this.page.waitForLoadState('load');
    await this.UrgencyDropdownLocator.fill(urgency);
    await this.page.locator('//div[contains(text(),"' + urgency + '")]').first().click();
    // await this.UrgencyExactValue.getByText(urgency, { exact: true }).click();

       
}


async ClickOnUrgencyDropdownValue() {
    await this.UrgencyDropdownValue.fill('info');
    
}
async ClickExactValue() {
    await this.UrgencyExactValue.click();
    await this.page.locator('[data-test-id="TaskAdminAddEditTaskTaskDetailsTabTaskDetailsFormUrgencyId"]').getByText('Info', { exact: true }).click();    
}

async AddDueTime(Duetime: string) {
    await this.EnterDueTime.fill(Duetime);
}

async AddDueDate(date:string,monthYear:string,month:string) {
      
    await this.dueDateLocator.click();
    
    while (true){
     const MMYYY= await this.Monthandyear.textContent();
    
       if(MMYYY == monthYear )
       {
        break;
       }
      await this.datenextBtn.click();
      
    }
    const dates=await this.page.$$('//td[@class="rdtDay" and @data-month="'+month+'"]');
    for(const dt of dates){
   if(await dt.textContent()==date)
   {
       await dt.click();
       break;
   }
    }
}

// async setDueDate() {
//     // Get the start date value
//     const startDateValue = await this.page.$eval('.form-control[placeholder="Start Date"]', (startDateInput: HTMLInputElement) => startDateInput.value);

//     // Calculate the due date by adding 2 days
//     const startDate = new Date(startDateValue);
//     const dueDate = new Date(startDate.getTime() + 2 * 24 * 60 * 60 * 1000);
//     const dueDateFormatted = `${dueDate.getDate()}/${dueDate.getMonth() + 1}/${dueDate.getFullYear()}`;

//     // Set the calculated due date in the Due Date input
//     await this.page.fill('.form-control[placeholder="Due Date"]', dueDateFormatted);
// }

async SelectFormoption(formoption: string) {
    await this.Selectformclick.fill(formoption);
    await this.page.locator('//div[contains(text(),"' + formoption + '")]').first().click();
    
     
}

async ClickOnNextBtn1() {
    await this.NextButton1.click();
}
async EnterSiteName(siteName: string) {
    await this.page.waitForLoadState();
     await this.siteNameDropdownLocator.fill(siteName);
    //  await this.mysiteoptionlocator.getByText(siteName, { exact: true }).click();
    await this.page.locator('//div[contains(text(),"' + siteName + '")]').first().click();
    
 }
 async ClickOnNextBtn2() {
    await this.NextButton2.click();
 }

 async ClickOnEnableandSaveTask() {
    await this.EnableandSavaTask.click();
 }

 async EnterSearchTaskName(taskname: string) {
    await this.SearchTaskName.getByPlaceholder('Filter...').fill(taskname);
 }

 async verifySavedTask(){
    await expect( this.enableAndTaskSummaryLocator).toBeVisible();
    await this.enableAndTaskSummaryLocator.click();
}


};
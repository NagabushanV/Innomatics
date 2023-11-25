import { test, expect, Page } from '@playwright/test';
import Loginpage from "../../PageObjects/signin-page";
import datajson from "../../DataBase/commsData/comms TaskAdmin.json";
import DashboardPage from "../../PageObjects/Dashboardpage/dashboard";
import CommsTaskAdminpage from '../../PageObjects/commsPage/Comms-TaskAdmin-AddTask';



test("Verify Comms-> TaskAdmin-> should be able to add new taskAdmin details by clicking + icon.",async({page})=>{
    
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const CommsTaskAdmin = new CommsTaskAdminpage(page);
    await login.gotoLoginPage(datajson.url);
    await login.loginToApp(datajson.SuperUser, datajson.companyCode,datajson.Password);
    await login.ClickAcceptBtn();
    
    await dashBoardPage.ClickOnCommsBtn();
    await dashBoardPage.ClickOnCommsTaskBtn();
    

    await CommsTaskAdmin.ClickOnTaskAdminBtn();
    await CommsTaskAdmin.ClickOnAddTaskAdminBtn();
    await CommsTaskAdmin.ClickOnCommsTaskBtn();
    // await page.pause();
    
    await CommsTaskAdmin.AddTaskName(datajson.taskname);
    
    // await CommsTaskAdmin.UrgencyDropdownValue();
    await CommsTaskAdmin.ClickOnUrgencyDropdown(datajson.urgency);
    

    await CommsTaskAdmin.AddDueTime(datajson.Duetime);

    await CommsTaskAdmin.AddDuedate2(datajson.date, datajson.monthYear, datajson.month, datajson.year);
    // await page.pause();

    await CommsTaskAdmin.SelectFormoption(datajson.formoption);
    // await page.pause();

    await CommsTaskAdmin.ClickOnNextBtn1();

    await CommsTaskAdmin.EnterSiteName(datajson.siteName);

    await CommsTaskAdmin.ClickOnNextBtn2();

    await CommsTaskAdmin.ClickOnEnableandSaveTask();

    await CommsTaskAdmin.verifySavedTask();
    
    
});
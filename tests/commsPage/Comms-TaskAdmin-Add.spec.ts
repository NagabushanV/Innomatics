import { test,expect } from "@playwright/test";
import Loginpage from "../../PageObjects/signin-page";
import datajson from "../../DataBase/commsData/comms TaskAdmin.json";
import DashboardPage from "../../PageObjects/Dashboardpage/dashboard";
import CommsTaskAdminpage from '../../PageObjects/commsPage/Comms-TaskAdmin-AddTask';


test("Verify Comms-> TaskAdmin-> should be able to add new taskAdmin details by clicking + icon.",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const adminUserPage=new CommsTaskAdminpage();
    await login.gotoLoginPage(datajson.url);
    await login.loginToApp(datajson.SuperUser, datajson.companyCode,datajson.Password);
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    // await adminUserPage.clickOnAddBtnLandPage();

});
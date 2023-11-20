import {Page, test,expect } from "@playwright/test";
import Loginpage from "../PageObjects/signin-page";
import data from "../DataBase/login.json";
import DashboardPage from "../PageObjects/Dashboardpage/dashboard";

test.beforeEach(async ({ page }) => {
    const login = new Loginpage(page);
    await login.gotoLoginPage(data.url);
    await login.loginToApp(data.superUser, 
      data.companyCode, data.password);
    await login.ClickAcceptBtn();

})
test("Dashboard",async({page})=>{
    const dashBoardPage=new DashboardPage(page);
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
})


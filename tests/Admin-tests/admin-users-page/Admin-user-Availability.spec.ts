import { test, expect, Page } from '@playwright/test';
import Loginpage from "../../../PageObjects/signin-page";
import data from "../../../DataBase/AdminData/Preference/Admin-user-Preference.json";
import datajson from "../../../DataBase/AdminData/AdminUser/admin_userdata.json";
import AdminUsersAvailabilityPage from '../../../PageObjects/AdminPages/UsersPage/Availability/Admin-user-Availability';
import DashboardPage from '../../../PageObjects/Dashboardpage/dashboard';
import AdminUsersPage from "../../../PageObjects/AdminPages/UsersPage/admin-userpage";

test("TC02UA:-Verify that all the data entered in the fields should be shown one the Availability fields",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const adminUserPage=new AdminUsersPage(page,datajson["Test1"].usernamefilter);
    const adminUserAvailabilityPage = new AdminUsersAvailabilityPage(page);

    await login.gotoLoginPage(data['Test1'].url);
    await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
    await login.ClickAcceptBtn();
    // await page.pause();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await page.pause(); 
    await adminUserPage.clickOnAddBtnLandPage
    await page.waitForTimeout(4000);
    await adminUserPage.ClickonCancelBtn();  
    await adminUserPage.ClickOnAvailabilityBtn();
    
    await adminUserAvailabilityPage.SetUsernameDropdown(data['Test2'].UserName);
    await adminUserAvailabilityPage.verifytheAvailabiliryfields();

});


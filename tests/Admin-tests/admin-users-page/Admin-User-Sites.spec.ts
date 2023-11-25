import { test, expect, Page } from '@playwright/test';
import Loginpage from "../../../PageObjects/signin-page";
import data from "../../../DataBase/AdminData/Preference/Admin-user-Preference.json";
import datajson from "../../../DataBase/AdminData/AdminUser/admin_userdata.json";
import DashboardPage from "../../../PageObjects/Dashboardpage/dashboard";
import AdminUsersPage from "../../../PageObjects/AdminPages/UsersPage/admin-userpage";
import AdminUserSitesPage from '../../../PageObjects/AdminPages/UsersPage/Sites/Admin-User-Sites';




test("To & Fro Buttons:  Verify that the LIU can select one or more sites by ticking the checkboxes and then unassigned success message is generated successfully.",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const adminUserPage=new AdminUsersPage(page,datajson["Test1"].usernamefilter);
    const adminuserSitesPage = new AdminUserSitesPage(page);

    await page.pause();
    await login.gotoLoginPage(data['Test1'].url);
    await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
    await login.ClickAcceptBtn();
    // await page.pause();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers(); 
    await adminUserPage.clickOnAddBtnLandPage
    await page.waitForLoadState('load');
    await adminUserPage.ClickonCancelBtn();

    await adminUserPage.SetUsernameSiteDropdown(data['Test3'].UserName);
    await adminUserPage.ClickOnSitesBtn();

    await adminuserSitesPage.ClickoncheckBoxes();
    // await adminuserSitesPage.VerifyCheckBoxesToBechecked();

    await adminuserSitesPage.ClickOnUnAssignedArrowBtn();
    await adminuserSitesPage.VerifyUnAssignedsuccessMessage();
    


});

// test("Manager Sites/All Sites: Verify that When the radio button for All sites is selected the grid should use a query to populate using all sites for that Company.",async({page})=>{
//     test.setTimeout(100 * 1000);
//     const login = new Loginpage(page);
//     const dashBoardPage=new DashboardPage(page);
//     const adminUserPage=new AdminUsersPage(page,datajson["Test1"].usernamefilter);
//     const adminuserSitesPage = new AdminUserSitesPage(page);

//     await page.pause();
//     await login.gotoLoginPage(data['Test1'].url);
//     await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
//     await login.ClickAcceptBtn();
//     // await page.pause();
//     await dashBoardPage.clickOnAdmin();
//     await dashBoardPage.clickOnUsers(); 
//     await adminUserPage.clickOnAddBtnLandPage
//     await page.waitForLoadState('load');
//     await adminUserPage.ClickonCancelBtn();
//     await page.waitForTimeout(5000);
//     await adminUserPage.SetUsernameSiteDropdown(data['Test3'].UserName);
//     await adminUserPage.ClickOnSitesBtn();

// });

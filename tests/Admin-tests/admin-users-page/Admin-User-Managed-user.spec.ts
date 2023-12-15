import { test,expect } from "@playwright/test";
import Loginpage from "../../../PageObjects/signin-page";
import datajson from "../../../DataBase/AdminData/AdminUser/admin_userdata.json";
import data from "../../../DataBase/AdminData/Preference/Admin-user-Preference.json";
import AdminUserManagedUserPage from "../../../PageObjects/AdminPages/UsersPage/User-Managed-User/Admin-User-managed-user";
import DashboardPage from "../../../PageObjects/Dashboardpage/dashboard";
import AdminUsersPage from "../../../PageObjects/AdminPages/UsersPage/admin-userpage";


test("TC-UMU01-Verify that this tab would be visible to all users but only enabled for Users that have Users assigned to them.",async({page})=>{
    test.setTimeout(100 * 10000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const adminUserPage=new AdminUsersPage(page,datajson["Test1"].usernamefilter);
    const adminUserManagedUserPage=new AdminUserManagedUserPage(page);
    await login.gotoLoginPage(datajson["Test1"].url);
    await login.loginToApp(datajson["Test1"].SuperUser, datajson["Test1"].companyCode,datajson["Test1"].Password);
    await login.ClickAcceptBtn();
    // await page.pause();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await adminUserPage.clickOnAddBtnLandPage();
    await adminUserPage.ClickonCancelBtn();

    await adminUserPage.VerifyManagedUserTab();
    await adminUserPage.SetUsernameMUDropdown(data['Test4'].username);
    await adminUserPage.VerifyManagedUserTab();
    // await page.pause();
    await adminUserPage.SetUsernameMUDropdown1(data['Test4'].UserName);
    await adminUserPage.VerifyManagedUserTab1(); 



})
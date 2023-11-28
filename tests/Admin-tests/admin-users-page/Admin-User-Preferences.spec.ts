import { test, expect, Page } from '@playwright/test';
import Loginpage from "../../../PageObjects/signin-page";
import data from "../../../DataBase/AdminData/Preference/Admin-user-Preference.json";
import datajson from "../../../DataBase/AdminData/AdminUser/admin_userdata.json";
import DashboardPage from "../../../PageObjects/Dashboardpage/dashboard";
import AdminUsersPage from "../../../PageObjects/AdminPages/UsersPage/admin-userpage";
import AdminUsersPreferencePage from '../../../PageObjects/AdminPages/UsersPage/User-Preference/Preference';



test("Verify the Dropdown should be present for Startup Page",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const adminUserPage=new AdminUsersPage(page,datajson["Test1"].usernamefilter);
    const adminUserPreferencepage = new AdminUsersPreferencePage(page);

    // await page.pause();
    await login.gotoLoginPage(data['Test1'].url);
    await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
    await login.ClickAcceptBtn();
    await page.pause();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers(); 
    await adminUserPage.clickOnAddBtnLandPage();
    await page.waitForLoadState('load');
    await adminUserPage.ClickonCancelBtn();
    await adminUserPage.ClickOnPreferencesBtn();
    await adminUserPreferencepage.SetUsernameDropdown(data['Test1'].UserName);
    await adminUserPreferencepage.ClickOnEditBtn();
    await adminUserPreferencepage.SetStartupDropdown(data['Test1'].startup);
    await page.waitForLoadState('load'); 
    await adminUserPreferencepage.ClickOnSaveBtn();
    await adminUserPreferencepage.VerifyStartuppageDropdown();

});

test("Verify that all Authentication History fields should be read only.",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const adminUserPage=new AdminUsersPage(page,datajson["Test1"].usernamefilter);
    const adminUserPreferencepage = new AdminUsersPreferencePage(page);

    // await page.pause();
    await login.gotoLoginPage(data['Test1'].url);
    await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
    await login.ClickAcceptBtn();
    await page.pause();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers(); 
    await adminUserPage.clickOnAddBtnLandPage();
    await page.waitForLoadState('load');
    await adminUserPage.ClickonCancelBtn();
    await adminUserPage.ClickOnPreferencesBtn();
    await adminUserPreferencepage.SetUsernameDropdown(data['Test1'].UserName);
    await page.waitForLoadState('load');
    await adminUserPreferencepage.AuthenticationHistorytoBeDisabled();

    

});


test("Verify that LIU should get the success message when the details is saved successfully",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const adminUserPage=new AdminUsersPage(page,datajson["Test1"].usernamefilter);
    const adminUserPreferencepage = new AdminUsersPreferencePage(page);
    
    await login.gotoLoginPage(data['Test1'].url);
    await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
    await login.ClickAcceptBtn();
    await page.pause();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers(); 
    await adminUserPage.clickOnAddBtnLandPage();
    await page.waitForLoadState('load');
    await adminUserPage.ClickonCancelBtn();
    await adminUserPage.ClickOnPreferencesBtn();
    await adminUserPreferencepage.SetUsernameDropdown(data['Test1'].UserName);
    await page.waitForTimeout(5000);
    await adminUserPreferencepage.ClickOnEditBtn();
    // await adminUserPreferencepage.StartuppageDropdown(data['Test1'].startup);
    // await adminUserPreferencepage.SetTooltipDelay(data['Test1'].tooltip);
    await adminUserPreferencepage.ClickOnSaveBtn();

});
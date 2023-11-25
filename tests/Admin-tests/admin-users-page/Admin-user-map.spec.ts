import { test, expect, Page } from '@playwright/test';
import Loginpage from "../../../PageObjects/signin-page";
import data from "../../../DataBase/AdminData/Preference/Admin-user-Preference.json";
import datajson from "../../../DataBase/AdminData/AdminUser/admin_userdata.json";
import AdminUsersMapPage from '../../../PageObjects/AdminPages/UsersPage/Map/Admin-User-map';
import AdminUsersPreferencePage from '../../../PageObjects/AdminPages/UsersPage/Preference/Preference';
import DashboardPage from '../../../PageObjects/Dashboardpage/dashboard';
import AdminUsersPage from "../../../PageObjects/AdminPages/UsersPage/admin-userpage";


test("Verify Map displays the location of the User one the map and the Sites that they have been allocated to",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const adminUserPage=new AdminUsersPage(page,datajson["Test1"].usernamefilter);
    const adminUserPreferencepage = new AdminUsersPreferencePage(page);
    const adminUserMapPage = new AdminUsersMapPage(page);
    await page.pause();
    await login.gotoLoginPage(data['Test1'].url);
    await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
    await login.ClickAcceptBtn();
    
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers(); 
    await adminUserPage.clickOnAddBtnLandPage
    await page.waitForTimeout(4000);
    await adminUserPage.ClickonCancelBtn(); 
    await adminUserPage.SetUsernamemapDropdown(data['Test3'].UserName); 
    await adminUserPage.ClickOnUserMapBtn();
    await adminUserMapPage.ClicOnAlertOkBtn();
    await adminUserMapPage.verifytheUserLocation();



});


test("Verify that the user can Zoom out the map by clicking the - icon",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const adminUserPage=new AdminUsersPage(page,datajson["Test1"].usernamefilter);
    const adminUserPreferencepage = new AdminUsersPreferencePage(page);
    const adminUserMapPage = new AdminUsersMapPage(page);
    
    await login.gotoLoginPage(data['Test1'].url);
    await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
    await login.ClickAcceptBtn();
    await page.pause();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers(); 
    await adminUserPage.clickOnAddBtnLandPage
    await page.waitForTimeout(4000);
    await adminUserPage.ClickonCancelBtn(); 
    await adminUserPage.SetUsernamemapDropdown(data['Test3'].UserName); 
    await adminUserPage.ClickOnUserMapBtn();
    await adminUserMapPage.ClicOnAlertOkBtn();
    // await adminUserMapPage.verifytheUserLocation();
    await adminUserMapPage.ClickOnZoomOutBtn();
    
    

});
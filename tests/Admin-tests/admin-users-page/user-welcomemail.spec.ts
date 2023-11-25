import { test, expect, Page } from '@playwright/test';
import Loginpage from "../../../PageObjects/signin-page";
import datajson from "../../../DataBase/AdminData/AdminUser/Asmin-user-add-save.json";
import DashboardPage from "../../../PageObjects/Dashboardpage/dashboard";
import AdminUsersPage from "../../../PageObjects/AdminPages/UsersPage/admin-userpage";


test("Verify that the LIU should able to click Send Welcome Mail Button once all the mandatory fields are filled.",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const adminUserPage=new AdminUsersPage(page,datajson.usernamefilter);
    await login.gotoLoginPage(datajson.url);
    await login.loginToApp(datajson.SuperUser, datajson.companyCode,datajson.Password);
    await login.ClickAcceptBtn();
    await page.pause();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await adminUserPage.clickOnAddBtnLandPage();
    await adminUserPage.addPasswordType(datajson.passwordType);
    await adminUserPage.addFirstName(datajson.firstName);
    await adminUserPage.addLastName(datajson.lastName);
    await adminUserPage.addUsername(datajson.username);
    await adminUserPage.addEmailAddess(datajson.email);
    await adminUserPage.addPosition(datajson.position);
    await adminUserPage.addPostcode(datajson.postcode);
    await adminUserPage.addUserRegion(datajson.userRegion);
    await adminUserPage.addUserDivision(datajson.userDivision);
    await adminUserPage.addSecurityRole(datajson.securityRole);
    await adminUserPage.addCountry(datajson.country);
    await adminUserPage.addState(datajson.state);
    await adminUserPage.addTimeZone(datajson.timeZone);
    await adminUserPage.addSuburb(datajson.subrub);
    await adminUserPage.addGender(datajson.gender);
    await adminUserPage.addNickName(datajson.nickName);
    await adminUserPage.addAsset(datajson.asset);
    await adminUserPage.clickOnSaveBtn();
    await page.waitForLoadState('load');
    await adminUserPage.verifyConfirmationMessage(datajson.expectedMessage);
    
    await adminUserPage.ClickOnSendWelcomeMailBtn();
    await adminUserPage.VerifywelcomemailsentAlertmessage();
    

});


test("Security Role: Verify that If the LIU selects SuperUser a dropdown for the Company Role should appears.",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const adminUserPage=new AdminUsersPage(page,datajson.usernamefilter);
    await login.gotoLoginPage(datajson.url);
    await login.loginToApp(datajson.SuperUser, datajson.companyCode,datajson.Password);
    await login.ClickAcceptBtn();
    await page.pause();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await adminUserPage.clickOnAddBtnLandPage();
    await adminUserPage.addPasswordType(datajson.passwordType);
    await adminUserPage.addFirstName(datajson.firstName);
    await adminUserPage.addLastName(datajson.lastName);
    await adminUserPage.addUsername(datajson.username);
    await adminUserPage.addEmailAddess(datajson.email);
    await adminUserPage.addPosition(datajson.position);
    await adminUserPage.addPostcode(datajson.postcode);
    await adminUserPage.addUserRegion(datajson.userRegion);
    await adminUserPage.addUserDivision(datajson.userDivision);
    await adminUserPage.addSecurityRole(datajson.securityRole);
    await adminUserPage.VerifyCompanyRoleAppear();
    
    

});


test("Security Role: Verify that If the LIU selects User two dropdowns one for Manager (Mandatory) and the other for Company Role should appear.",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const adminUserPage=new AdminUsersPage(page,datajson.usernamefilter);
    await login.gotoLoginPage(datajson.url);
    await login.loginToApp(datajson.SuperUser, datajson.companyCode,datajson.Password);
    await login.ClickAcceptBtn();
    await page.pause();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await adminUserPage.clickOnAddBtnLandPage();
    await adminUserPage.addPasswordType(datajson.passwordType);
    await adminUserPage.addFirstName(datajson.firstName);
    await adminUserPage.addLastName(datajson.lastName);
    await adminUserPage.addUsername(datajson.username);
    await adminUserPage.addEmailAddess(datajson.email);
    await adminUserPage.addPosition(datajson.position);
    await adminUserPage.addPostcode(datajson.postcode);
    await adminUserPage.addUserRegion(datajson.userRegion);
    await adminUserPage.addUserDivision(datajson.userDivision);
    await adminUserPage.addSecurityRole1(datajson.securityRole1);
    // await page.pause();
    await adminUserPage.verifyManagerAppear();
    await adminUserPage.VerifyCompanyRoleAppear();
    
    

});


test("Asset Role: Verify that the Asset Roles can be assigned to a User here.",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const adminUserPage=new AdminUsersPage(page,datajson.usernamefilter);
    await page.pause();
    await login.gotoLoginPage(datajson.url);
    await login.loginToApp(datajson.SuperUser, datajson.companyCode,datajson.Password);
    await login.ClickAcceptBtn();
    // await page.pause();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await adminUserPage.clickOnAddBtnLandPage();
    await adminUserPage.addPasswordType(datajson.passwordType);
    await adminUserPage.addFirstName(datajson.firstName);
    await adminUserPage.addLastName(datajson.lastName);
    await adminUserPage.addUsername(datajson.username);
    await adminUserPage.addEmailAddess(datajson.email);
    await adminUserPage.addPosition(datajson.position);
    await adminUserPage.addPostcode(datajson.postcode);
    await adminUserPage.addUserRegion(datajson.userRegion);
    await adminUserPage.addUserDivision(datajson.userDivision);
    await adminUserPage.addSecurityRole(datajson.securityRole);
    await adminUserPage.addCountry(datajson.country);
    await adminUserPage.addState(datajson.state);
    await adminUserPage.addTimeZone(datajson.timeZone);
    await adminUserPage.addSuburb(datajson.subrub);
    await adminUserPage.addGender(datajson.gender);
    await adminUserPage.addNickName(datajson.nickName);
    await adminUserPage.addAsset1(datajson.asset1);

    await adminUserPage.clickOnSaveBtn();
    await adminUserPage.verifyConfirmationMessage(datajson.expectedMessage);
    await adminUserPage.verifyAssetRolefilled();   

});
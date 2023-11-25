import { test,expect } from "@playwright/test";
import Loginpage from "../../../PageObjects/signin-page";
import datajson from "../../../DataBase/AdminData/AdminUser/admin_userdata.json";
import DashboardPage from "../../../PageObjects/Dashboardpage/dashboard";
import AdminUsersPage from "../../../PageObjects/AdminPages/UsersPage/admin-userpage";


test("Verify that LIU should be able to add new users details by clicking + icon.",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const adminUserPage=new AdminUsersPage(page,datajson["Test1"].usernamefilter);
    await login.gotoLoginPage(datajson["Test1"].url);
    await login.loginToApp(datajson["Test1"].SuperUser, datajson["Test1"].companyCode,datajson["Test1"].Password);
    await login.ClickAcceptBtn();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await page.pause();
    await adminUserPage.clickOnAddBtnLandPage();
    await adminUserPage.addPasswordType(datajson["Test1"].passwordType);
    await adminUserPage.addFirstName(datajson["Test1"].firstName);
    await adminUserPage.addLastName(datajson["Test1"].lastName);
    await adminUserPage.addUsername(datajson["Test1"].username);
    await adminUserPage.addEmailAddess(datajson["Test1"].email);
    await adminUserPage.addPosition(datajson["Test1"].position);
    await adminUserPage.addPostcode(datajson["Test1"].postcode);
    await adminUserPage.addUserRegion(datajson["Test1"].userRegion);
    await adminUserPage.addUserDivision(datajson["Test1"].userDivision);
    await adminUserPage.addSecurityRole(datajson["Test1"].securityRole);
    await adminUserPage.addCountry(datajson["Test1"].country);
    await adminUserPage.addState(datajson["Test1"].state);
    await adminUserPage.addTimeZone(datajson["Test1"].timeZone);
    await adminUserPage.addSuburb(datajson["Test1"].subrub);
    await adminUserPage.addGender(datajson["Test1"].gender);
    await adminUserPage.addNickName(datajson["Test1"].nickName);
    await adminUserPage.addAsset(datajson["Test1"].asset);
    await adminUserPage.clickOnSaveBtn();
    await adminUserPage.verifyConfirmationMessage(datajson["Test1"].expectedMessage);
    await adminUserPage.verifyIfUserCreated();
   

})

test("Verify that the LIU should be able to search the newly added user details ", async ({ page }) => {
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const adminUserPage = new AdminUsersPage(page, datajson["Test3"].username);
    await login.gotoLoginPage(datajson["Test3"].url);
    await login.loginToApp(datajson["Test3"].SuperUser, datajson["Test3"].companyCode, datajson["Test3"].Password);
    await page.pause();
    await login.ClickAcceptBtn();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await adminUserPage.clickOnAddBtnLandPage();
    await adminUserPage.addPasswordType(datajson["Test3"].passwordType);
    await adminUserPage.addFirstName(datajson["Test3"].firstName);
    await adminUserPage.addLastName(datajson["Test3"].lastName);
    await adminUserPage.addUsername(datajson["Test3"].username);
    await adminUserPage.addEmailAddess(datajson["Test3"].email);
    await adminUserPage.addPosition(datajson["Test3"].position);
    await adminUserPage.addPostcode(datajson["Test3"].postcode);
    await adminUserPage.addUserRegion(datajson["Test3"].userRegion);
    await adminUserPage.addUserDivision(datajson["Test3"].userDivision);
    await adminUserPage.addSecurityRole(datajson["Test3"].securityRole);
    await adminUserPage.addCountry(datajson["Test3"].country);
    await adminUserPage.addState(datajson["Test3"].state);
    await adminUserPage.addTimeZone(datajson["Test3"].timeZone);
    await adminUserPage.addSuburb(datajson["Test3"].subrub);
    await adminUserPage.addGender(datajson["Test3"].gender);
    await adminUserPage.addNickName(datajson["Test3"].nickName);
    await adminUserPage.addAsset(datajson["Test3"].asset);
    await adminUserPage.clickOnSaveBtn();
    await adminUserPage.verifyIfUserCreated();
    await adminUserPage.verifyIfUserCouldBeSearched(datajson["Test3"].username);
})



test("Verify that LIU should be able to delete any user details ", async ({ page }) => {
    
    const login = new Loginpage(page);
    const dashBoardPage = new DashboardPage(page);
    const adminUserPage = new AdminUsersPage(page, datajson["Test2"].username);
    await login.gotoLoginPage(datajson["Test2"].url);
    await login.loginToApp(datajson["Test2"].SuperUser, datajson["Test2"].companyCode, datajson["Test2"].Password);
    await login.ClickAcceptBtn();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    // await page.pause();
    await adminUserPage.clickOnAddBtnLandPage();
    await adminUserPage.addPasswordType(datajson["Test2"].passwordType);
    await adminUserPage.addFirstName(datajson["Test2"].firstName);
    await adminUserPage.addLastName(datajson["Test2"].lastName);
    await adminUserPage.addUsername(datajson["Test2"].username);
    await adminUserPage.addEmailAddess(datajson["Test2"].email);
    await adminUserPage.addPosition(datajson["Test2"].position);
    await adminUserPage.addPostcode(datajson["Test2"].postcode);
    await adminUserPage.addUserRegion(datajson["Test2"].userRegion);
    await adminUserPage.addUserDivision(datajson["Test2"].userDivision);
    await adminUserPage.addSecurityRole(datajson["Test2"].securityRole);
    await adminUserPage.addCountry(datajson["Test2"].country);
    await adminUserPage.addState(datajson["Test2"].state);
    await adminUserPage.addTimeZone(datajson["Test2"].timeZone);
    await adminUserPage.addSuburb(datajson["Test2"].subrub);
    await adminUserPage.addGender(datajson["Test2"].gender);
    await adminUserPage.addNickName(datajson["Test2"].nickName);
    await adminUserPage.addAsset(datajson["Test2"].asset);
    await adminUserPage.clickOnSaveBtn();
    await adminUserPage.verifyIfUserCreated();
    await adminUserPage.clickOnDeleteBtn();
    await adminUserPage.verifyUserCanBeDeleted();
    await adminUserPage.verifyDeletePrompt(datajson["Test2"].deletePropmtMessage);


})

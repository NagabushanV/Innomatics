import { test,expect } from "@playwright/test";
import Loginpage from "../../../PageObjects/signin-page";
import datajson from "../../../DataBase/AdminData/AdminUser/Asmin-user-add-save.json";
import DashboardPage from "../../../PageObjects/Dashboardpage/dashboard";
import AdminUsersPage from "../../../PageObjects/AdminPages/UsersPage/admin-userpage";


test("Verify that LIU should be able to save successfully the user details by clicking Save button.",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const adminUserPage=new AdminUsersPage(page,datajson.usernamefilter);
    await login.gotoLoginPage(datajson.url);
    await login.loginToApp(datajson.SuperUser, datajson.companyCode,datajson.Password);
    await login.ClickAcceptBtn();
    // await page.pause();
    await dashBoardPage.clickOnAdmin();
    await dashBoardPage.clickOnUsers();
    await page.pause();
    await adminUserPage.clickOnAddBtnLandPage();
    await adminUserPage.addPasswordType(datajson.passwordType);
    await adminUserPage.addFirstName(datajson.firstName);
    await adminUserPage.addLastName(datajson.lastName);
    await adminUserPage.addUsername(datajson.username);
    await adminUserPage.addEmailAddess(datajson.email);
    await adminUserPage.addPosition(datajson.position);
    await adminUserPage.addPostcode(datajson.postcode);
    // await adminUserPage.addUserRegion(datajson.userRegion);
    // await adminUserPage.addUserDivision(datajson.userDivision);
    await adminUserPage.addSecurityRole(datajson.securityRole);
    await adminUserPage.addCountry(datajson.country);
    await adminUserPage.addState(datajson.state);
    await adminUserPage.addTimeZone(datajson.timeZone);
    await adminUserPage.addSuburb(datajson.subrub);
    // await adminUserPage.addGender(datajson.gender);
    await adminUserPage.addNickName(datajson.nickName);
    await adminUserPage.addAsset(datajson.asset);
    await adminUserPage.clickOnSaveBtn();
    await adminUserPage.verifyConfirmationMessage(datajson.expectedMessage);
    // await adminUserPage.verifyIfUserCreated();
   

})


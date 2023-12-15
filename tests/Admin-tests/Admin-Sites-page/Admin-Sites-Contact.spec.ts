// import { test, expect, Page } from '@playwright/test';
// import Loginpage from "../../../PageObjects/signin-page";
// import data from "../../../DataBase/AdminData/AdminSites/admin_Sitesdata.json";
// import DashboardPage from '../../../PageObjects/Dashboardpage/dashboard';
// import AdminSitesPage from '../../../PageObjects/AdminPages/SitesPage/admin-Sitespage';
// import AdminSitesContactsPage from "../../../PageObjects/AdminPages/SitesPage/Sites-Contacts/Admin-Sites-Contactspage";

// test("Verify that LIU should be able to select and save the single and multiple Site Email contact by clicking edit icon.",async({page})=>{
//     test.setTimeout(100 * 1000);
//     const login = new Loginpage(page);
//     const dashBoardPage=new DashboardPage(page);
//     const adminSitesPage = new AdminSitesPage(page);
//     const adminSitesContactsPage = new AdminSitesContactsPage(page);

//     await login.gotoLoginPage(data['Test1'].url);
//     await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
//     await login.ClickAcceptBtn();
    
//     await dashBoardPage.clickOnAdmin();
//     await dashBoardPage.ClickOnSitesBtn();
//     await page.pause();
//     await adminSitesPage.clickOnSitesAddBtnPage();
//     await adminSitesPage.ClickOnCancelBtn();
//     await adminSitesPage.ClickOnContactBtn();
//     await adminSitesContactsPage.SetSiteNameDropdown(data['Test1'].Sitename);
//     // await page.pause();
//     await adminSitesContactsPage.ClickOnEditBtn();
//     await adminSitesContactsPage.ClickOnSiteEmailBtn();
    
//     await adminSitesContactsPage.ClickOnsingleCheckbox();
//     await adminSitesContactsPage.ClickOnRightArrowBtn();
//     await adminSitesContactsPage.ClickOnCloseBtn();
//     await adminSitesContactsPage.ClickOnSaveBtn();
//     await adminSitesContactsPage.verifySiteEmailTextContain();

//     await adminSitesContactsPage.ClickOnEditBtn();
//     await adminSitesContactsPage.ClickOnSiteEmailBtn();
//     await adminSitesContactsPage.ClickOnMultipleCheckbox();
//     await adminSitesContactsPage.ClickOnRightArrowBtn();
//     await adminSitesContactsPage.ClickOnCloseBtn();
//     await adminSitesContactsPage.ClickOnSaveBtn();
//     await adminSitesContactsPage.verifySiteEmailTextContainMultiple();


    

// });


// test("Verify that LIU should be able to select and save the single and multiple Site Assistant Manager contact by clicking edit icon",async({page})=>{
//     test.setTimeout(100 * 10000);
//     const login = new Loginpage(page);
//     const dashBoardPage=new DashboardPage(page);
//     const adminSitesPage = new AdminSitesPage(page);
//     const adminSitesContactsPage = new AdminSitesContactsPage(page);

//     await login.gotoLoginPage(data['Test1'].url);
//     await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
//     await login.ClickAcceptBtn();
    
//     await dashBoardPage.clickOnAdmin();
//     await dashBoardPage.ClickOnSitesBtn();
//     // await page.pause();
//     await adminSitesPage.clickOnSitesAddBtnPage();
//     await adminSitesPage.ClickOnCancelBtn();
//     await adminSitesPage.ClickOnContactBtn();
//     await adminSitesContactsPage.SetSiteNameDropdown(data['Test1'].Sitename);
//     await adminSitesContactsPage.ClickOnEditBtn();
//     await adminSitesContactsPage.ClickOnSiteAssistentManagerBtn();
    
//     await adminSitesContactsPage.ClickOnsingleCheckbox();
//     await adminSitesContactsPage.ClickOnRightArrowBtn();
//     await adminSitesContactsPage.ClickOnCloseBtn();
//     await adminSitesContactsPage.ClickOnSaveBtn();
//     await adminSitesContactsPage.VerifySiteAssistentManagerText();

//     await adminSitesContactsPage.ClickOnEditBtn();
//     await adminSitesContactsPage.ClickOnSiteAssistentManagerBtn();
//     await adminSitesContactsPage.ClickOnMultipleCheckbox();
//     await adminSitesContactsPage.ClickOnRightArrowBtn();
//     await adminSitesContactsPage.ClickOnCloseBtn();
//     await adminSitesContactsPage.ClickOnSaveBtn();
//     await adminSitesContactsPage.VerifySiteAssistentManagerTextMultiple();
// });






// test("Verify that LIU should be able to select and save the single and multiple Site Operator contact by clicking edit icon",async({page})=>{
//     test.setTimeout(100 * 1000);
//     const login = new Loginpage(page);
//     const dashBoardPage=new DashboardPage(page);
//     const adminSitesPage = new AdminSitesPage(page);
//     const adminSitesContactsPage = new AdminSitesContactsPage(page);

//     await login.gotoLoginPage(data['Test1'].url);
//     await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
//     await login.ClickAcceptBtn();
    
//     await dashBoardPage.clickOnAdmin();
//     await dashBoardPage.ClickOnSitesBtn();
//     await page.pause();
//     await adminSitesPage.clickOnSitesAddBtnPage();
//     await adminSitesPage.ClickOnCancelBtn();
//     await adminSitesPage.ClickOnContactBtn();
//     await adminSitesContactsPage.SetSiteNameDropdown(data['Test1'].Sitename);
//     await adminSitesContactsPage.ClickOnEditBtn();
//     await adminSitesContactsPage.ClickOnSiteOperatorBtn();
//     await adminSitesContactsPage.ClickOnsingleCheckbox();
//     await adminSitesContactsPage.ClickOnRightArrowBtn();
//     await adminSitesContactsPage.ClickOnCloseBtn();
//     await adminSitesContactsPage.ClickOnSaveBtn();
//     await adminSitesContactsPage.VerifySiteOperatorText   

//     await adminSitesContactsPage.ClickOnEditBtn();
//     await adminSitesContactsPage.ClickOnSiteOperatorBtn();
//     await adminSitesContactsPage.ClickOnMultipleCheckbox();
//     await adminSitesContactsPage.ClickOnRightArrowBtn();
//     await adminSitesContactsPage.ClickOnCloseBtn();
//     await adminSitesContactsPage.ClickOnSaveBtn();
//     await adminSitesContactsPage.VerifySiteOperatorTextMultiple();

// });

// test("Verify that LIU should be able to select and save the single and multiple Site Reviewer contact by clicking edit icon",async({page})=>{
//     test.setTimeout(100 * 1000);
//     const login = new Loginpage(page);
//     const dashBoardPage=new DashboardPage(page);
//     const adminSitesPage = new AdminSitesPage(page);
//     const adminSitesContactsPage = new AdminSitesContactsPage(page);

//     await login.gotoLoginPage(data['Test1'].url);
//     await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
//     await login.ClickAcceptBtn();
    
//     await dashBoardPage.clickOnAdmin();
//     await dashBoardPage.ClickOnSitesBtn();
//     await page.pause();
//     await adminSitesPage.clickOnSitesAddBtnPage();
//     await adminSitesPage.ClickOnCancelBtn();
//     await adminSitesPage.ClickOnContactBtn();
//     await adminSitesContactsPage.SetSiteNameDropdown(data['Test1'].Sitename);
//     await adminSitesContactsPage.ClickOnEditBtn();
//     await adminSitesContactsPage.ClickOnSiteReviewreBtn();
//     await adminSitesContactsPage.ClickOnsingleCheckbox();
//     await adminSitesContactsPage.ClickOnRightArrowBtn();
//     await adminSitesContactsPage.ClickOnCloseBtn();
//     await adminSitesContactsPage.ClickOnSaveBtn();
//     await adminSitesContactsPage.VerifySiteReviewerText(); 
    
//     await adminSitesContactsPage.ClickOnEditBtn();
//     await adminSitesContactsPage.ClickOnSiteReviewreBtn();
//     await adminSitesContactsPage.ClickOnMultipleCheckbox();
//     await adminSitesContactsPage.ClickOnRightArrowBtn();
//     await adminSitesContactsPage.ClickOnCloseBtn();
//     await adminSitesContactsPage.ClickOnSaveBtn();
//     await adminSitesContactsPage.VerifySiteReviewerTextMultiple();

// });

// test("Verify that LIU should be able to select and save the single and multiple Site Escalation Contact contact by clicking edit icon",async({page})=>{
//     test.setTimeout(100 * 1000);
//     const login = new Loginpage(page);
//     const dashBoardPage=new DashboardPage(page);
//     const adminSitesPage = new AdminSitesPage(page);
//     const adminSitesContactsPage = new AdminSitesContactsPage(page);

//     await login.gotoLoginPage(data['Test1'].url);
//     await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
//     await login.ClickAcceptBtn();
    
//     await dashBoardPage.clickOnAdmin();
//     await dashBoardPage.ClickOnSitesBtn();
//     await page.pause();
//     await adminSitesPage.clickOnSitesAddBtnPage();
//     await adminSitesPage.ClickOnCancelBtn();
//     await adminSitesPage.ClickOnContactBtn();
//     await adminSitesContactsPage.SetSiteNameDropdown(data['Test1'].Sitename);
//     await adminSitesContactsPage.ClickOnEditBtn();
//     await adminSitesContactsPage.ClickOnSiteEscalationBtn();
//     await adminSitesContactsPage.ClickOnsingleCheckbox();
//     await adminSitesContactsPage.ClickOnRightArrowBtn();
//     await adminSitesContactsPage.ClickOnCloseBtn();
//     await adminSitesContactsPage.ClickOnSaveBtn();
//     await adminSitesContactsPage.VerifySiteEscalationText(); 
    
//     await adminSitesContactsPage.ClickOnEditBtn();
//     await adminSitesContactsPage.ClickOnSiteEscalationBtn();
//     await adminSitesContactsPage.ClickOnMultipleCheckbox();
//     await adminSitesContactsPage.ClickOnRightArrowBtn();
//     await adminSitesContactsPage.ClickOnCloseBtn();
//     await adminSitesContactsPage.ClickOnSaveBtn();
//     await adminSitesContactsPage.VerifySiteEscalationTextMultiple();

// });


// test("Verify that LIU should be able to select and save the single and multiple Tank Issue contact by clicking edit icon",async({page})=>{
//     test.setTimeout(100 * 1000);
//     const login = new Loginpage(page);
//     const dashBoardPage=new DashboardPage(page);
//     const adminSitesPage = new AdminSitesPage(page);
//     const adminSitesContactsPage = new AdminSitesContactsPage(page);

//     await login.gotoLoginPage(data['Test1'].url);
//     await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
//     await login.ClickAcceptBtn();
    
//     await dashBoardPage.clickOnAdmin();
//     await dashBoardPage.ClickOnSitesBtn();
//     await page.pause();
//     await adminSitesPage.clickOnSitesAddBtnPage();
//     await adminSitesPage.ClickOnCancelBtn();
//     await adminSitesPage.ClickOnContactBtn();
//     await adminSitesContactsPage.SetSiteNameDropdown(data['Test1'].Sitename);
//     await adminSitesContactsPage.ClickOnEditBtn();
//     await adminSitesContactsPage.ClickOnTankIssueBtn();
//     await adminSitesContactsPage.ClickOnsingleCheckbox();
//     await adminSitesContactsPage.ClickOnRightArrowBtn();
//     await adminSitesContactsPage.ClickOnCloseBtn();
//     await adminSitesContactsPage.ClickOnSaveBtn();
//     await adminSitesContactsPage.VerifyTankIssueText(); 
    
//     await adminSitesContactsPage.ClickOnEditBtn();
//     await adminSitesContactsPage.ClickOnTankIssueBtn();
//     await adminSitesContactsPage.ClickOnMultipleCheckbox();
//     await adminSitesContactsPage.ClickOnRightArrowBtn();
//     await adminSitesContactsPage.ClickOnCloseBtn();
//     await adminSitesContactsPage.ClickOnSaveBtn();
//     await adminSitesContactsPage.VerifyTankIssueTextMultiple();

// });

// test("Verify that LIU should be able to select and save the single and multiple Associations contact by clicking edit icon",async({page})=>{
//     test.setTimeout(100 * 1000);
//     const login = new Loginpage(page);
//     const dashBoardPage=new DashboardPage(page);
//     const adminSitesPage = new AdminSitesPage(page);
//     const adminSitesContactsPage = new AdminSitesContactsPage(page);

//     await login.gotoLoginPage(data['Test1'].url);
//     await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
//     await login.ClickAcceptBtn();
    
//     await dashBoardPage.clickOnAdmin();
//     await dashBoardPage.ClickOnSitesBtn();
//     await page.pause();
//     await adminSitesPage.clickOnSitesAddBtnPage();
//     await adminSitesPage.ClickOnCancelBtn();
//     await adminSitesPage.ClickOnContactBtn();
//     await adminSitesContactsPage.SetSiteNameDropdown(data['Test1'].Sitename);
//     await adminSitesContactsPage.ClickOnEditBtn();
//     await adminSitesContactsPage.ClickOnAssociationBtn();
//     await adminSitesContactsPage.ClickOnsingleCheckbox();
//     await adminSitesContactsPage.ClickOnRightArrowBtn();
//     await adminSitesContactsPage.ClickOnCloseBtn();
//     await adminSitesContactsPage.ClickOnSaveBtn();
//     await adminSitesContactsPage.VerifyAssociatioText(); 
    
//     await adminSitesContactsPage.ClickOnEditBtn();
//     await adminSitesContactsPage.ClickOnAssociationBtn();
//     await adminSitesContactsPage.ClickOnMultipleCheckbox();
//     await adminSitesContactsPage.ClickOnRightArrowBtn();
//     await adminSitesContactsPage.ClickOnCloseBtn();
//     await adminSitesContactsPage.ClickOnSaveBtn();
//     await adminSitesContactsPage.VerifyAssociatioTextMultiple();

// });


// test("Verify that LIU should be able to check and uncheck the Manifest checkbox",async({page})=>{
//     test.setTimeout(100 * 1000);
//     const login = new Loginpage(page);
//     const dashBoardPage=new DashboardPage(page);
//     const adminSitesPage = new AdminSitesPage(page);
//     const adminSitesContactsPage = new AdminSitesContactsPage(page);

//     await login.gotoLoginPage(data['Test1'].url);
//     await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
//     await login.ClickAcceptBtn();
    
//     await dashBoardPage.clickOnAdmin();
//     await dashBoardPage.ClickOnSitesBtn();
//     await page.pause();
//     await adminSitesPage.clickOnSitesAddBtnPage();
//     await adminSitesPage.ClickOnCancelBtn();
//     await adminSitesPage.ClickOnContactBtn();
//     await adminSitesContactsPage.SetSiteNameDropdown(data['Test1'].Sitename);
//     await adminSitesContactsPage.ClickOnEditBtn();

//     await adminSitesContactsPage.ClickOnmanifastCheckBox();
//     await adminSitesContactsPage.ClickOnSaveBtn();
//     await adminSitesContactsPage.VerifymanifastCheckBox();
//     await adminSitesContactsPage.ClickOnEditBtn();
//     await adminSitesContactsPage.ClickOnmanifastCheckBoxUnChecked();
//     await adminSitesContactsPage.ClickOnSaveBtn();
//     await adminSitesContactsPage.VerifymanifastCheckBoxUnChecked();
    
// });

// test("Additional Site Contacts  Verify that from the Company Settings Company Lists  Additional Site Contact > click "+" icon > Add the Contacts and see that contact label should be shown in the Sites  Contacts  Additional Site Contacts",async({page})=>{
//     test.setTimeout(100 * 1000);
//     const login = new Loginpage(page);
//     const dashBoardPage=new DashboardPage(page);
//     const adminSitesPage = new AdminSitesPage(page);
//     const adminSitesContactsPage = new AdminSitesContactsPage(page);

//     await login.gotoLoginPage(data['Test1'].url);
//     await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
//     await login.ClickAcceptBtn();
    
//     await dashBoardPage.clickOnAdmin();
//     await dashBoardPage.ClickOnSitesBtn();
//     await page.pause();
//     await adminSitesPage.clickOnSitesAddBtnPage();
//     await adminSitesPage.ClickOnCancelBtn();
//     await adminSitesPage.ClickOnContactBtn();
//     await adminSitesContactsPage.SetSiteNameDropdown(data['Test1'].Sitename);

//     await adminSitesContactsPage.ClickOnAddAdditionalContactBtn();
//     await adminSitesContactsPage.SetContactLabel(data['Test2'].contact);
//     await adminSitesContactsPage.ClickOnSaveContactLabelBtn();
//     await adminSitesContactsPage.VerifyContactLabalinAdditionalContact();
    
// });
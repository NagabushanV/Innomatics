import { test, expect, Page } from '@playwright/test';
import Loginpage from "../../../PageObjects/signin-page";
import data from "../../../DataBase/DriveOFF/DriveOFF_Driveoffdata.json";
import DashboardPage from '../../../PageObjects/Dashboardpage/dashboard';
import DriveoffReportsPage from '../../../PageObjects/DriveOFFPage/Driveoffpage/Reports';
import DriveoffPage from '../../../PageObjects/DriveOFFPage/Driveoffpage/Driveoff-Vehicle';



test("Verify that Site Name dropdown should allow the LIU to select a Site from the List of Sites as the Report", async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const reportsPage=new DriveoffReportsPage(page);

    await login.gotoLoginPage(data['Test1'].url);
    await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
    await login.ClickAcceptBtn();
    
    await dashBoardPage.ClickOnDriveOFFBtn();
    await dashBoardPage.ClickOnReportsBtn();

    await reportsPage.setSiteDropdown(data['Test5'].site);
    await reportsPage.veriFySiteDropdown();

});


test("Verify that Site No. dropdown should automatically populated once the Site Name is selected.",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const reportsPage=new DriveoffReportsPage(page);

    await login.gotoLoginPage(data['Test1'].url);
    await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
    await login.ClickAcceptBtn();
    
    await dashBoardPage.ClickOnDriveOFFBtn();
    await dashBoardPage.ClickOnReportsBtn();

    await reportsPage.setSiteDropdown(data['Test5'].site);
    await reportsPage.veriFySiteNo();

});


test("Verify that the Site Name dropdown should automatically be populated once the Site No. is selected.",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const reportsPage=new DriveoffReportsPage(page);

    await login.gotoLoginPage(data['Test1'].url);
    await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
    await login.ClickAcceptBtn();
    
    await dashBoardPage.ClickOnDriveOFFBtn();
    await dashBoardPage.ClickOnReportsBtn();

    await reportsPage.setSiteNoDropdown(data['Test5'].siteno);
    await reportsPage.veriFySiteDropdown();

});


test("Verify that by selecting Start Date, End Date user should be able to click on Apply button, details should appear in the Reports grid.",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const reportsPage=new DriveoffReportsPage(page);

    await login.gotoLoginPage(data['Test1'].url);
    await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
    await login.ClickAcceptBtn();
    
    await dashBoardPage.ClickOnDriveOFFBtn();
    await dashBoardPage.ClickOnReportsBtn();

    await reportsPage.setSiteNoDropdown(data['Test5'].siteno);
    await reportsPage.veriFySiteDropdown();
    await reportsPage.clickOnApplyBtn();
    await reportsPage.verifyReportgrid();

});


test("Verify that LIU should be able to export all the Reports in the .csv format.",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const reportsPage=new DriveoffReportsPage(page);

    await login.gotoLoginPage(data['Test1'].url);
    await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
    await login.ClickAcceptBtn();
    
    await dashBoardPage.ClickOnDriveOFFBtn();
    await dashBoardPage.ClickOnReportsBtn();

    await reportsPage.setSiteNoDropdown(data['Test5'].siteno);
    await reportsPage.veriFySiteDropdown();
    await reportsPage.clickOnApplyBtn();
    await reportsPage.verifyReportgrid();
    await reportsPage.ClickOnExportBtn();
    await reportsPage.ClickOnexportAllDataBtn();
    

});


test("Verify that when the LIU clicks on the Drive Off button should redirect to Drive Off - Drive Off - Vehicle.",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const reportsPage=new DriveoffReportsPage(page);

    await login.gotoLoginPage(data['Test1'].url);
    await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
    await login.ClickAcceptBtn();
    
    await dashBoardPage.ClickOnDriveOFFBtn();
    await dashBoardPage.ClickOnReportsBtn();

    await reportsPage.setSiteNoDropdown(data['Test5'].siteno);
    await reportsPage.veriFySiteDropdown();
    await reportsPage.ClickOnDriveOffBtn();
    await reportsPage.VerifyVehiclepage();
    

});



test("Verify by clicking Apply button details should appear in the Invoices grid.", async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const reportsPage=new DriveoffReportsPage(page);

    await login.gotoLoginPage(data['Test1'].url);
    await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
    await login.ClickAcceptBtn();
    
    await dashBoardPage.ClickOnDriveOFFBtn();
    await dashBoardPage.ClickOnReportsBtn();

    await reportsPage.clickOnInvoiceBtn();
    await reportsPage.ClickOnInvoiceApplyBtn();
    await reportsPage.verifyinvoiceReport();
    

});

test("Verify that LIU should be able to export all the Invoices in the .csv format.", async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const reportsPage=new DriveoffReportsPage(page);

    await login.gotoLoginPage(data['Test1'].url);
    await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
    await login.ClickAcceptBtn();
    
    await dashBoardPage.ClickOnDriveOFFBtn();
    await dashBoardPage.ClickOnReportsBtn();

    await reportsPage.clickOnInvoiceBtn();
    await reportsPage.ClickOnInvoiceApplyBtn();
    await reportsPage.verifyinvoiceReport();
    await reportsPage.ClickOnInvoiceExportBtn();
    await reportsPage.ClickOnexportAllDataBtn();
    

});


test("Verify that LIU should be able to edit the Settings by clicking the edit button.", async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const reportsPage=new DriveoffReportsPage(page);

    await login.gotoLoginPage(data['Test1'].url);
    await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
    await login.ClickAcceptBtn();
    
    await dashBoardPage.ClickOnDriveOFFBtn();
    await dashBoardPage.ClickOnDriveoffSettingBtn();
    await reportsPage.ClickOnUserEditBtn();
    // await reportsPage.SeteditValuedropdrown(data['Test5'].value);
    await reportsPage.ClickOnSaveBtn();

    
});


test("Verify that LIU should be able to maximize the witnesses screen successfully.",async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const driveoffPage=new DriveoffPage(page);

    await login.gotoLoginPage(data['Test1'].url);
    await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
    await login.ClickAcceptBtn();
    
    await dashBoardPage.ClickOnDriveOFFBtn();
    await dashBoardPage.ClickOnDriveoffBtn();

    await driveoffPage.ClickOnAddBtn();
    await driveoffPage.SetOnRego(data['Test1'].Rego);
    await driveoffPage.ClickOnValidCharacter();
    await driveoffPage.ClickOnOKvalidcharacterBtn();
    await driveoffPage.SetArrivaltime(data['Test1'].Arrivaltime);
    await driveoffPage.SetDriveoffTime(data['Test1'].Driveofftime);
    await driveoffPage.SetProductDropdown(data['Test1'].Product);
    await driveoffPage.SetFuelAmount(data['Test1'].FuelAmount);
    await driveoffPage.setFuelQuantity(data['Test1'].Fuelquantity);
    await driveoffPage.SetReferenceNo(data['Test1'].ReferenceNo);
    await driveoffPage.SetPumpNo(data['Test1'].pumpno);
    await driveoffPage.SetSiteDropdown(data['Test1'].site);
    await driveoffPage.SetFailtopaytypedropdown(data['Test1'].Failtopaytype);
    await driveoffPage.SetDriveoffstatus(data['Test1'].driveoffstatus);
    await driveoffPage.SetChassisdropdown(data['Test1'].chassis);
    await driveoffPage.Setmakedropdown(data['Test1'].make);
    await driveoffPage.Setcolordropdown(data['Test1'].color);
    await driveoffPage.Setplatesmatchdropdown(data['Test1'].plates);
    await driveoffPage.ClickOnSaveBtn();
    await driveoffPage.verifySaveConfirmationMessage(data['Test1'].expectedMessage);

    await driveoffPage.ClickOnWitnessBtn();
    await driveoffPage.ClickOnwitnessessExpandBtn();
    await driveoffPage.verifyStrinkBtn();

});


test("Verify that LIU should be able to navigate Driveoff ,Reports and Settings page from landing page", async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const driveoffPage=new DriveoffPage(page);
    const reportsPage=new DriveoffReportsPage(page);

    await login.gotoLoginPage(data['Test1'].url);
    await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
    await login.ClickAcceptBtn();
    
    await dashBoardPage.ClickOnDriveOFFBtn();
    await dashBoardPage.ClickOnDriveoffBtn();
    await page.waitForTimeout(4000);
    await driveoffPage.verifyDriveofflandpage();
    await dashBoardPage.ClickOnReportsBtn();
    await page.waitForTimeout(4000);
    await reportsPage.verifyReportslandpage();
    await dashBoardPage.ClickOnDriveoffSettingBtn();
    await page.waitForTimeout(4000);
    await reportsPage.verifyDrivroffSettinglandPage();


});


test("Verify that LIU should be able to export all the data in the .csv format and should able to click on export all data and export selected rows.", async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const driveoffPage=new DriveoffPage(page);
    const reportsPage=new DriveoffReportsPage(page);

    await login.gotoLoginPage(data['Test1'].url);
    await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
    await login.ClickAcceptBtn();
    
    await dashBoardPage.ClickOnDriveOFFBtn();
    // await dashBoardPage.ClickOnDriveoffBtn();
    await driveoffPage.ClickOnExportBtn();
    await driveoffPage.ClickOnExportAllDataBtn();
    await driveoffPage.ClickOncheckBoxRow();
    await driveoffPage.ClickOnExportBtn();
    await driveoffPage.ClickOnExportedSelectRows();

});

test("Verify that LIU should be able to view drive off landing page by clicking on view icon.", async({page})=>{
    test.setTimeout(100 * 1000);
    const login = new Loginpage(page);
    const dashBoardPage=new DashboardPage(page);
    const driveoffPage=new DriveoffPage(page);
    const reportsPage=new DriveoffReportsPage(page);

    await login.gotoLoginPage(data['Test1'].url);
    await login.loginToApp(data['Test1'].SuperUser, data['Test1'].companyCode,data['Test1'].Password);
    await login.ClickAcceptBtn();
    
    await dashBoardPage.ClickOnDriveOFFBtn();
    await driveoffPage.ClickOnViewBtn();
    await driveoffPage.verifyviewlanfpage();

});
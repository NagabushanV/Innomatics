import { test, expect, Page } from '@playwright/test';
import Loginpage from "../../../PageObjects/signin-page";
import data from "../../../DataBase/DriveOFF/DriveOFF_Driveoffdata.json";
import DashboardPage from '../../../PageObjects/Dashboardpage/dashboard';
import DriveoffPage from '../../../PageObjects/DriveOFFPage/Driveoffpage/Driveoff-Vehicle';


test("Verify that LIU should be able to add the Suspects details successfully and capture the success message.",async({page})=>{
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

    await driveoffPage.ClickOnSuspectsBtn();
    await driveoffPage.ClickOnSuspectsAddBtn();
    await driveoffPage.SetgenderDropdown(data['Test2'].gender);
    await driveoffPage.SetApproxAge(data['Test2'].age);
    await driveoffPage.Aproxheightdropdown(data['Test2'].height);
    await driveoffPage.setBuilddropdown(data['Test2'].build);
    await driveoffPage.ClickOnSuspectsSaveBtn();
    await driveoffPage.verifySuspectsSaveConfirmationMessage(data['Test2'].expectedMessage);
    
});




test("Verify that LIU should be able to edit the Suspects details successfully.",async({page})=>{
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

    await driveoffPage.ClickOnSuspectsBtn();
    await driveoffPage.ClickOnSuspectsAddBtn();
    await driveoffPage.SetgenderDropdown(data['Test2'].gender);
    await driveoffPage.SetApproxAge(data['Test2'].age);
    await driveoffPage.Aproxheightdropdown(data['Test2'].height);
    await driveoffPage.setBuilddropdown(data['Test2'].build);
    await driveoffPage.ClickOnSuspectsSaveBtn();
    await driveoffPage.verifySuspectsSaveConfirmationMessage(data['Test2'].expectedMessage);
    await driveoffPage.ClickOnSuspectsEditBtn();
    await driveoffPage.setBuilddropdown1(data['Test2'].build1);
    await driveoffPage.ClickOnSuspectsSaveBtn();
    await driveoffPage.verifySuspectsSaveConfirmationMessage(data['Test2'].expectedMessage);


});


test("Verify that LIU should be able to Delete the Suspects details successfully.",async({page})=>{
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
    await page.pause();
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
    await driveoffPage.ClickOnSuspectsBtn();
    await driveoffPage.ClickOnSuspectsAddBtn();
    await driveoffPage.SetgenderDropdown(data['Test2'].gender);
    await driveoffPage.SetApproxAge(data['Test2'].age);
    await driveoffPage.Aproxheightdropdown(data['Test2'].height);
    await driveoffPage.setBuilddropdown(data['Test2'].build);
    await driveoffPage.ClickOnSuspectsSaveBtn();
    await driveoffPage.verifySuspectsSaveConfirmationMessage(data['Test2'].expectedMessage);
    await driveoffPage.ClickOnSuspectsDeleteBtn();
    await driveoffPage.ClickOnDeleteConfirmBtn();
});


test("Verify that LIU should be able to Cancel the Suspects details successfully.",async({page})=>{
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
    await page.pause();
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

    await driveoffPage.ClickOnSuspectsBtn();
    await driveoffPage.ClickOnSuspectsAddBtn();
    await driveoffPage.SetgenderDropdown(data['Test2'].gender);
    await driveoffPage.SetApproxAge(data['Test2'].age);
    await driveoffPage.Aproxheightdropdown(data['Test2'].height);
    await driveoffPage.setBuilddropdown(data['Test2'].build);
    await driveoffPage.ClickOnSuspectsCancelBtn();
    
    
});
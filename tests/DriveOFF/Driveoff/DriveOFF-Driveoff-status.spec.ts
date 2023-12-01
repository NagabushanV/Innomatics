import { test, expect, Page } from '@playwright/test';
import Loginpage from "../../../PageObjects/signin-page";
import data from "../../../DataBase/DriveOFF/DriveOFF_Driveoffdata.json";
import DashboardPage from '../../../PageObjects/Dashboardpage/dashboard';
import DriveoffPage from '../../../PageObjects/DriveOFFPage/Driveoffpage/Driveoff-Vehicle';



test("Verify that LIU should be able to edit the Status details.",async({page})=>{
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

    await driveoffPage.ClickOnStatusBtn();
    await driveoffPage.ClickOnStatusEditBtn();
    await driveoffPage.SetDriveoffStatusDropdown(data['Test4'].DriveOff);
    // await driveoffPage.DateReported(data['Test4'].date, data['Test4'].month, data['Test4'].Year, data['Test4'].monthYear);
    await driveoffPage.ClickOnStatusSaveBtn();
    await driveoffPage.verifyStatusSaveConfirmationMessage(data['Test4'].expectedMessage);



});


test("Verify that by clicking Pay Now button LIU should be able to Pay.",async({page})=>{
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

    await driveoffPage.ClickOnStatusBtn();
    await driveoffPage.ClickOnPayNowBtn1();
    await driveoffPage.SetEmailToPayNow(data['Test4'].email);
    await driveoffPage.SetFirstNamePayNow(data['Test4'].firstnamepaynow);
    await driveoffPage.SetlastNamePayNow(data['Test4'].lastnamepaynow);
    await driveoffPage.ClickOnPaynowBtn2();
    await page.waitForTimeout(5000);
    await driveoffPage.Verifycreditanddebitcarddetails();

});


test("Verify that by clicking the Payment Request button LIU can create the link and send it to the user by entering email",async({page})=>{
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

    await driveoffPage.ClickOnStatusBtn();
    await driveoffPage.ClickOnPaymentRequestBtn();
    await driveoffPage.SetEmailToPayNow(data['Test4'].email);
    await driveoffPage.SetFirstNamePayNow(data['Test4'].firstnamepaynow);
    await driveoffPage.SetlastNamePayNow(data['Test4'].lastnamepaynow);
    await driveoffPage.ClickOnCreateLinkBtn();
    await driveoffPage.verifypaymentRequestSentConfirmationMessage(data['Test4'].expectedRequestMessage);
    await driveoffPage.VerifylinkCreatedtab();

});


test("Verify that by clicking the Payment Request button LIU can create the link and send it to the user by entering sms ",async({page})=>{
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

    await driveoffPage.ClickOnStatusBtn();
    await driveoffPage.ClickOnPaymentRequestBtn();
    await driveoffPage.ClickOnSmsRadioBtn();
    await driveoffPage.SetMobileNumber(data['Test4'].mobile);
    await driveoffPage.SetFirstNamePayNow(data['Test4'].firstnamepaynow);
    await driveoffPage.SetlastNamePayNow(data['Test4'].lastnamepaynow);
    await driveoffPage.ClickOnCreateLinkBtn();
    await driveoffPage.verifypaymentRequestSentConfirmationMessage(data['Test4'].expectedRequestMessage);
    await driveoffPage.VerifylinkCreatedtab();

});
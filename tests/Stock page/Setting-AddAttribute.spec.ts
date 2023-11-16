import { test,expect } from "@playwright/test";
import Loginpage from '../../PageObjects/signin-page';
import DashboardPage from '../../PageObjects/Dashboardpage/dashboard';
import StocksettingpumpAttributes from '../../PageObjects/Stock/Stock-setting-AddAttribure';
import datajson from '../../DataBase/StockData/Attribute.json';


test ("Stock->Setting->Tank and pump Attribute Add and Verify",async({page})=>{
    const login =new Loginpage(page);
    const dashboardPage = new DashboardPage(page); 
    const Stocksettingpage = new StocksettingpumpAttributes(page, datajson.sitename);
    await login.gotoLoginPage(datajson.url);
    await login.loginToApp(datajson.SuperUser, datajson.companyCode, datajson.Password);
    // await page.pause();
    await dashboardPage.ClickOnStockBtn();
    await dashboardPage.ClickOnSettingBtn();
    
    await Stocksettingpage.ClickOntankAndPumpAttribute();
    await Stocksettingpage.ClickEditBtn();
    // await Stocksettingpage.ClickOnAddAttributes();
    await Stocksettingpage.EnterAttributeValue(datajson.EnterAttribute);
    
    await Stocksettingpage.ClickSaveButton();
    await Stocksettingpage.ClickCloseBtn();
    await Stocksettingpage.ClickTankAndPumpSetup();
    
    await Stocksettingpage.SearchSiteName(datajson.sitename);
    // await Stocksettingpage.SearchSiteName
    
    await Stocksettingpage.ClickEditBtn();

    //verify the Added Attribute
    await Stocksettingpage.verifyTankAttributePresntInSetPage();
   

});
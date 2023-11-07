import { test, Page, expect } from "@playwright/test";
import SigninPage from '../PageObjects/signin';
import DashboardPage from '../PageObjects/Dashboardpage/Dashboard';
import jsonData from "../DataBase/signin.json";

const url = "https://uat-portal.efuelsystems.com/";
const username = "NagaSuperUser";
const companycode = "TESTTEAM";
const password = "DemoPass!CA1";

test.beforeEach("Signin innomatics", async ({ page }) => {
    const signin = new SigninPage(page, jsonData);
    await page.goto(url);
    await signin.enterusername(username);
    await signin.entercompanycode(companycode);
    await signin.enterpassword(password);
    await signin.clickcheckbox();
    expect(signin.ischecked());
    await signin.clickLoginBtn();
    expect(signin.toHaveText());
  });
  test("Dashboard page",async({page})=>{
    const signin = new SigninPage(page, jsonData);
    const Dashboard = new DashboardPage(page);
    await Dashboard.clickAdminBtn();
    await Dashboard.clickusersBtn();
    
  });
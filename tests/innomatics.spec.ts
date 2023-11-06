import { test, Page, expect } from "@playwright/test";
import SigninPage from '../PageObjects/signin';
import DashboardPage from '../PageObjects/Dashboardpage/Dashboard';
import Adminusers from '../PageObjects/AdminPages/UsersPage/AdminUserLogin';
import Adminadduser from "../PageObjects/AdminPages/Admin-users-Adduser";

import jsonData from "../DataBase/signin.json";
// const jsonData = JSON.parse(JSON.stringify(require("../DataBase/signin.json")));

const url = "https://uat-portal.efuelsystems.com/";
const username = "NagaSuperUser";
const companycode = "TESTTEAM";
const password = "DemoPass!CA1";

const UserName = "Nagabushan";
const FirstName = "Naga";
const LastName = "Vvv";
const email = "nagabushanv11@gmail.com"
const address1 ="Bangalore";
const phone = "9606695625";
const position = "Associate";
const suburb = "Kolar";
const postcode = "560016";


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

test("verify that LIU should be able to add new users derails by clicking + icon",async({page})=>{
  const signin = new SigninPage(page, jsonData);
  const Dashboard = new DashboardPage(page);
  const Adduser = new Adminadduser(page);

  await Adduser.clickAdminBtn();
  await Adduser.clickusersBtn();
  await Adduser.clickAddBtn();
  await Adduser.clickRadioBtn();
  await Adduser.selectpasswordtype();
  await Adduser.clickcheckbox();
  await Adduser.EnterUserName(UserName);
  await Adduser.EnterFirstName(FirstName);
  await Adduser.EnterLastName(LastName);
  await Adduser.Enteremail(email);
  await Adduser.Enteraddress1(address1);
  await Adduser.Selectcountry();
  await Adduser.Mobilenumber(phone);
  await Adduser.Enterposition(position);
  await Adduser.Entersuburb(suburb);
  await Adduser.Enterpostcode(postcode);
  await Adduser.Selectstate();
  await Adduser.SelectTimezone();
  await Adduser.Selectuserregion();
  await Adduser.Selectuserdivision();
  await Adduser.Selectgender();
  await Adduser.Selectsecurityrole();
  await Adduser.clicksaveBtn();
})


const firstname = "Aron"; 
test.only("verify the LIU should be able to delete any user details",async({page})=>{
  const signin = new SigninPage(page, jsonData);
  const Dasboard = new DashboardPage(page);
  const Searchuser = new Adminusers(page);
  await Searchuser.enterfirstname(firstname);
  await Searchuser.clickviewBtn();
  expect(Searchuser.toHaveText());
})

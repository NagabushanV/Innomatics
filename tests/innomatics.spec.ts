// import { test, Page, expect } from "@playwright/test";
// import SigninPage from '../PageObjects/signin-page';
// import DashboardPage from '../PageObjects/Dashboardpage/dashboard';
// // import Adminusers from '../PageObjects/AdminPages/UsersPage/AdminUserLogin';
// import Adminadduser from "../PageObjects/AdminPages/Admin-users-Adduser";

// import Datajson from "../DataBase/login.json";
// import Adminuserssearch from '../PageObjects/AdminPages/UsersPage/AdminUserLogin';
// import AdminuserDelete from "../PageObjects/AdminPages/UsersPage/Admin-user-Delete";
// import Loginpage from "../PageObjects/signin-page";
// // const jsonData = JSON.parse(JSON.stringify(require("../DataBase/signin.json")));

// // const url = "https://uat-portal.efuelsystems.com/";
// // const username = "NagaSuperUser";
// // const companycode = "TESTTEAM";
// // const password = "DemoPass!CA1";

// const UserName = "Nagabushan";
// const FirstName = "Naga";
// const LastName = "Vvv";
// const email = "nagabushanv11@gmail.com"
// const adress1 ="Bangalore";
// const phone = "9606695625";
// const position = "Associate";
// const suburb = "Kolar";
// const postcode = "560016";


// test.beforeEach(async ({ page }) => {
//   const login = new Loginpage(page);
//   await login.gotoLoginPage(Datajson.url);
//   await login.loginToApp(Datajson.superUser, 
//     Datajson.companyCode, Datajson.password);

// })
// test("Dashboard",async({page})=>{
//   const dashBoardPage=new DashboardPage(page);
//   await dashBoardPage.clickOnAdmin();
//   await dashBoardPage.clickOnUsers();
// })

// test.("verify that LIU should be able to add new users derails by clicking + icon",async({page})=>{
//   const signin = new SigninPage(page, );
//   const Dashboard = new DashboardPage(page);
//   const Adduser = new Adminadduser(page);

//   await Adduser.clickAdminBtn();
  
//   await Adduser.clickusersBtn();
//   // await page.pause();
//   await Adduser.clickAddBtn();
  
//   await Adduser.clickRadioBtn();
//   await Adduser.selectpasswordtype();
//   // await Adduser.clickcheckbox();
//   await Adduser.EnterUserName(UserName);
//   await Adduser.EnterFirstName(FirstName);
//   await Adduser.EnterLastName(LastName);
//   await Adduser.Enteremail(email);
//   await Adduser.Enteraddress1(adress1);
//   await Adduser.Selectcountry();
//   await Adduser.Mobilenumber(phone);
//   await Adduser.Enterposition(position);
//   await Adduser.Entersuburb(suburb);
//   await Adduser.Enterpostcode(postcode);
//   await Adduser.Selectstate();
//   await Adduser.SelectTimezone();
//   await Adduser.Selectuserregion();
//   await Adduser.Selectuserdivision();
//   await Adduser.Selectgender();
//   await Adduser.Selectsecurityrole();
//   await Adduser.clicksaveBtn();
// })


// const firstname = "Aron"; 
// test("verify the LIU should be able to search any user details",async({page})=>{
//   const signin = new SigninPage(page, );
//   const Dasboard = new DashboardPage(page);
//   const Adduser = new Adminadduser(page);
//   const Searchuser = new Adminuserssearch(page);

//   await Searchuser.enterfirstname(firstname);
//   await Searchuser.clickviewBtn();
//   expect(Searchuser.toHaveText());
// })

// test("verify the LIU should be able to delete any user details",async({page})=>{
//   const signin = new SigninPage(page);
//   const Dasboard = new DashboardPage(page);
//   const Adduser = new Adminadduser(page);
//   const Searchuser = new Adminuserssearch(page);
//   const UserDelete = new AdminuserDelete(page);

//   await UserDelete.clickDeleteBtn();
//   await page.waitForLoadState('load');
//   await UserDelete.deleteAlertLocator();

// })

import { test, Page, expect } from "@playwright/test";
import SigninPage from '../../PageObjects/signin';
import DashboardPage from '../../PageObjects/Dashboardpage/Dashboard';
import Adminusers from '../../PageObjects/AdminPages/UsersPage/AdminUserLogin';
import Adminadduser from '../../PageObjects/AdminPages/Admin-users-Adduser';
import jsonData from '../../DataBase/signin.json';
import Dataadd from '../../DataBase/Adduser.json';
import { Sign } from "crypto";


const UserName = "Nagabushan";
const FirstName = "Naga";
const LastName = "Vvv";
const email = "nagabushanv11@gmail.com"
const address1 ="Bangalore";
const phone = "9606695625";
const position = "Associate";
const suburb = "Kolar";
const postcode = "560016";




test("verify that LIU should be able to add new users derails by clicking + icon",async({page})=>{
    const signin = new SigninPage(page, jsonData);
    const Dashboard = new DashboardPage(page);
    const Adduser = new Adminadduser(page);
  
    // await Adduser.clickAdminBtn();
    // await Adduser.clickusersBtn();
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


  test("Verify that LIU should be able to delete any user details ",async({page})=>{
    
    const signin = new SigninPage(page, jsonData);
    const Dashboard = new DashboardPage(page);
    const Adduser = new Adminadduser(page);
    

})
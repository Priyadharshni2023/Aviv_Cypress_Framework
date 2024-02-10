import homePage from '../../pageObjects/homePage'
import loginPage from '../../pageObjects/loginPage'
import checkOutPage from '../../pageObjects/checkOutPage'
import registrationPage from '../../pageObjects/registrationPage';
import data from '/Users/freshworks/Desktop/EComm/Aviv_Cypress_Framework/cypress/fixtures/homePageData.json'

const homeObject = new homePage();
const regObject = new registrationPage();
const loginObj = new loginPage();
const checkOutObj = new checkOutPage();

describe('Scenario 1', () => {

    beforeEach(function() {
      // executes prior each test within it block
      cy.visit('https://demo.nopcommerce.com/');
   })

   it('Registration',()=>{
    homeObject.clickOnRegister();
    regObject.enterPersonalDetails(data.gender, data.fName, data.lName, data.dayInDOB,
         data.monthInDOB, data.yearInDOB, data.email, data.companyName, data.newsLetter , data.password);
    regObject.clickOnRegisterButton();

   })

   it('Login',()=>{
    homeObject.clickOnLogin();
    loginObj.enterLoginDetails(data.email,data.password);
    loginObj.clickOnLoginButton();

    homeObject.addProductToCart();
    homeObject.goToShoppingCart();
    homeObject.clickOncheckOut();
    checkOutObj.enterBillingAddress(data.country , data.city, data.address, data.postalCode, data.phone);
   })

   

   
})
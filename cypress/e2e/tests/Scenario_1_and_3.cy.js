import homePage from '../../pageObjects/homePage'
import loginPage from '../../pageObjects/loginPage'
import registrationPage from '../../pageObjects/registrationPage';
import data from '/Users/freshworks/Desktop/EComm/Aviv_Cypress_Framework/cypress/fixtures/homePageData.json'
import emailData from '/Users/freshworks/Desktop/EComm/Aviv_Cypress_Framework/cypress/fixtures/randomEmail.json'
import productDetailsPage from '../../pageObjects/productDetailsPage';
import shoppingCartPage from '../../pageObjects/shoppingCartPage';

const homeObject = new homePage();
const regObject = new registrationPage();
const loginObj = new loginPage();
const shoppingCartObj = new shoppingCartPage();
const productDetailsObj = new productDetailsPage();

describe('Scenario 1: User Signup and Checkout', () => {

   beforeEach(function(){
           const randomId = Cypress._.random(9000000);
           const jsonData = { email: randomId +"@gmail.com" };
           cy.writeFile('cypress/fixtures/randomEmail.json', jsonData);
           cy.log(jsonData) 
           cy.visit('https://demo.nopcommerce.com/');
       });
       

   it('User SignUp',() =>
   {
    homeObject.clickOnRegister();
    regObject.enterPersonalDetails(data.gender, data.fName, data.lName, data.dayInDOB,
         data.monthInDOB, data.yearInDOB, emailData.email, data.companyName, data.newsLetter , data.password);
    regObject.clickOnRegisterButton();
   })

   it('Check Out using newly created credentials',() =>
   {
    homeObject.clickOnLogin();
    loginObj.enterLoginDetails(emailData.email,data.password);
    loginObj.clickOnLoginButton();
    homeObject.clickOnElectronics();
    productDetailsObj.addProductToCart();
    homeObject.goToShoppingCart();
    shoppingCartObj.clickOncheckOut();
    shoppingCartObj.enterBillingAddress(data.country , data.state, data.city, data.address, data.postalCode, data.phone);
   })
})
import homePage from '../../pageObjects/homePage'
import loginPage from '../../pageObjects/loginPage'
import data from '/Users/freshworks/Desktop/EComm/Aviv_Cypress_Framework/cypress/fixtures/homePageData.json'
import emailData from '/Users/freshworks/Desktop/EComm/Aviv_Cypress_Framework/cypress/fixtures/randomEmail.json'
import productDetailsPage from '../../pageObjects/productDetailsPage';
import shoppingCartPage from '../../pageObjects/shoppingCartPage';

const homeObject = new homePage();
const loginObj = new loginPage();
const shoppingCartObj = new shoppingCartPage();
const productDetailsObj = new productDetailsPage();

describe('Scenario 4: Verify Cart Functionality', () => {

    beforeEach (function() 
    {
      cy.visit('https://demo.nopcommerce.com/');
   })
 
   it('Add Products To Cart',() =>
   {
    homeObject.clickOnLogin();
    loginObj.enterLoginDetails(emailData.email,data.password);
    loginObj.clickOnLoginButton();
    homeObject.clickOnElectronics();
    productDetailsObj.addProductToCart();
    homeObject.goToShoppingCart();
    shoppingCartObj.removeItemsFromCart();
   })
 })
 
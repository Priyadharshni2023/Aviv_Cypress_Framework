
import homePage from '../../pageObjects/homePage'
import registrationPage from '../../pageObjects/registrationPage';
import data from '/Users/freshworks/Desktop/EComm/Aviv_Cypress_Framework/cypress/fixtures/homePageData.json'
import emailData from '/Users/freshworks/Desktop/EComm/Aviv_Cypress_Framework/cypress/fixtures/randomEmail.json'

const homeObject = new homePage();
const regObject = new registrationPage();

describe('Scenario 2: Invalid Signup Attempt', ()=>{
    beforeEach (function() 
     {
       cy.visit('https://demo.nopcommerce.com/');
    })
 
    it('Invalid Registration',()=>{
       homeObject.clickOnRegister();
     regObject.enterPersonalDetails(data.gender, data.fName, data.lName, data.dayInDOB,
          data.monthInDOB, data.yearInDOB, emailData.email, data.companyName, data.newsLetter , data.password);
     regObject.clickOnRegisterButtonForInvalidData();
    })
 
 })
 

import homePage from '../../pageObjects/homePage'
import registrationPage from '../../pageObjects/registrationPage';


const homeObject = new homePage();
const regObject = new registrationPage();

describe('Scenario 2: Invalid Signup Attempt', ()=>
{   
   const testData = require('/Users/freshworks/Desktop/EComm/Aviv_Cypress_Framework/cypress/fixtures/homePageData.json');
   testData.forEach((data) => {
    it('Invalid Registration',()=>{
      homeObject.clickOnRegister();
     regObject.enterInvalidRegistrationDetails(data.invalidEmail, data.invalidPassword);
     regObject.clickOnRegisterButtonForInvalidData();
    })
   })
   
 
 })
 
import registrationPage from '../../pageObjects/registrationPage'
import data from '/Users/freshworks/Desktop/EComm/Aviv_Cypress_Framework/cypress/fixtures/registrationpageData.json'

describe('POM Test', () => {

    beforeEach(function() {
      // executes prior each test within it block
      cy.visit('https://demo.nopcommerce.com/');
   })

   it('Registration',()=>{
    const registrationObject = new registrationPage();
    

   })

   
})
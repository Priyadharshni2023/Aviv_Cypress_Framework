class checkOutPage{

    elements = { 
         
         countryTextField : () => cy.get('#BillingNewAddress_CountryId'),
         cityTextField : () => cy.get('#BillingNewAddress_City'),
         addressTextField : () => cy.get('#BillingNewAddress_Address1'),
        zipPostalCodeTextField : () => cy.get('#BillingNewAddress_ZipPostalCode'),
        phoneNumber : () => cy.get('#BillingNewAddress_PhoneNumber'),
        continueButton : () => cy.get('#billing-buttons-container > .new-address-next-step-button'),
        continueButtonForshippingMethod : () => cy.get('#shipping-method-buttons-container > .button-1'),
        continueButtonForPaymentMethod : () => cy.get('#payment-method-buttons-container > .button-1'),
        continueButtonForPaymentInfo : () =>  cy.get('#payment-info-buttons-container > .button-1'),
        confirmButton :() => cy.get('#confirm-order-buttons-container > .button-1'),
        successMessage : () => cy.get('.order-number > strong')
     }

     

     enterBillingAddress(country , city, address, postalCode, phone){
       
        this.elements.countryTextField().select(country);
        this.elements.cityTextField().type(city);
        this.elements.addressTextField().type(address);
        this.elements.zipPostalCodeTextField().type(postalCode);
        this.elements.phoneNumber().type(phone);
        this.elements.continueButton().click()
        this.elements.continueButtonForshippingMethod().click()
        this.elements.continueButtonForPaymentMethod().click()
        this.elements.continueButtonForPaymentInfo().click()
        this.elements.confirmButton().click()
        this.elements.successMessage().should('exist')
     }


  }
  
  export default checkOutPage;
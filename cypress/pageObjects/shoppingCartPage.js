
class shoppingCartPage
{
elements = { 
    countryTextField : () => cy.get('#BillingNewAddress_CountryId'),
    cityTextField : () => cy.get('#BillingNewAddress_City'),
    addressTextField : () => cy.get('#BillingNewAddress_Address1'),
    stateTextField : () => cy.get('#BillingNewAddress_StateProvinceId'),
    zipPostalCodeTextField : () => cy.get('#BillingNewAddress_ZipPostalCode'),
   phoneNumber : () => cy.get('#BillingNewAddress_PhoneNumber'),
   continueButton : () => cy.get('#billing-buttons-container > .new-address-next-step-button'),
   continueButtonForshippingMethod : () => cy.get('#shipping-method-buttons-container > .button-1'),
   continueButtonForPaymentMethod : () => cy.get('#payment-method-buttons-container > .button-1'),
   continueButtonForPaymentInfo : () =>  cy.get('#payment-info-buttons-container > .button-1'),
   confirmButton :() => cy.get('#confirm-order-buttons-container > .button-1'),
   successMessage : () => cy.get('.order-number > strong'),
    productAddedMessage: ()=> cy.get('.content'),
    termsConditionscheckbox :()=> cy.get('#termsofservice'),
    checkOutButton:()=> cy.get('#checkout'),
    ElectronicsTab :()=> cy.get('img[alt="Picture for category Electronics"]'),
    OthersTab :()=> cy.get('img[alt="Picture for category Others"]'),
    productInfo:()=> cy.get('div.details > h2 > a'),
    addToCartButton : () => cy.get('.buttons > .product-box-add-to-cart-button'),
    cartQuantity: () =>cy.get('#topcartlink .cart-qty'),
    removeFromCart : ()=> cy.get(".remove-btn")
 }



     verifyCartQuantity(quantity) 
     {
      this.elements.cartQuantity().should("have.text", `(${quantity})`)
     }

     clickOncheckOut()
     {
      this.elements.termsConditionscheckbox().check();
      this.elements.checkOutButton().click();
     }
     enterBillingAddress(country , state, city, address, postalCode, phone){
       
        this.elements.countryTextField().select(country);
        this.elements.stateTextField().select(state);
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

     removeItemsFromCart(){
               while(this.elements.removeFromCart().should('exist')){
               this.elements.removeFromCart().each(($el, index, $list) => {
                  cy.wrap($el).click({force: true}); 
                  cy.wait(5000)
               })
            }
               this.verifyCartQuantity(0);
     }
    }
  
     export default shoppingCartPage;
  
class homePage{

    elements = { 
         
         registrationLink : ()=> cy.get('.ico-register'),  
         loginLink : () => cy.get('.ico-login'),
         wishListLink : () => cy.get('.wishlist-label'),
         addToCartButton : () => cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button'),
         shoppingCartLink : () => cy.get('#topcartlink'),
         productAddedMessage: ()=> cy.get('.content'),
         termsConditionscheckbox :()=> cy.get('#termsofservice'),
         checkOutButton:()=> cy.get('#checkout')
         
      }

     
     clickOnRegister (){
      this.elements.registrationLink().click();
     }
     clickOnLogin (){
        this.elements.loginLink().click();
     }
     clickOnWishList(){
        this.elements.wishListLink().click();
     }
     addProductToCart(){
      this.elements.addToCartButton().click();
      this.elements.productAddedMessage().should('exist')
     }
     goToShoppingCart(){
      this.elements.shoppingCartLink().click();
     }
     clickOncheckOut(){
      this.elements.termsConditionscheckbox().check();
      this.elements.checkOutButton().click();
     }

  }
  
  export default homePage;
class homePage{

    elements = { 
         
         registrationLink : ()=> cy.get('.ico-register'),  
         loginLink : () => cy.get('.ico-login'),
         wishListLink : () => cy.get('.wishlist-label'),
         addToCartButton : () => cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button'),
         shoppingCartLink : () => cy.get('#topcartlink'),
         productAddedMessage: ()=> cy.get('.content'),
         termsConditionscheckbox :()=> cy.get('#termsofservice'),
         checkOutButton:()=> cy.get('#checkout'),
         ApparelsTab :()=> cy.get('img[alt="Picture for category Electronics"]'),
         clothingTab :()=> cy.get('img[alt="Picture for category Others"]'),
         clothinInfo:()=> cy.get('div.details > h2 > a'),
         addToCartButton : () => cy.get('.buttons > .product-box-add-to-cart-button'),
         cartQuantity: () =>cy.get('#topcartlink .cart-qty'),
         removeFromCart : ()=> cy.get(".remove-btn")
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
     clickOnApparels(){
      this.elements.ApparelsTab().click();
      this.elements.clothingTab().click();
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
     verifyCartQuantity(quantity) 
     {
      this.elements.cartQuantity().should("have.text", `(${quantity})`)
     }
     addClothingsToCart(){
      this.elements.clothinInfo().then($clothingDetails => {
         const numElements = $clothingDetails.length;
         for(let i=1;i<4;i++){
         const randomIndex = Math.floor(Math.random() * numElements);
            this.elements.addToCartButton().then($addToCartDetails => {
               const randomElement = $addToCartDetails[randomIndex];
               cy.wrap(randomElement).click({ force: true }); 
                     this.elements.productAddedMessage().should('exist')
                     this.verifyCartQuantity(i);
                  })
               }
               this.goToShoppingCart();
               while(this.elements.removeFromCart().should('exist')){
               this.elements.removeFromCart().each(($el, index, $list) => {
                  cy.wrap($el).click({force: true}); 
                  cy.wait(5000)
               })
            }
               
               this.verifyCartQuantity(0);

            })
              
               
               
      
            
          
         
     }
  }
  
  export default homePage;
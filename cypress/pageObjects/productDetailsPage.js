class productDetailsPage {

   elements = {

      productInfo: () => cy.get('div.details > h2 > a'),
      addToCartButton: () => cy.get('.buttons > .product-box-add-to-cart-button'),
      cartQuantity: () => cy.get('#topcartlink .cart-qty'),
      removeFromCart: () => cy.get(".remove-btn"),
      productAddedMessage: () => cy.get('.content'),
      appSpinner: () => cy.get(".ajax-loading-block-window")
   }

   verifyCartQuantity(quantity) {
      this.elements.cartQuantity().should("have.text", `(${quantity})`)
   }

   addProductToCart() {
      this.elements.productInfo().then($productDetails => {
         const numElements = $productDetails.length;
         for (let i = 1; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * numElements);
            this.elements.addToCartButton().then($addToCartDetails => {
               const randomElement = $addToCartDetails[randomIndex];
               cy.wrap(randomElement).click({ force: true });
               this.elements.appSpinner().should('not.be.visible');
               this.elements.productAddedMessage().should('exist')
            })
         }
      })
   }
}

export default productDetailsPage;
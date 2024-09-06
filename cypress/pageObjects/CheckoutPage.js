class CheckoutPage {
    proceedToCheckout() {
      cy.get('[data-test="proceed-1"]').click();
      cy.get('[data-test="proceed-2"]').click();
    }
  
    fillShippingDetails(address, city, state, country, postcode) {
      cy.get('[data-test="address"]').type(address);
      cy.get('[data-test="city"]').type(city);
      cy.get('[data-test="state"]').type(state);
      cy.get('[data-test="country"]').type(country);
      cy.get('[data-test="postcode"]').type(postcode);
    }
  
    selectPaymentMethod(method) {
      cy.get('select').select(method);
    }
  
    finishPurchase() {
      cy.get('[data-test="finish"]').click();
    }
  }
  
  export default CheckoutPage;
  
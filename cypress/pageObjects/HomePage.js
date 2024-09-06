class HomePage {
    visit() {
      cy.visit('https://practicesoftwaretesting.com');
      cy.wait(4000)

    }
  
    addItemToCart(itemName) {
      cy.get("[data-test='product-name']").contains(itemName).click();
      cy.get('[data-test="add-to-cart"]').click();
    }
  
    goToCart() {
      cy.get('[data-test="nav-cart"]').click();
    }
  }
  
  export default HomePage;
  
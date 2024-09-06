class LoginPage {
    visit() {
      cy.visit('https://practicesoftwaretesting.com/auth/login');

    }
  
    fillEmail(email) {
      cy.get('[data-test="email"]').type(email);
    }
  
    fillPassword(password) {
      cy.get('[data-test="password"]').type(password);
    }
  
    submit() {
      cy.get('[data-test="login-submit"]').click();
    }
  
    login(email, password) {
      this.fillEmail(email);
      this.fillPassword(password);
      this.submit();
    }
  }
  
  export default LoginPage;
  
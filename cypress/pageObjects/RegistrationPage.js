class RegistrationPage {
    visit() {
      cy.visit('https://practicesoftwaretesting.com/auth/register');
    }
  
    fillFirstName(firstName) {
      cy.get("#first_name").type(firstName);
    }
  
    fillLastName(lastName) {
      cy.get("#last_name").type(lastName);
    }
  
    fillDateOfBirth(dateOfBirth) {
      cy.get('[type="date"]').type(dateOfBirth);
    }
  
    fillAddress(address) {
      cy.get("#address").type(address);
    }
  
    fillPostcode(postcode) {
      cy.get('#postcode').type(postcode);
    }
  
    fillCity(city) {
      cy.get('#city').type(city);
    }
  
    fillState(state) {
      cy.get('#state').type(state);
    }
  
    selectCountry(countryCode) {
      cy.get('select').select(countryCode);
    }
  
    fillPhone(phone) {
      cy.get('#phone').type(phone);
    }
  
    fillEmail(email) {
      cy.get("#email").type(email);
    }
  
    fillPassword(password) {
      cy.get("#password").type(password);
    }
  
    submit() {
      cy.get(".btnSubmit").click();
    }
  
    register(firstName, lastName, dateOfBirth, address, postcode, city, state, countryCode, phone, email, password) {
      this.fillFirstName(firstName);
      this.fillLastName(lastName);
      this.fillDateOfBirth(dateOfBirth);
      this.fillAddress(address);
      this.fillPostcode(postcode);
      this.fillCity(city);
      this.fillState(state);
      this.selectCountry(countryCode);
      this.fillPhone(phone);
      this.fillEmail(email);
      this.fillPassword(password);
      this.submit();
    }
  }
  
  export default RegistrationPage;
  
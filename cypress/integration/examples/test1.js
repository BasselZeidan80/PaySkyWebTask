




  describe("User Registration and Shopping Test Suite", function() {
    let userData;
  
    
    before(function() {
        cy.fixture('userData').then((data) => {
            userData = data;
        });
    });
  
    beforeEach(function() {
        cy.wrap(userData).should('not.be.undefined'); 
        cy.clearCookies();
        cy.clearLocalStorage();
    });
  
    
    function generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 15);
        return `user${randomString}@example.com`;
    }
  
    it('should run tests for all users', function() {
        cy.wrap(userData).each((user) => {
            const { firstName, lastName, dateOfBirth, address, postcode, city, state, country, phone, password,Product } = user;
            
            const randomEmail = generateRandomEmail();
            
            cy.visit("https://practicesoftwaretesting.com/");
            
            cy.get('[data-test="nav-sign-in"]').click();            

            // Registration
            cy.get("[data-test='register-link']").click();
            cy.get("#first_name").type(firstName);
            cy.get("#last_name").type(lastName);
            cy.get('[type="date"]').type(dateOfBirth);
            cy.get("#address").type(address);
            cy.get('#postcode').type(postcode);
            cy.get('#city').type(city);
            cy.get('#state').type(state);
            cy.get('select').select(country);
            cy.get('#phone').type(phone);
            cy.get("#email").type(randomEmail);
            cy.get("#password").type(password);
            cy.get(".btnSubmit").click();
  
            cy.allure().step('Registration completed');
            cy.wait(5000);

            //login
            cy.url().should('include', '/login');
            cy.get('[data-test="email"]').type(randomEmail);
            cy.get('[data-test="password"]').type(password);
            cy.get('[data-test="login-submit"]').click();
            
            cy.wait(5000);
            cy.allure().step('Logged in successfully');
            
            // Home Section
            cy.get('[data-test="nav-home"]').click();
            
            cy.wait(7000)
            cy.get('body').should('contain.text', Product);

            cy.get("[data-test='product-name']").contains(Product).click();
            cy.wait(3000);
            cy.allure().step('Selected product');
            
            cy.get('[data-test="add-to-cart"]').click();
            cy.allure().step('Added product to cart');
            cy.wait(5000);
            
            cy.get('[data-test="nav-cart"]').click();
            cy.wait(6000);
  
            cy.get('[data-test="proceed-1"]').click();
            cy.wait(2000);
            cy.get('[data-test="proceed-2"]').click();
            cy.wait(2000);
            
            // address details
            cy.get('[data-test="address"]').type(address);
            cy.get('[data-test="city"]').type(city);
            cy.get('[data-test="state"]').type(state);
            cy.get('[data-test="country"]').type(country);
            cy.get('[data-test="postcode"]').type(postcode);
            cy.get('[data-test="proceed-3"]').click();
            cy.get('select').select('cash-on-delivery');
            cy.wait(2000);
            cy.allure().step('Checkout details entered');
            
            cy.get('[data-test="finish"]').click();
            cy.wait(2000);
            cy.allure().step('Purchase completed');
            
            cy.get('[data-test="finish"]').should('be.visible').click();
            cy.allure().step('Purchase confirmed');
            cy.wait(3000);

             
  
            // Clear cookies and local storage 
            cy.clearCookies();
            cy.clearLocalStorage();
        });
    });
});




// -----------------------------

// import LoginPage from '../../pageObjects/LoginPage';
// import RegistrationPage from '../../pageObjects/RegistrationPage';
// import HomePage from '../../pageObjects/HomePage';
// import CheckoutPage from '../../pageObjects/CheckoutPage';

// describe('User Registration and Shopping Test Suite', function() {

//     let uniqueEmail;
//     const password = '123123123@Bb';


// //   const uniqueEmail = `user${Date.now()}@example.com`;
// //   const password = '123123123@Bb';

//   const loginPage = new LoginPage();
//   const registrationPage = new RegistrationPage();
//   const homePage = new HomePage();
//   const checkoutPage = new CheckoutPage();



//   before(function() {
//     // Generate a unique email before tests
//     uniqueEmail = `user${Date.now()}@example.com`;
//   });

//   it('should register, login, and complete a purchase', function() {
//     registrationPage.visit();
//     registrationPage.register(
//         'hmada', 
//         'hmada', 
//         '1990-05-15', 
//         'giza', 
//         '1232', 
//         'cairo', 
//         '12', 
//         'EG', 
//         '01120824721', 
//         uniqueEmail, 
//         password
//       );

//     loginPage.visit();
//     loginPage.login(uniqueEmail, password);

//     homePage.goToCart();
//     homePage.addItemToCart(Product);

//     checkoutPage.proceedToCheckout();
//     checkoutPage.fillShippingDetails('egypt', 'cairo', '12', 'EG', '1231');
//     checkoutPage.selectPaymentMethod('cash-on-delivery');
//     checkoutPage.finishPurchase();

//     // Verify the purchase or final state as needed
//   });
// });

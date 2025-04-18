const { SignInPage } = require("../Pages/SignInPage");

const signInPage = new SignInPage();
const viewports = ["macbook-15", "iphone-xr", "ipad-2", "samsung-s10"];

viewports.forEach((viewport) => {
  describe(`Sign in on NinjaOne Armm Portal - Viewport: ${viewport}`, () => {
    beforeEach(() => {
      cy.viewport(viewport);
      cy.clearCookies();
      cy.clearLocalStorage();
      signInPage.visit();
    });

    it("should sign in successfully with staySignedIn", () => {
      signInPage.signIn(Cypress.env("username"), Cypress.env("password"));
      cy.url().should('include', '/auth/?state=');
      cy.contains('h2', 'Multi-Factor Authentication').should('be.visible');
    });

    it("should sign in successfully without staySignedIn", () => {
      signInPage.signIn(Cypress.env("username"), Cypress.env("password"), false);
      cy.url().should('include', '/auth/?state=');
      cy.contains('h2', 'Multi-Factor Authentication').should('be.visible');
    });

    it("should not sign in with blank space username and password", () => {
      signInPage.clearFields();
      signInPage.signInButton();
      signInPage.getErrorBanner('Error during login');
    });

    it("should not sign in with invalid password", () => {
      signInPage.signIn(Cypress.env("username"), "invalidPassword");
      signInPage.getErrorText('Invalid username/password. Please contact your system administrator for assistance.');
    });

    //The test is desabled because is flaky and the error message is not consistent (Human Verification is required)
    /*it("should not sign in with invalid username", () => {
      signInPage.signIn("Praxtka@ninjaone.com.br", Cypress.env("password"));
      signInPage.getErrorText('Invalid username/password. Please contact your system administrator for assistance.');
    });*/
  });
});

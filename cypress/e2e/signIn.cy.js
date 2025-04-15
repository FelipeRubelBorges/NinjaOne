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

    it.only("should not sign in with invalid password", () => {
      signInPage.signIn(Cypress.env("username"), "invalidPassword");
      signInPage.getErrorText();
    });
  });
});

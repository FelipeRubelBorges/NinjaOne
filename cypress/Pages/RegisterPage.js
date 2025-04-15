export class RegisterPage {
    registerLink() {
      cy.visit('https://app.ninjarmm.com/auth/#/login', {
        onBeforeLoad(win) {
          Object.defineProperty(win.navigator, 'language', { value: Cypress.env("LANG") });
          Object.defineProperty(win.navigator, 'languages', { value: [Cypress.env("LANG")] });
        }
    });
      cy.get('a[href="#/register"]')
      .should('be.visible')
      .click();
    }

    registerFields(organization, firstName, lastName, email, password, verifyPassword, cellPhone, language) {
      cy.get('input[name="organization"]').type(organization);
      cy.get('input[name="firstName"]').type(firstName);
      cy.get('input[name="lastName"]').type(lastName);
      cy.get('input[name="email"]').type(email);
      cy.get('input[name="password"]').type(password);
      cy.get('input[name="passwordConfirm"]').type(verifyPassword);
      cy.get('input.PhoneInputInput').type(cellPhone);
      cy.get('.css-1uccc91-singleValue').click();
      cy.get('.css-1hwfws3').contains(language).click();
    }

    registerButton() {
      cy.get('button[type="submit"].btn.btn-primary.m-t-sm').click();
    }

    submitRegister(successText) {
      this.registerButton();
      cy.get('p.css-bk160n').should('be.visible').and('have.text', successText);

    }

    getErrorText(errorText) {
      this.registerButton();
      cy.get('.invalid').should('be.visible').and('have.text', errorText);
    }

    getErrorTexts(errorTexts) {
      this.registerButton();
      errorTexts.forEach(errorText => {
        cy.get('.invalid').should('be.visible').and('have.text', errorText);
      });
    }
}
  
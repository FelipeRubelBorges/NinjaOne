export class RequestActivationPage {
    requestActivationLink() {
        cy.visit('https://app.ninjarmm.com/auth/#/register', {
          onBeforeLoad(win) {
            Object.defineProperty(win.navigator, 'language', { value: Cypress.env("LANG") });
            Object.defineProperty(win.navigator, 'languages', { value: [Cypress.env("LANG")] });
          }
      });
        cy.get('a[href="#/requestActivation"]')
        .should('be.visible')
        .click();
        cy.get('h2.css-1hie37q.eo7gr5w0').should('be.visible');
    }

    sendActivationEmail(email) {
        cy.get('.form-control').type(email);
        cy.get('.m-t-sm').click();
    }

    getSuccessMessage(successMessage) {
        cy.get('.css-bk160n').should('be.visible').and('contain.text', successMessage);
    }

    getErrorMessage(errorMessage) {
        cy.get('.css-1cfrmkq').should('be.visible').and('contain.text', errorMessage);
    }
}


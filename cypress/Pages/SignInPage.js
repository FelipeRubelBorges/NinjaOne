export class SignInPage {
    visit() {
        cy.visit('https://app.ninjarmm.com/auth/#/login', {
            onBeforeLoad(win) {
              Object.defineProperty(win.navigator, 'language', { value: Cypress.env("LANG") });
              Object.defineProperty(win.navigator, 'languages', { value: [Cypress.env("LANG")] });
            }
        });
    }
  
    signIn(email, password, staySignedIn = true) {
      cy.get("#email").type(email);
      cy.get("#password").type(password);
      if (staySignedIn) {
        cy.get('.css-j5jbvc').click();
      }
      cy.contains("button", "Sign in").click();
    }
  
    clearFields() {
      cy.get("#email").clear();
      cy.get("#password").clear();
      cy.get("#password").blur();
    }
  
    typeEmailPassword(email, password) {
      cy.get("#email").type(email);
      cy.get("#password").type(password);
    }

    getErrorText() {
        cy.get('.alert-danger').should('be.visible').and('have.text', 'Invalid username/password. Please contact your system administrator for assistance.');
    }
  }
  
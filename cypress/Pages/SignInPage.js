export class SignInPage {
    visit() {
        cy.visit('https://app.ninjarmm.com/auth/#/login', {
            onBeforeLoad(win) {
              Object.defineProperty(win.navigator, 'language', { value: Cypress.env("LANG") });
              Object.defineProperty(win.navigator, 'languages', { value: [Cypress.env("LANG")] });
            }
        });
    }

    signInButton() {
        cy.contains("button", "Sign in").click();
    }
  
    signIn(email, password, staySignedIn = true) {
      cy.get("#email").type(email,{ delay: 100 });
      cy.get("#password").type(password,{ delay: 100 });
      if (staySignedIn) {
        cy.get('.css-j5jbvc').click();
      }
      this.signInButton();
    }
  
    clearFields() {
      cy.get("#email").clear();
      cy.get("#password").clear();
      cy.get("#password").blur();
    }
  
    typeEmailPassword(email, password) {
      cy.get("#email").type(email,{ delay: 100 });
      cy.get("#password").type(password,{ delay: 100 });
    }

    getErrorText(errorText) {
        cy.get('.alert-danger').should('be.visible').and('have.text', errorText);
    }

    getErrorBanner(errorText) {
      cy.get('.css-1cfrmkq.eu2udwo9')
      .should('be.visible')
      .and('contain.text', errorText);
    }
  }
  
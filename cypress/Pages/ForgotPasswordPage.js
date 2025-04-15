export class ForgotPasswordPage {
    visit() {
        cy.visit('https://app.ninjarmm.com/auth/#/login', {
            onBeforeLoad(win) {
              Object.defineProperty(win.navigator, 'language', { value: Cypress.env("LANG") });
              Object.defineProperty(win.navigator, 'languages', { value: [Cypress.env("LANG")] });
            }
        });
        cy.get('a[href="#/resetPassword"]').should('be.visible').click();
    }

    selectIdentity(identity) {
        cy.get('.css-yk16xz-control').click();
        cy.contains('div', identity).click();
    }

    sendResetPasswordByEmail(email) {
        cy.get('input[name="email"]').type(email);
        cy.get('.m-t-sm').click();
    }

    sendResetPasswordByText(email, phone) {
        cy.get('input[name="email"]').type(email);
        cy.get('input[name="phone"]').type(phone);
        cy.get('.m-t-sm').click();
    }

    enterSecurityCode() {
        cy.get('label.css-wh0jfy').should('contain.text', 'Enter Security Code');
        cy.get('input[name="verificationCode"]').should('be.visible');
    }

    getSuccessMessage(message) {
        cy.get('.e1nhwllb0').should('be.visible').and('have.text', message);
    }

    getErrorMessage(errorMessage) {
        cy.get('.eu2udwo9').should('be.visible').and('contain.text', errorMessage);
        
    }
    
    

    
    
}
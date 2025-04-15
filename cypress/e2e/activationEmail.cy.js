import { RequestActivationPage } from '../Pages/RequestActivationPage';

const requestActivationPage = new RequestActivationPage();
const viewports = ["macbook-15", "iphone-xr", "ipad-2", "samsung-s10"];

viewports.forEach((viewport) => {
    describe(`Request Activation Email - Viewport: ${viewport}`, () => {
        beforeEach(() => {
            cy.viewport(viewport);
            cy.clearCookies();
            cy.clearLocalStorage();
            requestActivationPage.requestActivationLink();
        });

        it('should send activation email', () => {
            requestActivationPage.sendActivationEmail('paxton.stamm@yahoo.com');
            requestActivationPage.getSuccessMessage('Activation email sent.');
        });

        it('should not send activation email with already activated email', () => {
            requestActivationPage.sendActivationEmail(Cypress.env("username"));     
            requestActivationPage.getSuccessMessage('The specified email already has an activated account.');
        });

        it('should not send activation email with invalid email', () => {
            requestActivationPage.sendActivationEmail('invalidEmail@test.com')
            requestActivationPage.getErrorMessage('Error while requesting activation email');
        });
        
        
    });
});
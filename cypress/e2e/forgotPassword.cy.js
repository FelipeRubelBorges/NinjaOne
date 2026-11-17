import { ForgotPasswordPage } from "../Pages/ForgotPasswordPage";

const forgotPasswordPage = new ForgotPasswordPage();
const viewports = ["macbook-15", "iphone-xr", "ipad-2", "samsung-s10"];

viewports.forEach((viewport) => {
  describe(`Forgot Password - Viewport: ${viewport}`, () => {
    beforeEach(() => {
      cy.viewport(viewport);
      cy.clearCookies();
      cy.clearLocalStorage();
      forgotPasswordPage.visit();
    });

    it('should send reset password by email', () => {
      forgotPasswordPage.selectIdentity('Email');
      cy.env(["username"], { log: false }).then(({ username }) => {
        forgotPasswordPage.sendResetPasswordByEmail(username);
      });
      forgotPasswordPage.getSuccessMessage('Password recovery email sent');
    });

    it('should send reset password by text', () => {
      forgotPasswordPage.selectIdentity('Text');
      cy.env(["username"], { log: false }).then(({ username }) => {
        forgotPasswordPage.sendResetPasswordByText(username, '7179');
      });
      forgotPasswordPage.enterSecurityCode();
    });

    it('should not send reset password by email with invalid email', () => {
      forgotPasswordPage.selectIdentity('Email');
      forgotPasswordPage.sendResetPasswordByEmail('invalidEmail@test.com');
      forgotPasswordPage.getErrorMessage('Error during password reset');
    });

    it('should not send reset password by text with invalid phone number', () => {
      forgotPasswordPage.selectIdentity('Text');
      cy.env(["username"], { log: false }).then(({ username }) => {
        forgotPasswordPage.sendResetPasswordByText(username, '6871');
      });
      forgotPasswordPage.getErrorMessage('Error during password reset');
    });

  });
});


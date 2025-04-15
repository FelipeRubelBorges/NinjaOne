Feature: Forgot Password Functionality

  Background:
    Given the user navigates to the Forgot Password page

  Scenario: Successfully send password reset email
    When the user selects "Email" as the identity method
    And the user submits a password reset request with a valid email
    Then a success message "Password recovery email sent" should be displayed

  Scenario: Successfully send password reset via text
    When the user selects "Text" as the identity method
    And the user submits a password reset request with a valid phone number
    Then the security code entry field should be visible

  Scenario: Fail to send password reset email with invalid email
    When the user selects "Email" as the identity method
    And the user submits a password reset request with an invalid email
    Then an error message "Error during password reset" should be displayed

  Scenario: Fail to send password reset via text with invalid phone number
    When the user selects "Text" as the identity method
    And the user submits a password reset request with an invalid phone number
    Then an error message "Error during password reset" should be displayed
Feature: Request Activation Email

  Background:
    Given the user navigates to the request activation page

  Scenario: Successfully send activation email
    When the user requests an activation email with a valid email address
    Then a success message "Activation email sent." should be displayed

  Scenario: Fail to send activation email with already activated email
    When the user requests an activation email with an already activated email address
    Then a message "The specified email already has an activated account." should be displayed

  Scenario: Fail to send activation email with invalid email
    When the user requests an activation email with an invalid email address
    Then an error message "Error while requesting activation email" should be displayed

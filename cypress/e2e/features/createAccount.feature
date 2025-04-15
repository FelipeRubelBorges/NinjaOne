Feature: User Account Creation

  Background:
    Given the user navigates to the account registration page

  Scenario: Successfully create a new account
    When the user fills in the registration form with valid details
    And the user submits the registration form
    Then a success message "Account successfully created. Please check your email to activate your account." should be displayed

  Scenario: Fail to create an account with an invalid email
    When the user fills in the registration form with an invalid email address
    And the user submits the registration form
    Then an error message "Invalid email address" should be displayed

  Scenario: Fail to create an account with a weak password
    When the user fills in the registration form with a weak password
    And the user submits the registration form
    Then an error message "Password must be between (8) and (72) characters and meet 3 of the following criteria: lower case letter, upper case letter, special character, number." should be displayed

  Scenario: Fail to create an account with mismatched passwords
    When the user fills in the registration form with mismatched passwords
    And the user submits the registration form
    Then an error message "Passwords do not match" should be displayed

  Scenario: Fail to create an account with an invalid phone number
    When the user fills in the registration form with an invalid phone number
    And the user submits the registration form
    Then an error message "Invalid phone number" should be displayed

  Scenario: Fail to create an account without mandatory fields
    When the user submits the registration form without filling in the mandatory fields
    Then an error message "RequiredRequiredRequiredInvalid email addressPassword must be between (8) and (72) characters and meet 3 of the following criteria: lower case letter, upper case letter, special character, number.Invalid phone number" should be displayed

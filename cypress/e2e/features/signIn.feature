Feature: User Sign-In on NinjaOne Armm Portal

  Background:
    Given the user navigates to the sign-in page

  Scenario: Successful sign-in with 'staySignedIn' enabled
    When the user signs in with valid credentials and selects 'staySignedIn'
    Then the URL should include "/auth/?state="
    And the "Multi-Factor Authentication" heading should be visible

  Scenario: Successful sign-in without 'staySignedIn'
    When the user signs in with valid credentials without selecting 'staySignedIn'
    Then the URL should include "/auth/?state="
    And the "Multi-Factor Authentication" heading should be visible

  Scenario: Unsuccessful sign-in with blank username and password
    When the user attempts to sign in with blank username and password
    Then an error banner displaying "Error during login" should be visible

  Scenario: Unsuccessful sign-in with invalid password
    When the user signs in with a valid username and an invalid password
    Then an error message stating "Invalid username/password. Please contact your system administrator for assistance." should be displayed

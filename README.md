# NinjaOne QA Engineer Assessment Project

Repository to NinjaOne Test Automation Assessment.

- This project implements automated testing for the main pages of the NinjaOne application, including the login, forgot password, account creation, and activation email pages.

- Tests are written using Cypress, following the Page Object Model (POM) design pattern.

- ESLint is used to maintain code quality and consistency.

- A GitHub Actions pipeline is configured to automatically run the tests and generate a test report.

- The `cypress.env.json` file is not included in the repository, as it contains environment variables and secrets. You must create this file locally and populate it with the appropriate values before running the tests.


## Prerequisites

- Node.js (v18.17.1)
- npm (v10.9.0)
- Cypress (v12.11.0)

## Installation

1. Clone the repository

```bash
git clone https://github.com/FelipeRubelBorges/NinjaOne.git
```

2. Install dependencies

```bash 
npm install
npm install cypress --save-dev
```

3. Run the tests

```bash
npx cypress open
npx cypress run
```

## Test Cases

The test cases are available in the `cypress/e2e/features` directory.

## Not implemented Tests Cases

- The tests for login with two-factor authentication have not been implemented yet due to technical limitations.
- To enable these tests, we have a few possible approaches:
    - Bypass the two-factor authentication in the QA environment to simplify test execution.
    - Use a tool like Mailosaur to generate temporary email addresses and phone numbers, allowing us to intercept the two-factor authentication code via Mailosaur's API.

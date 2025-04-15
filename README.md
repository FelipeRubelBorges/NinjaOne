# NinjaOne QA Engineer Assessment Project

Repository to NinjaOne Test Automation Assessment.

- The test was made using Cypress and the principles of Page Object Model.
- The Eslint was used to ensure the code quality.
- The project have a pipeline in Github Actions to run the tests and a report is generated.
- The file cypress.env.json is not included in the repository, it is used to store the environment variables and secrets, so it is necessary to create it and add the correct values.


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

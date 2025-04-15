const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",
    setupNodeEvents() {
      // implement node event listeners here
    }
  },
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  env: {
    LANG: "en-US",
  },
});

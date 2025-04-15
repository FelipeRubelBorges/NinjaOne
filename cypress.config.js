const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",
  },
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  env: {
    LANG: "en-US",
  },
});

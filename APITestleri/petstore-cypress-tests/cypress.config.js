const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7hp7po",
  e2e: {
    baseUrl: 'https://petstore.swagger.io/v2',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      html: false,
      json: true
    },
    experimentalRunAllSpecs: true,
    defaultCommandTimeout: 10000,
    failOnStatusCode: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
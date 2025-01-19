const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        // burada özel taskler varsa onlar kalabilir
      });
      allureWriter(on, config);
      return config;
    },
    env: {
      allure: true,
      allureReuseAfterSpec: true,
      allureResultsPath: "allure-results",
      allureAddVideoOnPass: true,
      allureAddScreenshots: true
    },
    baseUrl: 'https://www.manuka.com.tr',
    video: true,
    screenshotOnRunFailure: true,
    videosFolder: "allure-results/videos",
    screenshotsFolder: "allure-results/screenshots"
  },
});
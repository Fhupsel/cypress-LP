const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://lp.teacherpoli.com/teacher-poli-apa-mt-depoimento/',
    chromeWebSecurity: false
  },
});

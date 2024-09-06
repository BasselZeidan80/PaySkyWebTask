// cypress/plugins/index.js
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
  allureWriter(on, config);
  // Other plugin code...
  return config;
};

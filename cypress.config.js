module.exports = {
  e2e: {
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};

module.exports.mobile = {
  viewportWidth: 375,
  viewportHeight: 812,
};

module.exports.laptop = {
  viewportWidth: 1366,
  viewportHeight: 768,
};

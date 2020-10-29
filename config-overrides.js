const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/Components",
    "@assets": "src/Assets",
    "@views": "src/Views",
  })(config);

  return config;
};

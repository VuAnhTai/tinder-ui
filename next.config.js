const path = require('path')

module.exports = {
  webpack5: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "variables.scss";`,
  },
  trailingSlash: true,
  webpack: function (config, options) {
    config.experiments = {};
    return config;
  },
}

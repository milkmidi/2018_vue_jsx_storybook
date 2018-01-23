// load the default config generator.
const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');

const rootWebpackConfig = require('../webpack/webpack.client.js');

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  const alias = Object.assign({}, config.resolve.alias, rootWebpackConfig.resolve.alias);
  config.resolve.alias = alias;

  rootWebpackConfig.resolve.modules.forEach((modulePath) => {
    if (modulePath.indexOf('node_modules') === -1) {
      config.resolve.modules.push(modulePath);
    }
  });

  return config;
};

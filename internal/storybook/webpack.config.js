const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');

const rootWebpackConfig = require('../../webpack.config');

/**
 *
 * @param {object} baseConfig
 */
module.exports = (baseConfig) => {
  console.log(baseConfig);
  const config = baseConfig;

  rootWebpackConfig.resolve.modules.forEach((modulePath) => {
    if (modulePath.indexOf('node_modules') === -1) {
      config.resolve.modules.push(modulePath);
    }
  });
  Object.assign(config.resolve.alias, rootWebpackConfig.resolve.alias);

  config.resolveLoader = {
    alias: {
      'docs-loader': require.resolve('../custom-loader/docs-loader.js'),
    },
  };


  return config;
};

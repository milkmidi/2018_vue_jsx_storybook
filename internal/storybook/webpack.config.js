const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');

const rootWebpackConfig = require('../../webpack.config');


module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);

  config.resolve.modules = config.resolve.modules.concat(rootWebpackConfig.resolve.modules);
  Object.assign(config.resolve.alias, rootWebpackConfig.resolve.alias);

  config.resolveLoader = {
    alias: {
      'docs-loader': require.resolve('../custom-loader/docs-loader.js'),
    },
  };

  return config;
};

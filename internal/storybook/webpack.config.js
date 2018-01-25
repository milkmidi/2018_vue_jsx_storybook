// load the default config generator.
const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');

const path = require('path');
const rootWebpackConfig = require('../../webpack.config');

module.exports = (storybookBaseConfig) => {
  console.log(JSON.stringify(storybookBaseConfig));
  // const config = genDefaultConfig(baseConfig);


  /*  const alias = Object.assign({}, config.resolve.alias, rootWebpackConfig.resolve.alias);
  config.resolve.alias = alias;

  rootWebpackConfig.resolve.modules.forEach((modulePath) => {
    if (modulePath.indexOf('node_modules') === -1) {
      config.resolve.modules.push(modulePath);
    }
  });

  config.resolveLoader = rootWebpackConfig.resolveLoader;

  rootWebpackConfig.module.rules.forEach((rule) => {
    config.module.rules.push(rule);
  }); */


  storybookBaseConfig.resolveLoader = {
    alias: {
      'docs-loader': require.resolve('../custom-loader/docs-loader.js'),
    },
  };

  storybookBaseConfig.module.rules.push({
    test: /\.md$/,
    use: [
      'raw-loader',
      'docs-loader',
    ],
    include: path.resolve('src/js'),
    exclude: /node_modules/,
  });


  return storybookBaseConfig;
};

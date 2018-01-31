const path = require('path');
const rootWebpackConfig = require('../../webpack.config');

/**
 *
 * @param {object} baseConfig
 * @param {string} configType DEVELOPMENT or PRODUCTION
 */
module.exports = (baseConfig, configType) => {
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

  // const { rules } = config.module;
  // exclude storybook default webpack markdown-loader
  /* rules.forEach((rule) => {
    if (rule.test.toString().indexOf('.md') !== -1) {
      rule.exclude = [path.join(process.cwd(), 'src')];
    }
  }); */

  /* rules.push({
    test: /\.md$/,
    use: [
      'raw-loader',
      'docs-loader',
    ],
    include: path.resolve('src/js'),
    exclude: /node_modules/,
  }); */


  return config;
};

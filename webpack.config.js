const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const DEV_MODE = process.env.NODE_ENV === 'development';

const webpackConfig = {
  mode: process.env.NODE_ENV,
  context: path.resolve('src'),
  entry: {
    app: ['./js/app.js'],
  },
  devtool: DEV_MODE ? 'inline-source-map' : false,
  output: {
    path: path.resolve('dist'),
    filename: 'asset/js/[name].js',
    chunkFilename: 'asset/js/[name].js',
    publicPath: '',
  },
  resolveLoader: {
    alias: {
      'docs-loader': require.resolve('./internal/custom-loader/docs-loader.js'),
    },
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('src/asset'),
      path.resolve('node_modules'),
    ],
    alias: {
      '~': path.resolve('src'),
      '@': path.resolve('src/js'),
      img: path.resolve('src/asset/img'),
      internal: path.resolve('internal'),
      vue: 'vue/dist/vue.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            preserveWhitespace: false,
            extractCSS: !DEV_MODE,
            stylus: 'stylus-loader?paths=src/css/',
            loaders: {
              docs: 'docs-loader',
            },
          },
        },
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.resolve('src/js'),
        exclude: /node_modules/,
      },
      {
        test: /\.md$/,
        use: [
          'raw-loader',
          'docs-loader',
        ],
        include: path.resolve('src/js'),
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 2048,
            name: '[path][name].[ext]?[hash]',
          },
        },
      },
      {
        // this applies to <template lang="pug"> in Vue components
        test: /\.pug$/,
        use: ['pug-plain-loader'],
        // include: path.resolve('src/js'),
        exclude: path.resolve('src/html'),
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: {
            self: true,
            pretty: DEV_MODE,
          },
        },
        include: path.resolve('src/html'),
      },
      {
        test: /\.styl(us)?$/,
        use: [
          {
            loader: 'vue-style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              minimize: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('autoprefixer')({
                  browsers: [
                    'last 5 versions',
                    'iOS >=10',
                    'not ie <= 11',
                    '>3%',
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
          {
            loader: 'stylus-loader',
            options: {
              paths: ['src/css/', 'src/assets/', 'src/'],
              sourceMap: true,
              define: {
                DEV_MODE,
              },
              // preferPathResolver: 'webpack',
              import: [path.resolve('src/css/common.styl')],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'html/index.template.pug',
      data: { DEV_MODE },
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    ...DEV_MODE
      ? [
        new FriendlyErrorsPlugin(),
      ]
      : [
        new CleanWebpackPlugin(['dist'], {
          root: __dirname,
        }),
      ],
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port: 3000,
    hot: true,
    stats: {
      colors: true,
      hash: false,
      chunks: false,
      chunkModules: false,
      children: false,
    },
    host: '0.0.0.0',
    disableHostCheck: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 100,
      minChunks: 1,
      automaticNameDelimiter: '-',
      name: true,
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5,
          minSize: 0,
        },
        vendors: {
          name: 'vendor',
          chunks: 'initial',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          enforce: true,
        },
      },
    },
  },
};


if (!DEV_MODE) {
  const stylusLoader = webpackConfig.module.rules.find(({ test }) => test.test('.stylus'));
  stylusLoader.use[0] = {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: '../../',
    },
  };
  webpackConfig.plugins.push(new MiniCssExtractPlugin({
    filename: 'asset/css/[name].css',
    chunkFilename: 'asset/css/[name]-chunk.css',
  }));
}

module.exports = webpackConfig;

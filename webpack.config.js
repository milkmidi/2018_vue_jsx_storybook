const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const DEV_MODE = process.env.NODE_ENV === 'development';

module.exports = {
  context: path.resolve('src'),
  entry: {
    app: ['./js/app.js'],
    vendor: ['vue', 'vue-router', 'vuex'],
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
    },
    extensions: ['.js'],
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
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: {
            self: true,
            pretty: DEV_MODE,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'html/index.template.pug',
      data: {
        DEV_MODE,
      },
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
    }),
    new ExtractTextPlugin({
      filename: 'asset/css/app.css',
      disable: DEV_MODE,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    ...DEV_MODE
      ? [
        new webpack.NamedModulesPlugin(),
        new FriendlyErrorsPlugin(),
      ]
      : [
        new CleanWebpackPlugin(['dist'], {
          root: __dirname,
        }),
        ...process.env.BEAUTIFY
          ? []
          : [
            new webpack.optimize.UglifyJsPlugin({
              sourceMap: false,
              compress: {
                warnings: false,
              },
              output: {
                comments: false,
              },
            }),
          ],
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
};

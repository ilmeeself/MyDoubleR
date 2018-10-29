const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackConfig = require('./webpack.config');

process.env.NODE_ENV = 'development';

module.exports = merge(webpackConfig, {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    path.resolve(__dirname, '../src/index.js'),
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:9090',
    'webpack/hot/only-dev-server',
  ],
  output: {
    path: path.resolve(__dirname, '../dist/dev_index'), // 输出的路径
    filename: 'app_dev/[name]_[hash:8].js', // 打包后文件
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/page/index.template.html'),
      inject: true,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
});
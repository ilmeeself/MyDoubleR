const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill',path.resolve(__dirname, '../src/index.js')],
  output: {
    path: path.resolve(__dirname, '../dist/dev_common'), // 输出的路径
    filename: 'app/[name]_[hash:8].js', // 打包后文件
  },
  mode: 'development', // 设置mode
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, 
        loader: 'babel-loader', // 加载器
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          }, 
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
　　　　 template: path.resolve(__dirname, '../src/page/index.template.html'),
　　　　 inject: true
　　}),
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
　]
};
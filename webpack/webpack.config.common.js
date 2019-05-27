const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  target: 'web',
  entry: path.resolve(__dirname, '..', 'src', 'index.js'),
  module: {
    rules: [
      {
        test: /(\.js|jsx)$/,
        exclude: [
          '/node_modules/',
          '/dist/'
        ],
        use: ['babel-loader']
      },
      {
        test: /(\.css)$/,
        use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader']
      },
      {
        test: /(\.scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFileName: '[id].css'
    })
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    modules: ['node_modules', 'dist', path.join('src')]
  },
};
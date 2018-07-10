const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SRC_DIR = path.join(__dirname, './client/src');
const DIST_DIR = path.join(__dirname, './dist');
const webpack = require('webpack');


module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  watch: true,
  module: {
    rules: [
      { 
        test: /\.jsx?/, 
        loader: 'babel-loader',
        include: SRC_DIR,
        options: {
          presets: ['env', 'react'],
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            }
          }
        ]
      },
    ], // rules
  }, // module
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Music Data Visualization',
      template: './public/index.html'
    })
  ], // plugins
};
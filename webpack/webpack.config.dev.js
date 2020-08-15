const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');

module.exports = merge(commonConfig, {
  mode: 'development',
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'main.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    port: 8001,
  },
});

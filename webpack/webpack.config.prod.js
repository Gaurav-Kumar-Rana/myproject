const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'main[hash].js',
  },
});

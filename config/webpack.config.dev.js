const path = require('path')
const config = require('./webpack.config.common')

module.exports = Object.assign(config, {
  entry: path.join(__dirname, '../index.ts'),
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '../dist/',
    filename: 'django.dev.js',
  },
})

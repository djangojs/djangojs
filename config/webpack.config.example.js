const path = require('path')
const config = require('./webpack.config.common')
const NodemonWebpackPlugin = require('nodemon-webpack-plugin')

module.exports = Object.assign(config, {
  entry: path.join(__dirname, '../example/manage.ts'),
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '../dist/',
    filename: 'django.example.js',
  },
  watch: true,
  plugins: [
    new NodemonWebpackPlugin(),
  ],
})

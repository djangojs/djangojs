const path = require('path')
const config = require('./webpack.config.common')

Object.assign(config, {
  entry: path.join(__dirname, '../index.ts'),
  output: {
    path: path.join(__dirname, '../dist/'),
    publicPath: '../dist/',
    library: 'django',
  },
})

const umd = Object.assign({}, config, {
  output: {
    libraryTarget: 'umd',
    filename: 'django.js',
  },
})

const min = Object.assign({}, config, {
  output: {
    libraryTarget: 'umd',
    filename: 'django.min.js',
  },
  optimization: {
    minimize: true,
  },
})

const commonjs = Object.assign({}, config, {
  output: {
    libraryTarget: 'commonjs',
    filename: 'django.common.js',
  },
})

const esmodule = Object.assign({}, config, {
  output: {
    libraryTarget: 'module',
    filename: 'django.esm.js',
  },
  experiments: {
    outputModule: true,
  },
})

module.exports = [ umd, min, commonjs, esmodule ]

const path = require('path')

module.exports = {
  target: 'node',
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.join(__dirname, 'tsconfig.json')
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js', '.json' ],
  },
  node: {
    __dirname: true,
  },
}

const { resolve } = require('path');

const isDevelopment = process.env.NODE_ENV !== 'production';

const config = {
  mode: isDevelopment ? "development" : "production",
  entry: {
    Basic: resolve('./src/basic/index.ts')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: ['awesome-typescript-loader?module=es6'],
        exclude: [/node_modules/]
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  output: {
    path: resolve('lib'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: '[name]',
    umdNamedDefine: true
  }
};

module.exports = config;
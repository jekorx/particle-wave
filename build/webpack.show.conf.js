'use strict'
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'production',
  entry: resolve('src/demo.js'),
  output: {
    filename: 'index.min.js',
    path: resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: resolve('src')
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: false
    })
  ]
}

'use strict'
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'production',
  entry: resolve('src/index.js'),
  output: {
    path: resolve('lib'),
    filename: 'particle-wave.js',
    chunkFilename: '[id].js',
    libraryExport: 'default',
    library: 'ParticleWave',
    libraryTarget: 'commonjs2'
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

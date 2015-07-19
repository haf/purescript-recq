var path = require('path');
var srcs = ['src[]=bower_components/purescript-*/src/**/*.purs', 'src[]=src/**/*.purs'];
var ffis = ['ffi[]=bower_components/purescript-*/src/**/*.js', 'ffi[]=src/**/*FFI.js'];
var output = 'build';
var webpack = require('webpack');

var modulesDirectories = [
  'node_modules',
  output
];
module.exports = {
  entry: './src/index',
  output: {
    path: __dirname + '/' + output,
    pathinfo: true,
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.coffee', '.purs'],
    modulesDirectories: modulesDirectories
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: 'coffee-loader' },
      { test: /\.purs$/, loader: 'purs-loader?output=' + output + '&' + srcs.concat(ffis).join('&') }
    ]
  },
  externals: {
    React: 'react'
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react"
    })
  ]
}

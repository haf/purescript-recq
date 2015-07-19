var path = require('path');

// purescript
var srcs = ['src[]=bower_components/purescript-*/src/**/*.purs', 'src[]=src/**/*.purs'];
var ffis = ['ffi[]=bower_components/purescript-*/src/**/*.js'];
var output = 'output';
var modulesDirectories = [
  'node_modules',
  'bower_components/purescript-prelude/src',
  output
];

// webpack
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    modulesDirectories: modulesDirectories,
    extensions: ['', '.ts', '.js', '.coffee'],
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel-loader']
    }, {
      test: /\.ts$/,
      loader: 'awesome-typescript-loader?emitRequireType=false&library=es6'
    }, {
      test: /\.purs$/,
      loader: 'purs-loader?output=' + output + '&' + srcs.concat(ffis).join('&')
    }, {
      test: /\.coffee$/,
      loader: "coffee-loader"
    }]
  },
  entry: {
    index: ['./src/index.js']
  },
  output: {
    publicPath: '//localhost:8000/',
    path: './build',
    filename: './[name].js'
  }
};
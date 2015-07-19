var wpcfg = require('./webpack.config');
wpcfg.devtool = 'inline-source-map';

var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'tests/index.js',
    ],
    exclude: [
      '**/*.swp'
    ],
    preprocessors: {
      'tests/*': ['webpack']
    },
    webpack: {
      resolve: {
        extensions: ["", ".js", ".coffee"]
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: 'babel-loader'
          },
          { test: /\.coffee$/, loader: "coffee-loader" }
        ]
      }
    },
    webpackMiddleware: {
      stats: { colors: true }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'], //browsers: ['Chrome', 'Firefox', 'PhantomJS'],
    singleRun: false,
    captureTimeout: 60000,
    plugins: [
      require("karma-mocha"),
      require("karma-spec-reporter"),
      require("karma-chrome-launcher"),
      require("karma-webpack"),
    ]
  })
}

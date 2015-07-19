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
        extensions: ["", ".js"]
      },
      module: {
        loaders: []
      }
    },
    webpackMiddleware: {
      stats: { colors: true }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
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

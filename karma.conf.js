var webpack = require('webpack'),
    wpcfg   = require('./webpack.conf.js')

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['chai', 'mocha'],
    files: [
      'tests/**/*.js',
      'tests/**/*.coffee'
    ],
    exclude: [
      '**/*.swp'
    ],
    preprocessors: {
      'tests/*': ['webpack']
    },
    webpack: wpcfg,
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
      require("karma-chai"),
      require("karma-spec-reporter"),
      require("karma-chrome-launcher"),
      require("karma-webpack"),
    ]
  })
}

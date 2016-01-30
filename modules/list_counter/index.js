var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var path = require('path');

function buildJS(options) {
  return new Promise(function (resolve, reject) {
    if (options.outputPath) {
      webpackConfig.output.path = options.outputPath;
    }

    webpack(webpackConfig, function (err, stats) {
      if (err) {
        reject('Dammit! Webpacking failed:' + err);
        return;
      }
      var jsonStats = stats.toJson();
      if (jsonStats.errors.length > 0) {
        reject('Dammit! Webpacking failed:\n' + jsonStats.errors.join('\n'));
        return;
      }
      if (jsonStats.warnings.length > 0) {
        console.log('No problem sir, but there where some warnings:\n' + jsonStats.join('\n'));
      }

      var bundles = {
        js: [path.resolve(stats.compilation.outputOptions.path, stats.compilation.outputOptions.filename)],
        css: [],
        templates: []
      };
      resolve(bundles);
    });
  });
}

module.exports = {

  build: function build(options) {
    if (typeof options === 'undefined') {
      options = {};
    }

    return new Promise(function (resolve, reject) {
      buildJS(options).then(resolve).catch(reject);
    });
  }

};
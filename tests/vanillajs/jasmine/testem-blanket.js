/*jshint browser:false, node:true */
/*jshint camelcase: false */
var globby = require('globby');

var config = {
  framework: 'jasmine',
  test_page: 'tests/vanillajs/jasmine/index.mustache?coverage',
  launch_in_ci: [
    'PhantomJS'
  ],
  launch_in_dev: [
    'PhantomJS'
  ],
  css_files: [
  ],
  _lib_files: globby.sync([
    'bower_components/blanket/dist/qunit/blanket.js',
    'bower_components/blanket/src/adapters/jasmine-2.x-blanket.js'
  ]),
  _src_files: globby.sync([
    'app/examples/vanillajs/js/*.js',
    '!app/examples/vanillajs/js/app.js'
  ]),
  _test_files: globby.sync([
    'tests/vanillajs/mocks/*.mock.js',
    'tests/vanillajs/jasmine/*.test.js'
  ])
};

config.src_files = [].join(
  config._src_files,
  config._lib_files,
  config._test_files
);

module.exports = config;

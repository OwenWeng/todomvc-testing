module.exports = {
  "framework": "jasmine",
  "test_page": "tests/vanillajs/jasmine/index.mustache",
  "launch_in_ci": [
    "PhantomJS"
  ],
  "launch_in_dev": [
    "PhantomJS"
  ],
  "src_files": [
    "app/examples/vanillajs/js/*.js",
    "tests/vanillajs/mocks/*.mock.js",
    "tests/vanillajs/jasmine/*.test.js"
  ],
  "src_files_ignore": [
    "app/examples/vanillajs/js/app.js"
  ]
}

todomvc-testing
===============

[![Build Status](http://img.shields.io/travis/amercier/todomvc-testing/master.svg?style=flat-square)](https://travis-ci.org/amercier/todomvc-testing)

Shows examples of Javascript automated testing using [TodoMVC](http://todomvc.com/) as an example:

<table>
  <tr>
    <th>Platform</th>
    <th>Runner</th>
    <th>Coverage</th>
    <th colspan="3">Framework</th>
  </tr>
  <tr>
    <th colspan="3"></th>
    <th>Jasmine</th>
    <th>Mocha</th>
    <th>QUnit</th>
  </tr>
  <tr>
    <td rowspan="4">Browser</td>
    <td rowspan="2">Karma</td>
    <td>Blanket</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>Istanbul</td>
    <td>
      <i style="color:#22ee5b">✓</i> Vanilla JS  
    </td>
    <td>
      <i style="color:#22ee5b">✓</i> Vanilla JS  
    </td>
    <td>
      <i style="color:#22ee5b">✓</i> Vanilla JS  
    </td>
  </tr>
  <tr>
    <td rowi="2">Testem</td>
    <td>Blanket</td>
    <td>
      <i style="color:#22ee5b">✓</i> Vanilla JS  
    </td>
    <td>
      <i style="color:#22ee5b">✓</i> Vanilla JS  
    </td>
    <td>
      <i style="color:#22ee5b">✓</i> Vanilla JS  
    </td>
  </tr>
  <tr>
    <td>Istanbul</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>node.js</td>
    <td colspan="5"></td>
  </tr>
</table>


Installation
------------

1. Clone this repo:

  ```
  git clone https://github.com/amercier/todomvc-testing.git
  cd todomvc-testing
  ```

2. Install submodules

  ```
  git submodule init
  git submodule update
  ```

3. Install NPM modules

  ```
  npm install
  ```

  > Note: this will automatically install Bower components as 'bower install' is
  > registered in NPM install hook.

4. Run tests

  Example using Testem, QUnit and Blanket (see [package.json](package.json) for others):

  ```
  npm run testem-test-vanillajs-qunit
  ```

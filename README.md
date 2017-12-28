[![Build Status](https://img.shields.io/travis/bharathvaj1995/effortless-require.svg)](https://travis-ci.org/bharathvaj1995/effortless-require)
[![Coverage Status](https://img.shields.io/codecov/c/github/bharathvaj1995/effortless-require.svg)](https://codecov.io/gh/bharathvaj1995/effortless-require)
# bharath-require
Effortlessly require node libraries, providing a more flexible way of requiring libraries and modules in your project.

## Installation
```
$ npm install bharath-require --save
```
## Features
* Require attract only once, at your application's start, and it will be globally available, everywhere.
* Say goodbye to ugly relative paths.
## Usuage
```javascript

// Node Packages
// Before
const express = require('express');
const moment = require('moment');

// Now
require('bharath-require')();
const [express, moment] = need('express', 'moment');
});

// Relative JS modules
// Before
const moduleOne = require('../../modules/path/to/moduleOne');
const moduleTwo = require('../../../modules/path/to/moduleTwo');

// Now
require('bharath-require')({ basePath: __dirname }) // Set `basePath` to your project's root folder, for example.
const [
  moduleOne,
  moduleTwo
] = need('path/to/moduleOne', 'path/to/moduleTwo');
```

## License

MIT © [Bharathvaj Ganesan](https://github.com/bharathvaj1995)
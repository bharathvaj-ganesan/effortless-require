<h1 align="center">
	<br>
	<img width="350" src="./media/effortless-require.png">
	<br>
</h1>

[![Build Status](https://img.shields.io/travis/bharathvaj1995/effortless-require.svg)](https://travis-ci.org/bharathvaj1995/effortless-require)
[![Coverage Status](https://img.shields.io/codecov/c/github/bharathvaj1995/effortless-require.svg)](https://codecov.io/gh/bharathvaj1995/effortless-require)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Bharath Rule](https://img.shields.io/badge/bharath-100%25-brightgreen.svg)](https://github.com/bharathvaj1995)

## effortless-require

[![Greenkeeper badge](https://badges.greenkeeper.io/bharathvaj1995/effortless-require.svg)](https://greenkeeper.io/)
Effortlessly require node libraries, providing a more flexible way of requiring libraries and modules in your project.

## Installation
```
$ npm install effortless-require --save
```

## Features
* Require only once, at your application's start, and it will be globally available, everywhere.
* Say goodbye to ugly relative paths.

## Usage
```javascript

// Node Packages
// Before
const express = require('express');
const moment = require('moment');

// Now
require('effortless-require')();
const [express, moment] = need('express', 'moment');
});

// Relative JS modules
// Before
const moduleOne = require('../../modules/path/to/moduleOne');
const moduleTwo = require('../../../modules/path/to/moduleTwo');

// Now
require('effortless-require')({ basePath: __dirname }) // Set `basePath` to your project's root folder, for example.
const [
  moduleOne,
  moduleTwo
] = need('path/to/moduleOne', 'path/to/moduleTwo');
```

## License

MIT © [Bharathvaj Ganesan](https://github.com/bharathvaj1995)
# logical-or
> Binary logical OR operator (||) as an auto-curried function.

[![Build Status](http://img.shields.io/travis/wilmoore/logical-or.js.svg)](https://travis-ci.org/wilmoore/logical-or.js) [![Code Climate](https://codeclimate.com/github/wilmoore/logical-or.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/logical-or.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install logical-or --save
```

> You can also use Duo, Bower or [download the files manually](https://github.com/wilmoore/logical-or.js/releases).

###### npm stats

[![npm](https://img.shields.io/npm/v/logical-or.svg)](https://www.npmjs.org/package/logical-or) [![NPM downloads](http://img.shields.io/npm/dm/logical-or.svg)](https://www.npmjs.org/package/logical-or) [![David](https://img.shields.io/david/wilmoore/logical-or.js.svg)](https://david-dm.org/wilmoore/logical-or.js)

## Overview

Returns `expr1` if it can be converted to true; otherwise, returns `expr2`. Thus, when used with Boolean values, || returns true if either operand is true; if both are false, returns false.

## API Example

###### Pointful

```js
var or = require('logical-or')
or(1, 0)
//=> 1
```

###### Pointfree Style

```js
var or = require('logical-or')
var prices = ['$ 50.00', '', '$ 20.00']

prices.map(or('Price unknown'))
//=> ['$ 50.00', 'Price unknown', '$ 20.00']
```

## API

### `or(expr2, expr1)`

> please note the argument order.

###### arguments

 - `expr2 (mixed)`.
 - `expr1 (mixed)`.

###### returns

 - `(mixed)` Returns `expr1` if it can be converted to true; otherwise, returns `expr2`.

## Alternatives

 - `x || y`

## Contributing

> SEE: [contributing.md](contributing.md)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/logical-or.js.svg)](https://github.com/wilmoore/logical-or.js/blob/master/license)

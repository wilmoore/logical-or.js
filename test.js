'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var or = require('./')

/*!
 * tests.
 */

test('or()', function (t) {
  t.equal(or(1, 0), 1, 'Returns expr2 since expr1 does not evaluate to true')
  t.deepEqual(['$ 50.00', '', '$ 20.00'].map(or('Price unknown')), ['$ 50.00', 'Price unknown', '$ 20.00'], 'Returns "Price unknown" for empty string')
  t.end()
})

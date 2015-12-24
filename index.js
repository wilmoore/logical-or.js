'use strict'

/*!
 * imports.
 */

var curry2 = require('curry2')

/*!
 * exports.
 */

module.exports = curry2(or)

/**
 * Returns `expr1` if it can be converted to true; otherwise, returns `expr2`.
 *
 * @param {*} expr2
 * Expression #2.
 *
 * @param {*} expr1
 * Expression #1.
 *
 * @return {*}
 * `expr1` if it can be converted to true; otherwise, `expr2`.
 */

function or (expr2, expr1) {
  return expr1 || expr2
}

'use strict'

var test = require('tape')
var nan = require('is-nan')
var flesch = require('.')

test('flesch', function(t) {
  t.ok(nan(flesch()), 'NaN when an invalid value is given')
  t.equal(round(flesch({sentence: 1, word: 6, syllable: 6})), 116.145)
  t.equal(round(flesch({sentence: 1, word: 16, syllable: 22})), 74.27)
  t.equal(round(flesch({sentence: 1, word: 13, syllable: 26})), 24.44)
  t.end()
})

function round(val) {
  return Math.round(val * 1e6) / 1e6
}

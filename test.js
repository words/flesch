import assert from 'node:assert'
import test from 'node:test'
import {flesch} from './index.js'

test('flesch', function () {
  // @ts-expect-error runtime
  assert.ok(Number.isNaN(flesch()), 'NaN when an invalid value is given')
  assert.equal(round(flesch({sentence: 1, word: 6, syllable: 6})), 116.145)
  assert.equal(round(flesch({sentence: 1, word: 16, syllable: 22})), 74.27)
  assert.equal(round(flesch({sentence: 1, word: 13, syllable: 26})), 24.44)
})

/**
 * @param {number} value
 * @returns {number}
 */
function round(value) {
  return Math.round(value * 1e6) / 1e6
}

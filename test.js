'use strict';

/* Dependencies. */
var test = require('tape');
var nan = require('is-nan');
var flesch = require('./');

/* Formula. */
test('flesch', function (t) {
  t.ok(nan(flesch()), 'NaN when an invalid value is given');

  /*
   * The cat sat on the mat.
   *
   * Sentences: 1
   * Words: 6
   * Syllables: 6
   */
  t.equal(round(flesch({
    sentence: 1,
    word: 6,
    syllable: 6
  })), 116.145);

  /*
   * This sentence, taken as a reading passage unto itself, is being
   * used to prove a point.
   *
   * Sentences: 1
   * Words: 16
   * Syllables: 22
   */

  t.equal(round(flesch({
    sentence: 1,
    word: 16,
    syllable: 22
  })), 74.27);

  /*
   * The Australian platypus is seemingly a hybrid of a mammal and
   * reptilian creature.
   *
   * Sentences: 1
   * Words: 13
   * Syllables: 26
   */

  t.equal(round(flesch({
    sentence: 1,
    word: 13,
    syllable: 26
  })), 24.44);

  t.end();
});

function round(val) {
  return Math.round(val * 1e6) / 1e6;
}

'use strict';

module.exports = flesch;

var SENTENCE_WEIGHT = 1.015;
var WORD_WEIGHT = 84.6;
var BASE = 206.835;

function flesch(counts) {
  if (!counts || !counts.sentence || !counts.word || !counts.syllable) {
    return NaN;
  }

  return BASE -
    (SENTENCE_WEIGHT * (counts.word / counts.sentence)) -
    (WORD_WEIGHT * (counts.syllable / counts.word));
}

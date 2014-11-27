'use strict';

/**
 * Constants.
 */

var SENTENCE_WEIGHT,
    WORD_WEIGHT,
    BASE;

SENTENCE_WEIGHT = 1.015;
WORD_WEIGHT = 84.6;
BASE = 206.835;

/**
 * Get the grade level of a given value according to the Flesch Reading Ease
 * Formula. More information is available at WikiPedia:
 *
 *   http://en.wikipedia.org/wiki/
 *   Flesch–Kincaid_readability_tests#Flesch_Reading_Ease
 *
 * @param {Object} counts
 * @param {number} counts.word - Number of words.
 * @param {number} counts.sentence - Number of sentences.
 * @param {number} counts.syllable - Number of syllables.
 * @return {number}
 */

function flesch(counts) {
    if (!counts || !counts.sentence || !counts.word || !counts.syllable) {
        return NaN;
    }

    return BASE -
        SENTENCE_WEIGHT * (counts.word / counts.sentence) -
        WORD_WEIGHT * (counts.syllable / counts.word);
}

/**
 * Export `flesch`.
 */

module.exports = flesch;

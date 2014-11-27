'use strict';

/**
 * Module dependencies (flesch, assert).
 */

var flesch = require('./'),
    assert = require('assert');

/**
 * Assert, but up to 6 digits.
 */

function roundAssert(a, b) {
    assert(Math.round(a * 1000000) === Math.round(b * 1000000));
}

/**
 * Unit tests.
 */

describe('flesch()', function () {
    it('should be of type `function`', function () {
        assert(typeof flesch === 'function');
    });

    it('should work', function () {
        var result;

        /**
         * Return NaN when an invalid value is given.
         */

        result = flesch();

        assert(result !== result);

        /**
         * The cat sat on the mat
         *
         * Sentences: 1
         * Words: 6
         * Syllables: 6
         */

        roundAssert(flesch({
            'sentence' : 1,
            'word' : 6,
            'syllable' : 6
        }), 116.145);

        /**
         * This sentence, taken as a reading passage unto itself, is being
         * used to prove a point.
         *
         * Sentences: 1
         * Words: 16
         * Syllables: 22
         */

        roundAssert(flesch({
            'sentence' : 1,
            'word' : 16,
            'syllable' : 22
        }), 74.27);

        /**
         * The Australian platypus is seemingly a hybrid of a mammal and
         * reptilian creature.
         *
         * Sentences: 1
         * Words: 13
         * Syllables: 26
         */

        roundAssert(flesch({
            'sentence' : 1,
            'word' : 13,
            'syllable' : 26
        }), 24.44);
    });
});

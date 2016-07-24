# flesch [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Formula to detect the grade level of text according to the
[Flesch Reading Ease][formula].

See [syllable][] for detecting syllables.

## Installation

[npm][npm-install]:

```bash
npm install flesch
```

## Usage

```js
var flesch = require('flesch');

/* For “The cat sat on the mat” (1 sentence, 6 words,
 * 6 syllables). */
flesch({
  sentence: 1,
  word: 6,
  syllable: 6
});
// 116.14500000000001

/* For “The Australian platypus is seemingly a hybrid of
 * mammal and reptilian creature.” (1 sentence, 13 words,
 * 26 syllables). */
flesch({
  sentence: 1,
  word: 13,
  syllable: 26
});
// 24.440000000000026
```

## API

### `flesch(counts)`

Given an object containing the number of words (`word`), the number
of sentences (`sentence`), and the number of syllables  (`syllable`)
in a document, returns the reading ease associated with the document.

Returned values are 120 (every sentence consisting of only two
one-syllable words), or lower (including negative values).

The values have the following semantics:

|     Score    | Semantics                                           |
| :----------: | :-------------------------------------------------- |
| 90.0 – 100.0 | Easily understood by an average 11-year-old student |
|  60.0 – 70.0 | Easily understood by 13- to 15-year-old students    |
|  0.0 – 30.0  | Best understood by university graduates             |

## Related

*   [`automated-readability`](https://github.com/wooorm/automated-readability)
    — Uses character count instead of error-prone syllable parser;
*   [`coleman-liau`](https://github.com/wooorm/coleman-liau)
    — Uses letter count instead of an error-prone syllable parser;
*   [`dale-chall-formula`](https://github.com/wooorm/dale-chall-formula)
    — Uses a dictionary; suited for higher reading levels;
*   [`flesch-kincaid`](https://github.com/wooorm/flesch-kincaid)
    — Like `flesch`; returns U.S. grade levels;
*   [`gunning-fog`](https://github.com/wooorm/gunning-fog)
    — Uses syllable count; needs POS-tagging and NER;
*   [`smog-formula`](https://github.com/wooorm/smog-formula)
    — Like `gunning-fog-index`; without needing advanced NLP;
*   [`spache-formula`](https://github.com/wooorm/spache-formula)
    — Uses a dictionary; suited for lower reading levels.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/flesch.svg

[travis]: https://travis-ci.org/wooorm/flesch

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/flesch.svg

[codecov]: https://codecov.io/github/wooorm/flesch

[npm-install]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[formula]: http://en.wikipedia.org/wiki/Flesch–Kincaid_readability_tests#Flesch_Reading_Ease

[syllable]: https://github.com/wooorm/syllable

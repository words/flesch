# flesch

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Formula to detect the grade level of text according to the [Flesch reading
ease][formula].

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`flesch(counts)`](#fleschcounts)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

This package exposes an algorithm to detect ease of reading of English texts.

## When should I use this?

You’re probably dealing with natural language, and know you need this, if
you’re here!

This algorithm is based on syllables, whereas some others are not, which means
it’s tougher to get right and slower to calculate.

See [syllable][] for detecting syllables.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install flesch
```

In Deno with [`esm.sh`][esmsh]:

```js
import {flesch} from 'https://esm.sh/flesch@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {flesch} from 'https://esm.sh/flesch@2?bundle'
</script>
```

## Use

```js
import {flesch} from 'flesch'

// For “The cat sat on the mat” (1 sentence, 6 words, 6 syllables).
flesch({sentence: 1, word: 6, syllable: 6}) // => 116.14500…

// For “The Australian platypus is seemingly a hybrid of mammal and reptilian
// creature.” (1 sentence, 12 words, 23 syllables).
flesch({sentence: 1, word: 12, syllable: 23}) // => 32.50499…
```

## API

This package exports the identifier `flesch`.
There is no default export.

### `flesch(counts)`

Given an object containing the number of words (`word`), the number of
sentences (`sentence`), and the number of syllables  (`syllable`) in a
document, returns the reading ease associated with the document.

##### `counts`

Counts from input document.

###### `counts.sentence`

Number of sentences (`number`, required).

###### `counts.word`

Number of words (`number`, required).

###### `counts.syllable`

Number of syllables (`number`, required).

##### Returns

Result is `120` (every sentence consisting of only two one-syllable words) or
lower (including negative values).

The values have the following semantics:

|     Score    | Semantics                                           |
| :----------: | :-------------------------------------------------- |
| 90.0 – 100.0 | Easily understood by an average 11-year-old student |
|  60.0 – 70.0 | Easily understood by 13- to 15-year-old students    |
|  0.0 – 30.0  | Best understood by university graduates             |

Therefore we can use the following formula to approximate the average age a
student would understand a document at, given score `score`:

```js
const age = 20 - Math.floor(score / 10)
```

## Types

This package is fully typed with [TypeScript][].
It exports the additional type `Counts`.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Related

*   [`automated-readability`](https://github.com/words/automated-readability)
    — uses character count instead of error-prone syllable parser
*   [`coleman-liau`](https://github.com/words/coleman-liau)
    — uses letter count instead of an error-prone syllable parser
*   [`dale-chall-formula`](https://github.com/words/dale-chall-formula)
    — uses a dictionary, suited for higher reading levels
*   [`flesch-kincaid`](https://github.com/words/flesch-kincaid)
    — like `flesch`, returns U.S. grade levels
*   [`gunning-fog`](https://github.com/words/gunning-fog)
    — uses syllable count, needs POS-tagging and NER
*   [`smog-formula`](https://github.com/words/smog-formula)
    — like `gunning-fog-index`, without needing advanced NLP
*   [`spache-formula`](https://github.com/words/spache-formula)
    — uses a dictionary, suited for lower reading levels

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/words/flesch/workflows/main/badge.svg

[build]: https://github.com/words/flesch/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/words/flesch.svg

[coverage]: https://codecov.io/github/words/flesch

[downloads-badge]: https://img.shields.io/npm/dm/flesch.svg

[downloads]: https://www.npmjs.com/package/flesch

[size-badge]: https://img.shields.io/bundlephobia/minzip/flesch.svg

[size]: https://bundlephobia.com/result?p=flesch

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com

[formula]: https://en.wikipedia.org/wiki/Flesch–Kincaid_readability_tests#Flesch_Reading_Ease

[syllable]: https://github.com/words/syllable

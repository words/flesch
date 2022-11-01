/**
 * @typedef Counts
 *   Counts from input document.
 * @property {number} sentence
 *   Number of sentences.
 * @property {number} word
 *   Number of words.
 * @property {number} syllable
 *   Number of syllables.
 */

/**
 * @typedef {Counts} FleschCounts
 *   Deprecated: please use the `Counts` type instead.
 */

const sentenceWeight = 1.015
const wordWeight = 84.6
const base = 206.835

/**
 * Given an object containing the number of words (`word`), the number of
 * sentences (`sentence`), and the number of syllables  (`syllable`) in a
 * document, returns the reading ease associated with the document.
 *
 * @param {Counts} counts
 *   Counts from input document.
 * @returns {number}
 *   Result is 120 (every sentence consisting of only two one-syllable words)
 *   or lower (including negative values).
 *
 *   The values have the following semantics:
 *
 *   |     Score    | Semantics                                           |
 *   | :----------: | :-------------------------------------------------- |
 *   | 90.0 – 100.0 | Easily understood by an average 11-year-old student |
 *   |  60.0 – 70.0 | Easily understood by 13- to 15-year-old students    |
 *   |  0.0 – 30.0  | Best understood by university graduates             |
 *
 *   Therefore we can use the following formula to approximate the average age
 *   a student would understand a document at, given score `score`:
 *
 *   ```js
 *   const age = 20 - Math.floor(score / 10)
 *   ```
 */
export function flesch(counts) {
  if (!counts || !counts.sentence || !counts.word || !counts.syllable) {
    return Number.NaN
  }

  return (
    base -
    sentenceWeight * (counts.word / counts.sentence) -
    wordWeight * (counts.syllable / counts.word)
  )
}

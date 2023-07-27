# wordlib 📚
[![Test](https://github.com/arvidbt/wordlib/actions/workflows/test.yml/badge.svg)](https://github.com/arvidbt/wordlib/actions/workflows/test.yml/badge.svg)



Small package for playing around with Swedish-and English words and abbreviations.

## Installation 📦
To use the package, first install it:
```bash
TODO.
```
Then, import it as:
```javascript
import { WordLib } from "wordlib";
```
Instantiate the class:
```javascript
// For English,
const enWords = new WordLib("en");
// For Swedish,
const svWords = new WordLib("sv");
```
Now, you're ready to use wordlib for your own applications.

## Usage 📝
#### `isWord()`
> Check if a string is a word.
   ```javascript
   const res = enWords.isWord("word");
   // => true
   ```
#### `containing()`
> Use it to see which words (and abbrevations) you can generate from the letters `ordw` (useful for Scrabble!).
   ```javascript
   const res = enWords.containing("ordw");
   // => ["word", ...]

   // Only of length 4?
   const res = enWords.containing("ordw", 4);
   // => ["word", "drow"]
   ```
#### `startsWith()`
> Check which words starts with `word`.
   ```javascript
   const res = enWords.startsWith("word");
   // => ["words", ...]
   ```
#### `endsWith()`
> Check which words ends with `word`:
   ```javascript
   const res = enWords.endsWith("word");
   // => ["sword", ...]
   ```
#### `ofLength()`
> Ever wondered if there are words that are more than 40 characters long?
   ```javascript
   const res = enWords.ofLength(40);
   ```
#### `similarTo()`
> Can you rhyme anything with `Orange`?
   ```javascript
   const res = enWords.similarTo("orange");
   // => ["sorage", ...]
   ```
#### `anagramsOf()`
> Also, is there any anagrams of `orange`?
   ```javascript
   const res = enWords.anagramsOf("orange");
   // => ["onager"]
   ```
#### `palindrome()`
> Generates all palindromes in chosen dictionary. Use optional length argument
> to only generate palindromes of certain length.
   ```javascript
   const res = enWords.palindromes();
// => ["abba", ...]

   // Palindromes of length 10?
   const res = enWords.palindromes(10);
   // => ["kinnikinnik"]
   ```
#### `random()`
> Returns a random word from dictionary. Optional length argument to only return words of desired length.
  ```javascript
   const res = enWords.random();
   // => "marcionitish"

   // Random word of length 20?
   const res = enWords.random(20);
   // => "hydrotherapeutically"
   ```
The wordlib package ships with a Swedish and English dictionary but is not limited to using only them. When creating the wordlib object, you can instead of supplying a language setting supply your own wordlist. It must be an array of string, though. This option is also possible for each function, allowing you to combine and nest the functions.
```javascript
const customWords = new WordLib(["my", "own", "dictionary"]);

const defaultWords = new WordLib("en");
const randomPalindrome = defaultWords.random(5, defaultWords.palindromes())

```

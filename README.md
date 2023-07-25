# wordlib 📚
Small package for playing around with Swedish-and English words and abbreviations.

## installation 📦
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

# usage 📝
1. Use it to check is a string is a word.
   ```javascript
   const res = enWords.isWord("word");
   ```
2. Use it to see which words (and abbrevations) you can generate from the letters `ordw` (useful for Scrabble!):
   ```javascript
   const res = enWords.containing("ordw");

   // Only of length 4?
   const res = enWords.containing("ordw", 4);
   ```
3. Check which words starts with `word`:
   ```javascript
   const res = enWords.startsWith("word");
   ```
4. Similarly, check which words ends with `word`:
   ```javascript
   const res = enWords.endsWith("word");
   ```
5. Ever wondered if there are words that are more than 40 characters long? Now you can:
   ```javascript
   const res = enWords.ofLength(40);
   ```
6. Can you rhyme anything with `Orange`? wordlib can:
   ```javascript
   const res = enWords.similarTo("orange");
   ```
7. Also, is there any anagrams of `orange`?
   ```javascript
   const res = enWords.anagramsOf("orange");
   ```
8. Need a palidrome? There's plenty:
   ```javascript
   const res = enWords.palindromes();

   // Palindromes of length 10?
   const res = enWords.palindromes(10);
   ```
9. A random word for a game of Hangman?
      ```javascript
   const res = enWords.random();

   // Random word of length 20?
   const res = enWords.random(20);
   ```
The wordlib package ships with a Swedish and English dictionary but is not limited to using only them. When creating the wordlib object, you can instead of supplying a language setting supply your own wordlist. It must be an array of string, though. This option is also possible for each function, allowing you to combine and nest the functions.
```javascript
const customWords = new WordLib(["my", "own", "dictionary"]);

const defaultWords = new WordLib("en");
const randomPalindrome = defaultWords.random(5, defaultWords.palindromes())

```

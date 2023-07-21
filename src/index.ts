import { isSubset } from "./utils/utils";
import wordlist from "./data/swe_wordlist";

const swedish_words = new Map(Object.entries(wordlist[0]));

/**
 * Checks if a word used as argument is a swedish word.
 * 
 * ### Example:
 * Providing the word ``qwerty`` returns ```false``,
 * providing the word ``fika`` returns ``true``.
 * @param word Word to check, as a string.
 * @returns True if the word is a swedish word, false otherwise.
 */
const isWord = (word: string): boolean => {
    return swedish_words.has(word.toLowerCase());
}

/**
 * Returns a list of swedish words that contains the letters provided as an argument.
 * 
 * ### Example: 
 * Providing the letters ``est``, the following words are generated:
 * 
 * 
 ```json
    ['e',  'est', 's', 'se', 'set', 't', 'te', 'tes']
 ```
 * @param letters Letters to check, as a string.
 * @returns A list of words.
 */
const getWordsContaining = (letters: string): string[] => {
    const sortedLetters = letters.toLowerCase().split('').sort().join('');
    const result = [];

    for (const word of swedish_words.keys()) {

        if (word.length > sortedLetters.length) {
            return result;
        }

        const sortedWord = [...word].sort().join('');
        if (sortedWord.length <= sortedLetters.length && isSubset(sortedWord, sortedLetters)) {
            result.push(word);
        }
    }

    return result;
}

/**
 * Returns a list of words **starting** with the word provided as an argument.
 * 
 * ### Example: 
 * Providing the word ``funktionell`` returns the list: 
 * 
 * ```json
    ['funktionella', 'funktionellare', 'funktionellast', 'funktionellaste', 'funktionellt']
  ```
 * @param word A word, as a string.
 * @returns A list of words.
 */
const getWordsStartingWith = (word: string): string[] => {
    return [...swedish_words.entries()]
        .filter(([key, _]) => key.startsWith(word.toLowerCase()) && key.toLowerCase() !== word.toLowerCase())
        .map(([key, _]) => key);
}

/**
 * Returns a list of words *ending with** the word provided as an argument.
 * 
 * ### Example:
 * Providing the word ``funktionell`` to the function results in the list:
 ```json
 [ 'dysfunktionell']
 ```
 * @param word A word, as a string.
 * @returns A list of words.
 */
const getWordsEndingWith = (word: string): string[] => {
    return [...swedish_words.entries()]
        .filter(([key, _]) => key.endsWith(word.toLowerCase()) && key.toLowerCase() !== word.toLowerCase())
        .map(([key, _]) => key);
}

/**
 * Returns a list of words that are of length ``n``.
 * 
 * ### Example:
 * Providing ``35`` as ``n`` results in the following words:
 * 
 ```json
[
  'satellitkommunikationsutrustningars', satellitkommunikationsutrustningens'
]
```
 * @param len_n Length of word, as a number,
 * @returns A list of words.
 */
const getWordsOfLengthN = (len_n: number): string[] => {
    const words = Array.from(swedish_words.keys());
    return words.filter(word => word.length === len_n);
}

export {
    isWord,
    getWordsContaining,
    getWordsStartingWith,
    getWordsEndingWith,
    getWordsOfLengthN
};
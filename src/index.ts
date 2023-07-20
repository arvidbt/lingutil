import { countDistinctChars } from "./utils/utils";
import wordlist from "./data/swe_wordlist";

const swedish_words = new Map(Object.entries(wordlist[0]));

/**
 * Checks if a word used as argument is a swedish word.
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
 * ``['e',  'est', 's', 'se', 'set', 't', 'te', 'tes']``.
 * @param letters Letters to check, as a string.
 * @returns A list of words.
 */
const getWordsContaining = (letters: string): string[] => {
    const sortedLetters = letters.toLowerCase().split('').sort();
    const result = [];

    for (const word of swedish_words.keys()) {
        let matches = 0;
        let sortedWord = [...word].sort().join('');
        if (sortedWord.length <= sortedLetters.length) {
            const charDiff = countDistinctChars(word, sortedLetters);
            if (charDiff === 0) {
                for (const letter of sortedLetters) {
                    if (sortedWord.includes(letter)) {
                        sortedWord = sortedWord.slice(1);
                        matches += 1;
                    }
                }
                if (matches === word.length) {
                    result.push(word);
                }
            }
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
 * ``[
  'funktionella',
  'funktionellare',
  'funktionellast',
  'funktionellaste',
  'funktionellt'
 * ]``
 * @param word A word, as a string.
 * @returns A list of words.
 */
const getWordsStartingWith = (word: string): string[] => {
    return [...swedish_words.entries()]
    .filter(([key, _]) => key.startsWith(word.toLowerCase()) && key.toLowerCase() !== word.toLowerCase())
    .map(([key, _]) => key);}

/**
 * Returns a list of words *ending with** the word provided as an argument.
 * 
 * ### Example:
 * Providing the word ``funktionell`` returns the list:
 * 
 * ``[ 'dysfunktionell']``
 * @param word A word, as a string.
 * @returns A list of words.
 */
const getWordsEndingWith = (word: string): string[] => {
    return [...swedish_words.entries()]
    .filter(([key, _]) => key.endsWith(word.toLowerCase()) && key.toLowerCase() !== word.toLowerCase())
    .map(([key, _]) => key);}

/**
 * Returns a list of words that are of length ``n``.
 * 
 * ### Example:
 * Providing 35 as n, the following words are returned:
 * 
 * ``[
  'satellitkommunikationsutrustningars',
  'satellitkommunikationsutrustningens'
*  ]``
 * @param len_n Length of word, as a number,
 * @returns 
 */
const getWordOfLengthN = (len_n: number): string[] => {
    const result = [];
    for (const word of swedish_words.keys()) {
        if (word.length == len_n) {
            result.push(word);
        }
    }
    return result;
}
console.log(getWordOfLengthN(35))

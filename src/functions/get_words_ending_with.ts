import { swedish_words } from "../data/swe_wordlist";
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
export const getWordsEndingWith = (word: string): string[] => {
  return [...swedish_words.entries()]
    .filter(
      ([key, _]) =>
        key.endsWith(word.toLowerCase()) &&
        key.toLowerCase() !== word.toLowerCase()
    )
    .map(([key, _]) => key);
};

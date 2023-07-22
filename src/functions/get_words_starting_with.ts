import { swedish_words } from "../data/swe_wordlist";
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
export const getWordsStartingWith = (word: string): string[] => {
  return [...swedish_words.entries()]
    .filter(
      ([key, _]) =>
        key.startsWith(word.toLowerCase()) &&
        key.toLowerCase() !== word.toLowerCase()
    )
    .map(([key, _]) => key);
};

import { sv_wordlist } from "../data/sv_dictionary";
import { en_wordlist } from "../data/en_dictionary";
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
export const getWordsEndingWith = (
  word: string,
  language: "sv" | "en"
): string[] => {
  const wordList = language === "sv" ? sv_wordlist : en_wordlist;
  return [...wordList.entries()]
    .filter(
      ([key, _]) =>
        key.endsWith(word.toLowerCase()) &&
        key.toLowerCase() !== word.toLowerCase()
    )
    .map(([key, _]) => key);
};

import en_dictionary from "../data/en_dictionary.json";
import sv_dictionary from "../data/sv_dictionary.json";
/**
 * Checks if a word used as argument is a swedish word.
 *
 * ### Example:
 * Providing the word ``qwerty`` returns ```false``,
 * providing the word ``fika`` returns ``true``.
 * @param word Word to check, as a string.
 * @returns True if the word is a swedish word, false otherwise.
 */
export const isWord = (word: string, language: string): boolean => {
  const json = language === "sv" ? sv_dictionary : en_dictionary;
  const wordList = new Map(Object.entries(json));

  return wordList.has(word.toLowerCase())
};

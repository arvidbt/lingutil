import { pickDictionary } from "../utils/utils";
/**
 * Checks if a word used as argument is a swedish word.
 *
 * ### Example:
 * Providing the word ``qwerty`` returns ```false``,
 * providing the word ``fika`` returns ``true``.
 * @param word Word to check, as a string.
 * @returns True if the word is a swedish word, false otherwise.
 */
export const isWord = (word: string, language: "sv" | "en"
): boolean => {
  const wordList = pickDictionary(language);
  return wordList.includes(word.toLowerCase())
};

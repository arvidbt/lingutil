import { sv_wordlist } from "../data/sv_dictionary";
import { en_wordlist } from "../data/en_dictionary";
/**
 * Checks if a word used as argument is a swedish word.
 *
 * ### Example:
 * Providing the word ``qwerty`` returns ```false``,
 * providing the word ``fika`` returns ``true``.
 * @param word Word to check, as a string.
 * @returns True if the word is a swedish word, false otherwise.
 */
export const isWord = (word: string, language: "sv" | "en"): boolean => {
  const wordList = language === "sv" ? sv_wordlist : en_wordlist;
  return wordList.has(word.toLowerCase());
};

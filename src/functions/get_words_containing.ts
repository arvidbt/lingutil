import en_dictionary from "../data/en_dictionary.json";
import sv_dictionary from "../data/sv_dictionary.json";
import { isSubset } from "../utils/utils";
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
export const getWordsContaining = (
  letters: string,
  language: string
): string[] => {
  const json = language === "sv" ? sv_dictionary : en_dictionary;
  const wordList = new Map(Object.entries(json));
  const sortedLetters = letters.toLowerCase().split("").sort().join("");
  const result: string[] = [];

  for (const word of wordList.keys()) {
    if (word.length > sortedLetters.length) {
      return result;
    }

    const sortedWord = [...word].sort().join("");
    if (
      sortedWord.length <= sortedLetters.length &&
      isSubset(sortedWord, sortedLetters)
    ) {
      result.push(word);
    }
  }
  return result;
};

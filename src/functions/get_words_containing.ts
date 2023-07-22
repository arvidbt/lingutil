import { swedish_words } from "../data/swe_wordlist";
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
export const getWordsContaining = (letters: string): string[] => {
  const sortedLetters = letters.toLowerCase().split("").sort().join("");
  const result = [];

  for (const word of swedish_words.keys()) {
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

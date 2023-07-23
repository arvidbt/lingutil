import { isSubset, pickDictionary, sortString } from "../utils/utils";
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
  language: "sv" | "en"
): string[] => {
  const wordList = pickDictionary(language)
  const sortedLetters = sortString(letters.toLowerCase());
  const result: string[] = [];

  for (const word of wordList) {
    if (word.length > sortedLetters.length) {
      return result;
    }

    const sortedWord = sortString(word);
    if (
      sortedWord.length <= sortedLetters.length &&
      isSubset(sortedWord, sortedLetters)
    ) {
      result.push(word);
    }
  }
  return result;
};

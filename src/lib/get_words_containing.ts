import { isSubset, sortString } from "../utils/utils";

 export const getWordsContaining = (
  letters: string,
  dictionary: string[],
  length?: number,
  customDictionary?: string[]
): string[] => {
  const wordlist = customDictionary ? customDictionary : dictionary;
  const sortedLetters = sortString(letters.toLowerCase());
  const result: string[] = [];

  for (const word of wordlist) {
    if (word.length > sortedLetters.length) {
      return result;
    }

    const sortedWord = sortString(word);
    if (
      sortedWord.length <= sortedLetters.length &&
      isSubset(sortedWord, sortedLetters)
    ) {
      if (length && length != word.length) {
        continue;
      }
      result.push(word);
    }
  }
  return result;
};

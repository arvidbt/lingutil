import { isSubset, pickDictionary, sortString } from "../utils/utils";

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

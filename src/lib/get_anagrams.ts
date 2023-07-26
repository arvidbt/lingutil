import { sortString } from "../utils/utils";

export const getAnagrams = (word: string, dictionary: string[]): string[] => {
  const result = [];
  const sortedWord = sortString(word);
  for (const dictWord of dictionary) {
    if (
      dictWord.length == sortedWord.length &&
      sortString(dictWord) == sortedWord &&
      dictWord != word
    ) {
      result.push(dictWord);
    }
  }
  return result;
};

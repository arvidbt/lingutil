import { sortString } from "../utils/utils";

export const getAnagrams = (
  word: string,
  dictionary: string[],
  customDictionary?: string[]
): string[] => {
  const wordlist = customDictionary ? customDictionary : dictionary;
  const result = [];
  const sortedWord = sortString(word);
  for (const dictWord of wordlist) {
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

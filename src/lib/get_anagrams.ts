import { pickDictionary, sortString } from "../utils/utils";

export const getAnagrams = (word: string, language: "sv" | "en"): string[] => {
  const wordlist = pickDictionary(language);
  const result = [];
  const sortedWord = sortString(word);
  for (const dictionaryWord of wordlist) {
    if (
      dictionaryWord.length == sortedWord.length &&
      sortString(dictionaryWord) == sortedWord &&
      dictionaryWord != word
    ) {
      result.push(dictionaryWord);
    }
  }
  return result;
};

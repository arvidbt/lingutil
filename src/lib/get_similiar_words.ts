import { similar } from "./is_similar";

export const getSimilarWords = (
  word: string,
  dictionary: string[],
  customDictionary?: string[]
): string[] => {
  if (word.trim().length == 0) {
    return [];
  }
  const wordlist = customDictionary ? customDictionary : dictionary;
  return wordlist.filter((similarWord) => similar(word, similarWord));
};

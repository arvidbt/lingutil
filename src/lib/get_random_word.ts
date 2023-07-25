import { getRandomArrayIndex } from "../utils/utils";

export const getRandomWord = (
  dictionary: string[],
  length?: number,
  customDictionary?: string[]
): string => {
  const wordlist = customDictionary ? customDictionary : dictionary;
  if (length) {
    const wordsOfLength = wordlist.filter((word) => word.length === length);
    if (wordsOfLength.length === 0) {
      return `No words of length ${length}`;
    }
    return wordsOfLength[getRandomArrayIndex(wordsOfLength)];
  }
  return wordlist[getRandomArrayIndex(wordlist)];
};

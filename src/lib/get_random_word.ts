import { getRandomArrayIndex } from "../utils/utils";

export const getRandomWord = (
  dictionary: string[],
  length?: number
): string => {
  if (length) {
    const wordsOfLength = dictionary.filter((word) => word.length === length);
    if (wordsOfLength.length === 0) {
      return `No words of length ${length}`;
    }
    return wordsOfLength[getRandomArrayIndex(wordsOfLength)];
  }
  return dictionary[getRandomArrayIndex(dictionary)];
};

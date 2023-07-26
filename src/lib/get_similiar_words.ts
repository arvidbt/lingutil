import { similar } from "./is_similar";

export const getSimilarWords = (
  word: string,
  dictionary: string[]
): string[] => {
  if (word.trim().length == 0) {
    return [];
  }
  return dictionary.filter((similarWord) => similar(word, similarWord));
};

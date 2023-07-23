import { levenshteinDistance, pickDictionary } from "../utils/utils";

export const getSimilarWords = (
  word: string,
  language: "sv" | "en"
): string[] => {
  if (word.trim().length == 0) {
    return [];
  }
  const wordlist = pickDictionary(language);
  return wordlist.filter(
    (similarWord) => levenshteinDistance(word, similarWord) <= 2
  );
};
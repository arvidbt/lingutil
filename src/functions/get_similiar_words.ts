import { pickDictionary } from "../utils/utils";
import { similar } from "./is_similar";

export const getSimilarWords = (
  word: string,
  language: "sv" | "en" | "fr" | "es"
): string[] => {
  if (word.trim().length == 0) {
    return [];
  }
  const wordlist = pickDictionary(language);
  return wordlist.filter(
    (similarWord) => similar(word, similarWord)
  );
};
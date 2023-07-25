import { pickDictionary } from "../utils/utils";

export const getWordsStartingWith = (
  word: string,
  language: "sv" | "en" | "fr" | "es"
): string[] => {
  const wordList = pickDictionary(language);
  return wordList.filter(
    (key) =>
      key.startsWith(word.toLowerCase()) &&
      key.toLowerCase() !== word.toLowerCase()
  );
};

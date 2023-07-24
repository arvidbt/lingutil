import { pickDictionary } from "../utils/utils";

export const getWordsEndingWith = (
  word: string,
  language: "sv" | "en"
): string[] => {
  const wordList = pickDictionary(language);
  return wordList.filter(
    (key) =>
      key.endsWith(word.toLowerCase()) &&
      key.toLowerCase() !== word.toLowerCase()
  );
};

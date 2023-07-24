import { pickDictionary } from "../utils/utils";

export const isWord = (word: string, language: "sv" | "en"
): boolean => {
  const wordList = pickDictionary(language);
  return wordList.includes(word.toLowerCase())
};

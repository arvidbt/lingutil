import { pickDictionary } from "../utils/utils";

export const getWordsOfLengthN = (
  len_n: number,
  language: "sv" | "en"
): string[] => {
  const wordList = pickDictionary(language);
  return wordList.filter((word) => word.length === len_n);
};

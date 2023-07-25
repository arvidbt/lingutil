import { pickDictionary } from "../utils/utils";

export const getPalindromes = (
  language: "sv" | "en",
  length?: number
): string[] => {
  const wordlist = pickDictionary(language);
  const result = [];
  for (const word of wordlist) {
    if (word.length > 2) {
      const cleanedWord = word.replace(/[^a-zA-Z0-9:]/g, "").toLowerCase();
      const reversedWord = cleanedWord.split("").reverse().join("");
      if (cleanedWord == reversedWord) {
        if (length && reversedWord.length < length) {
          continue;
        }
        result.push(reversedWord);
      }
    }
  }
  return result;
};

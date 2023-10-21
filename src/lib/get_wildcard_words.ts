import { countMatchingCharacters } from "../utils/utils";

export const getWildcardWords = (letters: string, dictionary: string[]) => {
  const numberWildcards = letters.split("?").length - 1;
  const possibleWildcardWords: string[] = [];

  for (const word of dictionary) {
    if (word.length <= letters.length) {
      const matchingCharacters = countMatchingCharacters(word, letters);

      if (matchingCharacters + numberWildcards === word.length) {
        possibleWildcardWords.push(word);
      }
    }
  }
  return possibleWildcardWords;
};

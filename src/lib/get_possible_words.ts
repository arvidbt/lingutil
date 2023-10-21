import {
  allowedCharactersMatchAtIndices,
  charactersMatchAtIndices,
} from "../utils/utils";

export const getPossibleWords = (
  word: string,
  dictionary: string[],
  allowedCharacters?: string[]
) => {
  const knownCharactersIndicies: number[] = [];
  const knownWildcardIndicies: number[] = [];
  const possibleWords: string[] = [];

  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) !== "?") {
      knownCharactersIndicies.push(i);
    } else {
      knownWildcardIndicies.push(i);
    }
  }

  for (const dictWord of dictionary) {
    if (charactersMatchAtIndices(word, dictWord, knownCharactersIndicies)) {
      if (!allowedCharacters) {
        possibleWords.push(dictWord);
      } else {
        if (
          allowedCharactersMatchAtIndices(
            dictWord,
            knownWildcardIndicies,
            allowedCharacters
          )
        ) {
          possibleWords.push(dictWord);
        }
      }
    }
  }
  return possibleWords;
};

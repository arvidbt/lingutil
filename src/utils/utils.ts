import { en_wordlist, sv_wordlist } from "../data/dictionaries";

export const isSubset = (subset: string, set: string): boolean => {
  const setArray = [...set];
  let match = 0;

  for (let subsetIndex = 0; subsetIndex < subset.length; subsetIndex++) {
    const currentSubsetChar = subset[subsetIndex];

    if (setArray.includes(currentSubsetChar)) {
      setArray.splice(setArray.indexOf(currentSubsetChar), 1);
      match++;
    } else {
      return false;
    }
  }
  return match === subset.length;
};

export const selectDefaultDictionary = (language: "sv" | "en") => {
  switch (language) {
    case "sv":
      return sv_wordlist;
    case "en":
      return en_wordlist;
    default:
      throw new Error("Invalid language specified");
  }
};

export const levenshteinDistance = (
  word: string,
  similarWord: string
): number => {
  if (word.length > similarWord.length) {
    [word, similarWord] = [similarWord, word];
  }

  const distances = Array.from({ length: word.length + 1 }, (_, i) => i);
  for (let i = 0; i < similarWord.length; i++) {
    const newDistances: number[] = [i + 1];
    for (let j = 0; j < word.length; j++) {
      if (word[j] === similarWord[i]) {
        newDistances.push(distances[j]);
      } else {
        newDistances.push(
          1 +
            Math.min(
              distances[j],
              distances[j + 1],
              newDistances[newDistances.length - 1]
            )
        );
      }
    }
    distances.splice(0, distances.length, ...newDistances);
  }
  return distances[distances.length - 1];
};

export const sortString = (word: string): string => {
  return word
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
};

export const getRandomArrayIndex = (array: string[]) => {
  return Math.floor(Math.random() * array.length);
};

export const pickDictionary = (
  defaultDictionary: string[],
  customDictionary?: string[]
) => {
  return customDictionary ? customDictionary : defaultDictionary;
};

export const similar = (word1: string, word2: string) => {
  return levenshteinDistance(word1, word2) <= 2;
};

export const charactersMatchAtIndices = (
  word1: string,
  word2: string,
  indicesToMatch: number[]
): boolean => {
  if (word1.length !== word2.length) {
    return false;
  }

  for (const index of indicesToMatch) {
    if (word1[index] !== word2[index]) {
      return false;
    }
  }
  return true;
};

export const allowedCharactersMatchAtIndices = (
  dictWord: string,
  knownWildcardIndicies: number[],
  allowedCharacters: string[]
): boolean => {
  if (allowedCharacters.length === 0) {
    return false;
  }

  let matches = 0;
  for (const index of knownWildcardIndicies) {
    if (allowedCharacters.includes(dictWord.charAt(index))) {
      matches++;
    }
  }
  if (matches === knownWildcardIndicies.length) {
    return true;
  }
  return false;
};

export const countMatchingCharacters = (
  word1: string,
  word2: string
): number => {
  const minLength = Math.min(word1.length, word2.length);
  let count = 0;

  for (let i = 0; i < minLength; i++) {
    const char = word1.charAt(i);
    if (word2.includes(char)) {
      count++;
      word2 = word2.replace(char, "");
    }
  }

  return count;
};

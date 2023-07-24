import { en_wordlist } from "../data/en_dictionary";
import { sv_wordlist } from "../data/sv_dictionary";

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

export const pickDictionary = (language: "sv" | "en") => {
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
  return word.split('').sort((a, b) => a.localeCompare(b)).join('');
};
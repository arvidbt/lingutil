import {
  es_wordlist,
  en_wordlist,
  fr_wordlist,
  sv_wordlist,
} from "../data/dictionaries";

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

export const pickDictionary = (language: "sv" | "en" | "fr" | "es") => {
  switch (language) {
    case "sv":
      return sv_wordlist;
    case "en":
      return en_wordlist;
    case "fr":
      return fr_wordlist;
    case "es":
      return es_wordlist;
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

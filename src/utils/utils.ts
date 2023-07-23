import { de_wordlist } from "../data/de_dictionary";
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
} 
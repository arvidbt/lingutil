import { levenshteinDistance } from "../utils/utils";

export const isSimilar = (
  word1: string,
  word2: string,
) => {
    return levenshteinDistance(word1, word2) <= 2;
};

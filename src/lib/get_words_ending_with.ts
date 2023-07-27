export const getWordsEndingWith = (
  word: string,
  dictionary: string[],
  length?: number
): string[] => {
  return dictionary.filter(
    (key) =>
      key.endsWith(word.toLowerCase()) &&
      key.toLowerCase() !== word.toLowerCase() &&
      (typeof length === "undefined" || key.length === length)
  );
};

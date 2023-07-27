export const getWordsStartingWith = (
  word: string,
  dictionary: string[],
  length?: number
): string[] => {
  return dictionary.filter(
    (key) =>
      key.startsWith(word.toLowerCase()) &&
      key.toLowerCase() !== word.toLowerCase() &&
      (typeof length === "undefined" || key.length === length)
  );
};

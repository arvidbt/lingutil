export const getWordsEndingWith = (
  word: string,
  dictionary: string[]
): string[] => {
  return dictionary.filter(
    (key) =>
      key.endsWith(word.toLowerCase()) &&
      key.toLowerCase() !== word.toLowerCase()
  );
};

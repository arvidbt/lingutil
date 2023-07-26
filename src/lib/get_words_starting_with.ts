export const getWordsStartingWith = (
  word: string,
  dictionary: string[]
): string[] => {
  return dictionary.filter(
    (key) =>
      key.startsWith(word.toLowerCase()) &&
      key.toLowerCase() !== word.toLowerCase()
  );
};

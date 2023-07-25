export const getWordsStartingWith = (
  word: string,
  dictionary: string[],
  customDictionary?: string[]
): string[] => {
  const wordlist = customDictionary ? customDictionary : dictionary;
  return wordlist.filter(
    (key) =>
      key.startsWith(word.toLowerCase()) &&
      key.toLowerCase() !== word.toLowerCase()
  );
};

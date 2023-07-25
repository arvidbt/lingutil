export const getWordsEndingWith = (
  word: string,
  dictionary: string[],
  customDictionary?: string[]
): string[] => {
  const wordlist = customDictionary ? customDictionary : dictionary;
  return wordlist.filter(
    (key) =>
      key.endsWith(word.toLowerCase()) &&
      key.toLowerCase() !== word.toLowerCase()
  );
};

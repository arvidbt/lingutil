export const isWord = (
  word: string,
  dictionary: string[],
  customDictionary?: string[]
): boolean => {
  const wordlist = customDictionary ? customDictionary : dictionary;
  return wordlist.includes(word.toLowerCase());
};

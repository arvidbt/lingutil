export const getWordsOfLengthN = (
  len_n: number,
  dictionary: string[],
  customDictionary?: string[]
): string[] => {
  const wordlist = customDictionary ? customDictionary : dictionary;
  return wordlist.filter((word) => word.length === len_n);
};

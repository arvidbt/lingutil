export const getWordsOfLengthN = (
  len_n: number,
  dictionary: string[]
): string[] => {
  return dictionary.filter((word) => word.length === len_n);
};

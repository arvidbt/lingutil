export const isWord = (word: string, dictionary: string[]): boolean => {
  return dictionary.includes(word.toLowerCase());
};

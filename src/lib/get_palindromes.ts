export const getPalindromes = (
  dictionary: string[],
  length?: number,
  customDictionary?: string[]
): string[] => {
  const wordlist = customDictionary ? customDictionary : dictionary;
  const result = [];
  for (const word of wordlist) {
    if (word.length > 2) {
      const cleanedWord = word.replace(/[^a-zA-Z0-9:]/g, "").toLowerCase();
      const reversedWord = cleanedWord.split("").reverse().join("");
      if (cleanedWord == reversedWord) {
        if (length && reversedWord.length < length) {
          continue;
        }
        result.push(reversedWord);
      }
    }
  }
  return result;
};

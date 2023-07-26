export const getPalindromes = (
  dictionary: string[],
  length?: number
): string[] => {
  const result = [];
  for (const word of dictionary) {
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

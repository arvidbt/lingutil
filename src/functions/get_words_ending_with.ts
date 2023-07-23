import { pickDictionary } from "../utils/utils";
/**
 * Returns a list of words *ending with** the word provided as an argument.
 * 
 * ### Example:
 * Providing the word ``funktionell`` to the function results in the list:
 ```json
 [ 'dysfunktionell']
 ```
 * @param word A word, as a string.
 * @returns A list of words.
 */
export const getWordsEndingWith = (
  word: string,
  language: "sv" | "en"
): string[] => {
  const wordList = pickDictionary(language);
  return wordList.filter(
    (key) =>
      key.endsWith(word.toLowerCase()) &&
      key.toLowerCase() !== word.toLowerCase()
  );
};

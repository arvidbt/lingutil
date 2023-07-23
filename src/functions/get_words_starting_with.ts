import { pickDictionary } from "../utils/utils";
/**
 * Returns a list of words **starting** with the word provided as an argument.
 * 
 * ### Example: 
 * Providing the word ``funktionell`` returns the list: 
 * 
 * ```json
    ['funktionella', 'funktionellare', 'funktionellast', 'funktionellaste', 'funktionellt']
  ```
 * @param word A word, as a string.
 * @returns A list of words.
 */
export const getWordsStartingWith = (
  word: string,
  language: "sv" | "en"
): string[] => {
  const wordList = pickDictionary(language);
  return wordList.filter(
    (key) =>
      key.startsWith(word.toLowerCase()) &&
      key.toLowerCase() !== word.toLowerCase()
  );
};

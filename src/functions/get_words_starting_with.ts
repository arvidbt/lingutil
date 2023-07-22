import en_dictionary from "../data/en_dictionary.json";
import sv_dictionary from "../data/sv_dictionary.json";

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
  language: string
): string[] => {
  const wordList = language === "sv" ? sv_dictionary : en_dictionary;
  return Object.entries(wordList)
    .filter(
      ([key, _]) =>
        key.startsWith(word.toLowerCase()) &&
        key.toLowerCase() !== word.toLowerCase()
    )
    .map(([key, _]) => key);
};

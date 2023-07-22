import en_dictionary from "../data/en_dictionary.json";
import sv_dictionary from "../data/sv_dictionary.json";

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
  language: string
): string[] => {
  const json = language === "sv" ? sv_dictionary : en_dictionary;
  const wordList = new Map(Object.entries(json));
  return [...wordList.entries()]
    .filter(
      ([key, _]) =>
        key.endsWith(word.toLowerCase()) &&
        key.toLowerCase() !== word.toLowerCase()
    )
    .map(([key, _]) => key);
};

import en_dictionary from "../data/en_dictionary.json";
import sv_dictionary from "../data/sv_dictionary.json";

/**
 * Returns a list of words that are of length ``n``.
 * 
 * ### Example:
 * Providing ``35`` as ``n`` results in the following words:
 * 
 ```json
[
  'satellitkommunikationsutrustningars', satellitkommunikationsutrustningens'
]
```
 * @param len_n Length of word, as a number,
 * @returns A list of words.
 */
export const getWordsOfLengthN = (
  len_n: number,
  language: string
): string[] => {
  const json = language === "sv" ? sv_dictionary : en_dictionary;
  const wordList = new Map(Object.entries(json));
  return Array.from(wordList.keys()).filter((word) => word.length === len_n);
};

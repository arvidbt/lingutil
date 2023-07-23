import { pickDictionary } from "../utils/utils";
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
  language: "sv" | "en"
): string[] => {
  const wordList = pickDictionary(language);
  return wordList.filter((word) => word.length === len_n);
};

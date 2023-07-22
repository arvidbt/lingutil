import { swedish_words } from "../data/swe_wordlist";
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
export const getWordsOfLengthN = (len_n: number): string[] => {
  const words = Array.from(swedish_words.keys());
  return words.filter((word) => word.length === len_n);
};
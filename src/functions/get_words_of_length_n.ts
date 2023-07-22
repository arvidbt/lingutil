import { sv_wordlist } from "../data/sv_dictionary";
import { en_wordlist } from "../data/en_dictionary";
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
  const wordList = language === "sv" ? sv_wordlist : en_wordlist;
  return Array.from(wordList.keys()).filter((word) => word.length === len_n);
};

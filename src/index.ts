import { isWord } from "./functions/is_word";
import { getWordsContaining } from "./functions/get_words_containing";
import { getWordsStartingWith } from "./functions/get_words_starting_with";
import { getWordsEndingWith } from "./functions/get_words_ending_with";
import { getWordsOfLengthN } from "./functions/get_words_of_length_n";
const start = performance.now()
const res = getWordsContaining("hej", "sv");
console.log(res)
const end = performance.now();
console.log(end - start)

export {
  isWord,
  getWordsContaining,
  getWordsStartingWith,
  getWordsEndingWith,
  getWordsOfLengthN,
};
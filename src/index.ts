import { isWord } from "./lib/is_word";
import { getWordsContaining } from "./lib/get_words_containing";
import { getWordsStartingWith } from "./lib/get_words_starting_with";
import { getWordsEndingWith } from "./lib/get_words_ending_with";
import { getWordsOfLengthN } from "./lib/get_words_of_length_n";
import { getSimilarWords } from "./lib/get_similiar_words";
import { getAnagrams } from "./lib/get_anagrams";
import { getPalindromes } from "./lib/get_palindromes";
import { getRandomWord } from "./lib/get_random_word";
import { selectDefaultDictionary, pickDictionary } from "./utils/utils";
import { getPossibleWords } from "./lib/get_possible_words";
import { getWildcardWords } from "./lib/get_wildcard_words";

type ConstructorArguments = {
  language?: "sv" | "en";
  customDictionary?: string[];
};

type CustomDictionary = {
  customDictionary: string[];
};

type LengthCustomDictionaryArgs = {
  length?: number;
  customDictionary?: string[];
};

type AllowedCharactersCustomDictionaryArgs = {
  customDictionary?: string[];
  allowedCharacters?: string[];
};

export class WordLib {
  private dictionary: string[];

  /**
   * Constructor for creating a new WordLib object. If a custom dictionary is supplied, language property will be ignored.
   * Defaults to english if no argument is passed.
   * @param args Object consisting of:
   * - number `args.language` - (**Optional**) Pick language for wordlib. Can either be `sv` or `en`.
   * - string[] `args.customDictionary` - (**Optional**) A custom dictionary as an array of strings.
   *
   * #### Example usage:
   * ```javascript
   * const enWords = new WordLib({language: "en"});
   * const customWords = new WordLib({customDictionary: ["custom", "dictionary"]})
   * ```
   */
  constructor(args?: ConstructorArguments) {
    if (args) {
      this.dictionary = args.customDictionary
        ? args.customDictionary
        : selectDefaultDictionary(args.language || "en");
    } else {
      // default to using english dictionary.
      this.dictionary = selectDefaultDictionary("en");
    }
  }

  /**
   * Returns a boolean value depending on if a word exists in dictionary.
   * @param word Word to look up.
   * @param args Object consisting of:
   * - `string[]` customDictionary.customDictionary - (**Optional**) A custom dictionary as an array of strings.
   * @returns True if word exists in dictionary, otherwise false.
   * #### Example usage:
   * ```javascript
   * const enWords = new WordLib({language: "en"});
   * const res = enWords.isWord("word")
   * //=> true
   * ```
   */
  isWord(word: string, customDictionary?: CustomDictionary): boolean {
    return isWord(
      word,
      pickDictionary(this.dictionary, customDictionary?.customDictionary)
    );
  }

  /**
   * Returns an array of words that can be formed using the supplied letters.
   * @param letters Letters to form words from.
   * @param args Object consisting of:
   * - number `args.length` - (**Optional**) Only returns words of length n.
   * - string[] `args.customDictionary` - (**Optional**) A custom dictionary as an array of strings.
   * @returns An array of words, made from supplied letters.
   * #### Example usage:
   * ```javascript
   * const enWords = new WordLib({customDictionary: ["test", "set", "testing"]});
   * const res = enWords.containing("estt");
   * //=> ["test", "set"]
   * ```
   */
  containing(letters: string, args?: LengthCustomDictionaryArgs): string[] {
    return getWordsContaining(
      letters,
      pickDictionary(this.dictionary, args?.customDictionary),
      args?.length
    );
  }

  /**
   * Returns an array of words, all starting with specified word.
   * @param word String that all words should start with.
   * @param args Object consisting of:
   * - number `args.length` - (**Optional**) The length of words returned.
   * - string[] `args.customDictionary` - (**Optional**) A custom dictionary as an array of strings.
   * @returns An array of words, starting with specified word.
   * #### Example usage:
   * ```javascript
   * const words = new WordLib({customDictionary: ["sword", "words"]});
   * const res = words.startsWith("word");
   * //=> ["words"]
   * ```
   */
  startsWith(word: string, args?: LengthCustomDictionaryArgs): string[] {
    return getWordsStartingWith(
      word,
      pickDictionary(this.dictionary, args?.customDictionary),
      args?.length
    );
  }

  /**
   * Returns an array of words, all ending with specified word.
   * @param word String which all words should end with.
   * @param args
   * @params `number` args.length - (**Optional**) The length of something.
   * @params `string[]` args.customDictionary - (**Optional**) A custom dictionary as an array of strings.
   * @returns
   * #### Example usage:
   * ```javascript
   * const words = new WordLib({customDictionary: ["sword", "words"]});
   * const res = words.endsWith("word");
   * //=> ["sword"]
   * ```
   */
  endsWith(word: string, args?: LengthCustomDictionaryArgs): string[] {
    return getWordsEndingWith(
      word,
      pickDictionary(this.dictionary, args?.customDictionary),
      args?.length
    );
  }

  /**
   * Returns all words of specified length.
   * @param customDictionary Object consisting of:
   * - string[] `args.customDictionary` - (**Optional**) A custom dictionary as an array of strings.
   * @returns An array of words of length specified.
   * #### Example usage:
   * ```javascript
   * const enWord = new WordLib({language: "en"});
   * const res = enWord.ofLength(31);
   * //=> ["dichlorodiphenyltrichloroethane"]
   * ```
   */
  ofLength(length: number, customDictionary?: CustomDictionary): string[] {
    return getWordsOfLengthN(
      length,
      pickDictionary(this.dictionary, customDictionary?.customDictionary)
    );
  }

  /**
   * Returns words that are similar (according to its *levenshtein distance*) to specified word.
   * @param word Word to find similar words to.
   * @param customDictionary Object consisting of:
   * - string[] `args.customDictionary` - (**Optional**) A custom dictionary as an array of strings.
   * @returns An array of words which levenshtein distance is <= 2.
   * #### Example usage:
   * ```javascript
   * const enWords = new WordLib({language: "en"});
   * const res = enWords.similarTo("typescript");
   * //=> [ 'telescript', 'typoscript', 'typescripts']
   * ```
   */
  similarTo(word: string, customDictionary?: CustomDictionary): string[] {
    return getSimilarWords(
      word,
      pickDictionary(this.dictionary, customDictionary?.customDictionary)
    );
  }

  /**
   * Finds any anagrams of specified word.
   * @param word Word to find anagrams of.
   * @param customDictionary Object consisting of:
   * - string[] `args.customDictionary` - (**Optional**) A custom dictionary as an array of strings.
   * @returns An array of anagrams of specified word.
   * #### Example usage:
   * ```javascript
   * const enWords = new WordLib({language: "en"});
   * const res = enWords.anagramsOf("orange");
   * //=> ["onager"]
   * ```
   */
  anagramsOf(word: string, customDictionary?: CustomDictionary): string[] {
    return getAnagrams(
      word,
      pickDictionary(this.dictionary, customDictionary?.customDictionary)
    );
  }

  /**
   * Returns all palindromes in dictiobary.
   * @param args Object consisting of:
   * @params number `args.length` - (**Optional**) Only return palindromes of length specified.
   * @params string[] `args.customDictionary` - (**Optional**) A custom dictionary as an array of strings.
   * @returns An array of palindromes.
   * ```javascript
   * const words = new WordLib({customDictionary: ["kinnikinnik", "sms", "orange"]});
   * const res = words.palindromes(10);
   * //=> ["kinnikinnik"]
   * ```
   */
  palindromes(args?: LengthCustomDictionaryArgs): string[] {
    return getPalindromes(
      pickDictionary(this.dictionary, args?.customDictionary),
      args?.length
    );
  }

  /**
   * Returns a random word from dictionary.
   * @param args
   * - number `args.length` - (**Optional**) The desired length of the random word.
   * - string[] `args.customDictionary` - (**Optional**) A custom dictionary as an array of strings.
   * @returns A randomly chosen word.
   * #### Example usage:
   * ```javascript
   * const enWords = new WordLib({language: "en"});
   * const res = enWords.random();
   * //=> "quiddle"
   * ```
   */
  random(args?: LengthCustomDictionaryArgs): string {
    return getRandomWord(
      pickDictionary(this.dictionary, args?.customDictionary),
      args?.length
    );
  }

  /**
   * Returns all words in dictionary.
   * @returns An array of words.
   * #### Example usage:
   * ```javascript
   * const words = new WordLib({customDictionary: ["a", "custom", "dictionary"]});
   * const res = words.getDictionaryWords();
   * //=> ["a", "custom", "dictionary"]
   * ```
   */
  getDictionaryWords() {
    return this.dictionary;
  }

  /**
   * Returns words that can be created from known characters and allowed characters. Questionmark (?) is used as a wildcard.
   * @param word
   * @param args Object consisting of:
   * - string[] `CustomDictionary` - (**Optional**) A custom dictionary as an array of strings.
   * - string[] `AllowedCharacters` - (**Optional**) An array of characters which are allowed to fill in the unknown characters.
   * @returns An array of possible words.
   * #### Example usage:
   * ```javascript
   * const words = new WordLib({language: "en"});
   * const res = words.getPossibleWords("h?ll?", {allowedCharacters: ["e", "l", "a", "o"]});
   * //=> [ "hollo", "hallo", "hello", "holla" ]
   * ```
   */
  getPossibleWords(word: string, args?: AllowedCharactersCustomDictionaryArgs) {
    return getPossibleWords(
      word,
      pickDictionary(this.dictionary, args?.customDictionary),
      args?.allowedCharacters
    );
  }

  getWildcardWords(letters: string, args?: CustomDictionary) {
    return getWildcardWords(
      letters,
      pickDictionary(this.dictionary, args?.customDictionary)
    );
  }
}

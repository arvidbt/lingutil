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

type ConstructorArguments = {
  language?: "sv" | "en";
  customDictionary?: string[];
};

type CustomDictionary = {
    customDictionary: string[];
}

type MultipleOptArgs = {
    length?: number;
    customDictionary?: string[];
}

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
      this.dictionary = args.customDictionary ? args.customDictionary : selectDefaultDictionary(args.language || "en");
    } else {
      // default to using english dictionary.
      this.dictionary = selectDefaultDictionary("en");
    }
  }

  /**
   * Returns a boolean value depending on if a word exists in dictionary.
   * @param word Word to look up.
   * @param optArgs Object consisting of:
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
    return isWord(word, pickDictionary(this.dictionary, customDictionary?.customDictionary));
  }

  /**
   * Returns an array of words that can be formed using the supplied letters.
   * @param letters Letters to form words from.
   * @param optArgs Object consisting of:
   * - number `optArgs.length` - (**Optional**) Only returns words of length n.
   * - string[] `optArgs.customDictionary` - (**Optional**) A custom dictionary as an array of strings.
   * @returns An array of words, made from supplied letters.
   * #### Example usage:
   * ```javascript
   * const enWords = new WordLib({customDictionary: ["test", "set", "testing"]});
   * const res = enWords.containing("estt");
   * //=> ["test", "set"]
   * ```
   */
  containing(letters: string, optArgs?: MultipleOptArgs): string[] {
    return getWordsContaining(letters, pickDictionary(this.dictionary, optArgs?.customDictionary), optArgs?.length);
  }

  /**
   * Returns an array of words, all starting with specified word.
   * @param word String that all words should start with.
   * @param optArgs Object consisting of:
   * - number `optArgs.length` - (**Optional**) The length of words returned.
   * - string[] `optArgs.customDictionary` - (**Optional**) A custom dictionary as an array of strings.
   * @returns An array of words, starting with specified word.
   * #### Example usage:
   * ```javascript
   * const words = new WordLib({customDictionary: ["sword", "words"]});
   * const res = words.startsWith("word");
   * //=> ["words"]
   * ```
   */
  startsWith(word: string, optArgs?: MultipleOptArgs): string[] {
    return getWordsStartingWith(word, pickDictionary(this.dictionary, optArgs?.customDictionary), optArgs?.length);
  }

  /**
   * Returns an array of words, all ending with specified word.
   * @param word String which all words should end with.
   * @param optArgs
   * @params `number` optArgs.length - (**Optional**) The length of something.
   * @params `string[]` optArgs.customDictionary - (**Optional**) A custom dictionary as an array of strings.
   * @returns 
   * #### Example usage:
   * ```javascript
   * const words = new WordLib({customDictionary: ["sword", "words"]});
   * const res = words.endsWith("word");
   * //=> ["sword"]
   * ```
   */
  endsWith(word: string, optArgs?: MultipleOptArgs): string[] {
    return getWordsEndingWith(word, pickDictionary(this.dictionary, optArgs?.customDictionary), optArgs?.length);
  }

  /**
   * Returns all words of specified length.
   * @param customDictionary Object consisting of:
   * - string[] `optArgs.customDictionary` - (**Optional**) A custom dictionary as an array of strings.
   * @returns An array of words of length specified.
   * #### Example usage:
   * ```javascript
   * const enWord = new WordLib({language: "en"});
   * const res = enWord.ofLength(31);
   * //=> ["dichlorodiphenyltrichloroethane"]
   * ```
   */
  ofLength(length: number, customDictionary?: CustomDictionary): string[] {
    return getWordsOfLengthN(length, pickDictionary(this.dictionary, customDictionary?.customDictionary));
  }

  /**
   * Returns words that are similar (according to its *levenshtein distance*) to specified word.
   * @param word Word to find similar words to.
   * @param customDictionary Object consisting of:
   * - string[] `optArgs.customDictionary` - (**Optional**) A custom dictionary as an array of strings.
   * @returns An array of words which levenshtein distance is <= 2.
   * #### Example usage:
   * ```javascript
   * const enWords = new WordLib({language: "en"});
   * const res = enWords.similarTo("typescript");
   * //=> [ 'telescript', 'typoscript', 'typescripts']
   * ```
   */
  similarTo(word: string, customDictionary?: CustomDictionary): string[] {
    return getSimilarWords(word, pickDictionary(this.dictionary, customDictionary?.customDictionary));
  }

  /**
   * Finds any anagrams of specified word.
   * @param word Word to find anagrams of.
   * @param customDictionary Object consisting of:
   * - string[] `optArgs.customDictionary` - (**Optional**) A custom dictionary as an array of strings.
   * @returns An array of anagrams of specified word.
   * #### Example usage:
   * ```javascript
   * const enWords = new WordLib({language: "en"});
   * const res = enWords.anagramsOf("orange");
   * //=> ["onager"]
   * ```
   */
  anagramsOf(word: string, customDictionary?: CustomDictionary): string[] {
    return getAnagrams(word, pickDictionary(this.dictionary, customDictionary?.customDictionary));
  }

  /**
   * Returns all palindromes in dictiobary.
   * @param optArgs Object consisting of:
   * @params number `optArgs.length` - (**Optional**) Only return palindromes of length specified.
   * @params string[] `optArgs.customDictionary` - (**Optional**) A custom dictionary as an array of strings.
   * @returns An array of palindromes.
   * ```javascript
   * const words = new WordLib({customDictionary: ["kinnikinnik", "sms", "orange"]});
   * const res = words.palindromes(10);
   * //=> ["kinnikinnik"]
   * ```
   */
  palindromes(optArgs?: MultipleOptArgs): string[] {
    return getPalindromes(pickDictionary(this.dictionary, optArgs?.customDictionary), optArgs?.length);
  }

  /**
   * Returns a random word from dictionary.
   * @param optArgs
   * - number `optArgs.length` - (**Optional**) The desired length of the random word.
   * - string[] `optArgs.customDictionary` - (**Optional**) A custom dictionary as an array of strings.
   * @returns A randomly chosen word.
   * #### Example usage:
   * ```javascript
   * const enWords = new WordLib({language: "en"});
   * const res = enWords.random();
   * //=> "quiddle"
   * ```
   */
  random(optsArgs?: MultipleOptArgs): string {
    return getRandomWord(pickDictionary(this.dictionary, optsArgs?.customDictionary), optsArgs?.length);
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
}

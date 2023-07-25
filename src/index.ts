import { isWord } from "./lib/is_word";
import { getWordsContaining } from "./lib/get_words_containing";
import { getWordsStartingWith } from "./lib/get_words_starting_with";
import { getWordsEndingWith } from "./lib/get_words_ending_with";
import { getWordsOfLengthN } from "./lib/get_words_of_length_n";
import { getSimilarWords } from "./lib/get_similiar_words";
import { getAnagrams } from "./lib/get_anagrams";
import { getPalindromes } from "./lib/get_palindromes";
import { similar } from "./lib/is_similar";
import { getRandomWord } from "./lib/get_random_word";
import { pickDictionary } from "./utils/utils";

class WordLib {
  private dictionary: string[];
  constructor(language?: "sv" | "en", customDictionary?: string[]) {
    if (!language && !customDictionary) {
      throw new Error("At least one of 'language' or 'customDictionary' must be supplied.");
    }

    // defaults to english.
    this.dictionary = customDictionary ? customDictionary : pickDictionary(language || "en");
  }

  /**
   * Checks if a string is a word.
   */
  isWord(word: string, customDictionary?: string[]): boolean {
    return isWord(word, this.dictionary, customDictionary);
  }

  /**
   * Returns a list of words that can be created from supplied letters. If length is supplied,
   * only returns words of *n* length.
   */
  containing(letters: string, length?: number, customDictionary?: string[]): string[] {
    return getWordsContaining(letters, this.dictionary, length, customDictionary);
  }

  /**
   * Returns a list of words that starts with supplied word.
   */
  startsWith(word: string, customDictionary?: string[]): string[] {
    return getWordsStartingWith(word, this.dictionary, customDictionary);
  }

  /**
   * Returns a list of words that ends with supplied word.
   */
  endsWith(word: string, customDictionary?: string[]): string[] {
    return getWordsEndingWith(word, this.dictionary, customDictionary);
  }

  /**
   * Returns a list of words that is of desired length.
   */
  ofLength(length: number, customDictionary?: string[]): string[] {
    return getWordsOfLengthN(length, this.dictionary, customDictionary);
  }

  /**
   * Returns a list of words that are similar to supplied word.
   */
  similarTo(word: string, customDictionary?: string[]): string[] {
    return getSimilarWords(word, this.dictionary, customDictionary);
  }

  /**
   * Returns a list of anagrams to supplied word.
   */
  anagramsOf(word: string, customDictionary?: string[]): string[] {
    return getAnagrams(word, this.dictionary, customDictionary);
  }

  /**
   * Returns palindromes. If length is supplied, only palindromes of *n* length is returned.
   */
  palindromes(length?: number, customDictionary?: string[]): string[] {
    return getPalindromes(this.dictionary, length, customDictionary);
  }

  /**
   * Checks if two strings are similar.
   */
  isSimilar(word1: string, word2: string): boolean {
    return similar(word1, word2);
  }

  /**
   * Returns a random word. If length is supplied, returns a random number
   * of length *n*.
   */
  random(length?: number, customDictionary?: string[]): string {
    return getRandomWord(this.dictionary, length, customDictionary);
  }
}

module.exports = WordLib;
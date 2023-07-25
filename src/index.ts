import { isWord } from "./functions/is_word";
import { getWordsContaining } from "./functions/get_words_containing";
import { getWordsStartingWith } from "./functions/get_words_starting_with";
import { getWordsEndingWith } from "./functions/get_words_ending_with";
import { getWordsOfLengthN } from "./functions/get_words_of_length_n";
import { getSimilarWords } from "./functions/get_similiar_words";
import { getAnagrams } from "./functions/get_anagrams";
import { getPalindromes } from "./functions/get_palindromes";
import { isSimilar } from "./functions/is_similar";
import { getRandomWord } from "./functions/get_random_word";

class WordLib {
  private language: "sv" | "en";
  constructor(language: "sv" | "en") {
    this.language = language;
  }

  /**
   * Checks if a string is a word.
   */
  isWord(word: string): boolean {
    return isWord(word, this.language);
  }

  /**
   * Returns a list of words that can be created from supplied letters. If length is supplied,
   * only returns words of *n* length.
   */
  containing(letters: string, length?: number): string[] {
    return getWordsContaining(letters, this.language, length);
  }

  /**
   * Returns a list of words that starts with supplied word.
   */
  startsWith(word: string): string[] {
    return getWordsStartingWith(word, this.language);
  }

  /**
   * Returns a list of words that ends with supplied word.
   */
  endsWith(word: string): string[] {
    return getWordsEndingWith(word, this.language);
  }

  /**
   * Returns a list of words that is of desired length.
   */
  ofLength(length: number): string[] {
    return getWordsOfLengthN(length, this.language);
  }

  /**
   * Returns a list of words that are similar to supplied word.
   */
  similarTo(word: string): string[] {
    return getSimilarWords(word, this.language);
  }

  /**
   * Returns a list of anagrams to supplied word.
   */
  anagramsOf(word: string): string[] {
    return getAnagrams(word, this.language);
  }

  /**
   * Returns palindromes. If length is supplied, only palindromes of *n* length is returned.
   */
  palindromes(length?: number): string[] {
    return getPalindromes(this.language, length);
  }

  /**
   * Checks if two strings are similar.
   */
  similar(word1: string, word2: string): boolean {
    return isSimilar(word1, word2);
  }

  /**
   * Returns a random word. If length is supplied, returns a random number
   * of length *n*.
   */
  random(length?: number): string {
    return getRandomWord(this.language, length);
  }
}

export { WordLib };

import { isWord } from "./functions/is_word";
import { getWordsContaining } from "./functions/get_words_containing";
import { getWordsStartingWith } from "./functions/get_words_starting_with";
import { getWordsEndingWith } from "./functions/get_words_ending_with";
import { getWordsOfLengthN } from "./functions/get_words_of_length_n";
import { getSimilarWords } from "./functions/get_similiar_words";
import { getAnagrams } from "./functions/get_anagrams";
import { getPalindromes } from "./functions/get_palindromes";
import { isSimilar } from "./functions/is_similar";

class WordLib {
  private language: "sv" | "en";
  constructor(language: "sv" | "en") {
    this.language = language;
  }

  isWord(word: string): boolean {
    return isWord(word, this.language);
  }

  containing(letters: string): string[] {
    return getWordsContaining(letters, this.language);
  }

  startsWith(word: string): string[] {
    return getWordsStartingWith(word, this.language);
  }

  endsWith(word: string): string[] {
    return getWordsEndingWith(word, this.language);
  }

  ofLength(length: number): string[] {
    return getWordsOfLengthN(length, this.language);
  }

  similarTo(word: string): string[] {
    return getSimilarWords(word, this.language);
  }

  anagramsOf(word: string): string[] {
    return getAnagrams(word, this.language);
  }

  palindromes(length?: number): string[] {
    return getPalindromes(this.language, length);
  }

  similar(word1: string, word2: string): boolean {
    return isSimilar(word1, word2);
  }
}

export {
  WordLib,
}
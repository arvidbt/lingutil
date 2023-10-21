import { WordLib } from ".";
const words = [
  "this",
  "is",
  "test",
  "words",
  "orange",
  "onager",
  "kiwi",
  "hannah",
];

const wordlib = new WordLib(words);

describe("WordLib", () => {
  describe("get_anagrams", () => {
    it("should return an anagram", () => {
      const anagram = wordlib.anagramsOf("orange");
      expect(anagram).toEqual(["onager"]);
    });
  });

  describe("get_palindromes", () => {});
});

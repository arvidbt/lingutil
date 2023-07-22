import { getWordsContaining } from "../functions/get_words_containing";

describe("getWordsContaining", () => {
  test("it should return all words possible from letters 'est'", () => {
    const result = getWordsContaining("est", "sv");
    expect(result).toEqual(["e", "s", "t", "se", "te", "est", "set", "tes"]);
  });

  test("it should return no words", () => {
    const result = getWordsContaining("", "sv");
    expect(result).toEqual([]);
  });
});

import { getWordsStartingWith } from "../functions/get_words_starting_with";

describe("getWordsStartingWith", () => {
  test("it should get all words beginning with the word 'funktionell'", () => {
    const result = getWordsStartingWith("funktionell", "sv");
    expect(result).toEqual([
      "funktionella",
      "funktionellt",
      "funktionellare",
      "funktionellast",
      "funktionellaste",
    ]);
  });

  test("it should not return the word provided as argument", () => {
    const result = getWordsStartingWith("funktionell", "sv");
    expect(result).not.toContain("funktionell");
  });
});

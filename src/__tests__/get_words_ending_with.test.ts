import { getWordsEndingWith } from "../functions/get_words_ending_with";

describe("getWordsEndingWith", () => {
  test("it should get all words ending with the word 'funktionell'", () => {
    const result = getWordsEndingWith("funktionell", "sv");
    expect(result).toEqual(["dysfunktionell"]);
  });

  test("it should not return the word provided as argument", () => {
    const result = getWordsEndingWith("funktionell", "sv");
    expect(result).not.toContain("funktionell");
  });
});

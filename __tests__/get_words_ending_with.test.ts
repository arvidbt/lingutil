import { WordLib } from "../src";
describe("getWordsEndingWith", () => {
  test("it should get all words ending with the word 'funktionell'", () => {
    const result = new WordLib({ language: "sv" }).endsWith("funktionell");
    expect(result.sort()).toEqual([
      "bifunktionell",
      "dysfunktionell",
      "tvärfunktionell",
      "dubbelfunktionell",
    ].sort());
  });

  test("it should not return the word provided as argument", () => {
    const result = new WordLib({ language: "sv" }).endsWith("funktionell");
    expect(result).not.toContain("funktionell");
  });
});

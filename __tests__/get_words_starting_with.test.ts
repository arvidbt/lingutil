import { WordLib } from "../src";

describe("getWordsStartingWith", () => {
  test("it should get all words beginning with the word 'funktionell'", () => {
    const result = new WordLib({language: "sv"}).startsWith("funktionell");
    expect(result.sort()).toEqual([
      "funktionella",
      "funktionellt",
      "funktionellare",
      "funktionellast",
      "funktionellaste",
    ].sort());
  });

  test("it should not return the word provided as argument", () => {
    const result = new WordLib({language: "sv"}).startsWith("funktionell");
    expect(result).not.toContain("funktionell");
  });
});

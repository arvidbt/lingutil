import { WordLib } from "..";

describe("getWordsStartingWith", () => {
  test("it should get all words beginning with the word 'funktionell'", () => {
    const result = new WordLib("sv").startsWith("funktionell");
    expect(result).toEqual([
      "funktionella",
      "funktionellt",
      "funktionellare",
      "funktionellast",
      "funktionellaste",
    ]);
  });

  test("it should not return the word provided as argument", () => {
    const result = new WordLib("sv").startsWith("funktionell");
    expect(result).not.toContain("funktionell");
  });
});

import { WordLib } from "..";
describe("getWordsEndingWith", () => {
  test("it should get all words ending with the word 'funktionell'", () => {
    const result = new WordLib("sv").endsWith("funktionell");
    expect(result).toEqual(["dysfunktionell"]);
  });

  test("it should not return the word provided as argument", () => {
    const result = new WordLib("sv").endsWith("funktionell");
    expect(result).not.toContain("funktionell");
  });
});

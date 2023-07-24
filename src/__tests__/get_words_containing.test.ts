import { WordLib } from "..";
describe("getWordsContaining", () => {
  test("it should return all words possible from letters 'est'", () => {
    const result = new WordLib("sv").containing("est");
    expect(result).toEqual(["e", "s", "t", "se", "te", "est", "set", "tes"]);
  });

  test("it should return no words", () => {
    const result = new WordLib("sv").containing("");
    expect(result).toEqual([]);
  });
});

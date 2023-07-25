import { WordLib } from "../src";
describe("getWordsContaining", () => {
  test("it should return all words possible from letters 'est'", () => {
    const result = new WordLib("sv").containing("est");
    expect(result).toEqual(["e", "s", "t", "se", "te", "est", "set", "tes"]);
  });

  test("it should return no words", () => {
    const result = new WordLib("sv").containing("");
    expect(result).toEqual([]);
  });

  test("it should only return words of length 4", () => {
    const result = new WordLib("sv").containing("svenska", 4);
    expect(result.every(word => word.length === 4)).toBe(true);
  })
});

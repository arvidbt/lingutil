import { WordLib } from "../src";
describe("getWordsContaining", () => {
  test("it should return all words possible from letters 'est'", () => {
    const result = new WordLib({ language: "sv" }).containing("est");
    expect(result.sort()).toEqual(
      ["t", "s", "e", "se", "et", "te", "est", "set", "tes"].sort()
    );
  });

  test("it should return no words", () => {
    const result = new WordLib({ language: "sv" }).containing("");
    expect(result).toEqual([]);
  });

  test("it should only return words of length 4", () => {
    const result = new WordLib({ language: "sv" }).containing("svenska", {
      length: 4,
    });
    expect(result.every((word) => word.length === 4)).toBe(true);
  });
});

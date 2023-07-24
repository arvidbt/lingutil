import { WordLib } from "..";
describe("getWordsOfLengthN", () => {
  test("it should return all words of length 35", () => {
    const result = new WordLib("sv").ofLength(35);
    expect(result).toEqual([
      "satellitkommunikationsutrustningars",
      "satellitkommunikationsutrustningens",
    ]);
  });

  test("it should not return any words of length 0", () => {
    const result = new WordLib("sv").ofLength(0);
    expect(result).toEqual([]);
  });
});

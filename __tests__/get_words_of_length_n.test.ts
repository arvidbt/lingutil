import { WordLib } from "../src";
describe("getWordsOfLengthN", () => {
  test("it should return all words of length 35", () => {
    const result = new WordLib({ language: "sv" }).ofLength(35);
    expect(result.sort()).toEqual(
      [
        "metallbearbetningsmaskinindustriers",
        "satellitkommunikationsutrustningars",
        "satellitkommunikationsutrustningens",
      ].sort()
    );
  });

  test("it should not return any words of length 0", () => {
    const result = new WordLib({ language: "sv" }).ofLength(0);
    expect(result).toEqual([]);
  });
});

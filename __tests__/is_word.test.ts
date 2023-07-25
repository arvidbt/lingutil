import { WordLib } from "../src";

describe("isWord", () => {
  test("it should return false when presented a non-swedish word when toggled to swedish", () => {
    const result = new WordLib("sv").isWord("swedish");
    expect(result).toBeFalsy();
  });

  test("it should return true when presented a swedish word when toggled to swedish", () => {
    const result = new WordLib("sv").isWord("svenska");
    expect(result).toBeTruthy();
  });

  test("it should return false when presented a swedish word when toggled to english", () => {
    const result = new WordLib("en").isWord("svenska");
    expect(result).toBeFalsy();
  });
});

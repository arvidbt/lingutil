import { isWord } from "../functions/is_word";

describe("isWord", () => {
  test("it should return false when presented a non-swedish word when toggled to swedish", () => {
    const result = isWord("english", "sv");
    expect(result).toBeFalsy();
  });

  test("it should return true when presented a swedish word when toggled to swedish", () => {
    const result = isWord("svenska", "sv");
    expect(result).toBeTruthy();
  });

  test("it should return false when presented a swedish word when toggled to english", () => {
    const result = isWord("svenska", "en");
    expect(result).toBeFalsy();
  });
});

import { getWordsOfLengthN } from "../functions/get_words_of_length_n";

describe("getWordsOfLengthN", () => {
  test("it should return all words of length 35", () => {
    const result = getWordsOfLengthN(35, 'sv');
    expect(result).toEqual([
      "satellitkommunikationsutrustningars",
      "satellitkommunikationsutrustningens",
    ]);
  });

  test("it should not return any words of length 0", () => {
    const result = getWordsOfLengthN(0, 'sv');
    expect(result).toEqual([]);
  });
});

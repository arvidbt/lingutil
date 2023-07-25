import { pickDictionary, getRandomArrayIndex } from "../utils/utils";

export const getRandomWord = (language: "sv" | "en", length?: number): string => {
    const wordlist = pickDictionary(language);
    if (length) {
        const wordsOfLength = wordlist.filter(word => word.length === length);
        if (wordsOfLength.length === 0) {
            return `No words of length ${length}`;
        }
        return wordsOfLength[getRandomArrayIndex(wordsOfLength)];
    }
    return wordlist[getRandomArrayIndex(wordlist)];
}
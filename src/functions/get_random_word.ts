import { pickDictionary } from "../utils/utils";

export const getRandomWord = (language: "sv" | "en"): string => {
    const wordlist = pickDictionary(language);
    return wordlist[Math.floor(Math.random()*wordlist.length)];
}
import {
    isWord,
    getWordsContaining,
    getWordsStartingWith,
    getWordsEndingWith,
    getWordsOfLengthN
}
    from "../index";

describe("isWord", () => {
    test("it should return false when presented a non-swedish word", () => {
        const word = "english";
        const result = isWord(word);
        expect(result).toBeFalsy();
    });

    test("it should return true when presented a swedish word", () => {
        const word = "svenska";
        const result = isWord(word);
        expect(result).toBeTruthy();
    });
})

describe("getWordsContaining", () => {
    test("it should return all words", () => {
        const letters = "est";
        const result = getWordsContaining(letters);
        expect(result).toEqual([
            'e', 's', 't',
            'se', 'te', 'est',
            'set', 'tes'
        ]);
    });

    test("it should return no words", () => {
        const letters = "";
        const result = getWordsContaining(letters);
        expect(result).toEqual([]);
    });
})

describe("getWordsStartingWith", () => {
    test("it should get all words beginning with the word 'funktionell'", () => {
        const word = "funktionell";
        const result = getWordsStartingWith(word)
        expect(result).toEqual([
            'funktionella',
            'funktionellt',
            'funktionellare',
            'funktionellast',
            'funktionellaste'
        ])
    });

    test("it should not return the word provided as argument", () => {
        const word = "funktionell";
        const result = getWordsStartingWith(word)
        expect(result).not.toContain(word)
    });
})

describe("getWordsEndingWith", () => {
    test("it should get all words ending with the word 'funktionell'", () => {
        const word = "funktionell";
        const result = getWordsEndingWith(word);
        expect(result).toEqual(['dysfunktionell']);
    });

    test("it should not return the word provided as argument", () => {
        const word = "funktionell";
        const result = getWordsEndingWith(word)
        expect(result).not.toContain(word)
    });
})

describe("getWordsOfLengthN", () => {
    test("it should return all words of length 35", () => {
        const len = 35;
        const result = getWordsOfLengthN(len)
        expect(result).toEqual(['satellitkommunikationsutrustningars', 'satellitkommunikationsutrustningens']);
    });

    test("it should not return any words of length 0", () => {
        const len = 0;
        const result = getWordsOfLengthN(len)
        expect(result).toEqual([])
    });
})
export const countDistinctChars = (word: string, letters: string[]): number => {
    const wordSet = new Set(word)
    const letterSet = new Set(letters)
    return [...wordSet].filter(char => !letterSet.has(char)).length;
}

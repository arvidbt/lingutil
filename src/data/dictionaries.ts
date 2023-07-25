import en_dictionary from "./json-data/en_dictionary.json"
import sv_dictionary from "./json-data/sv_dictionary.json"

const en_wordlist = Object.keys(en_dictionary);
const sv_wordlist = Object.keys(sv_dictionary);

export {
    en_wordlist,
    sv_wordlist
}
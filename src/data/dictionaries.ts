import en_dictionary from "./json-data/en_dictionary.json"
import es_dictionary from "./json-data/es_dictionary.json"
import fr_dictionary from "./json-data/fr_dictionary.json"
import sv_dictionary from "./json-data/sv_dictionary.json"

const en_wordlist = Object.keys(en_dictionary);
const es_wordlist = Object.keys(es_dictionary);
const fr_wordlist = Object.keys(fr_dictionary);
const sv_wordlist = Object.keys(sv_dictionary);

export {
    en_wordlist,
    es_wordlist,
    fr_wordlist,
    sv_wordlist
}
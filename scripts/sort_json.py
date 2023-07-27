import json

def sort_json_by_key_length():
    with open("fr_dictionary_unsorted.json", "r") as json_file:
        data = json.load(json_file)

    sorted_data = {k: data[k] for k in sorted(data, key=lambda k: len(k))}

    with open("fr_dictionary.json", "w") as sorted_json_file:
        json.dump(sorted_data, sorted_json_file, indent=4, ensure_ascii=False)

if __name__ == "__main__":
    sort_json_by_key_length()

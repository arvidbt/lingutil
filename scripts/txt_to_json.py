import json


def txt_to_json():
    data = {}
    with open("fr.txt", "r") as txt_file:
        for line in txt_file:
            key = line.strip()
            data[key] = 1

    with open("fr_dictionary_unsorted.json", "w") as json_file:
        json.dump(data, json_file, indent=4, ensure_ascii=False)


if __name__ == "__main__":
    txt_to_json()

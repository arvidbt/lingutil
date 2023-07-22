import json


def txt_to_json():
    data = {}
    with open("sv_dictionary.txt", "r") as txt_file:
        for line in txt_file:
            key = line.strip()
            data[key] = 1

    with open("sv_dictionary.json", "w") as json_file:
        json.dump(data, json_file, indent=4)


if __name__ == "__main__":
    txt_to_json()

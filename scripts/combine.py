import json

def combine_json():
    with open("dict1.json", "r") as json_file_1:
        data_1 = json.load(json_file_1)
        
    with open("dict2.json", "r") as json_file_2:
        data_2 = json.load(json_file_2)

    dsso_keys = set(data_1.keys())
    dictionary = set(data_2.keys())
    result = list(dsso_keys.union(dictionary))

    with open("en_dictionary.json", "w") as combined_json:
        json.dump(result, combined_json, indent=4, ensure_ascii=False)

if __name__ == "__main__":
    combine_json()

def remove_duplicates():
    unique_lines = set()

    with open("dsso.txt", 'r') as f:
        for line in f:
            line = line.strip()
            if line:
                unique_lines.add(line)

    with open("dsso_5.txt", 'w') as f:
        for line in unique_lines:
            f.write(line + '\n')

if __name__ == "__main__":
    remove_duplicates()
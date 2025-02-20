def valid_parenthesis(s: str) -> bool:
    stack =[]
    dict = {")": "(", "}": "{", "]": "["}
    for char in s:
        if char in dict.values():
            stack.append(char)
        elif char in dict.keys():
            if stack == [] or dict[char] != stack.pop():
                return False
    return stack == []


if __name__ == "__main__":
    print(valid_parenthesis("(]"))

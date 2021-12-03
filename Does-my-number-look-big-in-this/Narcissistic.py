def narcissistic(value):
    string = str(value)
    total = 0
    for element in string:
        total += int(element) ** len(string)
    return total == value


print('', narcissistic(153), '\n', narcissistic(
    1652), '\n', narcissistic(122), '\n')


def narcissistic2(value):
    return value == sum(int(element) ** len(str(value)) for element in str(value))


print('', narcissistic2(153), '\n', narcissistic2(
    1652), '\n', narcissistic2(122))

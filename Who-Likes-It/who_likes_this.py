def likes(names):
    if (len(names) == 0):
        return 'no one likes this'
    if (len(names) == 1):
        return f"{names[0]} likes this"
    names.reverse()
    used_names = []
    while len(used_names) < 2 and len(names) > 1:
        used_names.append(names.pop())
    var = str(len(names)) + " others" if len(names) > 1 else names[0]
    s = ', '
    return f"{s.join(used_names)} and {var} like this"

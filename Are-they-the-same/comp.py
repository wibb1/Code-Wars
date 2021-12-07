def comp(array1, array2):
    if array1 is None or array2 is None:
        return False
    if (len(array1) == 0 or len(array2) == 0):
        if (array1 == array2):
            return True
        return False
    array1 = sorted(array1, key=abs)
    array2 = sorted(array2, key=abs)
    i = 0
    for value in array1:
        if (value is None or array2[i] is None) or value**2 != array2[i]:
            return False
        i += 1
    return True


a1 = [121, 144, 19, 161, 19, 144, 19, 11]
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
print('True =', comp(a1, a2))

a1 = [121, 144, 19, 161, 19, 144, 19, 11]
a2 = [11*21, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
print('False =', comp(a1, a2))

a1 = [121, 144, 19, 161, 19, 144, 19, 11]
a2 = [11*11, 121*121, 144*144, 190*190, 161*161, 19*19, 144*144, 19*19]
print('False =',comp(a1, a2))

a1 = [-121, -144, 19, -161, 19, -144, 19, -11]
a2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
print('True =', comp(a1, a2))

a1 = []
a2 = [1]
print('False =',comp(a1, a2))

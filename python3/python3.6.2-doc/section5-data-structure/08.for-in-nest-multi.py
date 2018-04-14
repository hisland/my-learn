list1 = [1, 2, 3]

list3 = [x1**2 for x1 in [x2**2 for x2 in list1]]
list4 = [x1* x2 for x2 in ['a', 'b', 'c'] for x1 in list1]

print(list1)
print(list3)
print(list4)

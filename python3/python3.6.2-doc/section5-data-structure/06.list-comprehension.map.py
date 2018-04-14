list1 = [1, 2, 3]

list2 = list(map(lambda x: x**2, list1))
list3 = [x1**2 for x1 in list1]
list4 = [x1**2 for x1 in list1 if x1 > 1]

print(list1)
print(list2)
print(list3)
print(list4)

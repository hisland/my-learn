list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']

list3 = [x1**2 for x1 in list1]
list4 = [x1**2 for x1 in list1 if x1 > 1]
list5 = [(x,y) for x in list1 for y in list2 if x > 1]

print(list1)
print(list3)
print(list4)
print(list5)

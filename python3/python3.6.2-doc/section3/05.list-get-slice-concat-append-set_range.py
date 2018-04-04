num1 = [22, 33, 44, 55]
print(num1)
print(num1[0])
print(num1[-1])

num2 = num1[2:4]
print(num2)

num3 = num1 + [4, 5, 6]
print(num3)

num1[0] = 1
print(num1)

num1.append(99)
print(num1)

num1[1:3] = [3]
print(num1)

print(len(num1))

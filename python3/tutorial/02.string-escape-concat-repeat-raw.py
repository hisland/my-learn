print('single quote')
print("double quote")

print('"" in single quote')
print("'' in double quote")

print('\' escape single quote')
print("\" escape double quote")

print("escape \n new line")


print(r"raw string \n new line")

print("""
triple-quotes
multi line
begin,end new line included
 """)

print("""\
triple-quotes
multi line
begin,end new line not included\
""")

print("concatenated with " + '+ op')
print("repeat with " + ( 3 * 'k'))

print("string literals" " auto concatenated")
print("string literals"
      " auto concatenated"
      " even multi line")

# s1 = "hello"
# print(s1 " auto concatenated") # only literals next to each other can auto concatenated


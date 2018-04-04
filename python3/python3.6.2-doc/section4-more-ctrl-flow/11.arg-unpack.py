def halo2(aa, bb):
  print('aa', aa)
  print('bb', bb)

list = [1,2]
halo2(*list)

def halo3(aa, bb):
  print('aa', aa)
  print('bb', bb)

list2 = { "aa": 33, "bb": 44}
halo3(**list2)


halo3(bb=99,aa=88)

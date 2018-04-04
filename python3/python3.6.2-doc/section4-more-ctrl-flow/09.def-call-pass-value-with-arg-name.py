ii = 88
def halo2(aa, bb = ii):
  print('aa', aa)
  print('bb', bb)

halo2(bb = 3, aa = 4)

# 不过以下几种调用是无效的:

# parrot()                     # required argument missing
# parrot(voltage=5.0, 'dead')  # non-keyword argument after a keyword argument
# parrot(110, voltage=220)     # duplicate value for the same argument
# parrot(actor='John Cleese')  # unknown keyword argument

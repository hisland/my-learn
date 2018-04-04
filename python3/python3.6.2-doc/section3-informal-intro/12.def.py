def fab(nn):
  """print fab up to nn"""
  a, b = 0, 1
  while a < nn:
    print(a, end=' ')
    a, b = b, a+b
  print('---')

fab(2000)

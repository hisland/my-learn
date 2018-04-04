def fab(nn):
  """print fab up to nn"""
  result = []
  a, b = 0, 1
  while a < nn:
    result.append(a)
    a, b = b, a+b
  return result

print(fab(2000))

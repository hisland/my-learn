def foo1():
  bar1 = 'set in foo1'
  def foo2():
    nonlocal bar1
    bar1 = 'set in foo2'
  print(bar1)
  foo2()
  print(bar1)


foo1()

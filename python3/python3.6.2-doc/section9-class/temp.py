bar1 = 'set in global'
def foo1():
  bar1 = 'set in foo1'
  def foo2():
    global bar1
    bar1 = 'set in foo2-global'
  print(bar1)
  foo2()
  print(bar1)


print(bar1)
foo1()
print(bar1)

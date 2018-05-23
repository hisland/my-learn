def func2(func):
  def dec():
    print('enter')
    func()
    print('exit')
  return dec

@func2
def func3():
  print(3)

func3()

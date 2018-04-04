words = ['cat', 'window', 'defenestrate']

for vv in words:
  print(vv, len(vv))
else: # list 循环完成, 执行 else
  print('not')

print('------')

for vv in words:
  if vv == 'window':
    break # 提前退出, 不执行 else
  else:
    print(vv, len(vv))
else: # 没有执行
  print('not')

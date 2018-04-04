for vv in [1,2,3]:
  if vv == 3:
    break # 提前退出, 不执行 else
  else:
    print(vv)
else: # list 循环完成, 执行 else
  print(99)

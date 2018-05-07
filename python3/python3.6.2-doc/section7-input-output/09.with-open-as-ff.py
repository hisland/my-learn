with open('temp_for_file_op', 'r') as ff:
  for line in ff:
    print(line)

print(ff.closed)

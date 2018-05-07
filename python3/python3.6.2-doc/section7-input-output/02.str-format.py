ss = 'Value is: {} {}'
print(ss.format(100, 200, 300))

ss = 'Value is: {0} {2}'
print(ss.format(100, 200, 300))

ss = 'Value is: {mike} {sam}'
print(ss.format(sam = 100, mike = 300))

ss = 'Value is: {0} {}' # cannot switch from manual field specification to automatic field numbering
print(ss.format(100, 200, 300))

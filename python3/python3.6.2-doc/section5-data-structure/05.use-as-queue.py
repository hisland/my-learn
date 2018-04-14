from collections import deque

list = ['aa', 'bb', 'halo']
queue = deque(list)
print(queue)

queue.append(3)
print(queue)

queue.popleft()
print(queue)





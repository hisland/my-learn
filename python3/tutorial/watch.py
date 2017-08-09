from livereload import Server, shell

server = Server()

def alert():
    print('foo')
server.watch('./temp.py', alert)

# run a shell command
server.watch('./temp.py', shell('python3 ./temp.py', output='aa.log'))

server.serve(debug=True)

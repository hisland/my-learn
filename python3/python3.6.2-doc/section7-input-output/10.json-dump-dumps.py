import json

ww = { 'halo': 2, 'bbq': { 'some': 'thing'}}

print(json.dumps(ww))

ff = open('temp_json_dump', 'w')
print(json.dump(ww, ff))


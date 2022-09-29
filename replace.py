from json import loads
from traceback import print_exc
import os

classes = {}

with open('classes.json', 'r') as file:
	for line in file.read().split("\n"):
		if line.strip():
			classes |= loads(line)


def replace(dir="build"):
	for item in os.listdir(dir):
		try:
			path = os.path.join(dir, item)
			if os.path.isfile(path):
				with open(path, 'r') as file:
					content = file.read()
				for name in classes:
					content = content.replace(name, classes[name])
				print(content)
				with open(path, 'w') as file:
					file.write(content)
			elif os.path.isdir(path):
				replace(path)
		except:
			print_exc()


replace()

from json import loads
from traceback import print_exc
import requests
import re
import os


AUTH = ("default", os.environ.get("CLUSTER_SECRET"))
ENDPOINT = "https://rat.frsqr.xyz:9094"


regex = [
  re.compile(r"ipfs\(\"(\w+)"),
  re.compile(r"ipfs://(\w+)"),
]
all_pins = requests.get(ENDPOINT + "/allocations", auth=AUTH).text
pinned_cids = []
local_cids = []
unique_cids = []

def find(dir="."):
  for item in os.listdir(dir):
    if item in [".git", "node_modules"]:
      continue
    path = os.path.join(dir, item)
    if os.path.isdir(path):
      find(path)
    elif os.path.isfile(path):
      try:
        with open(path, 'r') as file:
          content = file.read()
        for re_item in regex:
          for match in re_item.findall(content):
            local_cids.append(match)
      except:
        pass


find()

local_cids = list(set(local_cids))

print("local cids:", local_cids)


def pin_cid(cid):
  requests.post(ENDPOINT + f"/pins/ipfs/{cid}?mode=recursive&name=frontend&replication-max=3&replication-min=2&shard-size=0&user-allocations=", auth=AUTH)
  print(f"pinned cid: {cid}")


for pin_text in all_pins.split("\n"):
  if not pin_text:
    continue
  pin = loads(pin_text)
  if pin["name"] == "frontend":
    pinned_cids.append(pin["cid"])


for cid in local_cids:
  if cid not in pinned_cids:
    unique_cids.append(cid)


unique_cids = list(set(unique_cids))


for cid in unique_cids:
  pin_cid(cid)

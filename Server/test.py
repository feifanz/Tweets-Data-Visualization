import json

fo = open("./data/baseball.json", "r+")
content = fo.read()
j = json.loads(content)
print(j)

# 关闭文件
fo.close()
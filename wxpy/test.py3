# 导入模块
from wxpy import *
# 初始化机器人，扫码登陆
bot = Bot()

my_friend = bot.friends()

print(my_friend)


# 进入 Python 命令行、让程序保持运行
embed()

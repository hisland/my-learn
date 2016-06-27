
## 有2种 configure 方法

* configuration comments 写在注释里
* configuration File:

  .eslintrc.js
  .eslintrc.yaml
  .eslintrc.yml
  .eslintrc.json
  .eslintrc
  package.json 的 eslintConfig 属性


- 定义global: /* global var1, var2 */
- 定义global no-write: /* global var1:false, var2:false */


## 一些总结点

* 使用目录层级最近的 configFile
* 多层目录的 configFile 会像 css 那样层叠, 越往上层, 优先级越低, 查看 simple3 示例
* package.json 的 eslintConfig 会作用于它里面的所有的目录, 效果同 configFile
* configFile 和 package.json 在同一个目录里面时, [package.json 不会被使用]
* 检查配置是根据检查的文件所在路径来查找的, 不限定于某一个配置, 非常灵活
* "root": true, 可以阻止继续往上层搜索, 查看 simple4 示例
* ~/.eslintrc Always skipped if other configs present


## ,eslintignore

* .eslintignore 只使用查找到的一个文件, 不会递归
* #号开头是注释
* 跟 .gitignore 规则一样
* !号开头是负规则

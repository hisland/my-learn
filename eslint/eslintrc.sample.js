module.exports = {
  "env": {
    "node": true,
    "browser": true,
  },
  "globals": {
    "var1": true,
    "var2": false,
  },
  "plugins": {
    // npm模块
    "plugin1", // eslint-plugin- 前缀可以忽略, 对应的npm模块是 eslint-plugin-plugin1
    "eslint-plugin-plugin2",
    // -g 安装的只能被全局使用
    // local 安装的能被全局和本地的使用
  },
  "extends": "eslint:recommended", // core rules mark as ✔
  "extends": "eslint:all", // enable all core rules, 官方不建议在 production 使用
  "extends": "plugin:react/recommended", // from plugin
  "extends": "standard", // npm: eslint-config-standard, eslint-config 可以被忽略
  "extends": "./some-file.js", // file, 不能忽略后缀
  "extends": ["A", "B"], // 数组形式, B 覆盖 A 相同设置, 查看 rule-override
  "rules": {
    // 单值, 只是开启或者关闭
    "name": "off", // same as "name": 0
    "name": "warn", // same as "name": 1
    "name": "error", // same as "name": 2

    // 多值, 只是开启或者关闭
    "name": ["error", "value"], // same as "name": [2, "value"]

    "plugin1/rule1": 2, // 从plugin来的规则
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};

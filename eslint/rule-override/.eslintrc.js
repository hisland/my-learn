module.exports = {
  "root": true,
  "env": {
    "node": true,
    "browser": true,
  },
  "extends": ["./rulea.js", "./ruleb.js"], // b 覆盖 a 的同名设置
  "rules": {
    "no-unused-vars": 2, // 覆盖 extends 的设置
  }
};

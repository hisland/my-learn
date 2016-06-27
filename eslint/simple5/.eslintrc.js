module.exports = {
  "root": true,
  "env": {
    "node": true,
    "browser": true,
  },
  "extends": ["./rulea.js", "./ruleb.js"],
  "rules": {
    "no-unused-vars": 2,
  }
};

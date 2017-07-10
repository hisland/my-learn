module.exports = {
  "env": {
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["html"],
  "settings": {
    "html/indent": "+2", // code should start at the beginning of the line (no initial indentation).
    "html/report-bad-indent": 2,
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    // "linebreak-style": [
    //   "error",
    //   "unix"
    // ],
    // "quotes": [
    //   "error",
    //   "single"
    // ],
    "semi": [
      "error",
      "always"
    ]
  }
};


module.exports = {
  "parserOptions": {
    "ecmaVersion": 8
  },
  "env": {
    "node": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "no-trailing-spaces": "error",
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
module.exports = {
  root: true,
  extends: ["airbnb", "plugin:@typescript-eslint/recommended"],
  env: {
    browser: true,
    jest: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
      "project": "./tsconfig.json"
    },
  plugins: [
      "@typescript-eslint"
  ],
  rules: {
    "import/prefer-default-export" : 0,
    "comma-dangle" : [1, "never"],
    "react/prefer-stateless-function": 0,
    "react/no-array-index-key": 0,
    "react/prop-types": "off",
    "react/jsx-filename-extension": 0,
    "react/no-unused-prop-types": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/jsx-equals-spacing": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "react/sort-comp": 2,
    "new-cap": 0,
    "template-curly-spacing": [2, "always"],
    "key-spacing": 0,
    "one-var": 0,
    "arrow-parens": 0,
    "prefer-rest-params": 0,
    "no-multi-spaces": 0,
    "jsx-a11y/anchor-has-content": 0,
    "no-prototype-builtins": 0,
    "react/jsx-one-expression-per-line": 0,
    "no-console": 0,
    "react/destructuring-assignment": 0,
    "class-methods-use-this": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "react/jsx-indent-props": [2, 2],
    "@typescript-eslint/indent": 0,
    "padding-line-between-statements": [
        "error",
        { "blankLine": "never", "prev": "import", "next": "import" }
    ],
    "react/no-did-update-set-state": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "func-names": 0
  }
};
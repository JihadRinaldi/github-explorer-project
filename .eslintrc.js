module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-underscore-dangle": "off",
    "camelcase": "off",
    "react/require-default-props": "off"
  },
  settings: {
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [
          ".ts",
          ".tsx",
        ],
      },
    },
  },
};

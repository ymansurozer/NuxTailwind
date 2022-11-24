module.exports = {
  extends: ["@antfu", "prettier"],
  rules: {
    "antfu/if-newline": "off",
    "jsonc/indent": ["error", 2],
    "no-console": "warn",
  },
};

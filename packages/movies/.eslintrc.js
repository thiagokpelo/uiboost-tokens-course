const config = require('../../.eslintrc');

module.exports = {
  ...config,
  env: {
    ...config.env,
    browser: true,
    es2021: true,
    node: true,
  },
  extends: config.extends.concat('plugin:react/recommended', 'airbnb'),
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    ...config.rules,
  },
};

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.VUE_APP_ENV === 'prod' || process.env.VUE_APP_ENV === 'live' ? 'error' : 'off',
    'vue/no-unused-components': 'warn',
    'no-unused-vars': 'warn'
  }
};

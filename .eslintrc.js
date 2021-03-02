module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    // https://eslint.vuejs.org/rules/
    'plugin:vue/vue3-strongly-recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {},
  overrides: []
}

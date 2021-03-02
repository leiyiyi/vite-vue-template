module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    // https://eslint.vuejs.org/rules/
    'plugin:vue/vue3-strongly-recommended'
  ],
  parserOptions: {
    ecmaVersion: 12, // 12->es2021
    sourceType: 'module'
  },
  globals: {},
  ignorePatterns: [],
  plugins: [
    'vue'
  ],
  rules: {},
  overrides: []
}

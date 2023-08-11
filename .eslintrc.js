module.exports = {
    root: true,
    env: {
      // browser: true,
      node: true,
      es6: true
    },
    extends: [
      "plugin:vue/vue3-essential",
      "eslint:recommended"
    ],
    // parser: "babel-eslint",
    parserOptions: {
      // parser: 'babel-eslint',
      parser: "@babel/eslint-parser",
      ecmaVersion: "latest",
      sourceType: 'module'
    },
    plugins: [],
    overrides: [
      {
        files: ['src/components/default.vue'],  // Change this to default.vue path
        rules: {
          'vue/multi-word-component-names': 'off',
        }
      }
    ],
    rules: {
      'vue/multi-word-component-names': 'off'
    }
}
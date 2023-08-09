module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    extends: [
      "plugin:vue/vue3-essential",
      "eslint:recommended"
    ],
    plugins: [],
    overrides: [
      {
        files: ['src/components/default.vue'],  // Change this to default.vue path
        rules: {
          'vue/multi-word-component-names': 'off',
        }
      }
    ]
}
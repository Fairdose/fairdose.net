/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  env: {
    'vue/setup-compiler-macros': true
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.spec.{js,ts,jsx,tsx}',
        'cypress/integration/**.spec.{js,ts,jsx,tsx}'
      ],
      extends: ['plugin:cypress/recommended']
    }
  ],
  rules: {
    'no-console': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': ['error', 'always'],
    'comma-dangle': 0,
    'arrow-parens': 0,
    'vue/no-mutating-props': 0,
    'vue/experimental-script-setup-vars': 0,
    'vue/html-self-closing': 0,
    'vue/multi-word-component-names': 0,
    'vue/attribute-hyphenation': 'off'
  }
}

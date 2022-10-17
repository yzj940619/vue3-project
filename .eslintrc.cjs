module.exports = {
  root: true,
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly'
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser', // 解决引入 type {} 报错问题
    sourceType: 'module',
    ecmaVersion: 2020
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-bitwise': 'off',
    'no-tabs': 'off',
    'array-element-newline': ['error', 'consistent'],
    indent: [
      'error',
      2,
      { MemberExpression: 0, SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] }
    ],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['warn', 120],
    'no-new': 'off',
    'linebreak-style': 'off',
    'eol-last': 'off',
    'no-shadow': 'off',
    // 'no-unused-vars': 'warn',
    'arrow-parens': 'off',
    semi: ['error', 'always'],
    eqeqeq: 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'no-continue': 'off',
    'prefer-destructuring': 'off',
    'no-plusplus': 'off',
    'prefer-const': 'off',
    'global-require': 'off',
    'no-prototype-builtins': 'off',
    'consistent-return': 'off',
    'prefer-template': 'off',
    'one-var-declaration-per-line': 'off',
    'one-var': 'off',
    'object-curly-newline': 'off',
    'default-case': 'off',
    'no-trailing-spaces': 'off',
    'func-names': 'off',
    radix: 'off',
    'no-unused-expressions': 'off',
    'no-underscore-dangle': 'off',
    'no-nested-ternary': 'off',
    'no-restricted-syntax': 'off',
    'no-mixed-operators': 'off',
    'no-await-in-loop': 'off',
    'no-case-declarations': 'off',
    'template-curly-spacing': 'off',
    'no-empty': 'off',
    'guard-for-in': 'off',
    'class-methods-use-this': 'off',
    'no-return-await': 'off',

    // import
    'import/extensions': 'off',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'import/named': 'off',
    'import/order': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',

    // typescript
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',

    // vue link:https://eslint.vuejs.org/rules/
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 3
        },
        multiline: {
          max: 1
        }
      }
    ],
    'vue/require-explicit-emits': [
      'error',
      {
        allowProps: true
      }
    ],
    'vue/v-on-event-hyphenation': [
      'error',
      'always',
      {
        autofix: true
      }
    ],
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineProps', 'defineEmits']
      }
    ],
    'vue/html-comment-content-newline': 'warn',
    'vue/html-comment-content-spacing': 'warn',
    'vue/html-comment-indent': 'warn',
    'vue/match-component-file-name': 'warn',
    'vue/match-component-import-name': 'warn',
    'vue/no-multiple-objects-in-class': 'warn',
    'vue/no-potential-component-option-typo': [
      'warn',
      {
        presets: ['vue', 'vue-router'],
        threshold: 5
      }
    ],
    'vue/no-ref-object-destructure': 'warn',
    'vue/no-required-prop-with-default': [
      'warn',
      {
        autofix: true
      }
    ],
    'vue/no-this-in-before-route-enter': 'error',
    'vue/no-undef-properties': 'warn',
    'vue/no-unused-refs': 'warn',
    'vue/no-useless-mustaches': [
      'warn',
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: true
      }
    ],
    'vue/no-useless-v-bind': 'warn',
    'vue/no-v-text': 'error',
    'vue/padding-line-between-blocks': 'warn',
    'vue/padding-line-between-tags': 'warn',
    'vue/prefer-separate-static-class': 'warn',
    'vue/prefer-prop-type-boolean-first': 'error',
    'vue/prefer-true-attribute-shorthand': 'warn',
    'vue/require-direct-export': 'error',
    'vue/v-for-delimiter-style': 'warn',
    'vue/v-on-function-call': 'warn'
  }
};

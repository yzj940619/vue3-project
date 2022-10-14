module.exports = {
  root: true,
  globals: {
    defineEmits: 'readonly',
    defineProps: 'readonly',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
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
      { MemberExpression: 0, SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] },
    ],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['warn', 120],
    'no-new': 'off',
    'linebreak-style': 'off',
    'eol-last': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'warn',
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

    // vue
    'vue/require-component-is': 'off',
    'vue/valid-v-for': 'off',
    'vue/html-indent': ['error', 2],
    'vue/html-self-closing': 'off',
    'vue/max-attributes-per-line': [
      'warn',
      {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/singleline-html-element-content-newline': 'off',
  },
};

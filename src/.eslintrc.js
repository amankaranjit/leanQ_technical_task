module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'react-app',
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended'
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  };
  
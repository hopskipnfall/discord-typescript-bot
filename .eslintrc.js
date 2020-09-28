module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'prettier', // This must go last.
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    // TODO: Un-comment when prettier plays nicer with eslint.
    'implicit-arrow-linebreak': 'off',
    'class-methods-use-this': 'off',
    'function-paren-newline': ['error', { minItems: 3 }],
    'prettier/prettier': 'error',
  },
  ignorePatterns: ['dist/**', 'coverage/**'],
};

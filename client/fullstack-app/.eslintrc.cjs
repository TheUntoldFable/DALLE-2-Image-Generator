import tailwindConfig from './tailwind.config.cjs'

module.exports = {
  ignorePatterns: ['.tailwind.config.cjs'],
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    project: ['./tsconfig.json', './vite.config.ts'],
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'unused-imports'],
  rules: {
    "tailwindcss/no-custom-classname": [2, {
       "config": tailwindConfig,
    }],
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', 'ts', '.tsx'] },
    ], // should add ".ts" if typescript project
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
}

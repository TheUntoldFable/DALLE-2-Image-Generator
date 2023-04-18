module.exports = {
  ignorePatterns: ['./tailwind.config.cjs'],
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:tailwindcss/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    project: ['./tsconfig.json', './vite.config.ts'],
  },
  plugins: ['react', '@typescript-eslint', 'unused-imports', 'prettier'],
  rules: {
    'react/require-default-props': [
      0,
      {
        forbidDefaultForRequired: true,
        classes: 'defaultProps',
        functions: 'defaultProps',
        // @deprecated Use `functions` option instead.
        ignoreFunctionalComponents: true,
      },
    ],
    'tailwindcss/no-custom-classname': [
      0,
      {
        config: './tailwind.config.cjs',
      },
    ],
    // suppress errors for missing 'import React' in files
    'react/react-in-jsx-scope': 0,
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', 'ts', '.tsx'] },
    ], // should add ".ts" if typescript project
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

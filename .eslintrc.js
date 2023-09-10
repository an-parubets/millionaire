module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'react-app/jest',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'import'],
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
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}', './src/setupTests.ts'] }],
    'no-restricted-exports': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    // You can add or customize ESLint rules as needed
  },
};

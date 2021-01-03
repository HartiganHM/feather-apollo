module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    'jest/globals': true,
  },
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'airbnb', // Enables airbnb eslint rules (https://www.npmjs.com/package/eslint-config-airbnb)
  ],
  plugins: ['react-hooks', 'jest'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules
    // specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'no-use-before-define': 'off', // Turned off due to conflict with the below rule, which should be used with TS
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-uses-react': 'off', // No longer needed as of React v17
    'react/react-in-jsx-scope': 'off', // No longer needed as of React v17
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ], // Allows JSX to be used in .ts/.tsx files
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ], // Allows omission of file extensions in .ts(x)/.js(x) files
    // Jest specific rules
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'comma-dangle': 'off', // Turns off rule that conflicts with Prettier
    'object-curly-newline': 'off', // Turns off rule that conflicts with Prettier
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
    'import/resolver': {
      typescript: {}, // This loads <rootdir>/tsconfig.json to eslint
    },
  },
  overrides: [
    {
      // Ignores prop-type errors with *.tsx files
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};

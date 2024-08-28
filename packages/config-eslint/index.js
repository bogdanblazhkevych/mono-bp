const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: [
    '@typescript-eslint',
    'import',
    'no-type-assertion',
    'return-parens',
    '@getify/proper-arrows'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-typescript/base'
  ],
  rules: {
    "@typescript-eslint/no-for-in-array": 'off',
    "@typescript-eslint/require-await": 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-type-assertion/no-type-assertion': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-inferrable-types': ['error', {
      'ignoreParameters': true
    }],
    '@typescript-eslint/no-unused-vars': ['error', {
      'argsIgnorePattern': '^_ignore'
    }],
    '@typescript-eslint/indent': ['error', 'tab'],
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    '@typescript-eslint/dot-notation': 'off',
    '@typescript-eslint/keyword-spacing': ['error', {
      'overrides': {
        'return': {
          'after': false
        },
        'throw': {
          'after': false
        },
      }
    }],
    '@typescript-eslint/lines-between-class-members': ['error', 'always', {
      'exceptAfterSingleLine': true
    }],
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-loop-func': 'off',
    '@typescript-eslint/object-curly-spacing': ['error', 'always', {
      'objectsInObjects': false
    }],
    '@typescript-eslint/return-await': ['error', 'always'],
    '@typescript-eslint/space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    '@typescript-eslint/no-misused-promises': ['error', {
      'checksVoidReturn': false
    }],
    '@typescript-eslint/no-floating-promises': ['error', {
      'ignoreIIFE': true
    }],
    'curly': 'error',
    'spaced-comment': ['error', 'always', {
      'block': {
        'markers': ['*'],
        'balanced': true
      }
    }],
    '@typescript-eslint/unbound-method': 'error',
    'no-trailing-spaces': 'error',
    'array-callback-return': 'error',
    'eol-last': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    '@typescript-eslint/array-type': ['error', {
      'default': 'array'
    }],
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'index-signature'],
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/await-thenable': 'error',
    'return-parens/return-parens': 'error',
    '@getify/proper-arrows/this': 'error',
    'import/extensions': 'off',
    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'semi',
        'requireLast': true
      },
      'singleline': {
        'delimiter': 'semi',
        'requireLast': true
      },
      'multilineDetection': 'brackets'
    }],
  },
  env: {
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    '*.config.js',
    'dist/',
    '**.generated.ts'
  ]
};

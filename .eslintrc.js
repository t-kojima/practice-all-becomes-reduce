module.exports = {
  env: {
    es6: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['import', 'prettier'],
  rules: {
    'no-undef': 0,
    'no-extend-native': 0,
    'func-names': 0,
    'no-sparse-arrays': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],
  },
}

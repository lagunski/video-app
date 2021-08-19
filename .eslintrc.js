module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'import',
    'react',
    'react-hooks'
  ],
  extends: [
    /*'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'eslint-config-prettier'*/
  ],
  parserOptions: {
    project: ['./tsconfig.json']
  },
  'rules': {
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
};

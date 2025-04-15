import cypressPlugin from 'eslint-plugin-cypress';
import jsPlugin from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['node_modules/**'],
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.mocha,
        ...globals.jest,
        cy: 'readonly',
        Cypress: 'readonly',
      },
    },
    plugins: {
      cypress: cypressPlugin,
    },
    rules: {
      ...jsPlugin.configs.recommended.rules,
      ...cypressPlugin.configs.recommended.rules,
    },
  },
];
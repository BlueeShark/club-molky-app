// eslint.config.js
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default defineConfig([
  // Ignorer (remplace .eslintignore)
  {
    ignores: ['dist/**', 'build/**', 'node_modules/**', '.tmp/**'],
  },

  // Base JS
  js.configs.recommended,

  // App (TS/React)
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: { ...globals.browser },
      parser: tseslint.parser,
      parserOptions: {
        // Si tu veux du type-aware linting précis par projet, dé-commente la ligne 'project'
        // et assure-toi que tseslint est configuré pour ça. Sinon, utilise projectService.
        // project: ['./tsconfig.app.json'],
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    // Pas d'extends ici pour les plugins React/Hooks/Refresh: on active les règles utiles à la main
    rules: {
      // TypeScript
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      // React 17+ (nouveau JSX transform)
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',

      // Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // React Fast Refresh (Vite)
      'react-refresh/only-export-components': 'warn',
    },
    settings: {
      react: { version: 'detect' },
    },
  },

  // Fichiers Node (vite.config.ts, eslint.config.js, etc.)
  {
    files: ['vite.config.ts', 'eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: { ...globals.node },
      parser: tseslint.parser,
      parserOptions: {
        // project: ['./tsconfig.node.json'],
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      // règles Node spécifiques si besoin
    },
  },
]);

import eslint from '@eslint/js';
import next from '@next/eslint-plugin-next';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import tsParser from '@typescript-eslint/parser';

export default [
  // Базовые правила ESLint
  eslint.configs.recommended,

  // Глобальные переменные для React
  {
    languageOptions: {
      globals: {
        // Разрешаем React без импорта -- comment: React 17+ он не нужен
        React: 'readonly',
      },
    },
  },

  // Правила Next.js
  {
    plugins: {
      '@next/next': next,
    },
    rules: {
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,
    },
  },

  // Настройки для TypeScript файлов
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },

  // Интеграция Prettier
  prettierPlugin,
  prettier,

  // Игнорируемые файлы
  {
    ignores: ['.next', 'node_modules', 'out', 'dist', 'build'],
  },
];

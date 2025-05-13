const path = require('path');

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/strict',
        'plugin:@next/next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2021,
        sourceType: 'module',
        project: path.resolve(__dirname, './tsconfig.json'),
        tsconfigRootDir: __dirname,
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        // Warn on console logs
        'no-console': 'warn',

        // Enforce single quotes unless escaping
        quotes: ['error', 'single', { avoidEscape: true }],

        // Error on unused variables (ignore _ prefixed)
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_' },
        ],

        // Disable Next.js rules not compatible with App Router
        '@next/next/no-html-link-for-pages': 'off',
        '@next/next/no-img-element': 'off',
        '@next/next/no-page-custom-font': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@next/next/no-duplicate-head': 'off',
        '@typescript-eslint/no-unused-vars': 'error',

        // Eventually, add a rule here that disables indexes for key props

        // Optional: disable prop-types (using TypeScript instead)
        'react/prop-types': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {
                project: './tsconfig.json',
            },
        },
    },
    overrides: [
        {
            files: ['**/tests/**/*'],
            plugins: ['jest'],
            env: {
                'jest/globals': true,
            },
        },
    ],
};

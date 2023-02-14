module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'unused-imports',
    ],
    rules: {
        indent: [2, 4],
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: ['data-testid'],
            },
        ],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'max-len': [2, { code: 120, ignoreComments: true }],
        'unused-imports/no-unused-imports': 'error',
        'no-unused-vars': 'warn',
        'react/jsx-props-no-spreading': 'warn',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'react/jsx-filename-extension': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-shadow': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-no-useless-fragment': 'off',
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};

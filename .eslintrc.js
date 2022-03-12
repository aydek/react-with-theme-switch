module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:import/typescript'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json'],
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 6,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'import'],
    rules: {
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['off'],
        'react/no-unescaped-entities': 0,
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/react-in-jsx-scope': 'off',
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
        'arrow-parens': 'off',
        'comma-dangle': 'off',
        indent: 'off',
        'lines-between-class-members': 'off',
        'max-len': ['error', { code: 180 }],
        'no-console': 'off',
        'no-use-before-define': 'off',
        'no-tabs': 'off',
        'no-multi-spaces': 'off',
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'object-curly-newline': 'off',
        'operator-linebreak': 'off',
        semi: ['error', 'never'],
        'jsx-quotes': ['error', 'prefer-single'],

        'import/prefer-default-export': 'off',

        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/no-tabs': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/semi': ['error', 'never'],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'enumMember',
                format: ['PascalCase', 'UPPER_CASE'],
            },
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
            },
        ],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};

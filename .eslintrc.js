module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    plugins: ['import', '@typescript-eslint', 'prettier', 'unused-imports', 'module-resolver'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: { classes: true },
        ecmaVersion: 2021,
        sourceType: 'module',
        project: ['./tsconfig.json'],
        createDefaultProgram: true,
    },
    env: {
        node: true,
        commonjs: true,
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            'typescript': {},
            'babel-module': {},
        },
    },
    ignorePatterns: ['**/.gitkeep', 'babel.config.js'],
    rules: {
        // local syntax principles
        'quotes': ['error', 'single'],
        'no-multi-spaces': 'error',
        'comma-style': ['error', 'last'],
        'func-call-spacing': ['error', 'never'],
        'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict' }],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'interface',
                format: ['PascalCase'],
                prefix: ['I'],
            },
            {
                selector: 'typeAlias',
                format: ['PascalCase'],
                prefix: ['T'],
            },
            {
                selector: ['enum', 'enumMember', 'class'],
                format: ['PascalCase'],
            },
            {
                selector: 'variable',
                types: ['boolean'],
                format: ['camelCase'],
            },
        ],
        'linebreak-style': ['error', 'unix'],
        // easy-to-read-and-refactor syntax
        'import/newline-after-import': 'error',
        'function-paren-newline': ['error', 'consistent'],
        'import/order': ['warn', { warnOnUnassignedImports: true }],
        '@typescript-eslint/no-shadow': ['error', { hoist: 'never' }],
        'no-else-return': ['error', { allowElseIf: false }],
        'func-names': ['error', 'never'],
        'dot-notation': 'error',
        'default-case-last': 'error',
        // code security enhancing syntax
        'init-declarations': ['warn', 'always'],
        'default-param-last': 'error',
        'default-case': 'error',
        // code cleanup rules
        'no-empty': 'warn',
        'unused-imports/no-unused-imports': 'error',
        'import/no-unused-modules': [1, { missingExports: true }],
        '@typescript-eslint/no-unused-vars': 'warn',
        // hindering and useless syntax
        'no-shadow': 'off',
        'no-unused-vars': 'off',
        'no-empty-function': 'off',
        'max-classes-per-file': 'off',
        'no-use-before-define': 'off',
        'import/no-unresolved': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        // prettier config
        'prettier/prettier': [
            'error',
            {
                bracketSpacing: true,
                printWidth: 120,
                semi: true,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'all',
                quoteProps: 'consistent',
                arrowParens: 'avoid',
            },
        ],
    },
};

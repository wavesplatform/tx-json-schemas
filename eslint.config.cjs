const js = require('@eslint/js');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');

const sharedStyleRules = {
    curly: ['warn', 'multi-line'],
    eqeqeq: ['warn', 'always', { null: 'ignore' }],
    'max-len': ['warn', { code: 120 }],
    'no-duplicate-imports': 'warn',
    'no-var': 'warn',
    quotes: ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    semi: ['warn', 'always'],
};

module.exports = [
    {
        ignores: ['dist/**', 'node_modules/**'],
    },
    js.configs.recommended,
    {
        files: ['src/**/*.ts'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: __dirname,
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            ...sharedStyleRules,
            'no-undef': 'off',
            '@typescript-eslint/interface-name-prefix': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-require-imports': 'off',
        },
    },
    {
        files: ['scripts/**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'commonjs',
            globals: {
                console: 'readonly',
                process: 'readonly',
                require: 'readonly',
                __dirname: 'readonly',
            },
        },
        rules: {
            ...sharedStyleRules,
        },
    },
];
